import type { CssInput } from './registry.js';

/** 生成器与绑定编译器共用，快捷方法的命名和选择器只维护一份。 */
export const selectorShortcuts = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
  _focusVisible: '&:focus-visible',
  _focusWithin: '&:focus-within',
  _disabled: '&:disabled',
  _checked: '&:checked',
  _before: '&::before',
  _after: '&::after',
} as const;

/** 常见项提供补全，任意原生选择器、@ 规则和动画帧均可直接输入。 */
export type CssSelector =
  | (typeof selectorShortcuts)[keyof typeof selectorShortcuts]
  | '& > *'
  | '& > :first-child'
  | '& > :last-child'
  | '@media (prefers-color-scheme: dark)'
  | '@media (prefers-reduced-motion: reduce)'
  | '@supports (display: grid)'
  | 'from'
  | 'to'
  | (string & {});

function fragment(input: CssInput): string {
  if (typeof input === 'string') return input;
  return input ? input.map(fragment).join('') : '';
}

/** 只组合声明，不读取宿主或把样式类展开；类名组合属于外层 css。 */
export function selectorRule(selector: CssSelector, parts: readonly CssInput[]): string {
  return `${selector}{${parts.map(fragment).join('')}}`;
}
