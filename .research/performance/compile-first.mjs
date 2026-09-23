// 编译优先研究：提取后端由夹具显式生成；没有修改产品编译器或扩大已支持语法。
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { createServer } from 'node:http';
import { gzipSync } from 'node:zlib';
import { execFileSync } from 'node:child_process';
import { build, transform } from 'esbuild';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile, compileModule } from 'svelte/compiler';
import { root } from '../../scripts/lib/environment.mjs';
import { launchBrowser } from '../../scripts/testing/browser-launch.mjs';
import { prototypePlugin, artifactFor } from './preheat-prototype.mjs';
import { createRuntime } from '../../core/dist/index.js';
import { lightTheme, darkTheme, ThemeCss } from '../../core/dist/themes.js';
import { buildStyleDefinition } from '../../core/dist/builder.js';
import { compileProgram, inspectStylesheet, renderRecord } from '../../core/dist/serialize.js';
import { transformCss as vueTransform } from '../../vue/dist/compiler/index.js';
import { transformCss as svelteTransform } from '../../svelte/dist/compiler/index.js';

const label = process.argv[2] ?? 'current',
  control = process.argv.includes('--control');
assert.match(label, /^[a-z0-9-]+$/);
const output = resolve(root, 'test-results/compile-first', label);
await mkdir(output, { recursive: true });
const rt = createRuntime({ target: null }),
  config = rt.config;
rt.dispose();
const api = { compileProgram, inspectStylesheet, renderRecord };
const staticFactories = Array.from({ length: 64 }, (_, i) => (s) => {
  s.display.block;
  s.width.px(20 + i);
  s.padding.px(8, 16);
  s.hover((h) => {
    h.color.red;
  });
});
const staticSources = Array.from(
  { length: 64 },
  (_, i) =>
    `s=>{s.display.block;s.width.px(${20 + i});s.padding.px(8,16);s.hover(h=>{h.color.red;});}`,
);
const staticDefinitions = staticFactories.map((f) => buildStyleDefinition(f));
const plans = staticDefinitions.map((d) => artifactFor('template', d, api, config));
const staticRecords = staticDefinitions.map((d) => compileProgram(d.program, config).record);
const branches = [];
for (const active of [false, true])
  for (let size = 0; size < 3; size++) {
    const def = buildStyleDefinition((s) => {
      s.display.block;
      s.padding.px(4);
      if (active) s.padding.px(8);
      switch (size) {
        case 0:
          s.width.px(40);
          break;
        case 1:
          s.width.px(60);
          break;
        default:
          s.width.px(80);
      }
      s.paddingLeft.px(2);
    });
    branches.push(compileProgram(def.program, config).record);
  }
// 使用同一完整主题树与变量名，不能只给提取路径留下两个简化 token。
const themeRuntime = createRuntime({ target: null });
const themeIds = [lightTheme.className(themeRuntime), darkTheme.className(themeRuntime)];
const themeStyle = themeRuntime.css((s) => {
  s.display.block;
  s.width.px(40);
  s.padding.sm;
  s.color.primary;
}, ThemeCss);
const themeClasses = themeIds.map((id) => id + ' ' + themeStyle);
const themeCss = themeRuntime
  .snapshot()
  .records.map((r) => renderRecord(r, config))
  .join('');
themeRuntime.dispose();
const cssAssets = {
  static: staticRecords.map((r) => renderRecord(r, config)).join(''),
  variable: '.compiled-variable{display:block;width:var(--compiled-width)}',
  branches: branches.map((r) => renderRecord(r, config)).join(''),
  theme: themeCss,
};
const cases = ['static', 'variable', 'branches', 'theme'],
  modes = ['runtime', 'optimized', 'extracted'];
