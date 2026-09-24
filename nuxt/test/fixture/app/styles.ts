import { Css, createStyles, defineTheme } from '@zerodep-css/vue';

export const fixtureTheme = defineTheme('nuxt-fixture', {
  color: { brand: '#dc2626' },
});

export class FixtureCss extends Css {
  override get color() {
    return this.extendProperty(super.color, fixtureTheme.tokens.color);
  }
}

export const styles = createStyles({ cssType: FixtureCss, theme: fixtureTheme });
