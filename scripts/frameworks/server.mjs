import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { render } from 'svelte/server';
import { createStyleContext } from '@zerodep-css/core';
import { installStyleContext } from '@zerodep-css/vue';
import VueApp from '../../vue/test/ReactiveApp.vue';
import SvelteApp from '../../svelte/test/ReactiveApp.svelte';

export async function renderPage(framework, color = 'red') {
  const context = createStyleContext({ target: null, namespace: framework });
  const props = { context, initialColor: color, record() {} };
  try {
    let body;
    if (framework === 'vue') {
      const app = createSSRApp(VueApp, props);
      installStyleContext(app, context);
      body = await renderToString(app);
    } else {
      body = (await render(SvelteApp, { props })).body;
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
