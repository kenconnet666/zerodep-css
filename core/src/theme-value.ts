import { ident, tokenize, tokenTypes as token } from './css-tokenizer.js';
import { assertValueStructure, normalizeCssText } from './css-value.js';

const cssWide = new Set(['initial', 'inherit', 'unset', 'revert', 'revert-layer']);

function asciiLower(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => String.fromCharCode(letter.charCodeAt(0) + 0x20));
}

/** 主题叶只约束类型和声明边界；值语法最终由浏览器按具体属性解释。 */
export function assertThemeValue(value: string | number): void {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new TypeError('Invalid CSS binding numeric value.');
    return;
  }

  const normalized = normalizeCssText(value);
  if (!normalized.trim()) throw new TypeError('Theme string values must not be empty.');
  assertValueStructure(normalized);

  let significant = 0;
  let isCssWide = false;
  tokenize(normalized, (type, start, end) => {
    if (type === token.WhiteSpace || type === token.Comment || type === token.EOF) return;
    significant++;
    if (significant === 1 && type === token.Ident) {
      const name = asciiLower(ident.decode(normalized.slice(start, end)));
      isCssWide = cssWide.has(name);
    } else {
      isCssWide = false;
    }
  });
  if (significant === 1 && isCssWide)
    throw new TypeError('CSS-wide keywords cannot be theme variable values.');
}
