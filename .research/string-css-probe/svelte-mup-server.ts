import { render } from 'svelte/server';
import { createServerCssHost, css, withCssHost } from '@zerodep-css/svelte';
import Component from './SvelteMup.svelte';

export async function renderPage(width: number, delay = 0) {
  const host = createServerCssHost();
  return withCssHost(host, async () => {
    if (delay) await new Promise((done) => setTimeout(done, delay));
    const result = render(Component, {
      props: { initialWidth: width, expose() {}, childExpose() {} },
    });
    return { html: result.body, rules: host.rules(), cssText: host.cssText() };
  });
}

export function withoutHost(): string {
  return css('color:red;');
}
