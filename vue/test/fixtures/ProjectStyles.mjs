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

const SharedGlobal = defineComponent({
  setup() {
    const global = styles.useGlobalCss('shared-color', (g) =>
      g.rule('[data-shared-global-target]', (s) => s.color.red),
    );
    return () => h('span', { 'data-shared-lease': global.id });
  },
});

export const ProjectApp = defineComponent({
  name: 'ProjectStylesApp',
  props: {
    initial: { type: String, default: 'red' },
    capture: Function,
  },
  setup(props) {
    const brand = ref(props.initial);
    const globalTick = ref(0);
    let globalRuns = 0;
    props.capture?.({ bump: () => globalTick.value++, runs: () => globalRuns });
    const sharedFirst = ref(true),
      sharedSecond = ref(true);
    styles.provideTheme(() => ({ color: { brand: brand.value } }));
    const currentTheme = styles.useTheme();
    const css = styles.useCss();
    const global = styles.useGlobalCss('project-body', (g) => {
      globalRuns++;
      void globalTick.value;
      g.rule('body', (s) => s.projectPadding());
    });

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
        h(
          'button',
          { 'data-shared-first': '', onClick: () => (sharedFirst.value = !sharedFirst.value) },
          'toggle first',
        ),
        h(
          'button',
          { 'data-shared-second': '', onClick: () => (sharedSecond.value = !sharedSecond.value) },
          'toggle second',
        ),
        h('div', { 'data-shared-global-target': '' }, 'shared'),
        sharedFirst.value ? h(SharedGlobal, { key: 'first' }) : null,
        sharedSecond.value ? h(SharedGlobal, { key: 'second' }) : null,
      ]);
    };
  },
});
