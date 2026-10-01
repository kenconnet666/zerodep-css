import { mount, tick, unmount } from 'svelte';
import App from '../../../svelte/examples/KeywordTheme.svelte';
export async function start(target: HTMLElement) {
  const app = mount(App, { target });
  await tick();
  return { dispose: () => unmount(app) };
}
