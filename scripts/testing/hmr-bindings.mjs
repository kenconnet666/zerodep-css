import assert from 'node:assert/strict';
import { mkdir, writeFile, mkdtemp, realpath, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { createServer } from 'vite';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { chromium } from '@playwright/test';
import { bxPlugin as vueBx } from '../../vue/dist/compiler/index.js';
import { bxPlugin as svelteBx } from '../../svelte/dist/compiler/index.js';
import { root } from '../lib/environment.mjs';
import { withBrowserPage } from './browser-evidence.mjs';

const output = resolve(root, 'test-results/bindings-hmr');
await mkdir(output, { recursive: true });
const channel = process.env.ZERODEP_BROWSER_CHANNEL ?? 'chrome';
const browser = await chromium.launch({
  channel: channel === 'chromium' ? undefined : channel,
  headless: true,
});
const report = [];
// Vite 默认忽略 test-results；开发项目必须放到实际受监视的独占临时目录。
const temporary = await mkdtemp(resolve(root, '.research/bx/hmr-'));
function component(framework, stage) {
  const style =
    stage === 2
      ? 's.width.px(7);'
      : `s.width.${stage === 1 ? 'rem' : 'px'}(bx(width${framework === 'vue' ? '.value' : ''}));`;
  if (framework === 'vue')
    return `<script setup>
import {ref,computed} from 'vue'; import {bx,useStyleRuntime} from '@zerodep-css/vue';
const {css}=useStyleRuntime(); const width=ref(2);
const cls=computed(()=>css(s=>{${style}}));
</script><template><button @click="width++">update</button><div data-target :class="cls" style="height: 5px"></div></template>`;
  return `<script>
import {untrack} from 'svelte'; import {bx,useStyleRuntime} from '@zerodep-css/svelte';
let {context}=$props();const {css}=useStyleRuntime(untrack(()=>context));let width=$state(2);
const cls=$derived(css(s=>{${style}}));
</script><button onclick={()=>width++}>update</button><div data-target class={cls} style="height: 5px"></div>`;
}
try {
  for (const framework of ['vue', 'svelte']) {
    const folder = resolve(temporary, framework);
    await mkdir(folder, { recursive: true });
    const file = resolve(folder, 'App.' + framework);
    await writeFile(file, component(framework, 0));
    await writeFile(
      resolve(folder, 'index.html'),
      '<!doctype html><html><body><main id="app"></main><script type="module" src="/main.js"></script></body></html>',
    );
    await writeFile(
      resolve(folder, 'main.js'),
      framework === 'vue'
        ? `import {createApp} from 'vue'; import {createStyleContext,installStyleContext} from '@zerodep-css/vue'; import App from './App.vue'; const context=createStyleContext();const app=createApp(App);installStyleContext(app,context);app.mount('#app');window.stopFixture=()=>{app.unmount();context.dispose();};`
        : `import {mount,unmount} from 'svelte'; import {createStyleContext} from '@zerodep-css/core'; import App from './App.svelte';const context=createStyleContext();const app=mount(App,{target:document.querySelector('#app'),props:{context}});window.stopFixture=async()=>{await unmount(app);context.dispose();};`,
    );
    const server = await createServer({
      configFile: false,
      root: folder,
      plugins:
        framework === 'vue'
          ? [vueBx({ root: folder }), vue()]
          : [svelteBx({ root: folder }), svelte({ configFile: false })],
      resolve: {
        alias: [
          {
            find: '@zerodep-css/core/compiler-runtime',
            replacement: resolve(root, 'core/dist/compiler-runtime.js'),
          },
          {
            find: '@zerodep-css/vue/compiler-runtime',
            replacement: resolve(root, 'vue/dist/compiler-runtime.js'),
          },
          { find: '@zerodep-css/core/binding', replacement: resolve(root, 'core/dist/binding.js') },
          ...['core', 'vue', 'svelte'].map((name) => ({
            find: '@zerodep-css/' + name,
            replacement: resolve(root, name, 'dist/index.js'),
          })),
        ],
      },
      server: { host: '127.0.0.1', port: 0, fs: { allow: [root] } },
    });
    try {
      await server.listen();
      await withBrowserPage(browser, output, framework, async (page) => {
        const errors = [];
        page.on('pageerror', (e) => errors.push(e.message));
        await page.goto(`http://127.0.0.1:${server.httpServer.address().port}`);
        await page.waitForFunction(
          () =>
            document.querySelector('[data-target]') &&
            getComputedStyle(document.querySelector('[data-target]')).width === '2px',
        );
        const first = await page
          .locator('[data-target]')
          .evaluate((e) => [...e.style].filter((p) => p.startsWith('--zbx-')));
        assert.equal(first.length, 1);
        await writeFile(file, component(framework, 1));
        await page.waitForFunction(
          () => getComputedStyle(document.querySelector('[data-target]')).width === '32px',
        );
        const second = await page
          .locator('[data-target]')
          .evaluate((e) => [...e.style].filter((p) => p.startsWith('--zbx-')));
        assert.equal(second.length, 1);
        assert.notEqual(first[0], second[0]);
        await page.locator('button').click();
        await page.waitForFunction(
          () => getComputedStyle(document.querySelector('[data-target]')).width === '48px',
        );
        await writeFile(file, component(framework, 2));
        await page.waitForFunction(
          () => getComputedStyle(document.querySelector('[data-target]')).width === '7px',
        );
        assert.deepEqual(
          await page
            .locator('[data-target]')
            .evaluate((e) => [...e.style].filter((p) => p.startsWith('--zbx-'))),
          [],
        );
        assert.equal(
          await page.locator('[data-target]').evaluate((e) => getComputedStyle(e).height),
          '5px',
        );
        assert.deepEqual(errors, []);
        await page.evaluate(() => window.stopFixture());
        report.push({ framework, unitChange: true, updateAfterHmr: true, removedBinding: true });
      });
    } finally {
      await server.close();
    }
  }
  await writeFile(
    resolve(output, 'results.json'),
    JSON.stringify({ passed: true, report }, null, 2),
  );
  console.log('VERIFIED: bx HMR unit change, reactive updates and binding removal');
} finally {
  await browser.close();
  const actual = await realpath(temporary);
  const parent = await realpath(resolve(root, '.research/bx'));
  assert.equal(dirname(actual), parent);
  assert(actual.startsWith(resolve(parent, 'hmr-')));
  await rm(actual, { recursive: true });
}
