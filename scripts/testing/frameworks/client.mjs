import { createSSRApp, createApp, nextTick } from 'vue';
import { hydrate, mount, tick, unmount } from 'svelte';
import { createStyleContext } from '@zerodep-css/core';
import { installStyleContext } from '@zerodep-css/vue';
import VueApp from '../../../vue/test/fixtures/ReactiveApp.vue';
import SvelteApp from '../../../svelte/test/fixtures/ReactiveApp.svelte';

export async function start(framework, restore = true) {
  const manifest = JSON.parse(document.querySelector('#styles').textContent);
  const context = createStyleContext({
    namespace: framework,
    hydrate: restore ? manifest : undefined,
  });
  const counts = { inline: 0, derived: 0, global: 0 };
  const props = {
    context,
    initialColor: 'red',
    record(kind) {
      counts[kind]++;
    },
  };
  const target = document.querySelector('#app');
  let destroy;
  if (framework === 'vue') {
    const app = (restore ? createSSRApp : createApp)(VueApp, props);
    installStyleContext(app, context);
    app.mount(target);
    destroy = () => app.unmount();
    await nextTick();
  } else {
    const app = (restore ? hydrate : mount)(SvelteApp, { target, props });
    destroy = () => unmount(app);
    await tick();
  }
  context.completeHydration();
  return {
    counts,
    stats: () => context.runtime.stats(),
    snapshot: () => context.snapshot(),
    async destroy() {
      await destroy();
      return context.runtime.stats();
    },
    dispose: () => context.dispose(),
  };
}
