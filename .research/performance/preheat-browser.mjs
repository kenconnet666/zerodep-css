// 手工接线实验后端 + 官方 SFC 编译器；不是已经发布的编译插件功能。
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { createServer } from 'node:http';
import { gzipSync } from 'node:zlib';
import { pathToFileURL } from 'node:url';
import { build, transform } from 'esbuild';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile, compileModule } from 'svelte/compiler';
import { root } from '../../scripts/lib/environment.mjs';
import { launchBrowser } from '../../scripts/testing/browser-launch.mjs';
import { prototypePlugin } from './preheat-prototype.mjs';

const label = process.argv[2] ?? 'current';
const control = process.argv.includes('--control');
assert.match(label, /^[a-z0-9-]+$/);
const input = JSON.parse(
  await readFile(resolve(root, 'test-results/preheat', label, 'artifacts.json'), 'utf8'),
);
const output = resolve(root, 'test-results/preheat-browser', label);
await mkdir(output, { recursive: true });
const modes = ['baseline', 'ir', 'body', 'template', 'full'],
  frameworks = ['vue', 'svelte'];
const scripts = new Map(),
  ssrInputs = { vue: {}, svelte: {} },
  report = { status: 'building', control, samples: [], sizes: [], checks: [], results: [] };
await writeFile(resolve(output, 'results.json'), JSON.stringify(report));
for (const framework of frameworks)
  for (const kind of modes) {
    const folder = resolve(output, framework + '-' + kind);
    await mkdir(folder, { recursive: true });
    const component = resolve(folder, 'App.' + framework);
    const imports = `import {useStyleRuntime} from '@zerodep-css/${framework}';import {prepareStyle} from '@zerodep-css/core/compiler-runtime';${kind === 'baseline' ? '' : "import {attach} from 'research:preheat';import {artifacts} from './data.js';"}`;
    const prepared = input.sources
      .map((s, i) => `prepareStyle(${s},${JSON.stringify(i.toString(16).padStart(64, '0'))})`)
      .map((s, i) => (kind === 'baseline' ? s : `attach(${s},artifacts[${i}])`));
    const setup = `const {css}=useStyleRuntime({context});const factories=[${prepared.join(',')}];const rows=Array.from({length:192},(_,i)=>i);`;
    const source =
      framework === 'vue'
        ? `<script setup>import {ref} from 'vue';${imports}const {context,expose,hidden}=defineProps(['context','expose','hidden']);const show=ref(!hidden),frame=ref(0);${setup}expose({reveal(){show.value=true},step(){frame.value++},check(){return css(factories[0])}});</script><template><main :data-frame="frame"><div v-if="show"><div v-for="row in rows" :key="row" data-row :class="css(factories[row%64])"></div></div></main></template>`
        : `<script>import {untrack} from 'svelte';${imports}let {context,expose,hidden}=$props();let show=$state(untrack(()=>!hidden)),frame=$state(0);${setup.replace('{context}', '{context:untrack(()=>context)}')}untrack(()=>expose({reveal(){show=true},step(){frame++},check(){return css(factories[0])}}));</script><main data-frame={frame}>{#if show}<div>{#each rows as row(row)}<div data-row class={css(factories[row%64])}></div>{/each}</div>{/if}</main>`;
    await writeFile(component, source);
    if (kind !== 'baseline')
      await writeFile(
        resolve(folder, 'data.js'),
        `function freeze(v){if(v&&typeof v==='object'){Object.values(v).forEach(freeze);Object.freeze(v);}return v;}export const artifacts=freeze(${JSON.stringify(input.artifacts[kind])});`,
      );
    const driver = resolve(folder, 'driver.js');
    await writeFile(
      driver,
      `import App from './App.${framework}';import {createStyleContext} from '@zerodep-css/core';${framework === 'vue' ? "import {createApp,createSSRApp,nextTick} from 'vue';" : "import {mount,hydrate,unmount,tick} from 'svelte';"}
export async function start(target,hidden=false,manifest){const context=createStyleContext(manifest?{hydrate:manifest}:{});let controls;const props={context,hidden,expose(v){controls=v}};
${framework === 'vue' ? 'const app=(manifest?createSSRApp:createApp)(App,props);app.mount(target);await nextTick();' : 'const app=(manifest?hydrate:mount)(App,{target,props});await tick();'}
if(manifest)context.completeHydration();
return {async reveal(){controls.reveal();await ${framework === 'vue' ? 'nextTick()' : 'tick()'}},async step(){controls.step();await ${framework === 'vue' ? 'nextTick()' : 'tick()'}},check:()=>controls.check(),snapshot:()=>context.snapshot(),async stop(){${framework === 'vue' ? 'app.unmount();' : 'await unmount(app);'}context.dispose();}};}`,
    );
    let serverMode = false;
    const buildOptions = {
      entryPoints: [driver],
      bundle: true,
      write: false,
      platform: 'browser',
      format: 'esm',
      minify: true,
      target: 'es2023',
      define: {
        'process.env.NODE_ENV': '"production"',
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      },
      alias: Object.fromEntries(
        ['core/compiler-runtime', 'core/style-scope', 'core', framework].map((key) => [
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
        prototypePlugin({ patch: kind !== 'baseline' && !control }),
        {
          name: 'official-sfc',
          setup(bundler) {
            bundler.onLoad({ filter: /\.(vue|svelte)$/ }, async ({ path }) => {
              const text = await readFile(path, 'utf8');
              if (framework === 'vue') {
                const parsed = parse(text, { filename: path });
                assert.deepEqual(parsed.errors, []);
                return {
                  contents: compileScript(parsed.descriptor, {
                    id: 'preheat',
                    inlineTemplate: true,
                    isProd: true,
                    templateOptions: { ssr: serverMode },
                  }).content,
                  loader: 'ts',
                  resolveDir: dirname(path),
                };
              }
              const result = compile(text, {
                filename: path,
                generate: serverMode ? 'server' : 'client',
                dev: false,
              });
              assert.deepEqual(result.warnings, []);
              return { contents: result.js.code, loader: 'js', resolveDir: dirname(path) };
            });
            bundler.onLoad({ filter: /\.svelte\.ts$/ }, async ({ path }) => ({
              contents: compileModule(
                (await transform(await readFile(path, 'utf8'), { loader: 'ts' })).code,
                { filename: path, generate: serverMode ? 'server' : 'client', dev: false },
              ).js.code,
              loader: 'js',
              resolveDir: dirname(path),
            }));
          },
        },
      ],
    };
    const result = await build(buildOptions);
    const bytes = result.outputFiles[0].contents;
    scripts.set('/' + framework + '-' + kind + '.js', bytes);
    report.sizes.push({ framework, kind, minified: bytes.length, gzip: gzipSync(bytes).length });
    if (kind === 'baseline' || kind === 'template') {
      const serverEntry = resolve(folder, 'ssr.js'),
        serverFile = resolve(folder, 'server.mjs');
      await writeFile(
        serverEntry,
        `import App from './App.${framework}';import {createStyleContext} from '@zerodep-css/core';${framework === 'vue' ? "import {createSSRApp} from 'vue';import {renderToString} from 'vue/server-renderer';" : "import {render as renderSvelte} from 'svelte/server';"}
export async function render(hidden=false){const context=createStyleContext({target:null});try{const props={context,hidden,expose(){}};const html=${framework === 'vue' ? 'await renderToString(createSSRApp(App,props))' : 'renderSvelte(App,{props}).body'};return {html,styles:context.renderStyles(),manifest:context.snapshot()};}finally{context.dispose();}}`,
      );
      serverMode = true;
      await build({
        ...buildOptions,
        entryPoints: [serverEntry],
        platform: 'node',
        packages: 'external',
        write: true,
        outfile: serverFile,
        minify: false,
      });
      const ssr = await import(pathToFileURL(serverFile).href);
      const a = await ssr.render(),
        b = await ssr.render();
      assert.deepEqual(a, b);
      assert.equal((await ssr.render(true)).manifest.runtime.records.length, 0);
      ssrInputs[framework][kind] = a;
    }
  }
const server = createServer((req, res) => {
  if (scripts.has(req.url)) {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(scripts.get(req.url));
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end('<!doctype html><body><div id="target"></div>');
  }
});
let browser;
try {
  await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
  browser = await launchBrowser();
  report.browser = browser.version();
  for (const framework of frameworks) {
    const page = await browser.newPage(),
      errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`http://127.0.0.1:${server.address().port}`);
    const samples = await page.evaluate(
      async ({ framework, modes, ssr }) => {
        const modules = {},
          target = document.querySelector('#target'),
          samples = [];
        for (const mode of modes)
          modules[mode] = await import('/' + framework + '-' + mode + '.js');
        for (const mode of ['baseline', 'template']) {
          const payload = ssr[mode];
          target.innerHTML = payload.html;
          const styles = document.createElement('template');
          styles.innerHTML = payload.styles;
          document.head.append(styles.content);
          const app = await modules[mode].start(target, false, payload.manifest);
          try {
            const nodes = [...target.querySelectorAll('[data-row]')];
            if (nodes.length !== 192) throw Error('Hydration lost elements');
            for (const [i, node] of nodes.entries())
              if (getComputedStyle(node).width !== 20 + (i % 64) + 'px')
                throw Error('Hydration width mismatch');
            if (app.snapshot().runtime.records.length !== payload.manifest.runtime.records.length)
              throw Error('Hydration duplicated records');
            await app.step();
          } finally {
            await app.stop();
          }
          if (document.querySelector('style[data-zerodep]'))
            throw Error('Hydration cleanup failed');
        }
        for (const mode of modes)
          for (let i = 0; i < 3; i++) {
            const app = await modules[mode].start(target);
            await app.stop();
          }
        for (let round = 0; round < 7; round++)
          for (const hidden of [false, true]) {
            let expected;
            for (const mode of round % 2 ? [...modes].reverse() : modes) {
              const begin = performance.now();
              const app = await modules[mode].start(target, hidden);
              void target.offsetHeight;
              const mount = performance.now() - begin;
              try {
                let reveal = 0;
                if (hidden) {
                  if (app.snapshot().runtime.records.length)
                    throw Error('Hidden styles registered eagerly');
                  const start = performance.now();
                  await app.reveal();
                  void target.offsetHeight;
                  reveal = performance.now() - start;
                }
                const canonical = (value) =>
                  Array.isArray(value)
                    ? value.map(canonical)
                    : value && typeof value === 'object'
                      ? Object.fromEntries(
                          Object.keys(value)
                            .sort()
                            .map((key) => [key, canonical(value[key])]),
                        )
                      : value;
                const signature = JSON.stringify(canonical(app.snapshot()));
                if (expected && signature !== expected) throw Error('Manifest mismatch: ' + mode);
                expected = signature;
                const nodes = [...target.querySelectorAll('[data-row]')];
                if (nodes.length !== 192) throw Error('Missing elements');
                nodes.forEach((node, i) => {
                  if (getComputedStyle(node).width !== 20 + (i % 64) + 'px')
                    throw Error('Wrong width');
                });
                for (let i = 0; i < 5; i++) await app.step();
                const start = performance.now();
                for (let i = 0; i < 30; i++) {
                  await app.step();
                  void target.offsetHeight;
                }
                samples.push({
                  round,
                  hidden,
                  mode,
                  mount,
                  reveal,
                  update: performance.now() - start,
                });
                // 计时外确认预计算仍走原来的宿主所有权检查。
                const element = document.querySelector('style[data-zerodep-id]');
                element.sheet.disabled = true;
                let rejected = false;
                try {
                  app.check();
                } catch {
                  rejected = true;
                } finally {
                  element.sheet.disabled = false;
                }
                if (!rejected) throw Error('Disabled sheet not detected');
              } finally {
                await app.stop();
              }
              if (document.querySelector('style[data-zerodep]')) throw Error('Leaked style');
            }
          }
        return samples;
      },
      { framework, modes, ssr: ssrInputs[framework] },
    );
    assert.deepEqual(errors, []);
    report.samples.push({ framework, samples });
    for (const hidden of [false, true])
      for (const mode of modes) {
        const row = { framework, hidden, mode };
        for (const key of ['mount', 'reveal', 'update'])
          row[key] = samples
            .filter((s) => s.hidden === hidden && s.mode === mode)
            .map((s) => s[key])
            .sort((a, b) => a - b)[3];
        report.results.push(row);
      }
    await page.close();
  }
  report.status = 'passed';
  report.checks = [
    '192 computed widths',
    'snapshot equivalence',
    'hidden branch zero records',
    'disabled sheet rejection',
    'context cleanup',
    'Vue/Svelte actual SSR, request isolation, hidden SSR, hydration and updates for baseline/template',
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
console.log(JSON.stringify({ results: report.results, sizes: report.sizes }, null, 2));
