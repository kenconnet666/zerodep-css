import { render } from 'svelte/server';
import { createServerCssHost, withCssHost } from '@zerodep-css/svelte';
import App from '../../../svelte/examples/App.svelte';
import type { ExampleProps } from '../../../core/examples/theme.js';

export function renderPage(props: ExampleProps = {}, delay = 0) {
  const host = createServerCssHost();
  return withCssHost(host, async () => {
    if (delay) await new Promise((done) => setTimeout(done, delay));
    const { body: html } = render(App, { props });
    return { html, rules: host.rules(), cssText: host.cssText() };
  });
}
