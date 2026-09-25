import { Css, createCssContext, css as registeredCss } from '@zerodep-css/vue';

export { Css };
export const { provideCss, useCss } = createCssContext<Css>();
let calls = 0;
export function css(...parts: string[]): string {
  calls++;
  return registeredCss(...parts);
}
export function callCount(): number {
  return calls;
}
