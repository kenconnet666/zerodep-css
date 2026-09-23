import { createSSRApp, createApp, nextTick } from 'vue';
import { hydrate, mount, tick, unmount } from 'svelte';
import { createStyles as createVueStyles } from '@zerodep-css/vue';
import { createStyles as createSvelteStyles } from '@zerodep-css/svelte';
import VueApp from '../../../vue/test/fixtures/BoundApp.vue';
import SvelteApp from '../../../svelte/test/fixtures/BoundApp.svelte';
import VueCsp from '../../../vue/test/fixtures/CspApp.vue';
import SvelteCsp from '../../../svelte/test/fixtures/CspApp.svelte';

export async function start(framework, restore = true, csp = false) {
  const manifest = JSON.parse(document.querySelector('#styles').textContent);
  const host = (framework === 'vue' ? createVueStyles() : createSvelteStyles()).createHost({
    namespace: framework + (csp ? '-csp' : ''),
    nonce: csp && !restore ? 'style-token' : undefined,
    hydrate: restore ? manifest : undefined,
  });
  const counts = { inline: 0, derived: 0, global: 0 };
  const props = {
    ...(framework === 'svelte' ? { host } : {}),
    initialWidth: 20,
    record(kind) {
      counts[kind] = (counts[kind] ?? 0) + 1;
    },
  };
  const target = document.querySelector('#app');
  let destroy;
  if (framework === 'vue') {
    const app = (restore ? createSSRApp : createApp)(
      csp ? VueCsp : VueApp,
      csp ? { initialWidth: props.initialWidth } : props,
    );
    app.use(host);
    app.mount(target);
    destroy = () => app.unmount();
    await nextTick();
  } else {
    const app = (restore ? hydrate : mount)(csp ? SvelteCsp : SvelteApp, { target, props });
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
