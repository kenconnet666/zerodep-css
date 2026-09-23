import { createSSRApp, createApp, nextTick } from 'vue';
import { hydrate, mount, tick, unmount } from 'svelte';
import { createStyles as createVueStyles } from '@zerodep-css/vue';
import { createStyles as createSvelteStyles } from '@zerodep-css/svelte';
import VueApp from '../../../vue/test/fixtures/ReactiveApp.vue';
import SvelteApp from '../../../svelte/test/fixtures/ReactiveApp.svelte';

export async function start(framework, restore = true) {
  const manifest = JSON.parse(document.querySelector('#styles').textContent);
  const host = (framework === 'vue' ? createVueStyles() : createSvelteStyles()).createHost({
    namespace: framework,
    hydrate: restore ? manifest : undefined,
  });
  const counts = { inline: 0, derived: 0, global: 0 };
  const props = {
    ...(framework === 'svelte' ? { host } : {}),
    initialColor: 'red',
    record(kind) {
      counts[kind]++;
    },
  };
  const target = document.querySelector('#app');
  let destroy;
  if (framework === 'vue') {
    const app = (restore ? createSSRApp : createApp)(VueApp, props);
    app.use(host);
    app.mount(target);
    destroy = () => app.unmount();
    await nextTick();
  } else {
    const app = (restore ? hydrate : mount)(SvelteApp, { target, props });
    destroy = () => unmount(app);
    await tick();
  }
  host.completeHydration();
  return {
    counts,
    stats: () => host.stats(),
    snapshot: () => host.snapshot(),
    async destroy() {
      await destroy();
      host.dispose();
    },
  };
}
