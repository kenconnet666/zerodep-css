import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { render } from 'svelte/server';
import { createStyleContext } from '@zerodep-css/core';
import { installStyleContext } from '@zerodep-css/vue';
import VueApp from '../../../vue/test/fixtures/BoundApp.vue';
import SvelteApp from '../../../svelte/test/fixtures/BoundApp.svelte';
import VueCsp from '../../../vue/test/fixtures/CspApp.vue';
import SvelteCsp from '../../../svelte/test/fixtures/CspApp.svelte';

export async function renderPage(framework, initialWidth = 20, csp = false) {
  const context = createStyleContext({
    target: null,
    namespace: framework + (csp ? '-csp' : ''),
    nonce: csp ? 'style-token' : undefined,
  });
  const props = { context, initialWidth, record() {} };
  try {
    let body;
    if (framework === 'vue') {
      const app = createSSRApp(csp ? VueCsp : VueApp, csp ? { initialWidth } : props);
      installStyleContext(app, context);
      body = await renderToString(app);
    } else {
      body = (await render(csp ? SvelteCsp : SvelteApp, { props })).body;
    }
    const manifest = context.snapshot();
    return {
      manifest,
      html: `<!doctype html><html><head>${context.renderStyles()}</head><body><main id="app">${body}</main><script type="application/json" id="styles">${context.renderManifest()}</script></body></html>`,
    };
  } finally {
    context.dispose();
  }
}
