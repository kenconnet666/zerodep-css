import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchBrowser } from './browser.mjs';
import { bundle } from './mup-bundle.mjs';

const directory = dirname(fileURLToPath(import.meta.url));
const output = resolve(directory, '../../test-results/mup-performance/results.json');
await mkdir(dirname(output), { recursive: true });
const report = {
  runId: randomUUID(),
  status: 'running',
  environment: { node: process.version, rows: 200, rounds: Number(process.env.MUP_ROUNDS ?? 3) },
  bundles: {},
  frameworks: {},
};
const save = () => writeFile(output, JSON.stringify(report, null, 2) + '\n');
await save();

const variants = [
  ...['direct', 'memo', 'table', 'variable', 'native-table', 'emotion'].map((mode) => ({
    mode,
    unique: false,
  })),
  ...['direct', 'memo', 'variable', 'native-var', 'emotion'].map((mode) => ({
    mode,
    unique: true,
  })),
];
const nativeRules = Array.from(
  { length: 16 },
  (_, index) => `.native-${index + 20}{color:red;width:${index + 20}px}`,
).join('');
const baseStyle = `<style>.rows{display:flex;flex-wrap:wrap;width:800px;contain:layout}.rows>div{height:2px;flex:none;padding:0;border:0;margin:0}${nativeRules}.native-var{color:red;width:var(--native-width)}</style>`;
const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];

let browser;
try {
  const bundles = {};
  for (const framework of ['vue', 'svelte']) {
    const source = await bundle(framework, 'browser', `${framework}-mup-performance-driver.ts`, {
      minify: true,
    });
    bundles[framework] = source;
    report.bundles[framework] = { bytes: Buffer.byteLength(source) };
  }
  browser = await launchBrowser();
  report.environment.browser = browser.version();
  for (const framework of ['vue', 'svelte']) {
    const samples = Object.fromEntries(
      variants.map(({ mode, unique }) => [`${mode}-${unique}`, []]),
    );
    for (let round = 0; round < report.environment.rounds; round++) {
      const order = [...variants.slice(round), ...variants.slice(0, round)];
      for (const { mode, unique } of order) {
        const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        try {
          await page.setContent(baseStyle);
          await page.addScriptTag({ content: bundles[framework] });
          const sample = await page.evaluate(
            async ({ mode, unique }) => {
              const rows = 200;
              const target = document.createElement('div');
              document.body.append(target);
              let control;
              try {
                const mountStart = performance.now();
                control = await window.mupBundle.start(mode, unique, rows, target);
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
                    throw new Error(`Wrong ${mode} row ${row}: ${style.width}/${style.color}`);
                }
                const expectedRecords = mode.startsWith('native-')
                  ? 0
                  : mode === 'variable'
                    ? 1
                    : unique
                      ? rows * (control.read() + 1)
                      : 16;
                if (stats.records !== expectedRecords)
                  throw new Error(`Wrong ${mode} rules: ${stats.records}/${expectedRecords}`);
                if (
                  ['memo', 'table', 'variable', 'native-table', 'native-var'].includes(mode) &&
                  noiseCalls !== 0
                )
                  throw new Error(`Unrelated update recalculated ${mode}.`);
                if (
                  ['table', 'variable', 'native-table', 'native-var'].includes(mode) &&
                  updateCalls !== 0
                )
                  throw new Error(`Value update recalculated ${mode}.`);
                return {
                  mountMs,
                  noiseMs,
                  updateMs,
                  noiseCalls,
                  updateCalls,
                  records: stats.records,
                  checksum,
                };
              } finally {
                await control?.dispose();
                target.remove();
              }
            },
            { mode, unique },
          );
          assert.deepEqual(errors, []);
          samples[`${mode}-${unique}`].push(sample);
        } finally {
          await page.close();
        }
      }
      report.frameworks[framework] = Object.fromEntries(
        Object.entries(samples)
          .filter(([, entries]) => entries.length)
          .map(([key, entries]) => [
            key,
            {
              samples: entries,
              median: Object.fromEntries(
                ['mountMs', 'noiseMs', 'updateMs', 'noiseCalls', 'updateCalls', 'records'].map(
                  (metric) => [metric, median(entries.map((entry) => entry[metric]))],
                ),
              ),
            },
          ]),
      );
      await save();
    }
  }
  report.status = 'passed';
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
    status: report.status,
    runId: report.runId,
    browser: report.environment.browser,
  }),
);
