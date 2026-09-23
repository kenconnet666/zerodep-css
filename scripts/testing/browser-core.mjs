import { createServer } from 'node:http';
import { parseArgs } from 'node:util';
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { launchBrowser, browserEngine, browserChannel as channel } from './browser-launch.mjs';
import { runBrowserTests } from '../../core/test/browser/runtime.mjs';
import { prepareBrowserRun, browserRunId } from './browser-evidence.mjs';
import { verifyEvidence } from './evidence-smoke.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const {
  values: { match },
} = parseArgs({ options: { match: { type: 'string' } } });
// 针对性结果不覆盖完整回归报告，避免把局部通过误当全套成功。
const output = match
  ? resolve(
      root,
      'test-results/browser-focused',
      createHash('sha256').update(match).digest('hex').slice(0, 12),
    )
  : resolve(root, 'test-results/browser');
await prepareBrowserRun(output);
const { createRuntime, keyframes } = await import('../../core/dist/index.js');
const bundled = await build({
  entryPoints: [resolve(root, 'core/dist/index.js')],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2023',
  write: false,
  minify: true,
});
const js = bundled.outputFiles[0].contents;
const bindings = await build({
  entryPoints: [resolve(root, 'core/dist/compiler-runtime.js')],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2023',
  write: false,
  minify: true,
});
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
  s.name('ssr-box').config({ debug: true });
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
  if (req.url === '/bindings.js') {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(bindings.outputFiles[0].contents);
    return;
  }
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
  browser = await launchBrowser();
  if (!match) await verifyEvidence(browser, resolve(output, 'evidence-self-test'));
  const results = await runBrowserTests(
    browser,
    `http://127.0.0.1:${http.address().port}`,
    {
      className,
      globalIds: [a.id, b.id, c.id],
    },
    output,
    match,
  );
  const report = {
    runId: browserRunId,
    status: 'passed',
    passed: true,
    engine: browserEngine,
    browser: browser.version(),
    channel,
    match,
    bundleBytes: js.length,
    results,
  };
  await mkdir(output, { recursive: true });
  await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(
    JSON.stringify({
      browser: report.browser,
      channel,
      bundleBytes: js.length,
      passed: results.length,
      match,
    }),
  );
} finally {
  await browser?.close();
  ssr.dispose();
  await new Promise((ok) => http.close(ok));
}
