import { mount, unmount, tick } from 'svelte';
import { cssStats } from '@zerodep-css/svelte';
import createEmotion from '@emotion/css/create-instance';
import Component from './SvelteBindingPerformance.svelte';
export async function start(target: HTMLElement, mode: string, count: number) {
  const emotion =
    mode === 'emotion' ? createEmotion({ key: 'binding-perf', speedy: true }) : undefined;
  let update!: () => void;
  let changeNoise!: () => void;
  const app = mount(Component, {
    target,
    props: {
      mode,
      count,
      emit: (...parts: string[]) => emotion!.css(...parts),
      expose: (step: () => void, noise: () => void) => {
        update = step;
        changeNoise = noise;
      },
    },
  });
  await tick();
  return {
    async noise() {
      changeNoise();
      await tick();
    },
    async step() {
      update();
      await tick();
    },
    stats: () => (emotion ? emotion.sheet.ctr : cssStats().rules),
    async dispose() {
      await unmount(app);
      emotion?.flush();
    },
  };
}
