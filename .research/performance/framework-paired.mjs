// 同一浏览器、同一框架依赖的基线/当前对照；真实 SFC 与原生响应式，不比较不同机器成绩。
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';
import { createServer } from 'node:http';
import { createHash, randomUUID } from 'node:crypto';
import { build, transform } from 'esbuild';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile, compileModule } from 'svelte/compiler';
import { root } from '../../scripts/lib/environment.mjs';
import { launchBrowser } from '../../scripts/testing/browser-launch.mjs';

const revision = process.argv[2] ?? '9cd39b9';
assert.match(revision, /^[a-f0-9]{7,40}$/);
const sha = execFileSync('git', ['rev-parse', revision + '^{commit}'], {
  cwd: root,
  encoding: 'utf8',
}).trim();
const label = process.argv[3] ?? 'current';
const control = process.argv.includes('--control');
assert.match(label, /^[a-z0-9-]+$/);
const output = resolve(root, 'test-results/framework-paired', label);
await mkdir(output, { recursive: true });
const report = {
  runId: randomUUID(),
  baselineSha: sha,
  node: process.version,
  status: 'building',
  control,
  results: [],
  samples: [],
};
await writeFile(resolve(output, 'results.json'), JSON.stringify(report));
const previous = new Map();
function source(framework, scenario) {
  const themed = scenario.startsWith('theme'),
    toggle = scenario === 'theme-switch';
  const imports = `import {useStyleRuntime,provideTheme${framework === 'svelte' ? ',provideStyleContext' : ''}} from '@zerodep-css/${framework}';
import {lightTheme,darkTheme,ThemeCss} from '@zerodep-css/${framework}/themes';`;
  const setup = `${themed ? `const themeScope=provideTheme(lightTheme,()=>(${framework === 'vue' ? 'dark.value' : 'dark'}?darkTheme.defaults:lightTheme.defaults));` : ''}
const {css}=useStyleRuntime(${themed ? '{cssType:ThemeCss}' : ''});`;
  const width = scenario === 'runtime-new' ? '20+frame*200+row' : '20+((frame+row)%16)';
  const expression = `css(s=>{calls++;s.width.px(${width});${themed ? 's.color.primary;s.padding.sm;' : "s.display.token('block');"}})`;
  if (framework === 'vue')
    return `<script setup>
import {ref} from 'vue';${imports}
const props=defineProps(['expose','context']);const rows=Array.from({length:200},(_,i)=>i);
const frame=ref(0),dark=ref(false);let calls=0;
props.expose({step(){frame.value++;${toggle ? 'dark.value=!dark.value;' : ''}},calls:()=>calls,theme:()=>${themed ? 'themeScope.themes[0].className(props.context.runtime)' : 'null'}});
${setup}</script><template><div><div v-for="row in rows" :key="row" data-row :class="${expression}"></div></div></template>`;
  return `<script>import {untrack} from 'svelte';${imports}
let {context,expose}=$props();const rows=Array.from({length:200},(_,i)=>i);let frame=$state(0),dark=$state(false),calls=0;
untrack(()=>{provideStyleContext(context);expose({step(){frame++;${toggle ? 'dark=!dark;' : ''}},calls:()=>calls,theme:()=>${themed ? 'themeScope.themes[0].className(context.runtime)' : 'null'}});});
${setup}</script><div>{#each rows as row(row)}<div data-row class={${expression}}></div>{/each}</div>`;
}
const scripts = new Map();
const cases = ['runtime', 'theme-fixed', 'theme-switch', 'runtime-new'];
for (const framework of ['vue', 'svelte'])
  for (const implementation of ['baseline', 'current']) {
    const folder = resolve(output, framework + '-' + implementation);
    await mkdir(folder, { recursive: true });
    for (const scenario of cases)
      await writeFile(resolve(folder, scenario + '.' + framework), source(framework, scenario));
    const entry = resolve(folder, 'driver.js');
    await writeFile(
      entry,
      `${cases.map((name, i) => `import A${i} from './${name}.${framework}';`).join('\n')}
import {createStyleContext} from '@zerodep-css/core';
${framework === 'vue' ? "import {createApp,nextTick} from 'vue';import {installStyleContext} from '@zerodep-css/vue';" : "import {mount,unmount,tick} from 'svelte';"}
const cases={${cases.map((name, i) => `${JSON.stringify(name)}:A${i}`).join(',')}};
export async function start(name,target){const context=createStyleContext({namespace:'paired'});let controls;const props={context,expose(value){controls=value}};
${framework === 'vue' ? 'const app=createApp(cases[name],props);installStyleContext(app,context);app.mount(target);await nextTick();' : 'const app=mount(cases[name],{target,props});await tick();'}
return {async step(){controls.step();await ${framework === 'vue' ? 'nextTick()' : 'tick()'};},calls:()=>controls.calls(),theme:()=>controls.theme(),snapshot:()=>context.snapshot(),async stop(){${framework === 'vue' ? 'app.unmount();' : 'await unmount(app);'}context.dispose();}};}`,
    );
    const result = await build({
      entryPoints: [entry],
      bundle: true,
      write: false,
      format: 'esm',
      platform: 'browser',
      target: 'es2023',
      minify: true,
      define: {
        'process.env.NODE_ENV': '"production"',
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      },
      alias: Object.fromEntries(
        ['core/style-scope', 'core/themes', 'core', framework + '/themes', framework].map((key) => [
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
        {
          name: 'official-sfc-and-git-baseline',
          setup(bundler) {
            bundler.onLoad({ filter: /\.(vue|svelte)$/ }, async ({ path }) => {
              const text = await readFile(path, 'utf8');
              if (framework === 'vue') {
                const { descriptor, errors } = parse(text, { filename: path });
                assert.deepEqual(errors, []);
                return {
                  contents: compileScript(descriptor, {
                    id: 'paired',
                    inlineTemplate: true,
                    isProd: true,
                  }).content,
                  loader: 'ts',
                  resolveDir: dirname(path),
                };
              }
              const result = compile(text, { filename: path, generate: 'client', dev: false });
              assert.deepEqual(result.warnings, []);
              return { contents: result.js.code, loader: 'js', resolveDir: dirname(path) };
            });
            bundler.onLoad({ filter: /\.ts$/ }, async ({ path }) => {
              const local = relative(root, path).replaceAll('\\', '/');
              if (!/^(core|vue|svelte)\/src\//.test(local)) return;
              let text;
              if (implementation === 'baseline' || control) {
                if (!previous.has(local))
                  previous.set(
                    local,
                    execFileSync('git', ['show', `${sha}:${local}`], {
                      cwd: root,
                      encoding: 'utf8',
                      maxBuffer: 16 * 1024 * 1024,
                    }),
                  );
                text = previous.get(local);
              } else text = await readFile(path, 'utf8');
              if (path.endsWith('.svelte.ts'))
                return {
                  contents: compileModule((await transform(text, { loader: 'ts' })).code, {
                    filename: path,
                    generate: 'client',
                    dev: false,
                  }).js.code,
                  loader: 'js',
                  resolveDir: dirname(path),
                };
              return { contents: text, loader: 'ts', resolveDir: dirname(path) };
            });
          },
        },
      ],
    });
    scripts.set('/' + framework + '-' + implementation + '.js', result.outputFiles[0].contents);
  }
const http = createServer((req, res) => {
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
  await new Promise((ok, fail) => {
    http.once('error', fail);
    http.listen(0, '127.0.0.1', ok);
  });
  browser = await launchBrowser();
  report.browser = browser.version();
  for (const framework of ['vue', 'svelte']) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`http://127.0.0.1:${http.address().port}`);
    await page.evaluate(async (framework) => {
      window.bench = {
        baseline: await import('/' + framework + '-baseline.js'),
        current: await import('/' + framework + '-current.js'),
      };
    }, framework);
    const samples = await page.evaluate(async (cases) => {
      const target = document.querySelector('#target'),
        results = [];
      // 两个 bundle 的框架/JIT 分别预热；不能把首次组件执行混入一边的中位数。
      for (const scenario of cases)
        for (const implementation of ['baseline', 'current']) {
          target.replaceChildren();
          const app = await window.bench[implementation].start(scenario, target);
          try {
            for (let i = 0; i < (scenario === 'runtime-new' ? 2 : 30); i++) {
              await app.step();
              void target.offsetHeight;
            }
          } finally {
            await app.stop();
          }
        }
      for (let round = 0; round < 5; round++)
        for (const scenario of round % 2 ? [...cases].reverse() : cases) {
          const outputs = {};
          for (const implementation of round % 2
            ? ['current', 'baseline']
            : ['baseline', 'current']) {
            target.replaceChildren();
            const start = performance.now();
            const app = await window.bench[implementation].start(scenario, target);
            const mount = performance.now() - start;
            try {
              const warmup = scenario === 'runtime-new' ? 1 : 5,
                batches = scenario === 'runtime-new' ? 5 : 30;
              for (let i = 0; i < warmup; i++) {
                await app.step();
                void target.offsetHeight;
              }
              const begin = performance.now();
              for (let i = 0; i < batches; i++) {
                await app.step();
                void target.offsetHeight;
              }
              const update = performance.now() - begin;
              const node = target.querySelector('[data-row]');
              outputs[implementation] = {
                className: node.className,
                width: getComputedStyle(node).width,
                color: getComputedStyle(node).color,
                calls: app.calls(),
                manifest: app.snapshot(),
              };
              results.push({ round, scenario, implementation, mount, update, warmup, batches });
              // 正确性断言放在计时区外：准备结果命中不能绕过外部禁用样式表的检查。
              const themeId = app.theme();
              if (themeId) {
                const sheet = [...document.querySelectorAll('style[data-zerodep-id]')].find(
                  (node) => node.getAttribute('data-zerodep-id') === themeId,
                ).sheet;
                sheet.disabled = true;
                let rejected = false;
                try {
                  app.theme();
                } catch {
                  rejected = true;
                } finally {
                  sheet.disabled = false;
                }
                if (!rejected) throw Error('Theme cache bypassed stylesheet ownership check');
              }
            } finally {
              await app.stop();
            }
            if (document.querySelectorAll('style[data-zerodep]').length)
              throw Error('Leaked stylesheet');
          }
          if (JSON.stringify(outputs.baseline) !== JSON.stringify(outputs.current))
            throw Error('Output/evaluation mismatch: ' + scenario);
        }
      return results;
    }, cases);
    assert.deepEqual(errors, []);
    await page.close();
    report.samples.push({ framework, samples });
    const median = (items) => items.sort((a, b) => a - b)[2];
    for (const scenario of cases) {
      const measures = {};
      for (const implementation of ['baseline', 'current']) {
        const values = samples.filter(
          (s) => s.scenario === scenario && s.implementation === implementation,
        );
        measures[implementation] = {
          mount: median(values.map((s) => s.mount)),
          update: median(values.map((s) => s.update)),
        };
      }
      report.results.push({
        framework,
        scenario,
        ...measures,
        updateRatio: measures.current.update / measures.baseline.update,
      });
    }
  }
  report.status = 'passed';
  console.log(JSON.stringify(report.results, null, 2));
} catch (error) {
  report.status = 'failed';
  report.error = String(error.stack ?? error);
  throw error;
} finally {
  report.currentDiffHash = createHash('sha256')
    .update(execFileSync('git', ['diff', '--', 'core/src', 'vue/src', 'svelte/src'], { cwd: root }))
    .digest('hex');
  await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
  await browser?.close();
  await new Promise((ok) => http.close(ok));
}