const report = {
  status: 'building',
  control,
  revision: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  node: process.version,
  results: [],
  samples: [],
  sizes: [],
  checks: [],
};
await writeFile(resolve(output, 'results.json'), JSON.stringify(report));
const scripts = new Map();
function component(framework, scenario, kind) {
  const extracted = kind === 'extracted',
    themed = scenario === 'theme';
  const imports = extracted
    ? ''
    : `import {useStyleRuntime${themed ? ',provideTheme' : ''}} from '@zerodep-css/${framework}';${themed ? `import {lightTheme,darkTheme,ThemeCss} from '@zerodep-css/${framework}/themes';` : ''}`;
  const setup = extracted
    ? ''
    : `${themed ? `const themeScope=provideTheme(lightTheme,()=>${framework === 'vue' ? 'frame.value' : 'frame'}%2?darkTheme.defaults:lightTheme.defaults);` : ''}const {css}=useStyleRuntime({context${themed ? ',cssType:ThemeCss,theme:themeScope' : ''}});`;
  let extra = '',
    expression,
    style = '';
  if (scenario === 'static') {
    if (extracted) {
      extra = `const classes=${JSON.stringify(staticRecords.map((r) => r.id))};`;
      expression = 'classes[row%64]';
    } else {
      extra = `import {prepareStyle} from '@zerodep-css/core/compiler-runtime';${kind === 'optimized' ? "import {attach} from 'research:preheat';import {plans} from './plans.js';" : ''}const factories=[${staticSources
        .map((s, i) => {
          const p = `prepareStyle(${s},'${i.toString(16).padStart(64, '0')}')`;
          return kind === 'optimized' ? `attach(${p},plans[${i}])` : p;
        })
        .join(',')}];`;
      expression = 'css(factories[row%64])';
    }
  } else if (scenario === 'variable') {
    expression = extracted
      ? "'compiled-variable'"
      : 'css(s=>{s.display.block;s.width.px(20+(frame+row)%16);})';
    if (extracted) {
      extra = `function px(value){if(typeof value!=='number'||!Number.isFinite(value)||value<0)throw new TypeError('Invalid width');return value+'px';}`;
      style =
        framework === 'vue'
          ? `:style="{'--compiled-width': px(20+(frame+row)%16)}"`
          : `style:--compiled-width={px(20+(frame+row)%16)}`;
    }
  } else if (scenario === 'branches') {
    if (extracted) {
      extra = `const classes=${JSON.stringify(branches.map((r) => r.id))};`;
      expression = 'classes[((frame+row)%2)*3+(frame+row)%3]';
    } else
      expression =
        'css(s=>{s.display.block;s.padding.px(4);if((frame+row)%2)s.padding.px(8);switch((frame+row)%3){case 0:s.width.px(40);break;case 1:s.width.px(60);break;default:s.width.px(80);}s.paddingLeft.px(2);})';
  } else {
    if (extracted) extra = `const themeClasses=${JSON.stringify(themeClasses)};`;
    expression = extracted
      ? 'themeClasses[frame%2]'
      : 'css(s=>{s.display.block;s.width.px(40);s.padding.sm;s.color.primary;})';
  }
  if (framework === 'vue')
    return `<script setup>import {ref} from 'vue';${imports}const {context,expose}=defineProps(['context','expose']);const frame=ref(0);${setup}${extra}const rows=Array.from({length:192},(_,i)=>i);expose({step(){frame.value++}});</script><template><div :data-frame="frame"><div v-for="row in rows" :key="row" data-row :class="${expression}" ${style}></div></div></template>`;
  return `<script>import {untrack} from 'svelte';${imports}let {context,expose}=$props();let frame=$state(0);${setup.replace('{context', '{context:untrack(()=>context)')}${extra}const rows=Array.from({length:192},(_,i)=>i);untrack(()=>expose({step(){frame++}}));</script><div data-frame={frame}>{#each rows as row(row)}<div data-row class={${expression}} ${style}></div>{/each}</div>`;
}
for (const framework of ['vue', 'svelte'])
  for (const scenario of cases)
    for (const mode of modes) {
      const kind = control ? 'runtime' : mode,
        folder = resolve(output, `${framework}-${scenario}-${mode}`);
      await mkdir(folder, { recursive: true });
      const appFile = resolve(folder, 'App.' + framework),
        driver = resolve(folder, 'driver.js');
      let source = component(framework, scenario, kind);
      if (kind === 'optimized')
        source =
          (framework === 'vue' ? vueTransform : svelteTransform)(
            source,
            resolve(root, 'CompileFirst.' + framework),
          )?.code ?? source;
      await writeFile(appFile, source);
      await writeFile(
        resolve(folder, 'plans.js'),
        `function freeze(v){if(v&&typeof v==='object'){Object.values(v).forEach(freeze);Object.freeze(v)}return v;}export const plans=freeze(${JSON.stringify(plans)});`,
      );
      await writeFile(
        driver,
        `import App from './App.${framework}';${kind === 'extracted' ? '' : "import {createStyleContext} from '@zerodep-css/core';"}${framework === 'vue' ? "import {createApp,nextTick} from 'vue';" : "import {mount,unmount,tick} from 'svelte';"}
export async function start(target){const context=${kind === 'extracted' ? 'undefined' : 'createStyleContext()'};let controls;const props={context,expose(v){controls=v}};${framework === 'vue' ? 'const app=createApp(App,props);app.mount(target);await nextTick();' : 'const app=mount(App,{target,props});await tick();'}return {async step(){controls.step();await ${framework === 'vue' ? 'nextTick()' : 'tick()'}},records:()=>context?.runtime.stats().records??0,async stop(){${framework === 'vue' ? 'app.unmount();' : 'await unmount(app);'}context?.dispose();}};}`,
      );
      const result = await build({
        entryPoints: [driver],
        bundle: true,
        write: false,
        format: 'esm',
        platform: 'browser',
        minify: true,
        target: 'es2023',
        metafile: true,
        define: {
          'process.env.NODE_ENV': '"production"',
          __VUE_OPTIONS_API__: 'true',
          __VUE_PROD_DEVTOOLS__: 'false',
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        },
        alias: Object.fromEntries(
          [
            'core/compiler-runtime',
            'core/themes',
            'core/style-scope',
            'core',
            framework + '/compiler-runtime',
            framework + '/themes',
            framework,
          ].map((key) => [
            '@zerodep-css/' + key,
            resolve(
              root,
              key.split('/')[0],
              'src',
              key.includes('/') ? key.split('/')[1] + '.ts' : 'index.ts',
            ),
          ]),
        ),
        plugins: [
          prototypePlugin({ patch: kind === 'optimized' && scenario === 'static' }),
          {
            name: 'official',
            setup(bundler) {
              bundler.onLoad({ filter: /\.(vue|svelte)$/ }, async ({ path }) => {
                const text = await readFile(path, 'utf8');
                if (framework === 'vue') {
                  const r = parse(text, { filename: path });
                  assert.deepEqual(r.errors, []);
                  return {
                    contents: compileScript(r.descriptor, {
                      id: 'compile-first',
                      inlineTemplate: true,
                      isProd: true,
                    }).content,
                    loader: 'ts',
                    resolveDir: dirname(path),
                  };
                }
                const r = compile(text, { filename: path, generate: 'client', dev: false });
                assert.deepEqual(r.warnings, []);
                return { contents: r.js.code, loader: 'js', resolveDir: dirname(path) };
              });
              bundler.onLoad({ filter: /\.svelte\.ts$/ }, async ({ path }) => ({
                contents: compileModule(
                  (await transform(await readFile(path, 'utf8'), { loader: 'ts' })).code,
                  { filename: path, generate: 'client', dev: false },
                ).js.code,
                loader: 'js',
                resolveDir: dirname(path),
              }));
            },
          },
        ],
      });
      const js = result.outputFiles[0].contents;
      const css = kind === 'extracted' ? cssAssets[scenario] : '';
      scripts.set('/' + framework + '-' + scenario + '-' + mode + '.js', js);
      if (kind === 'extracted')
        assert(
          !Object.keys(result.metafile.inputs).some((p) => /css-tree|core\/src|core\\src/.test(p)),
        );
      report.sizes.push({
        framework,
        scenario,
        mode,
        js: js.length,
        jsGzip: gzipSync(js).length,
        css: Buffer.byteLength(css),
        cssGzip: css ? gzipSync(css).length : 0,
      });
    }
