import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { render } from 'svelte/server';
import { createStyles as createVueStyles } from '@zerodep-css/vue';
import { createStyles as createSvelteStyles } from '@zerodep-css/svelte';
import VueApp from '../../../vue/test/fixtures/BoundApp.vue';
import SvelteApp from '../../../svelte/test/fixtures/BoundApp.svelte';
import VueCsp from '../../../vue/test/fixtures/CspApp.vue';
import SvelteCsp from '../../../svelte/test/fixtures/CspApp.svelte';

export async function renderPage(framework, initialWidth = 20, csp = false) {
  const host = (framework === 'vue' ? createVueStyles() : createSvelteStyles()).createHost({
    target: null,
    namespace: framework + (csp ? '-csp' : ''),
    nonce: csp ? 'style-token' : undefined,
  });
  const props = { ...(framework === 'svelte' ? { host } : {}), initialWidth, record() {} };
  try {
    let body;
    if (framework === 'vue') {
      const app = createSSRApp(csp ? VueCsp : VueApp, csp ? { initialWidth } : props);
      app.use(host);
      body = await renderToString(app);
    } else {
      body = (await render(csp ? SvelteCsp : SvelteApp, { props })).body;
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
