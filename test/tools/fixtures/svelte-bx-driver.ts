import { mount, hydrate, tick, unmount } from 'svelte';
import { hydrateCss, cssStats, configureCss } from '@zerodep-css/svelte';
import Root from './SvelteBxRoot.svelte';
export { hydrateCss as restore, cssStats as stats, configureCss as configure };
export async function start(target: HTMLElement, restore = false) {
  const controls: Array<{ step(): void; reorder(): void }> = [];
  const app = (restore ? hydrate : mount)(Root, {
    target,
    props: {
      expose(index, control) {
        controls[index] = control;
      },
    },
  });
  await tick();
  return {
    async step(index: number) {
      controls[index]!.step();
      await tick();
    },
    async reorder() {
      controls[0]!.reorder();
      await tick();
    },
    dispose: () => unmount(app),
  };
}
