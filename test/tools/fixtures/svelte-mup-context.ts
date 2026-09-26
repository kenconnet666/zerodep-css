import { Css, WidthCss, createCssContext } from '@zerodep-css/svelte';

class ThemeWidthCss extends WidthCss {
  readonly _md = this.px(48);
}
export class AppCss extends Css {
  override readonly width = new ThemeWidthCss();
}
export const { provideCss, useCss } = createCssContext<AppCss>();
