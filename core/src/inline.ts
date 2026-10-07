import { authorInputs } from './author-guards.js';
import { unitSuffix } from './generated/base.js';
import { systemKeywords } from './generated/keywords.js';

export interface InlineDeclaration {
  declaration: string;
  value?: string;
}

/**
 * 将已知系统方法的直接值绑定到元素变量；未知值保留原始声明。
 * CSS-wide 关键字和无效值经过 var() 后会改变层叠，不能只检查字符串边界。
 */
export function inlineDeclaration(
  author: unknown,
  property: string,
  member: string,
  value: unknown,
  variable: string,
): InlineDeclaration {
  const inputs = authorInputs(author, property, member);
  const target = Reflect.get(Object(author), property);
  const method = Reflect.get(Object(target), member);
  const declaration = Reflect.apply(method, target, [value]) as string;
  if (!inputs || !/^--zj-[a-z0-9-]+$/.test(variable)) return { declaration };
  let text: string | undefined;
  if (
    Object.hasOwn(unitSuffix, member) &&
    typeof value === 'number' &&
    Number.isFinite(value) &&
    value >= 0
  ) {
    text = `${value}${unitSuffix[member]}`;
  } else if (
    member === 'raw' &&
    typeof value === 'string' &&
    !/^(initial|inherit|unset|revert|revert-layer)$/i.test(value)
  ) {
    const keywords = Reflect.get(systemKeywords, property);
    if (keywords && Object.values(keywords).includes(value)) text = value;
    else if (
      /^(color|backgroundColor|border(?:Top|Right|Bottom|Left)?Color|outlineColor|fill|stroke)$/.test(
        property,
      ) &&
      /^#(?:[a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/i.test(value)
    )
      text = value;
  } else if (
    member === 'raw' &&
    property === 'opacity' &&
    typeof value === 'number' &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= 1
  ) {
    text = String(value);
  }
  if (text === undefined) return { declaration };
  // 系统 raw/declaration 已由 authorInputs 核验；单位在内联值端拼接。
  return {
    declaration: Reflect.apply(Reflect.get(target, 'raw'), target, [`var(${variable})`]) as string,
    value: text,
  };
}
