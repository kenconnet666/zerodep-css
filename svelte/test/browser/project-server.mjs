import { render } from 'svelte/server';
import ProjectHost from '../fixtures/ProjectHost.svelte';
import { styles } from '../fixtures/ProjectStyles.js';

export async function renderPage(initial = 'red', mode = 'getter') {
  const host = styles.createHost({ target: null, namespace: 'project' });
  try {
    const body = (await render(ProjectHost, { props: { host, initial, mode } })).body;
    return {
      manifest: host.snapshot(),
      html: `<!doctype html><html><head>${host.renderStyles()}</head><body><main id="app">${body}</main><script type="application/json" id="styles">${host.renderManifest()}</script></body></html>`,
    };
  } finally {
    host.dispose();
  }
}
