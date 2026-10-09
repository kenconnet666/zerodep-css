import { mount, hydrate, tick, unmount } from 'svelte';
import { hydrateCss } from 'zerodep-css-svelte';
import App from '../../../svelte/examples/Implicit.svelte';
export async function start(target: HTMLElement, hydration = false) {
  hydrateCss();
  const app = (hydration ? hydrate : mount)(App, { target });
  await tick();
  return { dispose: () => unmount(app) };
}
