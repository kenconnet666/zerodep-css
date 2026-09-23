<script lang="ts">
  import { Css, defineTheme } from '@zerodep-css/core';
  import { createStyles } from '../../src/styles.js';

  const theme = defineTheme('project-types', { color: { brand: '#123456' } });
  const other = defineTheme('other-types', { gap: '8px' });
  class AppCss extends Css {
    get color(): Css['color'] & { readonly brand: void } {
      return this.extendProperty(super.color, theme.tokens.color);
    }
  }
  const styles = createStyles({ cssType: AppCss, theme });
  const plain = createStyles();

  function checkTypes() {
    styles.useCss()((s) => s.color.brand);
    styles.useGlobalCss('project', (g) => g.rule('body', (s) => s.color.brand));
    styles.provideTheme({ color: { brand: '#abcdef' } });
    styles.provideTheme(() => ({ color: { brand: '#abcdef' } }));
    styles.provideTheme(null);
    styles.provideTheme(other, { gap: '12px' });
    const current: string = styles.useTheme()().color.brand;
    const gap: string = styles.useTheme(other)().gap;
    // @ts-expect-error 无默认主题时必须显式传定义
    plain.useTheme();
    // @ts-expect-error 无默认主题时必须显式传定义
    plain.provideTheme();
    // @ts-expect-error 类型化作者类没有不存在的关键字
    styles.useCss()((s) => s.color.unknown);
    return current + gap;
  }
  void checkTypes;
</script>
