import { createApp, nextTick, reactive, toRefs } from 'vue';
import { Css, css, cssStats } from '@zerodep-css/vue';
// 仅由探针内存插件提供，不进入正式包。
// @ts-expect-error 研究脚本生成的虚拟模块
import { render } from 'vfor-probe:render';

export async function start(target: HTMLElement, count: number, instrument: boolean) {
  const state = reactive({
    noise: 0,
    items: Array.from({ length: count }, (_, index) => ({
      id: index,
      compact: false,
      label: `row-${index}`,
    })),
  });
  let calls = 0;
  const app = createApp({
    setup: () => ({
      ...toRefs(state),
      s: new Css(),
      css: instrument
        ? (...parts: string[]) => {
            calls++;
            return css(...parts);
          }
        : css,
    }),
    render,
  });
  app.mount(target);
  await nextTick();
  return {
    async noise() {
      state.noise++;
      await nextTick();
    },
    async step() {
      state.items.forEach((item) => {
        item.compact = !item.compact;
      });
      await nextTick();
    },
    async changeLabel() {
      state.items[0]!.label = 'changed';
      await nextTick();
    },
    async reverse() {
      state.items.reverse();
      await nextTick();
    },
    async replace() {
      const item = state.items[0]!;
      state.items[0] = { ...item, compact: !item.compact };
      await nextTick();
    },
    async clear() {
      state.items = [];
      await nextTick();
    },
    calls: () => calls,
    stats: () => cssStats(),
    dispose: () => app.unmount(),
  };
}
