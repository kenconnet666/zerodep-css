import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { createServerCssHost, withCssHost, serializeCssRules } from 'zerodep-css-vue';
import App from '../../../vue/examples/Implicit.vue';
export async function renderPage() {
  const host = createServerCssHost();
  const html = await withCssHost(host, () => renderToString(createSSRApp(App)));
  return { html, ...serializeCssRules(host.rules()) };
}
