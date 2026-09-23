import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { build } from 'esbuild';
import { launchBrowser } from '../../../../scripts/testing/browser-launch.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../..');

test('正式导入条件控制开发增长提示，生产默认静默且不增加来源元数据', async () => {
  const bundles = new Map();
  for (const mode of ['development', 'production']) {
    const result = await build({
      entryPoints: [resolve(root, 'internal/runtime/dist/index.js')],
      bundle: true,
      format: 'esm',
      platform: 'browser',
      target: 'es2023',
      conditions: [mode],
      write: false,
      minify: true,
    });
    bundles.set('/' + mode + '.js', result.outputFiles[0].contents);
  }
  const http = createServer((request, response) => {
    if (bundles.has(request.url)) {
      response.setHeader('Content-Type', 'text/javascript');
      response.end(bundles.get(request.url));
    } else response.end('<!doctype html><html><head></head><body></body></html>');
  });
  let browser;
  try {
    await new Promise((ok, fail) => {
      http.once('error', fail);
      http.listen(0, '127.0.0.1', ok);
    });
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${http.address().port}`);
    const results = await page.evaluate(async () => {
      const results = [];
      for (const mode of ['development', 'production']) {
        const { createRuntime } = await import('/' + mode + '.js');
        const runtime = createRuntime({ namespace: mode, warnAt: 2 });
        const original = console.warn,
          messages = [];
        console.warn = (message) => messages.push(message);
        try {
          for (const width of [1, 2, 3, 4, 4]) runtime.css((s) => s.width.px(width));
          results.push({
            mode,
            warnings: messages.length,
            records: runtime.stats().records,
            source: runtime.snapshot().records.some((record) => record.debug !== undefined),
          });
        } finally {
          console.warn = original;
          runtime.dispose();
        }
      }
      return results;
    });
    assert.deepEqual(results, [
      { mode: 'development', warnings: 2, records: 4, source: false },
      { mode: 'production', warnings: 0, records: 4, source: false },
    ]);
    assert.equal(await page.locator('style[data-zerodep]').count(), 0);
  } finally {
    await browser?.close();
    if (http.listening) await new Promise((ok) => http.close(ok));
  }
});
