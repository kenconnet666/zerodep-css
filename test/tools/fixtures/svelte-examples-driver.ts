import { hydrate, mount, tick, unmount } from 'svelte';
import { hydrateCss } from '@zerodep-css/svelte';
import App from '../../../svelte/examples/App.svelte';
import type { ExampleProps } from '../../../core/examples/theme.js';

export { hydrateCss as restore };
export async function start(target: HTMLElement, props: ExampleProps = {}, restore = false) {
  const app = (restore ? hydrate : mount)(App, { target, props });
  await tick();
  return { flush: tick, dispose: () => unmount(app) };
}
