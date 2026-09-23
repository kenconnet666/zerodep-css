import { defineComponent, h, ref } from 'vue';
import { Css, defineTheme } from '@zerodep-css/core';
import { createStyles } from '@zerodep-css/vue';

export const theme = defineTheme('vue-project', { color: { brand: 'red' } });

export class AppCss extends Css {
  get color() {
    return this.extendProperty(super.color, theme.tokens.color);
  }

  projectPadding() {
    this.padding.px(7);
  }
}

export const styles = createStyles({ cssType: AppCss, theme });

export const ProjectApp = defineComponent({
  name: 'ProjectStylesApp',
  props: {
    initial: { type: String, default: 'red' },
  },
  setup(props) {
    const brand = ref(props.initial);
    styles.provideTheme(() => ({ color: { brand: brand.value } }));
    const currentTheme = styles.useTheme();
    const css = styles.useCss();
    const global = styles.useGlobalCss('project-body', (g) =>
      g.rule('body', (s) => s.projectPadding()),
    );

    return () => {
      const brandValue = currentTheme().color.brand;
      const className = css((s) => {
        s.name('project-color');
        s.color.brand;
      });
      return h('section', [
        h(
          'button',
          {
            type: 'button',
            'data-project-change': '',
            onClick: () => (brand.value = brand.value === 'red' ? 'blue' : 'red'),
          },
          'change color',
        ),
        h(
          'div',
          { class: className, 'data-project-color': '', 'data-theme': brandValue },
          brandValue,
        ),
        h('span', { 'data-project-global': global.id }, 'global'),
      ]);
    };
  },
});
