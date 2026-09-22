import assert from 'node:assert/strict';
import { withBrowserPage } from './browser-evidence.mjs';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createServer } from 'node:http';
import { build, transform } from 'esbuild';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile, compileModule } from 'svelte/compiler';
import { launchBrowser, browserEngine } from './browser-launch.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const output = resolve(root, 'test-results/frameworks');
await mkdir(output, { recursive: true });
function components(server) {
  // 测试同一份真实组件的客户端/服务端产物，不能手写 render 函数替代模板编译。
  return {
    name: 'official-framework-compilers',
    setup(bundler) {
      bundler.onLoad({ filter: /\.vue$/ }, async ({ path }) => {
        const source = await readFile(path, 'utf8');
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
        const result = compile(await readFile(path, 'utf8'), {
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
    entryPoints: [resolve(root, `scripts/testing/frameworks/${server ? 'server' : 'client'}.mjs`)],
    outfile: resolve(output, `${server ? 'server' : 'client'}.mjs`),
    bundle: true,
    format: 'esm',
    platform: server ? 'node' : 'browser',
    target: 'es2023',
    // Node 侧保持框架单实例；CSSTree 的相对数据文件也由其原生加载器解析。
    external: server ? ['vue', 'vue/*', 'svelte', 'svelte/*', 'css-tree'] : [],
    alias: {
      '@zerodep-css/core': resolve(root, 'core/dist/index.js'),
      '@zerodep-css/core/theme-runtime': resolve(root, 'core/dist/theme-runtime.js'),
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
  // 相同 namespace、不同请求状态并发渲染，能暴露模块级 registry 的交叉污染。
  const [red, blue] = await Promise.all([
    renderPage(framework, 'red'),
    renderPage(framework, 'blue'),
  ]);
  assert(red.manifest.runtime.records.some((r) => r.body.includes('color:red')));
  assert(!red.manifest.runtime.records.some((r) => r.body.includes('color:blue')));
  assert(blue.manifest.runtime.records.some((r) => r.body.includes('color:blue')));
  assert(!blue.manifest.runtime.records.some((r) => r.body.includes('color:red')));
  assert.equal(red.manifest.globals.length, 1);
  pages[framework] = red.html;
}
const client = await readFile(resolve(output, 'client.mjs'));
const http = createServer((req, res) => {
  if (req.url === '/client.mjs') {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(client);
  } else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(pages[req.url?.slice(1)] ?? pages.vue);
  }
});
let browser;
const report = [];
try {
  await new Promise((ok) => http.listen(0, '127.0.0.1', ok));
  browser = await launchBrowser();
  for (const framework of ['vue', 'svelte']) {
    await withBrowserPage(browser, output, framework, async (page) => {
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (['warning', 'error'].includes(message.type())) errors.push(message.text());
      });
      await page.goto(`http://127.0.0.1:${http.address().port}/${framework}`);
      assert.equal(
        await page.locator('[data-inline]').evaluate((el) => getComputedStyle(el).color),
        'rgb(255, 0, 0)',
      );
      const initial = await page.evaluate(() => {
        window.oldStyles = [...document.querySelectorAll('style')];
        return window.oldStyles.length;
      });
      const hydrationMs = await page.evaluate(async (framework) => {
        const started = performance.now();
        window.fixture = await (await import('/client.mjs')).start(framework);
        return performance.now() - started;
      }, framework);
      assert.equal(
        await page.evaluate(() => window.oldStyles.every((node) => node.isConnected)),
        true,
      );
      assert.equal(await page.locator('style').count(), initial);
      const read = () =>
        page.evaluate(() => ({
          inline: document.querySelector('[data-inline]')?.className,
          derived: document.querySelector('[data-derived]')?.className,
          color: getComputedStyle(document.querySelector('[data-derived]')).color,
          width: getComputedStyle(document.querySelector('[data-derived]')).width,
          global: getComputedStyle(document.querySelector('[data-global]')).color,
          counts: { ...window.fixture.counts },
          stats: window.fixture.stats(),
        }));
      const baseline = await read();
      assert.equal(baseline.inline, baseline.derived);
      await page.locator('[data-unrelated]').click();
      assert.equal((await read()).counts.derived, baseline.counts.derived);
      await page.locator('[data-width]').click();
      await page.waitForFunction(
        () => getComputedStyle(document.querySelector('[data-derived]')).width === '21px',
      );
      const changed = await read();
      assert.notEqual(changed.derived, baseline.derived);
      assert.equal(changed.inline, changed.derived);
      await page.locator('[data-branch]').click();
      await page.waitForFunction(
        () => getComputedStyle(document.querySelector('[data-derived]')).color === 'rgb(0, 128, 0)',
      );
      const branched = await read();
      await page.locator('[data-color]').click();
      await page.waitForFunction(
        () => getComputedStyle(document.querySelector('[data-global]')).color === 'rgb(0, 0, 255)',
      );
      const inactive = await read();
      assert.equal(inactive.counts.derived, branched.counts.derived);
      assert.equal(inactive.derived, branched.derived);
      assert.equal(inactive.stats.globals, 1);
      await page.locator('[data-branch]').click();
      await page.waitForFunction(
        () => getComputedStyle(document.querySelector('[data-derived]')).color === 'rgb(0, 0, 255)',
      );
      await page.locator('[data-stop-global]').click();
      const stopped = await read();
      assert.equal(stopped.stats.globals, 0);
      await page.locator('[data-color]').click();
      const reused = await read();
      assert.equal(reused.counts.global, stopped.counts.global);
      assert.equal(reused.derived, changed.derived);
      await page.locator('[data-toggle]').click();
      assert.equal(await page.locator('[data-inline]').count(), 0);
      assert.equal(
        await page.locator('[data-survivor]').evaluate((el) => getComputedStyle(el).padding),
        '7px',
      );
      await page.locator('[data-toggle]').click();
      assert.equal((await read()).stats.globals, 1);
      await page.locator('[data-toggle]').click();
      assert.equal(await page.evaluate(() => window.fixture.stats().globals), 0);
      const stats = await page.evaluate(async () => {
        const stats = await window.fixture.destroy();
        window.fixture.dispose();
        return stats;
      });
      assert.equal(stats.globals, 0);
      assert.equal(await page.locator('style').count(), 0);
      // 无服务端 DOM/样式的普通客户端挂载，使用同一已构建包入口。
      await page.evaluate(async (framework) => {
        document.querySelector('#app').replaceChildren();
        window.fixture = await (await import('/client.mjs')).start(framework, false);
      }, framework);
      assert.equal((await read()).width, '20px');
      assert.equal((await read()).global, 'rgb(255, 0, 0)');
      await page.evaluate(async () => {
        await window.fixture.destroy();
        window.fixture.dispose();
      });
      assert.equal(await page.locator('style').count(), 0);
      assert.deepEqual(errors, []);
      report.push({
        engine: browserEngine,
        framework,
        browser: browser.version(),
        ssrIsolated: true,
        hydrationMs,
        hydrationStyleNodes: initial,
        baseline,
        changed,
        inactive,
        finalStats: stats,
      });
    });
  }
  await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(
    JSON.stringify({
      passed: report.map((r) => r.framework),
      scenarios:
        'SSR isolation, hydration, native updates, derived cache, branch dependencies, global disposal, shared classes',
    }),
  );
} finally {
  await browser?.close();
  await new Promise((ok) => http.close(ok));
}
