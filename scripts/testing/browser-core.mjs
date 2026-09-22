import { createServer } from 'node:http';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { chromium } from '@playwright/test';
import { runBrowserTests } from '../../core/test/browser/runtime.mjs';
import { verifyEvidence } from './evidence-smoke.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const { createRuntime, keyframes } = await import('../../core/dist/index.js');
const bundled = await build({
  entryPoints: [resolve(root, 'core/src/index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2023',
  write: false,
  minify: true,
});
const js = bundled.outputFiles[0].contents;
const ssr = createRuntime({
  target: null,
  namespace: 'ssr',
  layers: ['base', 'components'],
  layer: 'components',
  nonce: 'c2VydmVy',
});
const fade = keyframes((k) => {
  k.from((s) => s.opacity.raw(0));
  k.to((s) => s.opacity.raw(1));
});
const className = ssr.css((s) => {
  s.padding.px(8, 16);
  s.animationName.raw(fade);
  s.animationDuration.ms(1);
  s.color.blue;
});
const a = ssr.mountGlobal((g) => g.rule('body', (s) => s.color.red));
const b = ssr.mountGlobal((g) => g.rule('body', (s) => s.color.blue));
const c = ssr.mountGlobal((g) => g.rule('body', (s) => s.color.red));
const hostile = ssr.css((s) =>
  s.before((p) => p.content.raw('"</StYlE><script>window.__injected=1</script>"')),
);
const ssrHtml = `<!doctype html><html><head>${ssr.renderStyles()}</head><body><div id="ssr-box" class="${className}">SSR</div><div id="hostile" class="${hostile}"></div><script type="application/json" id="manifest">${ssr.renderManifest()}</script></body></html>`;
const http = createServer((req, res) => {
  if (req.url === '/core.js') {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(js);
    return;
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.url === '/csp')
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'nonce-dGVzdA==';",
    );
  if (req.url === '/ssr') res.end(ssrHtml);
  else res.end('<!doctype html><html><head></head><body></body></html>');
});
let browser;
try {
  await new Promise((ok, fail) => {
    http.once('error', fail);
    http.listen(0, '127.0.0.1', ok);
  });
  const channel = process.env.ZERODEP_BROWSER_CHANNEL ?? 'chrome';
  browser = await chromium.launch({
    channel: channel === 'chromium' ? undefined : channel,
    headless: true,
  });
  await verifyEvidence(browser, resolve(root, 'test-results/browser/evidence-self-test'));
  const results = await runBrowserTests(
    browser,
    `http://127.0.0.1:${http.address().port}`,
    {
      className,
      globalIds: [a.id, b.id, c.id],
    },
    resolve(root, 'test-results/browser'),
  );
  const report = { browser: browser.version(), channel, bundleBytes: js.length, results };
  await mkdir(resolve(root, 'test-results/browser'), { recursive: true });
  await writeFile(
    resolve(root, 'test-results/browser/results.json'),
    JSON.stringify(report, null, 2) + '\n',
  );
  console.log(
    JSON.stringify({
      browser: report.browser,
      channel,
      bundleBytes: js.length,
      passed: results.length,
    }),
  );
} finally {
  await browser?.close();
  ssr.dispose();
  await new Promise((ok) => http.close(ok));
}
