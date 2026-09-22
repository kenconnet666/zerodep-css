// 作者体验研究：真实官方 SSR 编译器验证上下文语义，不改变产品实现。
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile, realpath, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { compile, compileModule } from 'svelte/compiler';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { render } from 'svelte/server';
import { defineTheme, createRuntime, Css } from '../../core/dist/index.js';
import { provideTheme, useTheme } from '../../vue/dist/index.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const output = resolve(root, 'test-results/api-usability');
await mkdir(output, { recursive: true });
const temporary = await mkdtemp(resolve(output, 'probe-'));
const results = {};
try {
  const theme = defineTheme('probe', { color: 'red' });
  let vueValues;
  await renderToString(
    createSSRApp({
      setup() {
        const before = useTheme(theme);
        const scope = provideTheme(theme, () => ({ color: 'blue' }));
        vueValues = {
          before: before().color,
          implicit: useTheme(theme)().color,
          explicit: useTheme(theme, scope)().color,
        };
        return () => h('output', JSON.stringify(vueValues));
      },
    }),
  );
  results.vue = vueValues;
  const source = `<script>
import {defineTheme,provideTheme,useTheme} from '@zerodep-css/svelte';
const theme=defineTheme('probe',{color:'red'});
const before=useTheme(theme);
const scope=provideTheme(theme,()=>({color:'blue'}));
const current=useTheme(theme);
const explicit=useTheme(theme,scope);
</script><output>{JSON.stringify({before:before().color,implicit:current().color,explicit:explicit().color})}</output>`;
  const compiled = compile(source, { filename: 'ThemeProbe.svelte', generate: 'server' });
  assert.deepEqual(compiled.warnings, []);
  const bundle = resolve(temporary, 'svelte.mjs');
  await build({
    stdin: { contents: compiled.js.code, resolveDir: root },
    outfile: bundle,
    bundle: true,
    format: 'esm',
    platform: 'node',
    external: ['svelte', 'svelte/*', 'css-tree'],
    alias: {
      '@zerodep-css/core/theme-runtime': resolve(root, 'core/dist/theme-runtime.js'),
      '@zerodep-css/core': resolve(root, 'core/dist/index.js'),
      '@zerodep-css/svelte': resolve(root, 'svelte/dist/index.js'),
    },
    plugins: [
      {
        name: 'official-runes',
        setup(bundler) {
          bundler.onLoad({ filter: /\.svelte\.js$/ }, async ({ path }) => ({
            contents: compileModule(await readFile(path, 'utf8'), {
              filename: path,
              generate: 'server',
            }).js.code,
            resolveDir: dirname(path),
            loader: 'js',
          }));
        },
      },
    ],
  });
  const component = (await import(pathToFileURL(bundle).href)).default;
  const html = render(component).body;
  const match = /<output>(.*?)<\/output>/.exec(html);
  assert(match);
  results.svelte = JSON.parse(match[1].replaceAll('&quot;', '"'));
  assert.deepEqual(results.vue, { before: 'red', implicit: 'blue', explicit: 'blue' });
  assert.deepEqual(results.svelte, { before: 'red', implicit: 'blue', explicit: 'blue' });

  class AppCss extends Css {
    control() {
      this.padding.px(8);
    }
  }
  const runtime = createRuntime({ target: null });
  try {
    runtime.css((s) => s.control(), AppCss);
    runtime.mountGlobal((g) => g.rule('button', (s) => s.control(), AppCss));
    assert.match(runtime.renderStyles(), /button\{padding:8px\}/);
    results.globalCustomCss = { supported: true };
  } finally {
    runtime.dispose();
  }
  await writeFile(resolve(output, 'results.json'), JSON.stringify(results, null, 2) + '\n');
  console.log(JSON.stringify(results, null, 2));
} finally {
  const actual = await realpath(temporary);
  assert.equal(dirname(actual), await realpath(output));
  assert(actual.startsWith(resolve(await realpath(output), 'probe-')));
  await rm(actual, { recursive: true });
}
