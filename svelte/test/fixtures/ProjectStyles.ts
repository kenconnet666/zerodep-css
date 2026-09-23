import { Css, defineTheme } from '@zerodep-css/core';
import { createStyles } from '@zerodep-css/svelte';

export const theme = defineTheme('project', { color: { brand: 'red' } });

class AppCss extends Css {
  get color(): Css['color'] & { readonly brand: void } {
    return this.extendProperty(super.color, theme.tokens.color);
  }

  control() {
    this.padding.px(7);
  }
}

export const styles = createStyles({ cssType: AppCss, theme });
