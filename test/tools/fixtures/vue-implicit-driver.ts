import { createApp, createSSRApp, nextTick } from 'vue';
import { hydrateCss } from 'zerodep-css-vue';
import App from '../../../vue/examples/Implicit.vue';
export async function start(target: HTMLElement, hydrate = false) {
  hydrateCss();
  const app = (hydrate ? createSSRApp : createApp)(App);
  app.mount(target);
  await nextTick();
  return { dispose: () => app.unmount() };
}
