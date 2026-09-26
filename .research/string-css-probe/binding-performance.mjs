import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import vuePlugin from '../../vue/dist/vite.js';
import sveltePlugin from '../../svelte/dist/vite.js';
import { bundle } from './mup-bundle.mjs';
import { launchBrowser } from './browser.mjs';
import { bindingCacheVariant } from './binding-cache-variant.mjs';

const count = Number(process.env.BINDING_ROWS ?? 200),
  updates = 20,
  rounds = Number(process.env.BINDING_ROUNDS ?? 3);
const result = { node: process.version, count, updates, rounds, samples: {} };
const browser = await launchBrowser();
result.browser = browser.version();
try {
  for (const framework of ['vue', 'svelte']) {
    const plugin = framework === 'vue' ? vuePlugin() : sveltePlugin();
    const source = await bundle(
      framework,
      'browser',
      `${framework}-binding-performance-driver.ts`,
      { dist: true, minify: true },
    );
    const options = {
      dist: false,
      minify: true,
      transformSfc: (code, id) => plugin.transform.call({ warn() {} }, code, id)?.code ?? code,
    };
    const bound = await bundle(framework, 'browser', `${framework}-binding-performance-driver.ts`, {
      ...options,
      plugins: [bindingCacheVariant(true)],
    });
    const uncached = await bundle(
      framework,
      'browser',
      `${framework}-binding-performance-driver.ts`,
      { ...options, plugins: [bindingCacheVariant(false)] },
    );
    for (let round = 0; round < rounds; round++) {
      const modes = ['implicit', 'implicit-uncached', 'runtime', 'manual', 'emotion'];
      for (const mode of [
        ...modes.slice(round % modes.length),
        ...modes.slice(0, round % modes.length),
      ]) {
        const page = await browser.newPage();
        try {
          await page.setContent(
            '<style>.rows{display:flex;flex-wrap:wrap;width:800px;contain:layout}.rows>div{height:2px;flex:none}</style><main></main>',
          );
          await page.addScriptTag({
            content: mode === 'implicit' ? bound : mode === 'implicit-uncached' ? uncached : source,
          });
          const sample = await page.evaluate(
            async ({ mode, count, updates }) => {
              const target = document.querySelector('main');
              const start = performance.now();
              const control = await window.mupBundle.start(target, mode, count);
              const initialRules = control.stats();
              let height = target.offsetHeight;
              const mountMs = performance.now() - start;
              let noiseWrites = 0;
              const descriptor = Object.getOwnPropertyDescriptor(
                CSSStyleDeclaration.prototype,
                'cssText',
              );
              const noiseStart = performance.now();
              try {
                Object.defineProperty(CSSStyleDeclaration.prototype, 'cssText', {
                  ...descriptor,
                  set(value) {
                    noiseWrites++;
                    descriptor.set.call(this, value);
                  },
                });
                for (let i = 0; i < 10; i++) {
                  await control.noise();
                  height += target.offsetHeight;
                }
              } finally {
                Object.defineProperty(CSSStyleDeclaration.prototype, 'cssText', descriptor);
              }
              const noiseMs = performance.now() - noiseStart;
              if (control.stats() !== initialRules)
                throw new Error('Unrelated state registered rules.');
              const begin = performance.now();
              for (let i = 0; i < updates; i++) {
                await control.step();
                height += target.offsetHeight;
              }
              const updateMs = performance.now() - begin;
              const widths = [...target.querySelectorAll('[data-row]')].map(
                (node) => getComputedStyle(node).width,
              );
              const finalRules = control.stats();
              await control.dispose();
              return {
                mountMs,
                updateMs,
                noiseMs,
                noiseWrites,
                initialRules,
                finalRules,
                widths,
                height,
              };
            },
            { mode, count, updates },
          );
          assert.deepEqual(
            sample.widths,
            Array.from({ length: count }, (_, i) => `${20 + updates * count + i}px`),
          );
          if (mode.startsWith('implicit') || mode === 'manual')
            assert.equal(sample.finalRules, sample.initialRules);
          if (mode.startsWith('implicit')) assert.equal(sample.noiseWrites, 0);
          delete sample.widths;
          (result.samples[`${framework}-${mode}`] ??= []).push(sample);
        } finally {
          await page.close();
        }
      }
    }
  }
} finally {
  await browser.close();
}
const output = new URL('../../test-results/binding-performance/', import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL(`results-${count}.json`, output), JSON.stringify(result, null, 2) + '\n');
for (const [name, samples] of Object.entries(result.samples)) {
  const median = (key) =>
    samples.map((s) => s[key]).sort((a, b) => a - b)[Math.floor(samples.length / 2)];
  console.log(
    JSON.stringify({
      name,
      mountMs: median('mountMs'),
      updateMs: median('updateMs'),
      noiseMs: median('noiseMs'),
      noiseWrites: samples[0].noiseWrites,
      initialRules: samples[0].initialRules,
      finalRules: samples[0].finalRules,
    }),
  );
}
