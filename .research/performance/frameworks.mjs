// 真实 SFC 对照：Vue/Svelte 独立构建、独立页面；计时包括原生调度和布局刷新。
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { build } from 'esbuild';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile, compileModule } from 'svelte/compiler';
import { transformCss as vueCss } from '../../vue/dist/compiler/index.js';
import { transformCss as svelteCss } from '../../svelte/dist/compiler/index.js';
import { lightTheme } from '../../core/dist/themes.js';
import { root } from '../../scripts/lib/environment.mjs';
import {
  launchBrowser,
  browserEngine,
  browserChannel,
} from '../../scripts/testing/browser-launch.mjs';

const manifestFile = resolve(process.argv[2]);
const assets = dirname(manifestFile),
  workspace = dirname(assets);
const manifest = JSON.parse(await readFile(manifestFile, 'utf8'));
const output = resolve(root, 'test-results/engine-comparison');
const rowsPerBatch = 200;
// 用同一份纯主题定义生成静态 CSS；原生基线不调用样式引擎或哈希器。
function themeDeclarations(tokens, values) {
  return Object.entries(values).flatMap(([key, value]) =>
    typeof value === 'object'
      ? themeDeclarations(tokens[key], value)
      : `${tokens[key].name}:${String(value)}`,
  );
}
const nativeThemeValues = themeDeclarations(lightTheme.tokens, lightTheme.defaults);
const nativeThemeCss = `.native-theme{${nativeThemeValues.join(';')}}`;
await mkdir(output, { recursive: true });
await writeFile(
  resolve(output, 'results.json'),
  JSON.stringify({ runId: manifest.runId, status: 'building', passed: false }),
);
const cases = [
  { name: 'native-static', engine: 'native', mode: 'static' },
  { name: 'vanilla-static', engine: 'vanilla', mode: 'static' },
  { name: 'uno-static', engine: 'uno', mode: 'static' },
  { name: 'zerodep-auto-static', engine: 'zerodep', mode: 'static', auto: true },
  { name: 'zerodep-runtime-static', engine: 'zerodep', mode: 'static' },
  { name: 'emotion-static', engine: 'emotion', mode: 'static' },
  { name: 'goober-static', engine: 'goober', mode: 'static' },
  { name: 'zerodep-once-static', engine: 'zerodep', mode: 'once' },
  { name: 'emotion-once-static', engine: 'emotion', mode: 'once' },
  { name: 'goober-once-static', engine: 'goober', mode: 'once' },
  { name: 'native-vars', engine: 'native', mode: 'vars' },
  { name: 'vanilla-vars', engine: 'vanilla', mode: 'vars' },
  { name: 'uno-vars', engine: 'uno', mode: 'vars' },
  { name: 'vanilla-dynamic', engine: 'vanilla-dynamic', mode: 'vars' },
  { name: 'emotion-vars', engine: 'emotion', mode: 'vars' },
  { name: 'goober-vars', engine: 'goober', mode: 'vars' },
  { name: 'zerodep-auto', engine: 'zerodep', mode: 'dynamic', auto: true },
  { name: 'native-classes', engine: 'native', mode: 'dynamic' },
  { name: 'vanilla-classes', engine: 'vanilla', mode: 'dynamic' },
  { name: 'uno-classes', engine: 'uno', mode: 'dynamic' },
  { name: 'emotion-object', engine: 'emotion', mode: 'dynamic' },
  { name: 'goober-object', engine: 'goober', mode: 'dynamic' },
  { name: 'zerodep-runtime', engine: 'zerodep', mode: 'dynamic' },
  { name: 'native-growing-vars', engine: 'native', mode: 'vars', unique: true },
  { name: 'vanilla-growing-vars', engine: 'vanilla', mode: 'vars', unique: true },
  { name: 'uno-growing-vars', engine: 'uno', mode: 'vars', unique: true },
  { name: 'vanilla-dynamic-growing', engine: 'vanilla-dynamic', mode: 'vars', unique: true },
  { name: 'emotion-growing', engine: 'emotion', mode: 'dynamic', unique: true },
  { name: 'goober-growing', engine: 'goober', mode: 'dynamic', unique: true },
  { name: 'zerodep-growing-auto', engine: 'zerodep', mode: 'dynamic', auto: true, unique: true },
  { name: 'zerodep-growing-runtime', engine: 'zerodep', mode: 'dynamic', unique: true },
  { name: 'native-themed-vars', engine: 'native', mode: 'vars', theme: true },
  { name: 'native-themed-classes', engine: 'native', mode: 'dynamic', theme: true },
  { name: 'emotion-themed', engine: 'emotion', mode: 'dynamic', theme: true },
  { name: 'goober-themed', engine: 'goober', mode: 'dynamic', theme: true },
  { name: 'zerodep-scoped-auto', engine: 'zerodep', mode: 'dynamic', auto: true, theme: true },
  {
    name: 'zerodep-theme-class',
    engine: 'zerodep',
    mode: 'dynamic',
    auto: true,
    theme: true,
    cssType: true,
  },
];
const diagnostics = [];
function source(framework, item) {
  const value = ['static', 'once'].includes(item.mode)
    ? '20'
    : item.unique
      ? `20 + iteration * ${rowsPerBatch} + row.id`
      : '20 + ((iteration + row.id) % 16)';
  const ours = item.engine === 'zerodep';
  let setup = ours
    ? `import {createStyles} from '@zerodep-css/${framework}';
import {lightTheme,ThemeCss} from '@zerodep-css/${framework}/themes';
const styles=createStyles(${item.cssType ? '{cssType:ThemeCss,theme:lightTheme}' : item.theme ? '{theme:lightTheme}' : ''});
const css=styles.useCss();`
    : '';
  let expression;
  if (ours) expression = `css(s=>{s.width.px(${value});${item.cssType ? 's.color.primary;' : ''}})`;
  else if (item.mode === 'static')
    expression = ['native', 'vanilla', 'uno'].includes(item.engine)
      ? 'fixedClass'
      : 'emit({width:20})';
  else if (item.mode === 'dynamic')
    expression = ['native', 'vanilla', 'uno'].includes(item.engine)
      ? `classes[${value}]`
      : `emit({width:${value}})`;
  if (item.theme && !ours && item.mode === 'dynamic') expression += "+' '+nativeTheme";
  if (item.mode === 'once') {
    setup += `\nconst shared=${ours ? 'css(s=>{s.width.px(20);})' : 'emit({width:20})'};`;
    expression = 'shared';
  }
  if (item.mode === 'vars') {
    if (['emotion', 'goober'].includes(item.engine)) {
      setup += `\nconst shared=emit({width:'var(--bench-width,20px)'});`;
      expression = 'shared';
    } else expression = item.theme ? `variableClass+' '+nativeTheme` : 'variableClass';
  }
  const vueStyle =
    item.mode === 'vars'
      ? item.engine === 'vanilla-dynamic'
        ? `:style="dynamicVars(${value})"`
        : `:style="{'--bench-width':(${value})+'px'}"`
      : '';
  const svelteStyle =
    item.mode === 'vars'
      ? item.engine === 'vanilla-dynamic'
        ? `style={Object.entries(dynamicVars(${value})).map(([name,value])=>name+':'+value).join(';')}`
        : `style:--bench-width={(${value})+'px'}`
      : '';
  if (framework === 'vue')
    return `<script setup>
import {ref} from 'vue';
const props=defineProps(['emit','expose','classes','fixedClass','variableClass','nativeTheme','dynamicVars']);
const {emit,classes,fixedClass,variableClass,nativeTheme,dynamicVars}=props;
const rows=Array.from({length:${rowsPerBatch}},(_,id)=>({id}));const iteration=ref(0);
props.expose({step(){iteration.value++},read(){return iteration.value}});
${setup}
</script><template><div class="bench" :data-frame="iteration"><div v-for="row in rows" :key="row.id" :data-row="row.id" :class="${expression}" ${vueStyle}></div></div></template>`;
  return `<script>
import {untrack} from 'svelte';
let {styleHost,emit,expose,classes,fixedClass,variableClass,nativeTheme,dynamicVars}=$props();
const rows=Array.from({length:${rowsPerBatch}},(_,id)=>({id}));let iteration=$state(0);
untrack(()=>styleHost)?.provide();
untrack(()=>expose({step(){iteration++},read(){return iteration}}));
${setup}
</script><div class="bench" data-frame={iteration}>{#each rows as row(row.id)}<div data-row={row.id} class={${expression}} ${svelteStyle}></div>{/each}</div>`;
}
async function bundleFramework(framework) {
  const folder = resolve(workspace, framework);
  await mkdir(folder, { recursive: true });
  for (const item of cases)
    await writeFile(resolve(folder, `${item.name}.${framework}`), source(framework, item));
  const imports = cases
    .map((item, index) => `import App${index} from './${item.name}.${framework}';`)
    .join('\n');
  const components = cases
    .map((item, index) => `${JSON.stringify(item.name)}:App${index}`)
    .join(',');
  const driver = `${imports}
import {createStyles} from '@zerodep-css/${framework}';
import {lightTheme} from '@zerodep-css/${framework}/themes';
${framework === 'vue' ? `import {createApp,nextTick} from 'vue';` : `import {mount,unmount,tick} from 'svelte';`}
const components={${components}},project=createStyles();let sequence=0;
export const themeVariable=lightTheme.tokens.color.primary.name,themeValue=lightTheme.defaults.color.primary;
export async function start(item,target){
 let control;const stylesTarget=document.createElement('div');document.head.appendChild(stylesTarget);
 const namespace=item.engine==='zerodep'?'bench-${framework}-'+sequence++:undefined;
 const styleHost=namespace?project.createHost({namespace}):undefined;
 const emotion=item.engine==='emotion'?window.emotionBench.createEmotion({key:'emotion-bench',container:stylesTarget,speedy:true}):undefined;
 const emit=emotion?.css??(item.engine==='goober'?window.gooberBench.css.bind({target:stylesTarget}):undefined);
 const vanilla=window.vanillaBench,compiled=item.engine==='uno'?window.unoBench:item.engine.startsWith('vanilla')?vanilla:null;
 const props={styleHost,emit,expose(value){control=value},classes:compiled?.widths??Object.fromEntries(Array.from({length:16},(_,i)=>[i+20,'native-w'+(i+20)])),fixedClass:compiled?.fixed??'native-static',variableClass:item.engine==='vanilla-dynamic'?vanilla.dynamicVariable:compiled?.variable??'native-vars',dynamicVars:value=>window.dynamicBench.assignInlineVars({[vanilla.dynamicWidth]:value+'px'}),nativeTheme:window.nativeTheme.className};
 let app;
 try{
 ${framework === 'vue' ? `app=createApp(components[item.name],props);if(styleHost)app.use(styleHost);app.mount(target);await nextTick();` : `app=mount(components[item.name],{target,props});await tick();`}
 return {async step(){control.step();await ${framework === 'vue' ? 'nextTick()' : 'tick()'};},read:()=>control.read(),records:()=>styleHost?.stats().records??[...stylesTarget.querySelectorAll('style')].reduce((n,s)=>n+(s.sheet?.cssRules.length??0),0),async dispose(){${framework === 'vue' ? 'app.unmount();' : 'await unmount(app);'}styleHost?.dispose();emotion?.flush();stylesTarget.remove();},cleared:()=>namespace?document.querySelectorAll('style[data-zerodep="'+namespace+'"]').length:0};
 }catch(error){styleHost?.dispose();emotion?.flush();stylesTarget.remove();throw error;}
}`;
  await writeFile(resolve(folder, 'client.js'), driver);
  await build({
    absWorkingDir: workspace,
    entryPoints: [resolve(folder, 'client.js')],
    outfile: resolve(assets, `${framework}.js`),
    bundle: true,
    format: 'iife',
    globalName: 'frameworkBench',
    platform: 'browser',
    target: 'es2023',
    minify: true,
    nodePaths: [resolve(workspace, 'node_modules'), resolve(root, 'node_modules')],
    define: {
      'process.env.NODE_ENV': '"production"',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    },
    alias: {
      '@zerodep-css/core/internal': resolve(root, 'core/dist/internal.js'),
      '@zerodep-css/core/themes': resolve(root, 'core/dist/themes.js'),
      '@zerodep-css/vue/compiler-runtime': resolve(root, 'vue/dist/compiler-runtime.js'),
      '@zerodep-css/svelte/compiler-runtime': resolve(root, 'svelte/dist/compiler-runtime.js'),
      '@zerodep-css/vue/themes': resolve(root, 'vue/dist/themes.js'),
      '@zerodep-css/svelte/themes': resolve(root, 'svelte/dist/themes.js'),
      '@zerodep-css/core': resolve(root, 'core/dist/index.js'),
      '@zerodep-css/vue': resolve(root, 'vue/dist/index.js'),
      '@zerodep-css/svelte': resolve(root, 'svelte/dist/index.js'),
    },
    plugins: [
      {
        name: 'official-sfc',
        setup(bundler) {
          bundler.onLoad({ filter: /\.(vue|svelte)$/ }, async ({ path }) => {
            const original = await readFile(path, 'utf8');
            const item = cases.find((item) => path.endsWith(item.name + '.' + framework));
            const transformed = item.auto
              ? (framework === 'vue' ? vueCss : svelteCss)(original, path, { root: workspace })
              : null;
            const prepared = transformed?.code.includes('prepareStyle') ?? false;
            const binding = transformed?.code.includes('bindUnit') ?? false;
            if (item.auto && !item.cssType) {
              assert(transformed, `Missing compiler transform: ${path}`);
              assert(
                item.mode === 'static' ? prepared : binding,
                `Unexpected compiler path: ${path}`,
              );
            }
            if (item.cssType)
              assert(!prepared && !binding, `Unexpected cssType optimization: ${path}`);
            diagnostics.push({
              framework,
              name: item.name,
              autoRequested: !!item.auto,
              prepared,
              binding,
              runtimeFallback: item.engine === 'zerodep' ? !prepared && !binding : null,
            });
            const text = transformed?.code ?? original;
            if (framework === 'vue') {
              const { descriptor, errors } = parse(text, { filename: path });
              assert.deepEqual(errors, []);
              return {
                contents: compileScript(descriptor, {
                  id: path,
                  isProd: true,
                  inlineTemplate: true,
                }).content,
                loader: 'ts',
                resolveDir: dirname(path),
              };
            }
            const compiled = compile(text, { filename: path, generate: 'client', dev: false });
            // 对照配置 props 每次挂载固定；只更新 iteration，初始化快照是有意的。
            const warnings = compiled.warnings.filter((w) => w.code !== 'state_referenced_locally');
            assert.deepEqual(warnings, []);
            return { contents: compiled.js.code, loader: 'js', resolveDir: dirname(path) };
          });
          bundler.onLoad({ filter: /\.svelte\.js$/ }, async ({ path }) => ({
            contents: compileModule(await readFile(path, 'utf8'), {
              filename: path,
              generate: 'client',
              dev: false,
            }).js.code,
            loader: 'js',
            resolveDir: dirname(path),
          }));
        },
      },
    ],
  });
}
const builds = await Promise.allSettled(['vue', 'svelte'].map(bundleFramework));
for (const result of builds) if (result.status === 'rejected') throw result.reason;
await writeFile(resolve(output, 'compiler-paths.json'), JSON.stringify(diagnostics, null, 2));
const browser = await launchBrowser();
const report = {
  runId: manifest.runId,
  passed: false,
  status: 'running',
  browser: browser.version(),
  engine: browserEngine,
  channel: browserChannel,
  dependencies: manifest.dependencies,
  frameworkVersions: manifest.frameworks,
  node: process.version,
  platform: process.platform,
  sizes: manifest.sizes,
  measurement: {
    unit: 'milliseconds',
    mount: 'framework mount, framework tick, and layout read with scripts and CSS already loaded',
    update: 'all batches together, including framework tick and layout read',
    excluded: 'dependency installation, bundling, network transfer, and initial script parsing',
    freshValues:
      'every row in every frame receives a distinct width; fresh cases use fewer batches',
    nativeTheme: 'static CSS from the same lightTheme token/value tree, prepared before timing',
    themeLeaves: nativeThemeValues.length,
    records:
      'per-instance emitted rules; preloaded native, UnoCSS, and vanilla-extract CSS is excluded',
    compilerScope:
      'same-SFC createStyles/useCss direct bindings only; imported project hooks conservatively use runtime',
    factoryScope:
      'generated components invoke createStyles once per component setup; mount time includes this call',
    compilerDiagnostics:
      'compiler-paths.json records autoRequested, prepared, binding, and runtimeFallback per case',
  },
  frameworks: {},
};
await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2));
try {
  for (const framework of ['vue', 'svelte']) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    try {
      await page.setContent(
        `<style>.bench{display:flex;flex-wrap:wrap;width:800px;contain:layout}.bench>div{height:2px;flex:none;padding:0;border:0;margin:0}.native-static{width:20px}.native-vars{width:var(--bench-width,20px)}${nativeThemeCss}${Array.from({ length: 16 }, (_, i) => `.native-w${i + 20}{width:${i + 20}px}`).join('')}</style>`,
      );
      for (const file of manifest.stylesheets ?? [manifest.stylesheet])
        await page.addStyleTag({ content: await readFile(resolve(assets, file), 'utf8') });
      for (const file of [...manifest.scripts, `${framework}.js`])
        await page.addScriptTag({ content: await readFile(resolve(assets, file), 'utf8') });
      const results = await page.evaluate(
        async ({ cases, rowsPerBatch }) => {
          window.nativeTheme = {
            className: 'native-theme',
            variable: window.frameworkBench.themeVariable,
            value: window.frameworkBench.themeValue,
          };
          const rounds = 5;
          const samples = Object.fromEntries(cases.map((c) => [c.name, []]));
          async function sample(item) {
            // 全新规则限制为 1 次预热 + 5 次采样更新；所有同组引擎参数相同。
            const batches = item.unique ? 5 : 30;
            const warmupBatches = item.unique ? 1 : 5;
            const host = document.createElement('div');
            document.body.appendChild(host);
            let handle;
            try {
              const begin = performance.now();
              handle = await window.frameworkBench.start(item, host);
              let checksum = host.offsetHeight;
              const mountMs = performance.now() - begin;
              for (let i = 0; i < warmupBatches; i++) {
                await handle.step();
                checksum += host.offsetHeight;
              }
              const start = performance.now();
              for (let i = 0; i < batches; i++) {
                await handle.step();
                checksum += host.offsetHeight;
              }
              const updateMs = performance.now() - start;
              const nodes = [...host.querySelectorAll('[data-row]')];
              if (nodes.length !== rowsPerBatch) throw new Error('Missing rows: ' + item.name);
              for (const node of nodes) {
                if (!node.className.trim()) throw new Error('Missing class: ' + item.name);
                const expected = ['static', 'once'].includes(item.mode)
                  ? 20
                  : item.unique
                    ? 20 + handle.read() * rowsPerBatch + Number(node.dataset.row)
                    : 20 + ((handle.read() + Number(node.dataset.row)) % 16);
                if (getComputedStyle(node).width !== expected + 'px')
                  throw new Error('Incorrect width: ' + item.name);
              }
              if (item.theme) {
                const theme =
                  item.engine === 'zerodep'
                    ? {
                        variable: window.frameworkBench.themeVariable,
                        value: window.frameworkBench.themeValue,
                      }
                    : window.nativeTheme;
                if (
                  getComputedStyle(nodes[0]).getPropertyValue(theme.variable).trim() !== theme.value
                )
                  throw new Error('Incorrect theme: ' + item.name);
              }
              const records = handle.records();
              const expectedRecords = ['native', 'vanilla', 'uno', 'vanilla-dynamic'].includes(
                item.engine,
              )
                ? 0
                : item.mode === 'dynamic' && (!item.auto || item.cssType)
                  ? (item.unique ? rowsPerBatch * (handle.read() + 1) : 16) +
                    (item.theme && item.engine === 'zerodep' ? 1 : 0)
                  : 1 + (item.theme ? 1 : 0);
              if (records !== expectedRecords)
                throw new Error(
                  `Unexpected rule count: ${item.name}: ${records}/${expectedRecords}`,
                );
              return {
                mountMs,
                updateMs,
                records,
                checksum,
                batches,
                warmupBatches,
                frame: handle.read(),
              };
            } finally {
              try {
                await handle?.dispose();
                if (handle?.cleared()) throw new Error('Leaked host styles: ' + item.name);
              } finally {
                host.remove();
              }
            }
          }
          // 库已加载并各运行一次；挂载数字表示冷实例，不是网络/JS 首次解析。
          for (const item of cases) await sample(item);
          for (let round = 0; round < rounds; round++) {
            const offset = (round * 5) % cases.length;
            const order = [...cases.slice(offset), ...cases.slice(0, offset)];
            if (round % 2) order.reverse();
            for (const item of order) {
              await new Promise((resolve) => requestAnimationFrame(resolve));
              samples[item.name].push(await sample(item));
            }
          }
          return {
            rounds,
            elements: rowsPerBatch,
            workloads: {
              bounded: { batches: 30, warmupBatches: 5, distinctWidths: 16 },
              fresh: { batches: 5, warmupBatches: 1, distinctWidths: rowsPerBatch * 7 },
            },
            samples,
            medians: Object.fromEntries(
              cases.map((item) => [
                item.name,
                {
                  mountMs: samples[item.name].map((s) => s.mountMs).sort((a, b) => a - b)[2],
                  updateMs: samples[item.name].map((s) => s.updateMs).sort((a, b) => a - b)[2],
                  records: samples[item.name].at(-1).records,
                },
              ]),
            ),
          };
        },
        { cases, rowsPerBatch },
      );
      assert.deepEqual(errors, []);
      report.frameworks[framework] = results;
      await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2));
      console.log(JSON.stringify({ framework, medians: results.medians }, null, 2));
    } finally {
      await page.close();
    }
  }
  report.passed = true;
  report.status = 'passed';
  await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
