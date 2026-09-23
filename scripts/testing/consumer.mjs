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
import { resolve, join, dirname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createServer } from 'node:http';
import { launchBrowser, browserEngine } from './browser-launch.mjs';
import { root, pnpm, run } from '../lib/environment.mjs';
import { withBrowserPage, prepareBrowserRun, browserRunId } from './browser-evidence.mjs';

const output = resolve(root, 'test-results/consumer');
await prepareBrowserRun(output);
// 必须位于仓库外，才不会被 workspace、祖先 node_modules 或源码 alias 悄悄兜底。
const workspace = await mkdtemp(join(tmpdir(), 'zerodep-consumer-'));
const report = {
  runId: browserRunId,
  engine: browserEngine,
  workspace,
  results: [],
  status: 'running',
  passed: false,
};
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
async function verifyPackage(folder) {
  const manifest = JSON.parse(await readFile(join(folder, 'package.json'), 'utf8'));
  assert(
    !JSON.stringify(manifest.exports).includes('zerodep-source'),
    'Workspace-only export leaked into package.',
  );
  function targets(value) {
    if (typeof value === 'string') return [value];
    return value && typeof value === 'object' ? Object.values(value).flatMap(targets) : [];
  }
  for (const target of targets(manifest.exports)) {
    const file = resolve(folder, target);
    assert(file.startsWith(folder + sep), 'Package export leaves the package.');
    assert((await lstat(file)).isFile(), 'Missing package export: ' + target);
  }
  for (const file of await readdir(join(folder, 'dist'), { recursive: true })) {
    if (!file.endsWith('.map')) continue;
    const map = JSON.parse(await readFile(join(folder, 'dist', file), 'utf8'));
    assert(!file.endsWith('.d.ts.map'), 'Declaration map points to unpublished source.');
    assert(
      map.sources.every((source) => !/^(?:[a-z]:|\/)/i.test(source)),
      'Machine-specific path in source map.',
    );
    assert.equal(
      map.sourcesContent?.length,
      map.sources.length,
      'Source map must embed its sources.',
    );
    assert(map.sourcesContent.every((source) => typeof source === 'string'));
  }
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
  browser = await launchBrowser();
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
    // 在真实安装图上审查；workspace 目录 svelte 不能被误当成同名官方包的版本。
    pnpm(['audit', '--prod', '--audit-level', 'moderate'], { cwd: folder, env: environment });
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
      await verifyPackage(installed);
    }
    await save(
      join(folder, 'themes-smoke.mjs'),
      `import assert from 'node:assert/strict';
import {Css} from '@zerodep-css/core';
import {ThemeCss,lightTheme,darkTheme} from '@zerodep-css/${framework}/themes';
assert(ThemeCss.prototype instanceof Css);
assert(Object.isFrozen(lightTheme.defaults));
assert.notDeepEqual(lightTheme.defaults,darkTheme.defaults);
assert.equal(lightTheme.tokens.color.primary.name,darkTheme.tokens.color.primary.name);
await assert.rejects(()=>import('@zerodep-css/core/theme-runtime'),{code:'ERR_PACKAGE_PATH_NOT_EXPORTED'});
`,
    );
    run(process.execPath, ['themes-smoke.mjs'], { cwd: folder, env: environment });
    // 使用独立消费者的 TypeScript 与 NodeNext 条件，而不是仓库的 zerodep-source 条件。
    await save(
      join(folder, 'types.ts'),
      `import { createStyles, Css, defineTheme, type StyleFactory, type StylesheetFactory, type StyleHostOptions, type StyleManifest, type StyleStats } from '@zerodep-css/${framework}';
import { ThemeCss, lightTheme, darkTheme } from '@zerodep-css/${framework}/themes';
import { cssPlugin, transformCss } from '@zerodep-css/${framework}/compiler';
import type { Plugin } from 'vite';
// @ts-expect-error 旧作者类型已统一为 Css
import type { StyleBuilder } from '@zerodep-css/core';
// @ts-expect-error bx 已移除
import { bx } from '@zerodep-css/${framework}';
// @ts-expect-error 旧组件入口不再公开
import { useStyleRuntime } from '@zerodep-css/${framework}';
// @ts-expect-error 不能绕过应用 host 取得隐式全局运行时
import { css, createStyleContext, provideStyleContext } from '@zerodep-css/${framework}';
// @ts-expect-error 内部 IR 不属于作者入口
import type { StyleProgram } from '@zerodep-css/core';
const compilerPlugin: Plugin = cssPlugin(); void compilerPlugin; void transformCss;
const palette = defineTheme('consumer-theme', {color:{brand:'red'}});
class AppCss extends Css { get color(){ return this.extendProperty(super.color,{brand:'#2463eb'}); } control(){this.padding.px(8);} }
const project = createStyles({cssType:AppCss,theme:palette});
const options: StyleHostOptions = {target:null};
const host = project.createHost(options);
const manifest: StyleManifest = host.snapshot();
const stats: StyleStats = host.stats();
const current = project.useTheme();
const brand: string = current().color.brand;
project.provideTheme({color:{brand:'blue'}});
project.provideTheme(palette, () => ({color:{brand:'green'}}));
// @ts-expect-error 主题读取保留只读字段结构
current().color.brand = 'green';
// @ts-expect-error 不能读取未声明字段
current().spacing;
// @ts-expect-error 主题叶类型保持精确
project.provideTheme({color:{brand:1}});
// @ts-expect-error 没有默认主题时必须传定义
createStyles().useTheme();
// @ts-expect-error 显式作者泛型不能代替实际构造器
createStyles<AppCss>();
// @ts-expect-error 显式主题泛型不能代替实际主题定义
createStyles<AppCss, typeof palette.defaults>({cssType:AppCss});
// @ts-expect-error 所有权配置必须交给 createHost
createStyles({nonce:'other'});
// @ts-expect-error 作者类型须继承 Css
createStyles({cssType:class {}});
const style: StyleFactory = s => { s.display.flex; s.width.raw('future-value');
// @ts-expect-error token 不能退化为任意字符串
s.display.token('unknown-token');
// @ts-expect-error 属性不可直接调用
s.width('50%'); s.width.px(12); };
const global: StylesheetFactory<AppCss> = g => g.containerQuery('(width > 10px)', g => g.rule('body', s=>s.control()));
project.useGlobalCss('consumer',global);
const result: string = project.useCss()('foreign',[false,null,style,s=>{s.control();s.color.brand;}]);
// @ts-expect-error 初始化类型不能丢失自定义方法约束
project.useCss()(s=>s.unknownMethod());
const preset: string = createStyles({cssType:ThemeCss,theme:darkTheme}).useCss()(s=>{s.color.primary;s.backgroundColor.surface;s.padding.md;});
darkTheme.extend({color:{primary:'#123456'}}); void lightTheme; void preset;
host.dispose(); void result; void manifest; void stats; void brand;
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
    for (const component of [
      'ReactiveApp',
      'ReactiveStyles',
      'BoundApp',
      'BoundStyles',
      'AutomaticStyles',
      'ThemeApp',
      'ThemeBranch',
      'ThemeLeaf',
      'PresetPanel',
      'PresetOverride',
      'DifferentialStyles',
    ])
      await copyFile(
        resolve(root, `${framework}/test/fixtures/${component}.${framework}`),
        join(folder, `${component}.${framework}`),
      );
    await copyFile(resolve(root, `${framework}/test/fixtures/theme.ts`), join(folder, 'theme.ts'));
    if (framework === 'svelte')
      for (const file of ['styles.ts', 'preset.ts'])
        await copyFile(resolve(root, `svelte/test/fixtures/${file}`), join(folder, file));
    await save(
      join(folder, `ConsumerApp.${framework}`),
      framework === 'vue'
        ? `<script setup>import ReactiveApp from './ReactiveApp.vue'; import BoundApp from './BoundApp.vue'; const props=defineProps(['initialColor','record']);</script><template><ReactiveApp v-bind="props"/><BoundApp :record="props.record" :initial-width="20"/></template>`
        : `<script>import {untrack} from 'svelte'; import ReactiveApp from './ReactiveApp.svelte'; import BoundApp from './BoundApp.svelte'; let {host,initialColor,record}=$props();untrack(()=>host).provide();</script><ReactiveApp {initialColor} {record}/><BoundApp {record} initialWidth={20}/>`,
    );
    await save(
      join(folder, 'vite.config.js'),
      framework === 'vue'
        ? "import {defineConfig} from 'vite'; import vue from '@vitejs/plugin-vue'; import {cssPlugin} from '@zerodep-css/vue/compiler'; export default defineConfig({plugins:[cssPlugin(),vue()],build:{manifest:true,rollupOptions:{input:'client.js'}}});"
        : "import {defineConfig} from 'vite'; import {svelte} from '@sveltejs/vite-plugin-svelte'; import {cssPlugin} from '@zerodep-css/svelte/compiler'; export default defineConfig({plugins:[cssPlugin(),svelte()],build:{manifest:true,rollupOptions:{input:'client.js'}}});",
    );
    const imports =
      framework === 'vue'
        ? "import {createSSRApp, nextTick} from 'vue'; import {renderToString} from 'vue/server-renderer';"
        : "import {render} from 'svelte/server';";
    await save(
      join(folder, 'server.js'),
      `${imports}
import {createStyles} from '@zerodep-css/${framework}'; import App from './ConsumerApp.${framework}';
export async function renderPage(){ const host=createStyles().createHost({target:null,namespace:'consumer'}); try {
const props={${framework === 'svelte' ? 'host,' : ''}initialColor:'red',record(){}};
const html=${framework === 'vue' ? 'await renderToString(createSSRApp(App,props).use(host))' : '(await render(App,{props})).body'};
return {html,styles:host.renderStyles(),manifest:host.renderManifest()};
} finally {host.dispose();} }
`,
    );
    await save(
      join(folder, 'client.js'),
      `${framework === 'vue' ? "import {createSSRApp,nextTick} from 'vue';" : "import {hydrate,tick,unmount} from 'svelte';"}
import {createStyles} from '@zerodep-css/${framework}'; import App from './ConsumerApp.${framework}';
const host=createStyles().createHost({namespace:'consumer',hydrate:JSON.parse(document.querySelector('#manifest').textContent)});
const counts={}; const props={${framework === 'svelte' ? 'host,' : ''}initialColor:'red',record(kind){counts[kind]=(counts[kind]??0)+1;}};
const app=${framework === 'vue' ? 'createSSRApp(App,props).use(host)' : "hydrate(App,{target:document.querySelector('#app'),props})"};
${framework === 'vue' ? "app.mount('#app'); await nextTick();" : 'await tick();'}
host.completeHydration(); window.consumer={ready:true,counts,stats:()=>host.stats(), async dispose(){ ${framework === 'vue' ? 'app.unmount();' : 'await unmount(app);'} host.dispose(); return document.querySelectorAll('style[data-zerodep="consumer"]').length; }};
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
          className: document.querySelector('[data-instance="a"] [data-auto]').className,
        }));
        await page.locator('[data-instance="a"] [data-auto-change]').click();
        assert.equal(
          await page
            .locator('[data-instance="a"] [data-auto]')
            .evaluate((el) => getComputedStyle(el).width),
          '11px',
        );
        const bindingAfter = await page.evaluate(() => ({
          counts: { ...window.consumer.counts },
          stats: window.consumer.stats(),
          className: document.querySelector('[data-instance="a"] [data-auto]').className,
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
    report.results.push({
      framework,
      dependencyAudit: true,
      types: true,
      clientBuild: true,
      ssr: true,
      hydration: true,
    });
  }
  report.status = 'passed';
  report.passed = true;
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
