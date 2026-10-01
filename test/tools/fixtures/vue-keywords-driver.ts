import { createApp, nextTick } from 'vue';
import App from '../../../vue/examples/KeywordTheme.vue';
export async function start(target: HTMLElement) {
  const app = createApp(App);
  app.mount(target);
  await nextTick();
  return { dispose: () => app.unmount() };
}
