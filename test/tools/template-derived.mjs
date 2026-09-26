import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { bundle } from './mup-bundle.mjs';
import { launchBrowser } from './browser.mjs';
import { modes, templateVariant } from './template-derived-variant.mjs';

const count = 200,
  updates = 20,
  rounds = 5;
const bundles = new Map();
for (const framework of ['vue', 'svelte']) {
  for (const mode of modes) {
    bundles.set(
      `${framework}-${mode}`,
      await bundle(framework, 'browser', `${framework}-template-derived-driver.ts`, {
        dist: true,
        minify: true,
        transformSfc: templateVariant(framework, mode),
      }),
    );
  }
}
if (process.argv.includes('--compile-only')) {
  console.log('Vue/Svelte 四种生成结果均已通过生产编译；未运行浏览器或性能测试。');
} else {
  const browser = await launchBrowser();
  const result = {
    node: process.version,
    browser: browser.version(),
    count,
    updates,
    rounds,
    samples: {},
  };
  try {
    for (let round = 0; round < rounds; round++) {
      // 轮换次序，避免总让同一模式承担冷机或后半程负载。
      const entries = [...bundles];
      for (const [name, code] of [...entries.slice(round), ...entries.slice(0, round)]) {
        const page = await browser.newPage();
        try {
          await page.setContent('<style>[data-row]{height:1px}</style><main></main>');
          await page.addScriptTag({ content: code });
          const sample = await page.evaluate(
            async ({ count, updates }) => {
              const target = document.querySelector('main');
              const begin = performance.now();
              const control = await window.mupBundle.start(target, count);
              let layout = target.offsetHeight;
              const mountMs = performance.now() - begin;
              const initial = control.stats();
              const initialClasses = [...target.querySelectorAll('[data-row]')].map(
                (el) => el.className,
              );
              const noiseStart = performance.now();
              for (let i = 0; i < updates; i++) {
                await control.noise();
                layout += target.offsetHeight;
              }
              const noiseMs = performance.now() - noiseStart;
              const afterNoise = control.stats();
              const updateStart = performance.now();
              for (let i = 0; i < updates; i++) {
                await control.step();
                layout += target.offsetHeight;
              }
              const updateMs = performance.now() - updateStart;
              const nodes = [...target.querySelectorAll('[data-row]')];
              const widths = nodes.map((el) => getComputedStyle(el).width);
              const colors = nodes.map((el) => getComputedStyle(el).color);
              const classChanges = nodes.filter(
                (el, i) => el.className !== initialClasses[i],
              ).length;
              const final = control.stats();
              await control.dispose();
              return {
                mountMs,
                noiseMs,
                updateMs,
                initial,
                afterNoise,
                final,
                afterDispose: control.stats(),
                widths,
                colors,
                classChanges,
                layout,
              };
            },
            { count, updates },
          );
          assert.deepEqual(
            sample.widths,
            Array.from({ length: count }, (_, i) => `${20 + i + updates}px`),
          );
          assert.ok(sample.colors.every((color) => color === 'rgb(255, 0, 0)'));
          assert.deepEqual(sample.afterNoise, sample.initial);
          const bound = /-(bx|hoisted)$/.test(name);
          assert.equal(sample.classChanges, bound ? 0 : count);
          if (bound) {
            assert.equal(sample.final.rules, sample.initial.rules);
            assert.equal(sample.final.bindings, count);
            assert.equal(sample.afterDispose.bindings, 0);
          }
          delete sample.widths;
          delete sample.colors;
          (result.samples[name] ??= []).push(sample);
        } finally {
          await page.close();
        }
      }
    }
  } finally {
    await browser.close();
  }
  const output = new URL('../../test-results/template-derived/', import.meta.url);
  await mkdir(output, { recursive: true });
  await writeFile(new URL('results.json', output), JSON.stringify(result, null, 2) + '\n');
  for (const [name, samples] of Object.entries(result.samples)) {
    const median = (key) =>
      samples.map((sample) => sample[key]).sort((a, b) => a - b)[Math.floor(samples.length / 2)];
    console.log(
      JSON.stringify({
        name,
        mountMs: median('mountMs'),
        noiseMs: median('noiseMs'),
        updateMs: median('updateMs'),
        initialRules: samples[0].initial.rules,
        finalRules: samples[0].final.rules,
      }),
    );
  }
}
