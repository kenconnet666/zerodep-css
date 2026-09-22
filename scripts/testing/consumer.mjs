import assert from 'node:assert/strict';
import {
  mkdtemp,
  mkdir,
  readFile,
  writeFile,
  readdir,
  copyFile,
  realpath,
  rm,
  lstat,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createServer } from 'node:http';
import { chromium } from '@playwright/test';
import { root, pnpm, run } from './environment.mjs';
import { withBrowserPage } from './browser-evidence.mjs';

const output = resolve(root, 'test-results/consumer');
await mkdir(output, { recursive: true });
// 必须位于仓库外，才不会被 workspace、祖先 node_modules 或源码 alias 悄悄兜底。
const workspace = await mkdtemp(join(tmpdir(), 'zerodep-consumer-'));
const report = { workspace, results: [], status: 'running' };
const environment = { ...process.env, NODE_PATH: '', CI: 'true' };
let browser;
async function save(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, value);
}
async function version(name) {
  return JSON.parse(await readFile(resolve(root, 'node_modules', name, 'package.json'), 'utf8'))
    .version;
}
try {
  const packs = join(workspace, 'packs');
  await mkdir(packs);
  for (const name of ['core', 'vue', 'svelte'])
    pnpm(['pack', '--pack-destination', packs], { cwd: resolve(root, name) });
  const archives = await readdir(packs);
  const tarball = (name) =>
    join(
      packs,
      archives.find((file) => file.startsWith(`zerodep-css-${name}-`)),
    );
  const channel = process.env.ZERODEP_BROWSER_CHANNEL ?? 'chrome';
  browser = await chromium.launch({
    channel: channel === 'chromium' ? undefined : channel,
    headless: true,
  });
  for (const framework of ['vue', 'svelte']) {
    const folder = join(workspace, framework);
    await mkdir(folder);
    const plugin = framework === 'vue' ? '@vitejs/plugin-vue' : '@sveltejs/vite-plugin-svelte';
    const manifest = {
      name: `isolated-${framework}-consumer`,
      private: true,
      type: 'module',
      packageManager: 'pnpm@10.34.5',
      dependencies: {
        '@zerodep-css/core': `file:${tarball('core')}`,
        [`@zerodep-css/${framework}`]: `file:${tarball(framework)}`,
        [framework]: await version(framework),
      },
      devDependencies: {
        vite: await version('vite'),
        [plugin]: await version(plugin),
        typescript: await version('typescript'),
        '@types/node': await version('@types/node'),
      },
      pnpm: {
        overrides: { '@zerodep-css/core': `file:${tarball('core')}` },
        onlyBuiltDependencies: ['esbuild'],
      },
    };
    await save(join(folder, 'package.json'), JSON.stringify(manifest, null, 2));
    pnpm(['install', '--no-frozen-lockfile'], { cwd: folder, env: environment });
    for (const name of ['core', framework]) {
      const installed = await realpath(join(folder, 'node_modules/@zerodep-css', name));
      assert(
        !installed.toLowerCase().startsWith(root.toLowerCase()),
        'Workspace dependency leaked into consumer.',
      );
      const files = await readdir(installed);
      assert(
        !files.includes('test') && !files.includes('src'),
        'Non-product files leaked into tarball.',
      );
    }
    // 使用独立消费者的 TypeScript 与 NodeNext 条件，而不是仓库的 zerodep-source 条件。
    await save(
      join(folder, 'types.ts'),
      `import { createStyleContext, type StyleFactory, type StylesheetFactory } from '@zerodep-css/core';
import { useStyleRuntime } from '@zerodep-css/${framework}';
import { bx } from '@zerodep-css/${framework}';
import { bxPlugin, transformBx } from '@zerodep-css/${framework}/compiler';
import type { Plugin } from 'vite';
const compilerPlugin: Plugin = bxPlugin(); void compilerPlugin;
// @ts-expect-error 适配器不再暴露绕过上下文的默认 css
import { css as defaultCss } from '@zerodep-css/${framework}';
// @ts-expect-error 内部 IR 不属于根入口
import type { StyleProgram } from '@zerodep-css/core';
const context = createStyleContext({target:null});
const style: StyleFactory = s => { s.display.token('flex'); s.width.raw('future-value');
// @ts-expect-error token 不能退化为任意字符串
s.display.token('unknown-token');
// @ts-expect-error 属性不可直接调用
s.width('50%'); s.width.px(bx(12)); };
const global: StylesheetFactory = g => g.containerQuery('(width > 10px)', g => g.rule('body', style));
const result: string = useStyleRuntime(context).css(style);
context.mountGlobal('consumer',global); context.dispose(); void result; void defaultCss; void bxPlugin; void transformBx;
`,
    );
    pnpm(
      [
        'exec',
        'tsc',
        'types.ts',
        '--noEmit',
        '--strict',
        '--target',
        'es2023',
        '--module',
        'NodeNext',
        '--moduleResolution',
        'NodeNext',
      ],
      { cwd: folder, env: environment },
    );
    for (const component of ['ReactiveApp', 'ReactiveStyles', 'BoundApp', 'BoundStyles'])
      await copyFile(
        resolve(root, `${framework}/test/fixtures/${component}.${framework}`),
        join(folder, `${component}.${framework}`),
      );
    await save(
      join(folder, `ConsumerApp.${framework}`),
      framework === 'vue'
        ? `<script setup>import ReactiveApp from './ReactiveApp.vue'; import BoundApp from './BoundApp.vue'; import {provideStyleContext} from '@zerodep-css/vue'; const props=defineProps(['context','initialColor','record']); provideStyleContext(props.context);</script><template><ReactiveApp v-bind="props"/><BoundApp :context="props.context" :record="props.record" :initial-width="20"/></template>`
        : `<script>import ReactiveApp from './ReactiveApp.svelte'; import BoundApp from './BoundApp.svelte'; let props=$props();</script><ReactiveApp {...props}/><BoundApp context={props.context} record={props.record} initialWidth={20}/>`,
    );
    await save(
      join(folder, 'vite.config.js'),
      framework === 'vue'
        ? "import {defineConfig} from 'vite'; import vue from '@vitejs/plugin-vue'; import {bxPlugin} from '@zerodep-css/vue/compiler'; export default defineConfig({plugins:[bxPlugin(),vue()],build:{manifest:true,rollupOptions:{input:'client.js'}}});"
        : "import {defineConfig} from 'vite'; import {svelte} from '@sveltejs/vite-plugin-svelte'; import {bxPlugin} from '@zerodep-css/svelte/compiler'; export default defineConfig({plugins:[bxPlugin(),svelte()],build:{manifest:true,rollupOptions:{input:'client.js'}}});",
    );
    const imports =
      framework === 'vue'
        ? "import {createSSRApp, nextTick} from 'vue'; import {renderToString} from 'vue/server-renderer';"
        : "import {render} from 'svelte/server';";
    await save(
      join(folder, 'server.js'),
      `${imports}
import {createStyleContext} from '@zerodep-css/core'; import App from './ConsumerApp.${framework}';
export async function renderPage(){ const context=createStyleContext({target:null,namespace:'consumer'}); try {
const props={context,initialColor:'red',record(){}};
const html=${framework === 'vue' ? 'await renderToString(createSSRApp(App,props))' : '(await render(App,{props})).body'};
return {html,styles:context.renderStyles(),manifest:context.renderManifest()};
} finally {context.dispose();} }
`,
    );
    await save(
      join(folder, 'client.js'),
      `${framework === 'vue' ? "import {createSSRApp,nextTick} from 'vue';" : "import {hydrate,tick,unmount} from 'svelte';"}
import {createStyleContext} from '@zerodep-css/core'; import App from './ConsumerApp.${framework}';
const context=createStyleContext({namespace:'consumer',hydrate:JSON.parse(document.querySelector('#manifest').textContent)});
const counts={}; const props={context,initialColor:'red',record(kind){counts[kind]=(counts[kind]??0)+1;}};
const app=${framework === 'vue' ? 'createSSRApp(App,props)' : "hydrate(App,{target:document.querySelector('#app'),props})"};
${framework === 'vue' ? "app.mount('#app'); await nextTick();" : 'await tick();'}
context.completeHydration(); window.consumer={ready:true,counts,stats:()=>context.runtime.stats(), async dispose(){ ${framework === 'vue' ? 'app.unmount();' : 'await unmount(app);'} const globals=context.runtime.stats().globals; context.dispose(); return globals; }};
`,
    );
    pnpm(['exec', 'vite', 'build', '--outDir', 'dist/client'], { cwd: folder, env: environment });
    pnpm(['exec', 'vite', 'build', '--ssr', 'server.js', '--outDir', 'dist/server'], {
      cwd: folder,
      env: environment,
    });
    const { renderPage } = await import(pathToFileURL(join(folder, 'dist/server/server.js')).href);
    const rendered = await renderPage();
    assert(rendered.styles.includes('color:red'));
    const assets = JSON.parse(
      await readFile(join(folder, 'dist/client/.vite/manifest.json'), 'utf8'),
    );
    const entry = Object.values(assets).find((asset) => asset.isEntry);
    assert(entry);
    const html = `<!doctype html><head>${rendered.styles}</head><body><main id="app">${rendered.html}</main><script type="application/json" id="manifest">${rendered.manifest}</script><script>window.initialStyles=[...document.querySelectorAll('style')];</script><script type="module" src="/${entry.file}"></script></body>`;
    const http = createServer(async (req, res) => {
      if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(html);
        return;
      }
      // 只服务 manifest 中列出的构建产物，不能将 URL 直接拼成任意文件路径。
      const asset = Object.values(assets).find((a) => '/' + a.file === req.url);
      if (!asset) {
        res.statusCode = 404;
        res.end();
        return;
      }
      try {
        res.setHeader('Content-Type', 'text/javascript');
        res.end(await readFile(join(folder, 'dist/client', asset.file)));
      } catch {
        res.statusCode = 500;
        res.end();
      }
    });
    try {
      await new Promise((ok, fail) => {
        http.once('error', fail);
        http.listen(0, '127.0.0.1', ok);
      });
      await withBrowserPage(browser, output, `${framework}-tarball`, async (page) => {
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        await page.goto(`http://127.0.0.1:${http.address().port}`);
        await page.waitForFunction(() => window.consumer?.ready);
        assert(
          await page.evaluate(
            () =>
              window.initialStyles.every((node) => node.isConnected) &&
              document.querySelectorAll('style').length === window.initialStyles.length,
          ),
        );
        assert.equal(
          await page.locator('[data-derived]').evaluate((el) => getComputedStyle(el).width),
          '20px',
        );
        await page.locator('[data-width]').click();
        await page.waitForFunction(
          () => getComputedStyle(document.querySelector('[data-derived]')).width === '21px',
        );
        const bindingBefore = await page.evaluate(() => ({
          counts: { ...window.consumer.counts },
          stats: window.consumer.stats(),
          className: document.querySelector('[data-instance="a"] [data-shared]').className,
        }));
        await page.locator('[data-instance="a"] [data-bound]').click();
        assert.equal(
          await page
            .locator('[data-instance="a"] [data-shared]')
            .evaluate((el) => getComputedStyle(el).width),
          '21px',
        );
        const bindingAfter = await page.evaluate(() => ({
          counts: { ...window.consumer.counts },
          stats: window.consumer.stats(),
          className: document.querySelector('[data-instance="a"] [data-shared]').className,
        }));
        assert.deepEqual(bindingAfter, bindingBefore);
        assert.equal(await page.evaluate(() => window.consumer.dispose()), 0);
        assert.equal(await page.locator('style').count(), 0);
        assert.deepEqual(errors, []);
      });
    } finally {
      await new Promise((ok) => http.close(ok));
    }
    // 保留每次消费安装的锁文件，方便排查临时消费者的实际依赖版本。
    await copyFile(join(folder, 'pnpm-lock.yaml'), join(output, `${framework}-lock.yaml`));
    report.results.push({ framework, types: true, clientBuild: true, ssr: true, hydration: true });
  }
  report.status = 'passed';
  console.log(JSON.stringify(report.results));
} catch (error) {
  report.status = 'failed';
  report.error = String(error.stack ?? error);
  throw error;
} finally {
  await browser?.close();
  await writeFile(join(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
  // 只移除本次创建的临时目录；失败时保留路径，便于在同一机器继续诊断。
  if (report.status === 'passed') {
    const actual = await realpath(workspace);
    const parent = await realpath(tmpdir());
    assert(dirname(actual) === parent && actual.startsWith(join(parent, 'zerodep-consumer-')));
    assert(!(await lstat(workspace)).isSymbolicLink());
    await rm(workspace, { recursive: true });
  }
}
