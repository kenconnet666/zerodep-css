import assert from 'node:assert/strict';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { build } from 'esbuild';

const directory = dirname(fileURLToPath(import.meta.url));
const result = await build({
  stdin: {
    contents:
      "import { createRuleRegistry } from '../../core/src/registry.ts'; globalThis.createRuleRegistry = createRuleRegistry;",
    resolveDir: directory,
    sourcefile: 'runtime-hot-path.ts',
  },
  bundle: true,
  minify: true,
  write: false,
  format: 'iife',
  platform: 'browser',
  target: 'es2023',
});
const code = result.outputFiles[0].text;
const browser = await chromium.launch({
  ...(process.env.CSS_PROBE_BROWSER_CHANNEL === 'chromium' ? {} : { channel: 'chrome' }),
  headless: true,
});
const rounds = [];

try {
  for (let round = 0; round < 5; round++) {
    const page = await browser.newPage();
    try {
      rounds.push(
        await page.evaluate(async (script) => {
          eval(script);
          const widths = Array.from({ length: 16 }, (_, index) => `width:${20 + index}px;`);
          const bodies = widths.map((width) => `color:red;${width}`);
          const classes = new Map(bodies.map((body, index) => [body, `class-${index}`]));
          const registry = globalThis.createRuleRegistry(() => {});
          for (const width of widths) registry.css('color:red;', width);
          let checksum = 0;

          const measure = (run) => {
            const start = performance.now();
            run();
            return performance.now() - start;
          };
          const hitMs = measure(() => {
            for (let index = 0; index < 1_000_000; index++)
              checksum += registry.css('color:red;', widths[index & 15]).length;
          });
          const joinMs = measure(() => {
            for (let index = 0; index < 1_000_000; index++)
              checksum += ['color:red;', widths[index & 15]].join('').length;
          });
          const mapMs = measure(() => {
            for (let index = 0; index < 1_000_000; index++)
              checksum += classes.get(bodies[index & 15]).length;
          });

          function hash(body) {
            let value = 2166136261;
            for (let index = 0; index < body.length; index++)
              value = Math.imul(value ^ body.charCodeAt(index), 16777619);
            return value >>> 0;
          }
          const hashMs = measure(() => {
            for (let index = 0; index < 1_000_000; index++)
              checksum += hash(bodies[index & 15]) & 15;
          });
          const bytes = new Uint8Array(128);
          const encoder = new TextEncoder();
          const encodeMs = measure(() => {
            for (let index = 0; index < 1_000_000; index++)
              checksum += encoder.encodeInto(bodies[index & 15], bytes).written;
          });

          const noop = globalThis.createRuleRegistry(() => {});
          const missMs = measure(() => {
            for (let index = 0; index < 1400; index++)
              checksum += noop.css('color:red;', `width:${100 + index}px;`).length;
          });
          const style = document.createElement('style');
          document.head.append(style);
          const sheet = style.sheet;
          const dom = globalThis.createRuleRegistry((className, body) => {
            sheet.insertRule(`.${className}{${body}}`, sheet.cssRules.length);
          });
          const missCssomMs = measure(() => {
            for (let index = 0; index < 1400; index++)
              checksum += dom.css('color:red;', `width:${100 + index}px;`).length;
          });

          const workerSource = `onmessage = (event) => {
            const values = Array.isArray(event.data) ? event.data : [event.data];
            let sum = 0;
            for (const body of values) {
              let value = 2166136261;
              for (let index = 0; index < body.length; index++)
                value = Math.imul(value ^ body.charCodeAt(index), 16777619);
              sum += value >>> 0;
            }
            postMessage(sum);
          };`;
          const url = URL.createObjectURL(new Blob([workerSource], { type: 'text/javascript' }));
          const worker = new Worker(url);
          const send = (payload) =>
            new Promise((finish) => {
              worker.onmessage = ({ data }) => finish(data);
              worker.postMessage(payload);
            });
          try {
            await send(bodies[0]);
            const workerSingleStart = performance.now();
            for (let index = 0; index < 50; index++) checksum += (await send(bodies[0])) & 15;
            const workerSingleMs = performance.now() - workerSingleStart;
            const workerBatchStart = performance.now();
            checksum +=
              (await send(Array.from({ length: 1400 }, (_, index) => bodies[index & 15]))) & 15;
            const workerBatchMs = performance.now() - workerBatchStart;
            return {
              hitMs,
              joinMs,
              mapMs,
              hashMs,
              encodeMs,
              missMs,
              missCssomMs,
              workerSingleMs,
              workerBatchMs,
              rules: dom.size,
              checksum,
            };
          } finally {
            worker.terminate();
            URL.revokeObjectURL(url);
            style.remove();
          }
        }, code),
      );
    } finally {
      await page.close();
    }
  }
  const median = (key) => rounds.map((item) => item[key]).sort((a, b) => a - b)[2];
  assert.ok(rounds.every((item) => item.rules === 1400 && item.checksum > 0));
  console.log(
    JSON.stringify({
      browser: browser.version(),
      millionHitsMs: median('hitMs'),
      millionJoinsMs: median('joinMs'),
      millionMapGetsMs: median('mapMs'),
      millionHashesMs: median('hashMs'),
      millionEncodeIntoMs: median('encodeMs'),
      newRules1400NoopMs: median('missMs'),
      newRules1400CssomMs: median('missCssomMs'),
      worker50SingleRoundTripsMs: median('workerSingleMs'),
      worker1400BatchRoundTripMs: median('workerBatchMs'),
    }),
  );
} finally {
  await browser.close();
}
