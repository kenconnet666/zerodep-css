import { mount, unmount, tick } from 'svelte';
import { cssStats } from '@zerodep-css/svelte';
import Component from './SvelteTemplateDerived.svelte';

export async function start(target: HTMLElement, count: number) {
  const steps: (() => void)[] = [],
    noises: (() => void)[] = [];
  const apps = Array.from({ length: count }, (_, index) =>
    mount(Component, {
      target,
      props: {
        index,
        expose(step: () => void, noise: () => void) {
          steps.push(step);
          noises.push(noise);
        },
      },
    }),
  );
  await tick();
  return {
    async step() {
      steps.forEach((run) => run());
      await tick();
    },
    async noise() {
      noises.forEach((run) => run());
      await tick();
    },
    stats: () => cssStats(),
    async dispose() {
      await Promise.all(apps.map((app) => unmount(app)));
    },
  };
}
