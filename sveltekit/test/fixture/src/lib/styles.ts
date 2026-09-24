import { Css, createStyles, defineTheme } from '@zerodep-css/svelte';

const theme = defineTheme('kit-fixture', { color: { brand: '#dc2626' } });

class AppCss extends Css {
  get color(): Css['color'] & { readonly brand: void } {
    return this.extendProperty(super.color, theme.tokens.color);
  }
}

export const styles = createStyles({ cssType: AppCss, theme });
