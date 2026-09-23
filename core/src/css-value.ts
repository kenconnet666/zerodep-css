import { ident, tokenize, tokenTypes as token } from 'css-tree';

/** 与 CSS 输入预处理一致，保证 hash、HTML style 文本和 hydration 比较使用相同字符。 */
export function normalizeCssText(value: string): string {
  return value.replace(/\r\n?|\f/g, '\n').replace(/[\0\uD800-\uDFFF]/gu, '\uFFFD');
}

export function validatePropertyName(value: string): string {
  const name = normalizeCssText(value);
  let valid = false,
    count = 0;
  tokenize(name, (type, start, end) => {
    count++;
    valid = type === token.Ident && start === 0 && end === name.length;
  });
  if (
    count !== 1 ||
    !valid ||
    (name.endsWith('\\') && !escaped(name, name.length - 1)) ||
    ident.decode(name) === '--'
  )
    throw new TypeError('CSS property name must be one complete identifier.');
  return name;
}

function escaped(text: string, offset: number): boolean {
  let slashes = 0;
  while (offset > 0 && text[--offset] === '\\') slashes++;
  return slashes % 2 === 1;
}

/** 只验证声明边界；不把库内属性语法表当成浏览器支持表。 */
export function valuePriorityOffset(value: string, customProperty = false): number | undefined {
  const closing: number[] = [];
  let previous = '',
    last = '';
  let previousStart = 0,
    lastStart = 0;
  const fail = (): never => {
    throw new TypeError('CSS value must stay inside one complete declaration.');
  };
  tokenize(value, (type, start, end) => {
    const text = value.slice(start, end);
    if (type === token.Comment) {
      if (!text.endsWith('*/')) fail();
      return;
    }
    if (type === token.WhiteSpace || type === token.EOF) return;
    if (type === token.BadString || type === token.BadUrl) fail();
    if (
      type === token.String &&
      (end - start < 2 || value[end - 1] !== value[start] || escaped(value, end - 1))
    )
      fail();
    // tokenizer 会容忍 URL/转义在 EOF 自动闭合；拼接样式时不能吞掉后续的 ;}。
    if (type === token.Url && (value[end - 1] !== ')' || escaped(value, end - 1))) fail();
    if (end === value.length && value[end - 1] === '\\' && !escaped(value, end - 1)) fail();
    if (!closing.length) {
      if (type === token.Semicolon || (type === token.LeftCurlyBracket && !customProperty)) fail();
      previous = last;
      previousStart = lastStart;
      last = type === token.Ident ? ident.decode(text).toLowerCase() : text;
      lastStart = start;
    }
    if (type === token.Function || type === token.LeftParenthesis)
      closing.push(token.RightParenthesis);
    else if (type === token.LeftSquareBracket) closing.push(token.RightSquareBracket);
    else if (type === token.LeftCurlyBracket) closing.push(token.RightCurlyBracket);
    else if (
      [token.RightParenthesis, token.RightSquareBracket, token.RightCurlyBracket].includes(type)
    ) {
      if (closing.pop() !== type) fail();
      if (!closing.length) {
        previous = last;
        previousStart = lastStart;
        last = text;
        lastStart = start;
      }
    }
  });
  if (closing.length) fail();
  return previous === '!' && last === 'important' ? previousStart : undefined;
}

export function assertValueStructure(value: string, customProperty = false): void {
  if (valuePriorityOffset(value, customProperty) !== undefined)
    throw new TypeError('Use important() rather than adding !important to a value.');
}
