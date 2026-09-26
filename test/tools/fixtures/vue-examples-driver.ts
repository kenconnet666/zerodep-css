import { createApp, createSSRApp, nextTick } from 'vue';
import { hydrateCss } from '@zerodep-css/vue';
import App from '../../../vue/examples/App.vue';
import type { ExampleProps } from '../../../core/examples/theme.js';

export { hydrateCss as restore };
export async function start(target: HTMLElement, props: ExampleProps = {}, restore = false) {
  const app = (restore ? createSSRApp : createApp)(App, props);
  app.mount(target);
  await nextTick();
  return { flush: nextTick, dispose: () => app.unmount() };
}
