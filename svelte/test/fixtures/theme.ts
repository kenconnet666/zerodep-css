import { Css, defineTheme } from '@zerodep-css/core';
export const theme = defineTheme('app-theme', { color: { brand: 'red', text: 'black' } });
export const spacing = defineTheme('app-spacing', { gap: '4px' });
export class AppCss extends Css {
  get color() {
    return this.extendProperty(super.color, theme.tokens.color);
  }
  get backgroundColor() {
    return this.extendProperty(super.backgroundColor, theme.tokens.color);
  }
}
