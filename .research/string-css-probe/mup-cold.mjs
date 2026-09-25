import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { launchBrowser } from './browser.mjs';
import { bundle } from './mup-bundle.mjs';

const directory = dirname(fileURLToPath(import.meta.url));
const output = resolve(directory, '../../test-results/mup-performance/cold.json');
const dist = process.env.MUP_DIST === '1';
await mkdir(dirname(output), { recursive: true });
const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const report = { browser: {}, server: {}, environment: { node: process.version } };

const browser = await launchBrowser();
try {
  report.environment.browser = browser.version();
  for (const [name, entry, source] of [
    ['core-runtime', dist ? '../../core/dist/browser.js' : '../../core/src/browser.ts'],
    ['core', dist ? '../../core/dist/index.js' : '../../core/src/index.ts'],
    ['vue', dist ? '../../vue/dist/index.js' : '../../vue/src/index.ts'],
    ['svelte', dist ? '../../svelte/dist/index.js' : '../../svelte/src/index.ts'],
    ['vue-runtime', null, "export { provide, inject } from 'vue';"],
    ['svelte-runtime', null, "export { getContext, setContext } from 'svelte';"],
    ['emotion', null, "export { css } from '@emotion/css';"],
  ]) {
    const result = await build({
      ...(entry
        ? { entryPoints: [resolve(directory, entry)] }
        : {
            stdin: {
              contents: source,
              resolveDir: directory,
              sourcefile: 'emotion.ts',
            },
          }),
      bundle: true,
      minify: true,
      write: false,
      format: 'iife',
      globalName: 'coldBundle',
      platform: 'browser',
      define: {
        'process.env.NODE_ENV': '"production"',
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      },
    });
    const code = result.outputFiles[0].text;
    const samples = [];
    for (let index = 0; index < 5; index++) {
      const page = await browser.newPage();
      try {
        const elapsed = await page.evaluate((scriptText) => {
          const start = performance.now();
          const script = document.createElement('script');
          script.textContent = scriptText;
          document.head.append(script);
          if (!window.coldBundle) throw new Error('Cold bundle did not execute.');
          return performance.now() - start;
        }, code);
        samples.push(elapsed);
      } finally {
        await page.close();
      }
    }
    report.browser[name] = { bytes: Buffer.byteLength(code), executeMs: median(samples), samples };
  }
} finally {
  await browser.close();
}

for (const framework of ['vue', 'svelte']) {
  const code = await bundle(framework, 'node', undefined, { minify: true });
  const start = performance.now();
  const module = await import(
    `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`
  );
  const importMs = performance.now() - start;
  for (let index = 0; index < 20; index++) await module.renderPage(24);
  const samples = [];
  for (let index = 0; index < 50; index++) {
    const before = performance.now();
    const rendered = await module.renderPage(20 + (index % 16));
    samples.push(performance.now() - before);
    assert.equal(rendered.rules.length, 1);
  }
  report.server[framework] = {
    bytes: Buffer.byteLength(code),
    importMs,
    renderMs: median(samples),
    samples,
  };
}
await writeFile(output, JSON.stringify(report, null, 2) + '\n');
console.log(
  JSON.stringify({
    browser: Object.fromEntries(
      Object.entries(report.browser).map(([name, value]) => [
        name,
        { bytes: value.bytes, executeMs: value.executeMs },
      ]),
    ),
    server: Object.fromEntries(
      Object.entries(report.server).map(([name, value]) => [
        name,
        { bytes: value.bytes, importMs: value.importMs, renderMs: value.renderMs },
      ]),
    ),
  }),
);
