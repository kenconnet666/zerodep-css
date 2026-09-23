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
import {createRuntime,readTheme} from '@zerodep-css/core';
import {ThemeCss,lightTheme,darkTheme} from '@zerodep-css/${framework}/themes';
const runtime=createRuntime({target:null});
assert.equal(readTheme(lightTheme),lightTheme.defaults);
await assert.rejects(()=>import('@zerodep-css/core/theme-runtime'),{code:'ERR_PACKAGE_PATH_NOT_EXPORTED'});
try { runtime.css(s=>{s.color.primary;s.backgroundColor.surface;s.padding.md;},ThemeCss);
assert.notEqual(lightTheme.className(runtime),darkTheme.className(runtime));
assert.equal(runtime.stats().classes,3); } finally { runtime.dispose(); }
`,
    );
    run(process.execPath, ['themes-smoke.mjs'], { cwd: folder, env: environment });
    // 使用独立消费者的 TypeScript 与 NodeNext 条件，而不是仓库的 zerodep-source 条件。
    await save(
      join(folder, 'types.ts'),
      `import { createStyleContext, readTheme, type StyleFactory, type StylesheetFactory } from '@zerodep-css/core';
import { createStyles, useStyleRuntime, useTheme, defineTheme, provideTheme } from '@zerodep-css/${framework}';
// @ts-expect-error 旧作者类型已统一为 Css
import type { StyleBuilder } from '@zerodep-css/core';
// @ts-expect-error bx 已移除，动态值直接交给 cssPlugin
import { bx } from '@zerodep-css/${framework}';
import { Css } from '@zerodep-css/${framework}';
import { ThemeCss, lightTheme, darkTheme } from '@zerodep-css/${framework}/themes';
import { cssPlugin, transformCss } from '@zerodep-css/${framework}/compiler';
import type { Plugin } from 'vite';
const compilerPlugin: Plugin = cssPlugin(); void compilerPlugin;
// @ts-expect-error 适配器不再暴露绕过上下文的默认 css
import { css as defaultCss } from '@zerodep-css/${framework}';
// @ts-expect-error 内部 IR 不属于根入口
import type { StyleProgram } from '@zerodep-css/core';
const context = createStyleContext({target:null});
// @ts-expect-error 只保留选项对象，禁止旧位置参数
useStyleRuntime(context);
// @ts-expect-error 第二个位置参数不再支持
useStyleRuntime(undefined, {themes:[]});
const palette = defineTheme('consumer-theme', {color:{brand:'red'}});
const themeScope = provideTheme(palette, () => ({color:{brand:'blue'}}));
const currentTheme = useTheme(palette, themeScope);
const brand: string = currentTheme().color.brand; void brand;
readTheme(palette, themeScope);
// @ts-expect-error 主题 getter 保留只读字段结构
currentTheme().color.brand = 'green';
// @ts-expect-error 不能读取未声明的主题字段
currentTheme().spacing;
useStyleRuntime({context, theme:themeScope});
// @ts-expect-error 主题叶类型不能因 provider 接入而放宽
provideTheme(palette, () => ({color:{brand:1}}));
const style: StyleFactory = s => { s.display.token('flex'); s.width.raw('future-value');
// @ts-expect-error token 不能退化为任意字符串
s.display.token('unknown-token');
// @ts-expect-error 属性不可直接调用
s.width('50%'); s.width.px(12); };
const global: StylesheetFactory = g => g.containerQuery('(width > 10px)', g => g.rule('body', style));
const result: string = useStyleRuntime({ context }).css(style);
class AppCss extends Css { get color(){ return this.extendProperty(super.color,{brand:'#2463eb'}); } control(){this.padding.px(8);} }
const project = createStyles({cssType:AppCss,theme:palette});
const projectHost = project.createHost({target:null});
const projectCss = project.useCss();
const combined: string = projectCss('foreign', [false, null, s=>s.control()]);
project.useGlobalCss('project-global', g=>g.media('screen', g=>g.rule('body', s=>s.control())));
project.provideTheme({color:{brand:'green'}});
const projectBrand: string = project.useTheme()().color.brand;
// @ts-expect-error 项目入口仍保留主题叶类型
project.provideTheme({color:{brand:1}});
// @ts-expect-error 没有默认主题时须显式传定义
createStyles().useTheme();
projectHost.dispose(); void combined; void projectBrand;
const extended: string = useStyleRuntime({ context }).css(s=>{s.control();s.color.brand;s.hover(h=>h.control());},AppCss);
const appStyle = useStyleRuntime({context,cssType:AppCss});
// @ts-expect-error 泛型声明不能替代运行时构造器
useStyleRuntime<AppCss>({context});
appStyle.css(s=>{s.control();s.focus(h=>h.color.brand);});
// @ts-expect-error 初始化类型不会丢失方法签名或开放任意成员
appStyle.css(s=>s.unknownMethod());
// @ts-expect-error 局部视图不接受 runtime 所有权配置
useStyleRuntime({context,nonce:'other'});
// @ts-expect-error 指定的类型必须继承 Css
useStyleRuntime({context,cssType:class {}});
context.mountGlobal('typed-global',g=>g.rule('button',s=>s.control(),AppCss));
const preset: string = useStyleRuntime({ context }).css(s=>{s.color.primary;s.backgroundColor.surface;s.padding.md;},ThemeCss);
darkTheme.extend({color:{primary:'#123456'}}); void lightTheme; void preset;
context.mountGlobal('consumer',global); context.dispose(); void result; void extended; void defaultCss; void cssPlugin; void transformCss;
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
    await save(
      join(folder, `ConsumerApp.${framework}`),
      framework === 'vue'
        ? `<script setup>import ReactiveApp from './ReactiveApp.vue'; import BoundApp from './BoundApp.vue'; import {provideStyleContext} from '@zerodep-css/vue'; const props=defineProps(['context','initialColor','record']); provideStyleContext(props.context);</script><template><ReactiveApp v-bind="props"/><BoundApp :context="props.context" :record="props.record" :initial-width="20"/></template>`
        : `<script>import ReactiveApp from './ReactiveApp.svelte'; import BoundApp from './BoundApp.svelte'; let props=$props();</script><ReactiveApp {...props}/><BoundApp context={props.context} record={props.record} initialWidth={20}/>`,
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
