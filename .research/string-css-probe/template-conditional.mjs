import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile } from 'svelte/compiler';
import { bundle } from './mup-bundle.mjs';
import { launchBrowser } from './browser.mjs';
import { conditionalVariant } from './template-conditional-variant.mjs';

const count = 200,
  updates = 21,
  rounds = 5;
const variants = [];
const compiled = {};
for (const framework of ['vue', 'svelte']) {
  const filename = framework === 'vue' ? 'VueTemplateDerived.vue' : 'SvelteTemplateDerived.svelte';
  const source = await readFile(new URL(`fixtures/${filename}`, import.meta.url), 'utf8');
  for (const derived of [false, true]) {
    // 保存官方编译器的输出，区分手写派生与模板自身已有的缓存。
    const transformed = conditionalVariant(framework, derived)(source);
    const name = `${framework}-${derived ? 'derived' : 'template'}`;
    if (framework === 'vue') {
      const { descriptor, errors } = parse(transformed, { filename });
      assert.deepEqual(errors, []);
      compiled[name] = compileScript(descriptor, {
        id: 'conditional-research',
        inlineTemplate: true,
        isProd: true,
      }).content;
    } else {
      compiled[name] = compile(transformed, { filename, generate: 'client', dev: false }).js.code;
    }
    for (const shared of [false, true]) {
      const variant = { framework, derived, shared, name: `${name}${shared ? '-shared' : ''}` };
      for (const instrument of [false, true]) {
        variant[instrument ? 'counted' : 'timed'] = await bundle(
          framework,
          'browser',
          `${framework}-template-derived-driver.ts`,
          {
            dist: true,
            minify: true,
            transformSfc: conditionalVariant(framework, derived, shared, instrument),
          },
        );
      }
      variants.push(variant);
    }
  }
}
if (process.argv.includes('--compile-only')) {
  for (const [name, code] of Object.entries(compiled)) {
    console.log(`\n${name}\n${code}`);
  }
  console.log('16 个条件样式测量/计数变体已通过生产编译；未运行性能测试。');
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
      await page.setContent('<style>[data-row],[data-copy]{height:1px}</style><main></main>');
      await page.addScriptTag({ content: variant[instrument ? 'counted' : 'timed'] });
      return await page.evaluate(
        async ({ count, updates, shared }) => {
          const target = document.querySelector('main');
          const start = performance.now();
          const control = await window.mupBundle.start(target, count);
          let layout = target.offsetHeight;
          const mountMs = performance.now() - start;
          const mountCalls = globalThis.__cssCalls ?? 0;
          const noiseStart = performance.now();
          for (let i = 0; i < updates; i++) {
            await control.noise();
            layout += target.offsetHeight;
          }
          const noiseMs = performance.now() - noiseStart;
          const noiseCalls = (globalThis.__cssCalls ?? 0) - mountCalls;
          const updateStart = performance.now();
          for (let i = 0; i < updates; i++) {
            await control.step();
            layout += target.offsetHeight;
          }
          const updateMs = performance.now() - updateStart;
          const updateCalls = (globalThis.__cssCalls ?? 0) - mountCalls - noiseCalls;
          const nodes = [...target.querySelectorAll('[data-row],[data-copy]')];
          if (nodes.length !== count * (shared ? 2 : 1)) throw new Error('Missing styled elements');
          if (
            nodes.some((el) => {
              const style = getComputedStyle(el);
              return style.paddingTop !== '4px' || style.display !== 'flex';
            })
          )
            throw new Error('Conditional style did not update');
          const stats = control.stats();
          await control.dispose();
          return { mountMs, noiseMs, updateMs, mountCalls, noiseCalls, updateCalls, stats, layout };
        },
        { count, updates, shared: variant.shared },
      );
    } finally {
      await page.close();
    }
  }
  try {
    for (let round = 0; round < rounds; round++) {
      for (const variant of [...variants.slice(round), ...variants.slice(0, round)]) {
        const sample = await run(variant, false);
        assert.equal(sample.stats.classes, 2);
        assert.equal(sample.stats.bindings, 0);
        (result.samples[variant.name] ??= []).push(sample);
      }
    }
    for (const variant of variants) {
      const sample = await run(variant, true);
      const sites = variant.shared && !variant.derived ? 2 : 1;
      assert.equal(sample.mountCalls, count * sites);
      assert.equal(
        sample.noiseCalls,
        variant.framework === 'vue' && !variant.derived ? count * sites * updates : 0,
      );
      assert.equal(sample.updateCalls, count * sites * updates);
      result.calls[variant.name] = {
        mount: sample.mountCalls,
        noise: sample.noiseCalls,
        update: sample.updateCalls,
      };
    }
  } finally {
    await browser.close();
  }
  const directory = new URL('../../test-results/template-conditional/', import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('results.json', directory), JSON.stringify(result, null, 2) + '\n');
  for (const [name, code] of Object.entries(compiled))
    await writeFile(new URL(`${name}.txt`, directory), code);
  for (const [name, samples] of Object.entries(result.samples)) {
    const median = (key) =>
      samples.map((sample) => sample[key]).sort((a, b) => a - b)[Math.floor(rounds / 2)];
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
