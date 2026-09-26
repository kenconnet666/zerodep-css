import { createApp, nextTick } from 'vue';
import { cssStats } from '@zerodep-css/vue';
import createEmotion from '@emotion/css/create-instance';
import Component from './VueBindingPerformance.vue';
export async function start(target: HTMLElement, mode: string, count: number) {
  const emotion =
    mode === 'emotion' ? createEmotion({ key: 'binding-perf', speedy: true }) : undefined;
  let update!: () => void;
  const app = createApp(Component, {
    mode,
    count,
    emit: (...parts: string[]) => emotion!.css(...parts),
    expose: (step: () => void) => {
      update = step;
    },
  });
  app.mount(target);
  await nextTick();
  return {
    async step() {
      update();
      await nextTick();
    },
    stats: () => (emotion ? emotion.sheet.ctr : cssStats().rules),
    dispose() {
      app.unmount();
      emotion?.flush();
    },
  };
}
