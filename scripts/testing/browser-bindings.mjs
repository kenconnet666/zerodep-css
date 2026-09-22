import assert from 'node:assert/strict';
import { withBrowserPage } from './browser-evidence.mjs';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createServer } from 'node:http';
import { build, transform } from 'esbuild';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile, compileModule } from 'svelte/compiler';
import { transformBx as vueBx } from '../../vue/dist/compiler/index.js';
import { transformBx as svelteBx } from '../../svelte/dist/compiler/index.js';
import { chromium } from '@playwright/test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const output = resolve(root, 'test-results/bindings');
await mkdir(output, { recursive: true });
function components(server) {
  // 测试同一份真实组件的客户端/服务端产物，不能手写 render 函数替代模板编译。
  return {
    name: 'official-framework-compilers',
    setup(bundler) {
      bundler.onLoad({ filter: /\.vue$/ }, async ({ path }) => {
        const original = await readFile(path, 'utf8');
        const source = vueBx(original, path, { root })?.code ?? original;
        const { descriptor, errors } = parse(source, { filename: path });
        if (errors.length) throw errors[0];
        const compiled = compileScript(descriptor, {
          id: path,
          inlineTemplate: true,
          templateOptions: { ssr: server },
        });
        return { contents: compiled.content, loader: 'ts', resolveDir: dirname(path) };
      });
      bundler.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
        const original = await readFile(path, 'utf8');
        const source = svelteBx(original, path, { root })?.code ?? original;
        const result = compile(source, {
          filename: path,
          generate: server ? 'server' : 'client',
          dev: !server,
        });
        if (result.warnings.length) throw new Error(JSON.stringify(result.warnings));
        return { contents: result.js.code, loader: 'js', resolveDir: dirname(path) };
      });
      bundler.onLoad({ filter: /\.svelte\.[jt]s$/ }, async ({ path }) => {
        // svelte-package 保留 rune 模块，消费者还须通过官方 compileModule。
        const source = await readFile(path, 'utf8');
        const js = path.endsWith('.ts') ? (await transform(source, { loader: 'ts' })).code : source;
        const result = compileModule(js, {
          filename: path,
          generate: server ? 'server' : 'client',
          dev: !server,
        });
        return { contents: result.js.code, loader: 'js', resolveDir: dirname(path) };
      });
    },
  };
}
for (const server of [true, false]) {
  await build({
    entryPoints: [resolve(root, `scripts/testing/bindings/${server ? 'server' : 'client'}.mjs`)],
    outfile: resolve(output, `${server ? 'server' : 'client'}.mjs`),
    bundle: true,
    format: 'esm',
    platform: server ? 'node' : 'browser',
    target: 'es2023',
    // Node 侧保持框架单实例；CSSTree 的相对数据文件也由其原生加载器解析。
    external: server ? ['vue', 'vue/*', 'svelte', 'svelte/*', 'css-tree'] : [],
    alias: {
      '@zerodep-css/core/binding': resolve(root, 'core/dist/binding.js'),
      '@zerodep-css/vue/compiler-runtime': resolve(root, 'vue/dist/compiler-runtime.js'),
      '@zerodep-css/core': resolve(root, 'core/dist/index.js'),
      '@zerodep-css/vue': resolve(root, 'vue/dist/index.js'),
      '@zerodep-css/svelte': resolve(root, 'svelte/dist/index.js'),
    },
    define: {
      'process.env.NODE_ENV': '"development"',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
    },
    plugins: [components(server)],
  });
}
const { renderPage } = await import(pathToFileURL(resolve(output, 'server.mjs')).href);
const pages = {};
for (const framework of ['vue', 'svelte']) {
  const [a, b] = await Promise.all([renderPage(framework, 20), renderPage(framework, 35)]);
  assert(a.html.includes('--zbx-'));
  assert(/:\s*20px/.test(a.html));
  assert(/:\s*35px/.test(b.html));
  assert.deepEqual(a.manifest.runtime.records, b.manifest.runtime.records);
  pages[framework] = a.html;
}
const client = await readFile(resolve(output, 'client.mjs'));
const http = createServer((req, res) => {
  res.setHeader(
    'Content-Type',
    req.url === '/client.mjs' ? 'text/javascript' : 'text/html; charset=utf-8',
  );
  res.end(req.url === '/client.mjs' ? client : pages[req.url?.slice(1)]);
});
let browser;
const report = [];
try {
  await new Promise((ok) => http.listen(0, '127.0.0.1', ok));
  const channel = process.env.ZERODEP_BROWSER_CHANNEL ?? 'chrome';
  browser = await chromium.launch({
    channel: channel === 'chromium' ? undefined : channel,
    headless: true,
  });
  for (const framework of ['vue', 'svelte']) {
    await withBrowserPage(browser, output, framework, async (page) => {
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => {
        if (['warning', 'error'].includes(m.type())) errors.push(m.text());
      });
      await page.goto(`http://127.0.0.1:${http.address().port}/${framework}`);
      const first = page.locator('[data-instance="a"]');
      const read = () =>
        page.evaluate(() => {
          const a = document.querySelector('[data-instance="a"] [data-shared]');
          const b = document.querySelector('[data-instance="b"] [data-shared]');
          const inline = document.querySelector('[data-instance="a"] [data-inline]');
          return {
            className: a.className,
            otherClass: b.className,
            width: getComputedStyle(a).width,
            otherWidth: getComputedStyle(b).width,
            inlineWidth: getComputedStyle(inline).width,
            height: getComputedStyle(a).height,
            padding: getComputedStyle(a).padding,
            transform: getComputedStyle(a).transform,
            border: getComputedStyle(a).borderTopWidth,
            variables: [...a.style]
              .filter((p) => p.startsWith('--zbx-'))
              .map((p) => [p, a.style.getPropertyValue(p)]),
            counts: { ...window.fixture?.counts },
            stats: window.fixture?.stats(),
          };
        });
      const ssr = await read();
      assert.equal(ssr.width, '20px');
      assert.equal(ssr.otherWidth, '40px');
      assert.equal(ssr.className, ssr.otherClass);
      await page.evaluate(async (framework) => {
        window.initialStyles = [...document.querySelectorAll('style')];
        window.fixture = await (await import('/client.mjs')).start(framework);
      }, framework);
      assert(
        await page.evaluate(
          () =>
            window.initialStyles.every((s) => s.isConnected) &&
            window.initialStyles.length === document.querySelectorAll('style').length,
        ),
      );
      const initial = await read();
      assert.equal(initial.height, '7px');
      assert.equal(initial.border, '2px');
      await first.locator('[data-bound]').click();
      const bound = await read();
      assert.equal(bound.width, '21px');
      assert.equal(bound.inlineWidth, '21px');
      assert.equal(bound.otherWidth, '40px');
      assert.equal(bound.className, initial.className);
      assert.deepEqual(bound.counts, initial.counts);
      assert.deepEqual(bound.stats, initial.stats);
      assert.equal(bound.transform, 'matrix(1, 0, 0, 1, 3, 4)');
      assert.equal(bound.padding, '1px 3px 3px 4px');
      await first.locator('[data-other]').click();
      assert.deepEqual((await read()).counts, initial.counts);
      await first.locator('[data-row]').click();
      assert.equal(
        await first.locator('[data-row-id="a"]').evaluate((e) => getComputedStyle(e).width),
        '12px',
      );
      assert.deepEqual((await read()).counts, initial.counts);
      await first.locator('[data-reorder]').click();
      assert.deepEqual(
        await first
          .locator('[data-row-id]')
          .evaluateAll((elements) =>
            elements.map((e) => [e.getAttribute('data-row-id'), getComputedStyle(e).width]),
          ),
        [
          ['b', '22px'],
          ['a', '12px'],
        ],
      );
      await first.locator('[data-visible]').click();
      assert.equal(await first.locator('[data-shared-copy]').count(), 0);
      await first.locator('[data-bound]').click();
      await first.locator('[data-visible]').click();
      assert.equal(
        await first.locator('[data-shared-copy]').evaluate((e) => getComputedStyle(e).width),
        '22px',
      );
      const beforeColor = await read();
      await first.locator('[data-color]').click();
      const ordinary = await read();
      assert.notEqual(ordinary.className, initial.className);
      assert(ordinary.counts.shared > beforeColor.counts.shared);
      assert.equal(ordinary.otherClass, initial.otherClass);
      await first.locator('[data-color]').click();
      assert.equal((await read()).className, initial.className);
      await page.evaluate(async () => {
        await window.fixture.destroy();
        window.fixture.dispose();
      });
      assert.equal(await page.locator('style').count(), 0);
      await page.evaluate(async (framework) => {
        window.fixture = await (await import('/client.mjs')).start(framework, false);
      }, framework);
      assert.equal((await read()).width, '20px');
      await page.evaluate(async () => {
        await window.fixture.destroy();
        window.fixture.dispose();
      });
      assert.deepEqual(errors, []);
      report.push({ framework, ssr, initial, bound, ordinary });
    });
  }
  await writeFile(
    resolve(output, 'results.json'),
    JSON.stringify({ passed: true, report }, null, 2),
  );
  console.log(
    'VERIFIED: bx client/SSR/hydration, units, multiple values, shared classes, instance isolation, keyed lists and disposal',
  );
} finally {
  await browser?.close();
  await new Promise((ok) => http.close(ok));
}
