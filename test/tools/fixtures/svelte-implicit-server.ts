import { render } from 'svelte/server';
import { createServerCssHost, withCssHost, serializeCssRules } from 'zerodep-css-svelte';
import App from '../../../svelte/examples/Implicit.svelte';
export function renderPage() {
  const host = createServerCssHost();
  const html = withCssHost(host, () => render(App).body);
  return { html, ...serializeCssRules(host.rules()) };
}
