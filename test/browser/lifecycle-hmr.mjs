import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import vueBindings from '../../vue/dist/vite.js';
import svelteBindings from '../../svelte/dist/vite.js';
import { launchBrowser } from '../../.research/string-css-probe/browser.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const results = resolve(root, 'test-results');
await mkdir(results, { recursive: true });
const browser = await launchBrowser();
const report = [];
try {
  for (const framework of ['vue', 'svelte']) {
    const directory = await mkdtemp(join(results, 'lifecycle-'));
    let server;
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      const ext = framework === 'vue' ? 'vue' : 'svelte';
      const fixture = new URL('./fixtures/lifecycle/', import.meta.url);
      const original = await readFile(new URL(`Child.${ext}`, fixture), 'utf8');
      const child = join(directory, `Child.${ext}`);
      await writeFile(child, original);
      await writeFile(
        join(directory, `Root.${ext}`),
        await readFile(new URL(`Root.${ext}`, fixture), 'utf8'),
      );
      const state = framework === 'vue' ? 'state.js' : 'state.svelte.js';
      await writeFile(
        join(directory, state),
        framework === 'vue'
          ? "import {ref} from 'vue'; export const width=ref(24);"
          : 'export const width=$state({value:24});',
      );
      await writeFile(
        join(directory, 'index.html'),
        '<main id="app"></main><script type="module" src="/main.js"></script>',
      );
      await writeFile(
        join(directory, 'main.js'),
        `${framework === 'vue' ? "import {createApp} from 'vue';" : "import {mount} from 'svelte';"}
import Root from './Root.${ext}';
import {cssStats} from '@zerodep-css/${framework}';
import {width} from './${state}';
window.control={stats:cssStats,bump(){width.value++}};
${framework === 'vue' ? "createApp(Root).mount('#app');" : "mount(Root,{target:document.querySelector('#app')});"}`,
      );
      server = await createServer({
        configFile: false,
        envDir: false,
        root: directory,
        plugins:
          framework === 'vue'
            ? [vueBindings(), vue()]
            : [svelteBindings(), svelte({ configFile: false })],
        resolve: {
          dedupe: ['vue', 'svelte'],
          alias: [
            {
              find: new RegExp(`^@zerodep-css/${framework}$`),
              replacement: resolve(root, framework, 'dist/index.js'),
            },
            {
              find: new RegExp(`^@zerodep-css/${framework}/bindings$`),
              replacement: resolve(root, framework, 'dist/bindings.js'),
            },
          ],
        },
        optimizeDeps: { exclude: [`@zerodep-css/${framework}`, '@zerodep-css/core'] },
        server: { host: '127.0.0.1', port: 0, fs: { allow: [root] } },
        logLevel: 'warn',
      });
      await server.listen();
      const address = server.httpServer.address();
      await page.goto(`http://127.0.0.1:${address.port}`);
      await page.locator('[data-probe]').waitFor();
      const stats = () => page.evaluate(() => window.control.stats());
      const width = () =>
        page.locator('[data-probe]').evaluate((node) => getComputedStyle(node).width);
      const initial = await stats();
      assert.equal(initial.bindings, 21);
      assert.equal(await width(), '24px');
      await page.evaluate(() => {
        window.hmrIdentity = 'preserved';
      });
      const changed = original
        .replace('>initial<', '>edited<')
        .replace('s.width.px(width.value)', 's.width.px(width.value + 1)')
        .replace('s.color.blue', 's.color.red');
      await writeFile(child, changed);
      await page.waitForFunction(
        () =>
          document.querySelector('[data-probe]')?.textContent === 'edited' &&
          getComputedStyle(document.querySelector('[data-probe]')).width === '25px',
      );
      assert.equal(await page.evaluate(() => window.hmrIdentity), 'preserved');
      await page.locator('[data-probe]').hover();
      assert.equal(
        await page.locator('[data-probe]').evaluate((node) => getComputedStyle(node).color),
        'rgb(255, 0, 0)',
      );
      assert.equal((await stats()).bindings, 21);
      assert.equal(
        await page.locator('[data-sibling]').evaluate((node) => getComputedStyle(node).height),
        '32px',
      );
      await writeFile(
        child,
        changed
          .replace('s.width.px(width.value + 1)', 's.width.px(30)')
          .replace('>edited<', '>removed<'),
      );
      await page.waitForFunction(
        () =>
          document.querySelector('[data-probe]')?.textContent === 'removed' &&
          getComputedStyle(document.querySelector('[data-probe]')).width === '30px',
      );
      assert.equal((await stats()).bindings, 20);
      await writeFile(child, original);
      await page.waitForFunction(
        () =>
          document.querySelector('[data-probe]')?.textContent === 'initial' &&
          getComputedStyle(document.querySelector('[data-probe]')).width === '24px',
      );
      // 新 key 的记录按文档保留到组件卸载，测量它而不误删仍可复用的类。
      for (let i = 0; i < 10; i++) await page.locator('[data-replace]').click();
      const replaced = await stats();
      assert.equal(replaced.bindings, 221);
      await page.locator('[data-toggle]').click();
      await page.waitForFunction(() => !document.querySelector('[data-probe]'));
      assert.equal((await stats()).bindings, 0);
      await page.evaluate(() => window.control.bump());
      await page.waitForTimeout(30);
      assert.equal((await stats()).bindings, 0);
      for (let i = 0; i < 30; i++) {
        await page.locator('[data-toggle]').click();
        await page.locator('[data-probe]').waitFor();
        assert.equal(await width(), '25px');
        await page.locator('[data-toggle]').click();
        await page.waitForFunction(() => !document.querySelector('[data-probe]'));
        assert.equal((await stats()).bindings, 0);
      }
      assert.deepEqual(errors, []);
      report.push({
        framework,
        initial,
        replaced,
        afterUnmount: await stats(),
        hmr: 'passed',
        mountCycles: 30,
      });
    } finally {
      await page.close();
      await server?.close();
      if (!resolve(directory).startsWith(results + sep)) throw new Error('Unsafe fixture cleanup');
      await rm(directory, { recursive: true, force: true });
    }
  }
} finally {
  await browser.close();
}
await writeFile(join(results, 'lifecycle-hmr.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report));
