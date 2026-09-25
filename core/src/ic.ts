/** 常用项提供补全；交叉类型保留任意原生选择器与 @ 规则。 */
export type IcSelector =
  | '&:hover'
  | '&:active'
  | '&:focus'
  | '&:focus-visible'
  | '&:focus-within'
  | '&:disabled'
  | '&:checked'
  | '&::before'
  | '&::after'
  | '& > *'
  | '@media (prefers-color-scheme: dark)'
  | '@media (prefers-reduced-motion: reduce)'
  | (string & {});

/** 包装一段原生 CSS 嵌套规则；最终类名仍由外层 css() 生成。 */
export function ic(selector: IcSelector, ...parts: string[]): string {
  return `${selector}{${parts.join('')}}`;
}