const server = createServer((req, res) => {
  if (scripts.has(req.url)) {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(scripts.get(req.url));
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end('<!doctype html><body><main id="target"></main>');
  }
});
let browser;
try {
  await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
  browser = await launchBrowser();
  report.browser = browser.version();
  for (const framework of ['vue', 'svelte']) {
    const page = await browser.newPage(),
      errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`http://127.0.0.1:${server.address().port}`);
    const samples = await page.evaluate(
      async ({ framework, cases, modes, cssAssets, control }) => {
        const modules = {},
          target = document.querySelector('#target'),
          samples = [];
        for (const scenario of cases)
          for (const mode of modes)
            modules[scenario + '/' + mode] = await import(
              '/' + framework + '-' + scenario + '-' + mode + '.js'
            );
        async function run(scenario, mode, round) {
          let sheet,
            cssActivation = 0;
          if (mode === 'extracted' && !control) {
            const begin = performance.now();
            sheet = document.createElement('style');
            sheet.textContent = cssAssets[scenario];
            document.head.append(sheet);
            void target.offsetHeight;
            cssActivation = performance.now() - begin;
          }
          const begin = performance.now();
          const app = await modules[scenario + '/' + mode].start(target);
          void target.offsetHeight;
          const mount = performance.now() - begin;
          let frame = 0;
          function verify() {
            const nodes = [...target.querySelectorAll('[data-row]')];
            if (nodes.length !== 192) throw Error('Missing rows');
            nodes.forEach((node, i) => {
              const style = getComputedStyle(node),
                width =
                  scenario === 'static'
                    ? 20 + (i % 64)
                    : scenario === 'variable'
                      ? 20 + ((frame + i) % 16)
                      : scenario === 'branches'
                        ? [40, 60, 80][(frame + i) % 3]
                        : 40;
              if (style.width !== width + 'px')
                throw Error(
                  'Width mismatch ' +
                    scenario +
                    ' ' +
                    mode +
                    ' ' +
                    frame +
                    ' ' +
                    i +
                    ' ' +
                    style.width,
                );
              if (
                scenario === 'branches' &&
                (style.paddingLeft !== '2px' ||
                  style.paddingRight !== ((frame + i) % 2 ? 8 : 4) + 'px')
              )
                throw Error('Branch order mismatch');
              if (
                scenario === 'theme' &&
                (style.color !== (frame % 2 ? 'rgb(147, 197, 253)' : 'rgb(37, 99, 235)') ||
                  style.paddingLeft !== '8px')
              )
                throw Error(
                  'Theme mismatch ' +
                    framework +
                    ' ' +
                    mode +
                    ' frame=' +
                    frame +
                    ' color=' +
                    style.color +
                    ' padding=' +
                    style.paddingLeft,
                );
            });
          }
          try {
            verify();
            for (let i = 0; i < 5; i++) {
              await app.step();
              frame++;
              void target.offsetHeight;
            }
            const start = performance.now();
            for (let i = 0; i < 30; i++) {
              await app.step();
              frame++;
              void target.offsetHeight;
            }
            const update = performance.now() - start;
            verify();
            samples.push({
              scenario,
              mode,
              round,
              mount,
              cssActivation,
              update,
              records: app.records(),
            });
          } finally {
            await app.stop();
            sheet?.remove();
          }
          if (document.querySelector('style')) throw Error('Style leak');
        }
        for (const scenario of cases) for (const mode of modes) await run(scenario, mode, -1);
        samples.length = 0;
        for (let round = 0; round < 7; round++)
          for (const scenario of round % 2 ? [...cases].reverse() : cases)
            for (const mode of round % 2 ? [...modes].reverse() : modes)
              await run(scenario, mode, round);
        return samples;
      },
      { framework, cases, modes, cssAssets, control },
    );
    assert.deepEqual(errors, []);
    report.samples.push({ framework, samples });
    for (const scenario of cases)
      for (const mode of modes) {
        const row = { framework, scenario, mode };
        for (const k of ['mount', 'update', 'cssActivation', 'records'])
          row[k] = samples
            .filter((s) => s.scenario === scenario && s.mode === mode)
            .map((s) => s[k])
            .sort((a, b) => a - b)[3];
        report.results.push(row);
      }
    await page.close();
  }
  // 语义反例：类名顺序不决定层叠；动态变量中的非法值不会退回上一条声明。
  const page = await browser.newPage();
  await page.setContent(
    `<style>.p{width:300px}.direct{width:50px;width:red}.variable{width:50px;width:var(--w);--w:red}.order{padding:4px}.order:where(.on){padding:8px}.order{padding-left:2px}</style><div class="p"><div class="direct"></div><div class="variable"></div></div><div class="order on"></div>`,
  );
  report.semantics = await page.evaluate(() => ({
    direct: getComputedStyle(document.querySelector('.direct')).width,
    variable: getComputedStyle(document.querySelector('.variable')).width,
    branchLeft: getComputedStyle(document.querySelector('.order')).paddingLeft,
    branchRight: getComputedStyle(document.querySelector('.order')).paddingRight,
  }));
  assert.deepEqual(report.semantics, {
    direct: '50px',
    variable: '300px',
    branchLeft: '2px',
    branchRight: '8px',
  });
  await page.close();
  report.status = 'passed';
  report.checks = [
    'all computed widths',
    'branch shorthand/longhand order',
    'theme values',
    'extracted bundle excludes core/css-tree',
    'context cleanup',
    'invalid dynamic raw counterexample',
  ];
} catch (error) {
  report.status = 'failed';
  report.error = String(error.stack ?? error);
  throw error;
} finally {
  await browser?.close();
  await new Promise((ok) => server.close(ok));
  await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
}
console.log(
  JSON.stringify(
    { results: report.results, sizes: report.sizes, semantics: report.semantics },
    null,
    2,
  ),
);
