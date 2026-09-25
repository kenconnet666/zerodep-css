/** 包装一段原生 CSS 嵌套规则；最终类名仍由外层 css() 生成。 */
export function ic(selector: string, ...parts: string[]): string {
  return `${selector}{${parts.join('')}}`;
}
