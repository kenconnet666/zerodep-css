import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { createServerCssHost, withCssHost } from '@zerodep-css/vue';
import App from '../../../vue/examples/App.vue';
import type { ExampleProps } from '../../../core/examples/theme.js';

export function renderPage(props: ExampleProps = {}, delay = 0) {
  const host = createServerCssHost();
  return withCssHost(host, async () => {
    if (delay) await new Promise((done) => setTimeout(done, delay));
    const html = await renderToString(createSSRApp(App, props));
    return { html, rules: host.rules(), cssText: host.cssText() };
  });
}
