import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createServer } from 'node:http';
import { build } from 'esbuild';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile } from 'svelte/compiler';
import { chromium } from '@playwright/test';

// 比较候选转换结果，不把手写降级后的组件当作宏编译器已实现。
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const out = resolve(root, 'test-results/bx-probe');
await mkdir(out, { recursive: true });
const factory = `(s) => { record(); s.color.raw(colorVALUE); s.width.raw('var(--bx-width)'); }`;
for (const mode of ['inline', 'computed']) {
  await writeFile(
    resolve(out, `${mode}.vue`),
    `<script setup>
import { ref, computed } from 'vue';
import { useStyleRuntime } from '@zerodep-css/vue';
const { record, initialWidth } = defineProps(['context', 'record', 'initialWidth']);
const { css } = useStyleRuntime();
const width = ref(initialWidth), color = ref('red'), unrelated = ref(0);
const cls = computed(() => css(${factory.replace('colorVALUE', 'color.value')}));
</script>
<template><button data-width @click="width++">width</button><button data-color @click="color='blue'">color</button><button data-other @click="unrelated++">{{ unrelated }}</button>
<div data-target :class="${mode === 'computed' ? 'cls' : 'css(' + factory.replace('colorVALUE', 'color') + ')'}" :style="{'--bx-width': width + 'px'}"></div></template>`,
  );
}
await writeFile(
  resolve(out, 'native.svelte'),
  `<script>
import { useStyleRuntime } from '@zerodep-css/svelte';
import { untrack } from 'svelte';
let { context, record, initialWidth } = $props();
const { css } = useStyleRuntime(untrack(() => context));
let width = $state(untrack(() => initialWidth)), color = $state('red'), unrelated = $state(0);
</script>
<button data-width onclick={() => width++}>width</button><button data-color onclick={() => color='blue'}>color</button><button data-other onclick={() => unrelated++}>{unrelated}</button>
<div data-target class={css(${factory.replace('colorVALUE', 'color')})} style:--bx-width={width + 'px'}></div>`,
);
const imports = `import Inline from './inline.vue'; import Computed from './computed.vue'; import Native from './native.svelte';
import { createStyleContext } from '@zerodep-css/core'; import { installStyleContext } from '@zerodep-css/vue';
const components = { inline: Inline, computed: Computed, native: Native };`;
await writeFile(
  resolve(out, 'server-entry.mjs'),
  `${imports}
import { createSSRApp } from 'vue'; import { renderToString } from 'vue/server-renderer'; import { render } from 'svelte/server';
export async function page(mode, width) { const context=createStyleContext({target:null,namespace:mode}); let count=0;
try { const props={context,initialWidth:width,record(){count++}}; let body;
if(mode==='native') body=(await render(components[mode],{props})).body; else { const app=createSSRApp(components[mode],props); installStyleContext(app,context); body=await renderToString(app); }
return { html:'<!doctype html><html><head>'+context.renderStyles()+'</head><body><main id="app">'+body+'</main><script id="styles" type="application/json">'+context.renderManifest()+'</script></body></html>', count };
} finally {context.dispose();} }`,
);
await writeFile(
  resolve(out, 'client-entry.mjs'),
  `${imports}
import { createSSRApp, nextTick } from 'vue'; import { hydrate, tick, unmount } from 'svelte';
export async function start(mode) { const context=createStyleContext({namespace:mode,hydrate:JSON.parse(document.querySelector('#styles').textContent)}); let count=0;
const props={context,initialWidth:20,record(){count++}}; const target=document.querySelector('#app'); let stop;
if(mode==='native'){const app=hydrate(components[mode],{target,props});stop=()=>unmount(app);await tick();} else {const app=createSSRApp(components[mode],props); installStyleContext(app,context);app.mount(target);stop=()=>app.unmount();await nextTick();}
context.completeHydration();return {read:()=>({count,stats:context.runtime.stats()}),stop:async()=>{await stop();context.dispose()}}; }`,
);
for (const server of [true, false]) {
  await build({
    entryPoints: [resolve(out, `${server ? 'server' : 'client'}-entry.mjs`)],
    outfile: resolve(out, `${server ? 'server' : 'client'}.mjs`),
    bundle: true,
    format: 'esm',
    platform: server ? 'node' : 'browser',
    target: 'es2023',
    external: server ? ['vue', 'vue/*', 'svelte', 'svelte/*', 'css-tree'] : [],
    alias: Object.fromEntries(
      ['core', 'vue', 'svelte'].map((p) => [
        '@zerodep-css/' + p,
        resolve(root, p, 'dist/index.js'),
      ]),
    ),
    define: {
      'process.env.NODE_ENV': '"development"',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
    },
    plugins: [
      {
        name: 'official',
        setup(b) {
          b.onLoad({ filter: /\.vue$/ }, async ({ path }) => {
            const { descriptor, errors } = parse(await readFile(path, 'utf8'), { filename: path });
            if (errors.length) throw errors[0];
            return {
              contents: compileScript(descriptor, {
                id: path,
                inlineTemplate: true,
                templateOptions: { ssr: server },
              }).content,
              loader: 'js',
              resolveDir: dirname(path),
            };
          });
          b.onLoad({ filter: /\.svelte$/ }, async ({ path }) => ({
            contents: compile(await readFile(path, 'utf8'), {
              filename: path,
              generate: server ? 'server' : 'client',
              dev: !server,
            }).js.code,
            loader: 'js',
            resolveDir: dirname(path),
          }));
        },
      },
    ],
  });
}
const { page: renderPage } = await import(pathToFileURL(resolve(out, 'server.mjs')).href);
const html = {};
for (const mode of ['inline', 'computed', 'native']) {
  const [a, b] = await Promise.all([renderPage(mode, 20), renderPage(mode, 35)]);
  assert(/--bx-width:\s*20px/.test(a.html));
  assert(/--bx-width:\s*35px/.test(b.html));
  html[mode] = a.html;
}
const client = await readFile(resolve(out, 'client.mjs'));
const http = createServer((req, res) => {
  res.setHeader('Content-Type', req.url === '/client.mjs' ? 'text/javascript' : 'text/html');
  res.end(req.url === '/client.mjs' ? client : html[req.url.slice(1)]);
});
let browser;
const report = [];
try {
  await new Promise((ok) => http.listen(0, '127.0.0.1', ok));
  browser = await chromium.launch({
    channel:
      process.env.ZERODEP_BROWSER_CHANNEL === 'chromium'
        ? undefined
        : (process.env.ZERODEP_BROWSER_CHANNEL ?? 'chrome'),
    headless: true,
  });
  for (const mode of ['inline', 'computed', 'native']) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => {
      if (['warning', 'error'].includes(m.type())) errors.push(m.text());
    });
    await page.goto(`http://127.0.0.1:${http.address().port}/${mode}`);
    assert.equal(
      await page.locator('[data-target]').evaluate((e) => getComputedStyle(e).width),
      '20px',
    );
    await page.evaluate(async (mode) => {
      window.before = [...document.querySelectorAll('style')];
      window.app = await (await import('/client.mjs')).start(mode);
    }, mode);
    assert(
      await page.evaluate(
        () =>
          window.before.every((e) => e.isConnected) &&
          window.before.length === document.querySelectorAll('style').length,
      ),
    );
    const read = () =>
      page.evaluate(() => ({
        ...window.app.read(),
        className: document.querySelector('[data-target]').className,
        width: getComputedStyle(document.querySelector('[data-target]')).width,
      }));
    const initial = await read();
    await page.locator('[data-width]').click();
    const bound = await read();
    assert.equal(bound.width, '21px');
    assert.equal(initial.className, bound.className);
    assert.deepEqual(initial.stats, bound.stats);
    await page.locator('[data-other]').click();
    const unrelated = await read();
    await page.locator('[data-color]').click();
    const ordinary = await read();
    assert.notEqual(ordinary.className, initial.className);
    if (mode !== 'inline') {
      assert.equal(initial.count, bound.count);
      assert.equal(initial.count, unrelated.count);
    } else assert(bound.count > initial.count);
    assert.equal(errors.length, 0, errors.join('\n'));
    report.push({ mode, initial, bound, unrelated, ordinary });
    await page.evaluate(() => window.app.stop());
    await page.close();
  }
  await writeFile(resolve(out, 'results.json'), JSON.stringify({ passed: true, report }, null, 2));
  console.log(JSON.stringify(report));
} finally {
  await browser?.close();
  await new Promise((ok) => http.close(ok));
}
