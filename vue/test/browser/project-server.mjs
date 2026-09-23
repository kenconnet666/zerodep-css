import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { ProjectApp, styles } from '../fixtures/ProjectStyles.mjs';

export async function renderPage(initial = 'red') {
  const host = styles.createHost({ target: null, namespace: 'project' });
  const app = createSSRApp(ProjectApp, { initial });
  app.use(host);
  try {
    const body = await renderToString(app);
    const manifest = host.snapshot();
    const head = host.renderStyles();
    return {
      body,
      head,
      manifest,
      html: `<!doctype html><html><head>${head}</head><body><main id="app">${body}</main><script type="application/json" id="styles">${host.renderManifest()}</script></body></html>`,
    };
  } finally {
    host.dispose();
  }
}
