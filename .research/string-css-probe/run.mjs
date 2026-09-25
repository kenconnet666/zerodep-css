import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { chromium } from '@playwright/test';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile } from 'svelte/compiler';

const directory = dirname(fileURLToPath(import.meta.url));
const output = resolve(directory, '../../test-results/string-css-probe');
await mkdir(output, { recursive: true });
const report = {
  runId: randomUUID(),
  status: 'running',
  passed: false,
  environment: { node: process.version, rows: 200, rounds: 3 },
  frameworks: {},
};
const save = () =>
  writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
await save();

async function bundle(framework) {
  const filename = resolve(directory, framework === 'vue' ? 'VueProbe.vue' : 'SvelteProbe.svelte');
  const outfile = resolve(output, `${framework}.js`);
  await build({
    entryPoints: [resolve(directory, `${framework}-driver.ts`)],
    outfile,
    bundle: true,
    minify: true,
    format: 'iife',
    globalName: 'probeBundle',
    platform: 'browser',
    target: 'es2023',
    define: {
      'process.env.NODE_ENV': '"production"',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    },
    plugins: [
      {
        name: 'official-framework-compiler',
        setup(bundler) {
          bundler.onLoad({ filter: /\.(vue|svelte)$/ }, async ({ path }) => {
            assert.equal(path, filename);
            const source = await readFile(path, 'utf8');
            if (framework === 'vue') {
              const { descriptor, errors } = parse(source, { filename: path });
              assert.deepEqual(errors, []);
              return {
                contents: compileScript(descriptor, {
                  id: 'string-css-probe',
                  isProd: true,
                  inlineTemplate: true,
                }).content,
                loader: 'ts',
                resolveDir: directory,
              };
            }
            const result = compile(source, { filename: path, generate: 'client', dev: false });
            const warnings = result.warnings.filter(
              (item) => item.code !== 'state_referenced_locally',
            );
            assert.deepEqual(warnings, []);
            return { contents: result.js.code, loader: 'js', resolveDir: directory };
          });
        },
      },
    ],
  });
  return outfile;
}

let browser;
try {
  const bundles = { vue: await bundle('vue'), svelte: await bundle('svelte') };
  browser = await chromium.launch({ channel: 'chrome', headless: true });
  report.environment.browser = browser.version();
  for (const framework of ['vue', 'svelte']) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      await page.setContent(
        '<style>.rows{display:flex;flex-wrap:wrap;width:800px;contain:layout}.rows>div{height:2px;flex:none;padding:0;border:0;margin:0}</style>',
      );
      await page.addScriptTag({ path: bundles[framework] });
      report.frameworks[framework] = await page.evaluate(async () => {
        const rows = 200;
        const variants = [
          ...['direct', 'memo', 'table', 'variable', 'emotion'].map((mode) => ({
            mode,
            unique: false,
          })),
          ...['direct', 'memo', 'variable', 'emotion'].map((mode) => ({ mode, unique: true })),
        ];
        const samples = Object.fromEntries(
          variants.map((item) => [`${item.mode}-${item.unique}`, []]),
        );
        for (let round = 0; round < 3; round++) {
          const ordered = [...variants.slice(round), ...variants.slice(0, round)];
          for (const { mode, unique } of ordered) {
            const target = document.createElement('div');
            document.body.append(target);
            let control;
            try {
              const mountStart = performance.now();
              control = await window.probeBundle.start(mode, unique, rows, target);
              const mountMs = performance.now() - mountStart;
              const beforeNoise = control.stats().calls;
              let checksum = target.offsetHeight;
              const noiseStart = performance.now();
              for (let index = 0; index < (unique ? 5 : 20); index++) {
                control.noise();
                await control.flush();
                checksum += target.offsetHeight;
              }
              const noiseMs = performance.now() - noiseStart;
              const noiseCalls = control.stats().calls - beforeNoise;
              for (let index = 0; index < (unique ? 1 : 3); index++) {
                control.step();
                await control.flush();
              }
              const beforeUpdates = control.stats().calls;
              const updateStart = performance.now();
              for (let index = 0; index < (unique ? 5 : 30); index++) {
                control.step();
                await control.flush();
                checksum += target.offsetHeight;
              }
              const updateMs = performance.now() - updateStart;
              const stats = control.stats();
              const updateCalls = stats.calls - beforeUpdates;
              const nodes = [...target.querySelectorAll('[data-row]')];
              if (nodes.length !== rows) throw new Error(`Missing ${mode} rows.`);
              for (const node of nodes) {
                const row = Number(node.dataset.row);
                const expected = unique
                  ? 20 + control.read() * rows + row
                  : 20 + ((control.read() + row) % 16);
                const style = getComputedStyle(node);
                if (style.width !== `${expected}px` || style.color !== 'rgb(255, 0, 0)')
                  throw new Error(
                    `Wrong ${mode} style for row ${row}: ${style.width}/${style.color}`,
                  );
              }
              const expectedRecords =
                mode === 'variable' ? 1 : unique ? rows * (control.read() + 1) : 16;
              if (stats.records !== expectedRecords)
                throw new Error(`Wrong ${mode} rule count: ${stats.records}/${expectedRecords}`);
              if (['memo', 'table', 'variable'].includes(mode) && noiseCalls !== 0)
                throw new Error(`Unrelated update recalculated ${mode}.`);
              if (['table', 'variable'].includes(mode) && updateCalls !== 0)
                throw new Error(`Value update recalculated ${mode}.`);
              samples[`${mode}-${unique}`].push({
                mountMs,
                noiseMs,
                updateMs,
                noiseCalls,
                updateCalls,
                records: stats.records,
                checksum,
              });
            } finally {
              await control?.dispose();
              target.remove();
              if (document.head.querySelectorAll('style').length !== 1)
                throw new Error(`Style host leaked after ${mode} cleanup.`);
            }
          }
        }
        const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
        return Object.fromEntries(
          Object.entries(samples).map(([name, entries]) => [
            name,
            {
              samples: entries,
              median: Object.fromEntries(
                ['mountMs', 'noiseMs', 'updateMs', 'noiseCalls', 'updateCalls', 'records'].map(
                  (key) => [key, median(entries.map((entry) => entry[key]))],
                ),
              ),
            },
          ]),
        );
      });
      assert.deepEqual(errors, []);
      await save();
    } finally {
      await page.close();
    }
  }
  report.status = 'passed';
  report.passed = true;
} catch (error) {
  report.status = 'failed';
  report.error = String(error.stack ?? error);
  throw error;
} finally {
  await browser?.close();
  await save();
}
console.log(
  JSON.stringify({
    runId: report.runId,
    status: report.status,
    browser: report.environment.browser,
  }),
);
