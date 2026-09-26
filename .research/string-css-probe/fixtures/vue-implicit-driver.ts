import { createApp, createSSRApp, defineComponent, h, nextTick } from 'vue';
import { hydrateCss, cssStats, configureCss } from '@zerodep-css/vue';
import { AppCss } from '../../../core/examples/theme.js';
import { provideCss } from '../../../vue/examples/context.js';
import Component from './VueImplicit.vue';
export { hydrateCss as restore, cssStats as stats, configureCss as configure };
export async function start(target: HTMLElement, restore = false) {
  const controls: Array<{ step(): void; reorder(): void }> = [];
  const Root = defineComponent({
    setup() {
      provideCss(new AppCss());
      return () =>
        [24, 40].map((initial, i) =>
          h(Component, {
            initial,
            expose(value) {
              controls[i] = value;
            },
          }),
        );
    },
  });
  const app = (restore ? createSSRApp : createApp)(Root);
  app.mount(target);
  await nextTick();
  return {
    async step(index: number) {
      controls[index]!.step();
      await nextTick();
    },
    async reorder() {
      controls[0]!.reorder();
      await nextTick();
    },
    dispose: () => app.unmount(),
  };
}
