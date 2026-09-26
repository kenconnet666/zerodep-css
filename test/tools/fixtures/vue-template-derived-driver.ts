import { createApp, nextTick } from 'vue';
import { cssStats } from '@zerodep-css/vue';
import Component from './VueTemplateDerived.vue';

export async function start(target: HTMLElement, count: number) {
  const steps: (() => void)[] = [],
    noises: (() => void)[] = [];
  const apps = Array.from({ length: count }, (_, index) => {
    const container = target.appendChild(document.createElement('section'));
    const app = createApp(Component, {
      index,
      expose(step: () => void, noise: () => void) {
        steps.push(step);
        noises.push(noise);
      },
    });
    app.config.idPrefix = `probe-${index}`;
    app.mount(container);
    return app;
  });
  await nextTick();
  return {
    async step() {
      steps.forEach((run) => run());
      await nextTick();
    },
    async noise() {
      noises.forEach((run) => run());
      await nextTick();
    },
    stats: () => cssStats(),
    dispose() {
      apps.forEach((app) => app.unmount());
    },
  };
}
