import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { bundle } from './mup-bundle.mjs';
import { launchBrowser } from './browser.mjs';
import { compileListStyle } from './vfor-style-compiler.mjs';

const count = 200,
  updates = 21,
  rounds = 5;
const template = `<section :data-noise="noise"><div data-row v-for="(item, index) in items" :key="item.id" :class="css(s.display.flex, item.compact ? s.padding.px(4) : s.padding.px(16), s.width.px(20 + index))">{{ item.label }}</div></section>`;
const variants = [];
for (const cached of [false, true]) {
  const code = compileListStyle(template, cached);
  const source = await bundle('vue', 'browser', 'vue-vfor-style-driver.ts', {
    dist: true,
    minify: true,
    plugins: [
      {
        name: 'compiled-vfor-research',
        setup(build) {
          build.onResolve({ filter: /^vfor-probe:render$/ }, () => ({
            path: 'render',
            namespace: 'vfor-probe',
          }));
          build.onLoad({ filter: /.*/, namespace: 'vfor-probe' }, () => ({
            contents: `import * as Vue from 'vue';
import { readRowStyle as __readRowStyle, rememberRowStyle as __rememberRowStyle } from './vfor-style-cache.mjs';
export const render = (() => { ${code} })();`,
            loader: 'js',
            resolveDir: fileURLToPath(new URL('.', import.meta.url)),
          }));
        },
      },
    ],
  });
  variants.push({ cached, name: cached ? 'row-computed' : 'runtime', code, source });
}
if (process.argv.includes('--compile-only')) {
  console.log(variants[1].code);
  console.log('v-for 原生与 class 局部 computed 两种产物通过生产打包。');
} else {
  const browser = await launchBrowser();
  const result = {
    node: process.version,
    browser: browser.version(),
    count,
    updates,
    rounds,
    samples: {},
    calls: {},
  };
  async function run(variant, instrument) {
    const page = await browser.newPage();
    try {
      await page.setContent('<main></main>');
      await page.addScriptTag({ content: variant.source });
      return await page.evaluate(
        async ({ count, updates, instrument }) => {
          const target = document.querySelector('main');
          const begin = performance.now();
          const control = await window.mupBundle.start(target, count, instrument);
          let layout = target.offsetHeight;
          const mountMs = performance.now() - begin,
            mountCalls = control.calls();
          const noiseBegin = performance.now();
          for (let i = 0; i < updates; i++) {
            await control.noise();
            layout += target.offsetHeight;
          }
          const noiseMs = performance.now() - noiseBegin,
            noiseCalls = control.calls() - mountCalls;
          const updateBegin = performance.now();
          for (let i = 0; i < updates; i++) {
            await control.step();
            layout += target.offsetHeight;
          }
          const updateMs = performance.now() - updateBegin,
            updateCalls = control.calls() - mountCalls - noiseCalls;
          const nodes = () => [...target.querySelectorAll('[data-row]')];
          if (
            nodes().some(
              (node, index) =>
                getComputedStyle(node).width !== `${20 + index}px` ||
                getComputedStyle(node).paddingTop !== '4px',
            )
          )
            throw new Error('Wrong CSS after reactive updates');
          await control.changeLabel();
          if (nodes()[0].textContent !== 'changed') throw new Error('Cached class froze row text');
          const beforeReverse = control.calls();
          await control.reverse();
          if (
            nodes()[0].textContent !== `row-${count - 1}` ||
            nodes().some((node, index) => getComputedStyle(node).width !== `${20 + index}px`)
          )
            throw new Error('Wrong scope after reorder');
          const reorderCalls = control.calls() - beforeReverse;
          await control.replace();
          if (getComputedStyle(nodes()[0]).paddingTop !== '16px')
            throw new Error('Same-key object replacement captured stale item');
          const stats = control.stats();
          await control.clear();
          if (nodes().length !== 0) throw new Error('Rows not removed');
          control.dispose();
          return {
            mountMs,
            noiseMs,
            updateMs,
            mountCalls,
            noiseCalls,
            updateCalls,
            reorderCalls,
            stats,
            layout,
          };
        },
        { count, updates, instrument },
      );
    } finally {
      await page.close();
    }
  }
  try {
    for (let round = 0; round < rounds; round++) {
      for (const variant of round % 2 ? [...variants].reverse() : variants)
        (result.samples[variant.name] ??= []).push(await run(variant, false));
    }
    for (const variant of variants) {
      const sample = await run(variant, true);
      assert.equal(sample.mountCalls, count);
      assert.equal(sample.noiseCalls, variant.cached ? 0 : count * updates);
      assert.equal(sample.updateCalls, count * updates);
      assert.equal(sample.reorderCalls, count);
      result.calls[variant.name] = {
        mount: sample.mountCalls,
        noise: sample.noiseCalls,
        update: sample.updateCalls,
        reorder: sample.reorderCalls,
      };
    }
  } finally {
    await browser.close();
  }
  const directory = new URL('../../test-results/vfor-style/', import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('results.json', directory), JSON.stringify(result, null, 2) + '\n');
  for (const variant of variants)
    await writeFile(new URL(`${variant.name}.txt`, directory), variant.code);
  for (const [name, samples] of Object.entries(result.samples)) {
    const median = (key) => samples.map((sample) => sample[key]).sort((a, b) => a - b)[2];
    console.log(
      JSON.stringify({
        name,
        mountMs: median('mountMs'),
        noiseMs: median('noiseMs'),
        updateMs: median('updateMs'),
        calls: result.calls[name],
      }),
    );
  }
}
