import assert from 'node:assert/strict';
import { mkdir, writeFile, mkdtemp, realpath, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { createServer } from 'vite';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { launchBrowser, browserEngine } from './browser-launch.mjs';
import { cssPlugin as vueCss } from '../../vue/dist/compiler/index.js';
import { cssPlugin as svelteCss } from '../../svelte/dist/compiler/index.js';
import { root } from '../lib/environment.mjs';
import { withBrowserPage, prepareBrowserRun, browserRunId } from './browser-evidence.mjs';

const output = resolve(root, 'test-results/bindings-hmr');
await prepareBrowserRun(output);
let browser;
const report = [];
// Vite 默认忽略 test-results；开发项目必须放到实际受监视的独占临时目录。
const temporary = await mkdtemp(resolve(root, 'scripts/testing/.hmr-'));
function component(framework, stage) {
  const style =
    stage >= 2
      ? `s.width.px(${stage === 2 ? 7 : 9});`
      : `s.width.${stage === 1 ? 'rem' : 'px'}(width);`;
  if (framework === 'vue')
    return `<script setup>
import {ref} from 'vue'; import {createStyles} from '@zerodep-css/vue';
const {useCss}=createStyles();const css=useCss(); const width=ref(2);
</script><template><button @click="width++">update</button><div data-target :class="css(s=>{s.height.px(5);${style}})"></div><div data-fallback :class="css(s=>{${style}})" style="height: 5px"></div></template>`;
  return `<script>
import {untrack} from 'svelte'; import {createStyles} from '@zerodep-css/svelte';
let {host}=$props();untrack(()=>host).provide();const {useCss}=createStyles();const css=useCss();let width=$state(2);
</script><button onclick={()=>width++}>update</button><div data-target class={css(s=>{s.height.px(5);${style}})}></div><div data-fallback class={css(s=>{${style}})} style="height: 5px"></div>`;
}
try {
  browser = await launchBrowser();
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
        ? `import {createApp} from 'vue'; import {createStyles} from '@zerodep-css/vue'; import App from './App.vue'; const host=createStyles().createHost();const app=createApp(App).use(host);app.mount('#app');window.stopFixture=()=>{app.unmount();};`
        : `import {mount,unmount} from 'svelte'; import {createStyles} from '@zerodep-css/svelte'; import App from './App.svelte';const host=createStyles().createHost();const app=mount(App,{target:document.querySelector('#app'),props:{host}});window.stopFixture=async()=>{await unmount(app);host.dispose();};`,
    );
    const server = await createServer({
      configFile: false,
      root: folder,
      plugins:
        framework === 'vue'
          ? [vueCss({ root: folder }), vue()]
          : [svelteCss({ root: folder }), svelte({ configFile: false })],
      resolve: {
        alias: [
          {
            find: '@zerodep-css/core/style-scope',
            replacement: resolve(root, 'core/dist/style-scope.js'),
          },
          {
            find: '@zerodep-css/core/compiler-runtime',
            replacement: resolve(root, 'core/dist/compiler-runtime.js'),
          },
          ...['core', 'vue', 'svelte'].map((name) => ({
            find: '@zerodep-css/' + name,
            replacement: resolve(root, name, 'dist/index.js'),
          })),
        ],
      },
      server: {
        host: '127.0.0.1',
        port: 0,
        fs: { allow: [root] },
        // 连续自动编辑可能落入 Chokidar 的 50ms change 去重窗口。
        // 等文件稳定后再发事件，同时避免读取 writeFile 的中间内容；仍走真实 watcher/HMR。
        watch: { awaitWriteFinish: { stabilityThreshold: 100, pollInterval: 10 } },
      },
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
          .evaluate((e) => [...e.style].filter((p) => p.startsWith('--zcss-')));
        assert.equal(first.length, 1);
        const fallback = () =>
          page.locator('[data-fallback]').evaluate((e) => ({
            width: getComputedStyle(e).width,
            height: getComputedStyle(e).height,
            variables: [...e.style].filter((p) => p.startsWith('--zcss-')).length,
          }));
        assert.deepEqual(await fallback(), { width: '2px', height: '5px', variables: 0 });
        await writeFile(file, component(framework, 1));
        await page.waitForFunction(
          () => getComputedStyle(document.querySelector('[data-target]')).width === '32px',
        );
        const second = await page
          .locator('[data-target]')
          .evaluate((e) => [...e.style].filter((p) => p.startsWith('--zcss-')));
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
            .evaluate((e) => [...e.style].filter((p) => p.startsWith('--zcss-'))),
          [],
        );
        assert.equal(
          await page.locator('[data-target]').evaluate((e) => getComputedStyle(e).height),
          '5px',
        );
        assert.deepEqual(await fallback(), { width: '7px', height: '5px', variables: 0 });
        const staticClass = await page.locator('[data-target]').getAttribute('class');
        await writeFile(file, component(framework, 3));
        await page.waitForFunction(
          () => getComputedStyle(document.querySelector('[data-target]')).width === '9px',
        );
        assert.notEqual(await page.locator('[data-target]').getAttribute('class'), staticClass);
        assert.deepEqual(errors, []);
        await page.evaluate(() => window.stopFixture());
        report.push({
          framework,
          unitChange: true,
          updateAfterHmr: true,
          removedBinding: true,
          staticChange: true,
        });
      });
    } finally {
      await server.close();
    }
  }
  await writeFile(
    resolve(output, 'results.json'),
    JSON.stringify(
      { runId: browserRunId, engine: browserEngine, status: 'passed', passed: true, report },
      null,
      2,
    ),
  );
  console.log('VERIFIED: automatic CSS HMR unit change, reactive updates and binding removal');
} finally {
  try {
    await browser?.close();
  } finally {
    const actual = await realpath(temporary);
    const parent = await realpath(resolve(root, 'scripts/testing'));
    assert.equal(dirname(actual), parent);
    assert(actual.startsWith(resolve(parent, '.hmr-')));
    await rm(actual, { recursive: true });
  }
}
