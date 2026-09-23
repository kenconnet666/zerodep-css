import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { render } from 'svelte/server';
import { createStyles as createVueStyles } from '@zerodep-css/vue';
import { createStyles as createSvelteStyles } from '@zerodep-css/svelte';
import VueApp from '../../../vue/test/fixtures/ReactiveApp.vue';
import SvelteApp from '../../../svelte/test/fixtures/ReactiveApp.svelte';

export async function renderPage(framework, color = 'red') {
  const host = (framework === 'vue' ? createVueStyles() : createSvelteStyles()).createHost({
    target: null,
    namespace: framework,
  });
  const props = { ...(framework === 'svelte' ? { host } : {}), initialColor: color, record() {} };
  try {
    let body;
    if (framework === 'vue') {
      const app = createSSRApp(VueApp, props);
      app.use(host);
      body = await renderToString(app);
    } else {
      body = (await render(SvelteApp, { props })).body;
    }
    const manifest = host.snapshot();
    return {
      manifest,
      html: `<!doctype html><html><head>${host.renderStyles()}</head><body><main id="app">${body}</main><script type="application/json" id="styles">${host.renderManifest()}</script></body></html>`,
    };
  } finally {
    host.dispose();
  }
}
