import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { gzipSync, brotliCompressSync, constants } from 'node:zlib';
import { build } from 'esbuild';
import { keywordVariant, properties, summary } from './keyword-variant.mjs';
import { bundle } from './mup-bundle.mjs';
import { launchBrowser } from './browser.mjs';
import vuePlugin from '../../vue/dist/vite.js';
import sveltePlugin from '../../svelte/dist/vite.js';

const variants = ['literal', 'concat', 'shared', 'getter', 'proxy'];
const report = { node: process.version, summary, bundles: {}, samples: {}, frameworks: {} };
const sources = {};
const sizes = (text) => ({
  raw: Buffer.byteLength(text),
  gzip: gzipSync(text, { level: 9 }).length,
  brotli: brotliCompressSync(text, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } }).length,
});
const base = fileURLToPath(new URL('../../core', import.meta.url));
for (const variant of variants) {
  report.bundles[variant] = {};
  for (const [name, contents] of Object.entries({
    full: "export {Css} from '@zerodep-css/core';",
    color: "export {ColorCss} from '@zerodep-css/core';",
    animation: "export {AnimationPlayStateCss} from '@zerodep-css/core';",
    runtime:
      "export {Css,ColorCss,WidthCss,AnimationPlayStateCss} from '@zerodep-css/core'; export {createRuleRegistry} from './src/registry.ts';",
  })) {
    const result = await build({
      stdin: { contents, resolveDir: base, loader: 'ts' },
      bundle: true,
      write: false,
      minify: true,
      format: 'iife',
      globalName: 'keywordProbe',
      platform: 'browser',
      target: 'es2023',
      plugins: [keywordVariant(variant)],
    });
    if (name === 'runtime') sources[variant] = result.outputFiles[0].text;
    else report.bundles[variant][name] = sizes(result.outputFiles[0].text);
  }
}
const browser = await launchBrowser();
report.browser = browser.version();
try {
  for (let round = 0; round < 5; round++) {
    for (const variant of [
      ...variants.slice(round % variants.length),
      ...variants.slice(0, round % variants.length),
    ]) {
      const page = await browser.newPage();
      try {
        const sample = await page.evaluate(
          ({ code, properties }) => {
            const now = () => performance.now();
            let start = now();
            (0, eval)(code);
            const executeMs = now() - start;
            const { Css, ColorCss, createRuleRegistry } = window.keywordProbe;
            start = now();
            const s = new Css();
            const createMs = now() - start;
            start = now();
            const typical = [
              s.color.red,
              s.display.flex,
              s.animationPlayState.running,
              s.width.auto,
            ];
            const firstMs = now() - start;
            let verified = 0;
            for (const property of properties)
              for (const field of property.keywords) {
                if (s[property.property][field.name] !== field.text)
                  throw Error(`Mismatch: ${property.property}.${field.name}`);
                verified++;
              }
            const registry = createRuleRegistry(() => {});
            const simple = registry.css(s.color.red, s.animationPlayState.running);
            let checksum = 0;
            for (let i = 0; i < 20000; i++)
              checksum += registry.css(s.color.red, s.animationPlayState.running).length;
            start = now();
            for (let i = 0; i < 500000; i++)
              checksum += s.animationPlayState.running.length + s.color.red.charCodeAt(0);
            const readMs = now() - start;
            start = now();
            for (let i = 0; i < 200000; i++)
              checksum += registry.css(s.color.red, s.animationPlayState.running).length;
            const cssMs = now() - start;
            class ThemeColor extends ColorCss {
              _brand = this.raw('rebeccapurple');
            }
            const held = [];
            start = now();
            for (let i = 0; i < 1000; i++) held.push(new ThemeColor());
            const themeMs = now() - start;
            if (held[0]._brand !== 'color:rebeccapurple;' || held[0].red !== 'color:red;')
              throw Error('Theme inheritance failed');
            if (
              registry.size !== 1 ||
              registry.css(...typical.slice(0, 1), s.animationPlayState.running) !== simple
            )
              throw Error('Cache semantics failed');
            return {
              executeMs,
              createMs,
              firstMs,
              readMs,
              cssMs,
              themeMs,
              verified,
              checksum,
              ownKeys: Object.keys(s.animationPlayState),
              unknown: typeof s.animationPlayState.notAKeyword,
            };
          },
          { code: sources[variant], properties },
        );
        assert.equal(sample.verified, 12586);
        (report.samples[variant] ??= []).push(sample);
      } finally {
        await page.close();
      }
    }
  }
  for (const framework of ['vue', 'svelte'])
    for (const variant of variants) {
      const plugin = framework === 'vue' ? vuePlugin() : sveltePlugin();
      const source = await bundle(
        framework,
        'browser',
        `${framework}-binding-performance-driver.ts`,
        {
          dist: false,
          minify: true,
          plugins: [keywordVariant(variant)],
          transformSfc(code, id) {
            const explicit = code
              .replace('Css, css', 'Css, css, bx')
              .replace(
                'return css(s.color.red, s.width.px(value));',
                "return css(s.color.red, s.width.raw(bx(value + 'px')));",
              );
            return plugin.transform.call({ warn() {} }, explicit, id)?.code ?? explicit;
          },
        },
      );
      const samples = [];
      for (let round = 0; round < 3; round++) {
        const page = await browser.newPage();
        try {
          await page.setContent(
            '<style>.rows{display:flex;flex-wrap:wrap;width:800px}.rows>div{height:2px;flex:none}</style><main></main>',
          );
          await page.addScriptTag({ content: source });
          const result = await page.evaluate(async () => {
            const target = document.querySelector('main'),
              start = performance.now();
            const control = await window.mupBundle.start(target, 'bx', 200);
            let checksum = target.offsetHeight;
            const mountMs = performance.now() - start,
              before = control.stats(),
              begin = performance.now();
            for (let i = 0; i < 20; i++) {
              await control.step();
              checksum += target.offsetHeight;
            }
            const updateMs = performance.now() - begin,
              after = control.stats();
            const widths = [...target.querySelectorAll('[data-row]')].map(
              (node) => getComputedStyle(node).width,
            );
            await control.dispose();
            return { mountMs, updateMs, before, after, widths, checksum };
          });
          assert.equal(result.before, result.after);
          assert.deepEqual(
            result.widths,
            Array.from({ length: 200 }, (_, i) => `${4020 + i}px`),
          );
          delete result.widths;
          samples.push(result);
        } finally {
          await page.close();
        }
      }
      report.frameworks[`${framework}-${variant}`] = samples;
    }
} finally {
  await browser.close();
}
const output = new URL('../../test-results/keyword-representation/', import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL('results.json', output), JSON.stringify(report, null, 2) + '\n');
const median = (rows, key) =>
  rows.map((row) => row[key]).sort((a, b) => a - b)[Math.floor(rows.length / 2)];
console.log(
  JSON.stringify(
    {
      summary,
      bundles: report.bundles,
      samples: Object.fromEntries(
        Object.entries(report.samples).map(([key, rows]) => [
          key,
          Object.fromEntries(
            ['executeMs', 'createMs', 'firstMs', 'readMs', 'cssMs', 'themeMs'].map((metric) => [
              metric,
              median(rows, metric),
            ]),
          ),
        ]),
      ),
      frameworks: Object.fromEntries(
        Object.entries(report.frameworks).map(([key, rows]) => [
          key,
          { mountMs: median(rows, 'mountMs'), updateMs: median(rows, 'updateMs') },
        ]),
      ),
    },
    null,
    2,
  ),
);
