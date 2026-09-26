import { render } from 'svelte/server';
import { createServerCssHost, withCssHost, serializeCssRules } from '@zerodep-css/svelte';
import Root from './SvelteBxRoot.svelte';
export async function renderPage() {
  const host = createServerCssHost();
  const html = withCssHost(host, () => render(Root, { props: { expose() {} } }).body);
  return { html, rules: host.rules(), ...serializeCssRules(host.rules()) };
}
