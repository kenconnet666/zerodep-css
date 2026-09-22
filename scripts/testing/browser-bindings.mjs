import assert from 'node:assert/strict';
import { withBrowserPage, prepareBrowserRun, browserRunId } from './browser-evidence.mjs';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createServer } from 'node:http';
import { build, transform } from 'esbuild';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile, compileModule } from 'svelte/compiler';
import { transformCss as vueCss } from '../../vue/dist/compiler/index.js';
import { transformCss as svelteCss } from '../../svelte/dist/compiler/index.js';
import { launchBrowser, browserEngine } from './browser-launch.mjs';
import { verifyBindingSupport } from './bindings/support.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const output = resolve(root, 'test-results/bindings');
await prepareBrowserRun(output);
function components(server) {
  // 测试同一份真实组件的客户端/服务端产物，不能手写 render 函数替代模板编译。
  return {
    name: 'official-framework-compilers',
    setup(bundler) {
      bundler.onLoad({ filter: /\.vue$/ }, async ({ path }) => {
        const original = await readFile(path, 'utf8');
        const source =
          vueCss(original, path, {
            root,
            bindings: path.endsWith('CspApp.vue') ? 'runtime' : 'variables',
            debug: path.endsWith('CspApp.vue'),
          })?.code ?? original;
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
        const source =
          svelteCss(original, path, {
            root,
            bindings: path.endsWith('CspApp.svelte') ? 'runtime' : 'variables',
            debug: path.endsWith('CspApp.svelte'),
          })?.code ?? original;
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
      '@zerodep-css/core/themes': resolve(root, 'core/dist/themes.js'),
      '@zerodep-css/vue/themes': resolve(root, 'vue/dist/themes.js'),
      '@zerodep-css/svelte/themes': resolve(root, 'svelte/dist/themes.js'),
      '@zerodep-css/core/compiler-runtime': resolve(root, 'core/dist/compiler-runtime.js'),
      '@zerodep-css/core/style-scope': resolve(root, 'core/dist/style-scope.js'),
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
  assert(a.html.includes('--zcss-'));
  assert(/:\s*20px/.test(a.html));
  assert(/:\s*35px/.test(b.html));
  assert.deepEqual(
    a.manifest.runtime.records.filter((r) => r.name?.startsWith('automatic')),
    b.manifest.runtime.records.filter((r) => r.name?.startsWith('automatic')),
  );
  assert(
    a.manifest.runtime.records
      .filter((record) => record.name === 'app-theme')
      .every((record) => !record.body.includes(':blue')),
  );
  assert(
    b.manifest.runtime.records.some(
      (record) => record.name === 'app-theme' && record.body.includes(':blue'),
    ),
  );
  pages[framework] = a.html;
  pages[framework + '-csp'] = (await renderPage(framework, 20, true)).html;
}
const client = await readFile(resolve(output, 'client.mjs'));
const http = createServer((req, res) => {
  if (req.url?.endsWith('-csp'))
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self'; style-src 'nonce-style-token'; style-src-attr 'none'",
    );
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
  browser = await launchBrowser();
  for (const framework of ['vue', 'svelte']) {
    await withBrowserPage(browser, output, framework, async (page) => {
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => {
        if (['warning', 'error'].includes(m.type())) errors.push(m.text());
      });
      await page.goto(`http://127.0.0.1:${http.address().port}/${framework}`);
      const supportProbeCases = await verifyBindingSupport(page);
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
              .filter((p) => p.startsWith('--zcss-'))
              .map((p) => [p, a.style.getPropertyValue(p)]),
            counts: { ...window.fixture?.counts },
            stats: window.fixture?.stats(),
          };
        });
      const ssr = await read();
      const presets = () =>
        page.locator('[data-preset]').evaluateAll((elements) =>
          Object.fromEntries(
            elements.map((element) => {
              const style = getComputedStyle(element),
                button = getComputedStyle(element.querySelector('[data-preset-toggle]'));
              return [
                element.getAttribute('data-preset'),
                {
                  background: style.backgroundColor,
                  color: style.color,
                  scheme: style.colorScheme,
                  padding: style.padding,
                  radius: style.borderRadius,
                  content: element.className.split(' ').at(-1),
                  buttonBackground: button.backgroundColor,
                  buttonColor: button.color,
                  localBackground: getComputedStyle(element.querySelector('[data-preset-local]'))
                    .backgroundColor,
                  localPrimary: getComputedStyle(element.querySelector('[data-preset-custom]'))
                    .backgroundColor,
                },
              ];
            }),
          ),
        );
      const ssrPresets = await presets();
      assert.equal(ssrPresets.light.background, 'rgb(255, 255, 255)');
      assert.equal(ssrPresets.light.color, 'rgb(15, 23, 42)');
      assert.equal(ssrPresets.light.scheme, 'light');
      assert.equal(ssrPresets.light.localPrimary, 'rgb(147, 51, 234)');
      assert.equal(ssrPresets.light.localBackground, ssrPresets.light.background);
      assert.equal(ssrPresets.light.buttonBackground, 'rgb(37, 99, 235)');
      assert.equal(ssrPresets.light.buttonColor, 'rgb(255, 255, 255)');
      assert.equal(ssrPresets.dark.background, 'rgb(15, 23, 42)');
      assert.equal(ssrPresets.dark.color, 'rgb(248, 250, 252)');
      assert.equal(ssrPresets.dark.scheme, 'dark');
      assert.equal(ssrPresets.dark.localPrimary, 'rgb(147, 51, 234)');
      assert.equal(ssrPresets.dark.localBackground, ssrPresets.dark.background);
      assert.equal(ssrPresets.dark.buttonBackground, 'rgb(147, 197, 253)');
      assert.equal(ssrPresets.dark.buttonColor, 'rgb(11, 18, 32)');
      assert.equal(ssrPresets.light.content, ssrPresets.dark.content);
      assert.equal(ssrPresets.light.padding, '24px');
      assert.equal(ssrPresets.light.radius, '12px');
      const themeState = () =>
        page.locator('[data-theme-leaf]').evaluateAll((elements) =>
          Object.fromEntries(
            elements.map((element) => [
              element.getAttribute('data-theme-leaf'),
              {
                color: getComputedStyle(element).color,
                background: getComputedStyle(element).backgroundColor,
                values: JSON.parse(element.getAttribute('data-theme-values')),
                gap: element.getAttribute('data-theme-gap'),
                content: element.className.split(' ').at(-1),
              },
            ]),
          ),
        );
      const ssrTheme = await themeState();
      assert.deepEqual(
        await page
          .locator('[data-custom-unit]')
          .evaluateAll((elements) => elements.map((element) => getComputedStyle(element).width)),
        Array(4).fill('22px'),
      );
      assert.equal(ssrTheme.parent.color, 'rgb(255, 0, 0)');
      assert.equal(ssrTheme.child.background, 'rgb(0, 255, 0)');
      assert.equal(ssrTheme.reset.background, 'rgb(0, 0, 0)');
      assert.equal(ssrTheme.parent.values.color.brand, 'red');
      assert.equal(ssrTheme.child.values.color.text, 'lime');
      assert.equal(ssrTheme.reset.values.color.text, 'black');
      for (const state of Object.values(ssrTheme)) assert.equal(state.gap, '4px');
      assert.deepEqual(
        await page
          .locator('[data-theme-fallback]')
          .evaluateAll((elements) =>
            elements.map((element) => element.getAttribute('data-theme-fallback')),
          ),
        ['0.5', '0.5', '0.5', '0.5'],
      );
      assert.equal(ssr.width, '20px');
      assert.equal(ssr.otherWidth, '40px');
      assert.notEqual(ssr.className, ssr.otherClass);
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
      assert.deepEqual(await presets(), ssrPresets);
      await page
        .locator('[data-presets]')
        .screenshot({ path: resolve(output, `${framework}-themes.png`) });
      const lightPanel = page.locator('[data-preset="light"]');
      await lightPanel.locator('[data-preset-toggle]').click();
      const switched = await presets();
      assert.deepEqual(switched.light, ssrPresets.dark);
      assert.deepEqual(switched.dark, ssrPresets.dark);
      await lightPanel.locator('[data-preset-toggle]').focus();
      await page.keyboard.press('Tab');
      assert.equal(
        await lightPanel
          .locator('[data-preset-input]')
          .evaluate((element) => getComputedStyle(element).outlineStyle),
        'solid',
      );
      for (let index = 0; index < 19; index++)
        await lightPanel.locator('[data-preset-toggle]').click();
      assert.deepEqual(await presets(), ssrPresets);
      assert.deepEqual((await read()).stats, initial.stats);
      assert.deepEqual(await themeState(), ssrTheme);
      assert.equal(initial.height, '7px');
      assert.equal(initial.border, '2px');
      const automatic = first.locator('[data-auto]');
      const automaticClass = await automatic.getAttribute('class');
      assert(automaticClass.includes('automatic-'));
      assert.equal(await automatic.evaluate((e) => getComputedStyle(e).width), '10px');
      await first.locator('[data-auto-change]').click();
      assert.equal(await automatic.evaluate((e) => getComputedStyle(e).width), '11px');
      assert.equal(await automatic.evaluate((e) => getComputedStyle(e).padding), '2px 11px');
      assert.equal(await automatic.getAttribute('class'), automaticClass);
      assert.deepEqual((await read()).stats, initial.stats);
      assert.equal(
        await page
          .locator('[data-instance="b"] [data-auto]')
          .evaluate((e) => getComputedStyle(e).width),
        '10px',
      );
      await automatic.hover();
      assert.equal(await automatic.evaluate((e) => getComputedStyle(e).width), '12px');
      await first.locator('[data-bound]').click();
      const bound = await read();
      assert.equal(bound.width, '21px');
      assert.equal(bound.inlineWidth, '21px');
      assert.equal(bound.otherWidth, '40px');
      // 含显式用户副作用的回调保留原生运行时重算；自动路径由独立组件覆盖。
      assert.notEqual(bound.className, initial.className);
      assert(bound.counts.shared > initial.counts.shared);
      assert(bound.stats.classes > initial.stats.classes);
      assert.equal(bound.transform, 'matrix(1, 0, 0, 1, 3, 4)');
      assert.equal(bound.padding, '1px 3px 3px 4px');
      await first.locator('[data-other]').click();
      await first.locator('[data-row]').click();
      assert.equal(
        await first.locator('[data-row-id="a"]').evaluate((e) => getComputedStyle(e).width),
        '12px',
      );
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
      assert.equal((await read()).className, beforeColor.className);
      const autoValue = first.locator('[data-auto-value]');
      const valueClass = await autoValue.getAttribute('class');
      const valueStats = (await read()).stats;
      assert.equal(await autoValue.evaluate((e) => getComputedStyle(e).color), 'rgb(255, 0, 0)');
      await first.locator('[data-auto-color]').click();
      assert.equal(await autoValue.evaluate((e) => getComputedStyle(e).color), 'rgb(0, 0, 255)');
      assert.equal(await autoValue.getAttribute('class'), valueClass);
      assert.deepEqual((await read()).stats, valueStats);
      await first.locator('[data-auto-color]').click();
      assert.equal(await autoValue.evaluate((e) => getComputedStyle(e).color), 'rgb(0, 0, 0)');
      await first.locator('[data-auto-color]').click();
      assert.equal(await autoValue.evaluate((e) => getComputedStyle(e).color), 'rgb(255, 0, 0)');
      assert.equal(await autoValue.evaluate((e) => e.style.length), 0);
      await first.locator('[data-auto-color]').click();
      assert.equal(await autoValue.getAttribute('class'), valueClass);
      const sibling = first.locator('[data-auto-sibling]');
      assert.equal(await sibling.evaluate((element) => getComputedStyle(element).width), '10px');
      await first.locator('[data-sibling-change]').click();
      assert.equal(await sibling.evaluate((element) => getComputedStyle(element).width), '20px');
      await page.locator('[data-theme-move]').click();
      assert.equal(await page.locator('#theme-portal [data-theme-leaf="portal"]').count(), 1);
      await page.locator('[data-theme-parent-change]').click();
      const changedTheme = await themeState();
      for (const name of ['parent', 'sibling', 'child', 'portal']) {
        assert.equal(changedTheme[name].color, 'rgb(0, 0, 255)');
        assert.equal(changedTheme[name].values.color.brand, 'blue');
      }
      assert.equal(changedTheme.reset.color, 'rgb(255, 0, 0)');
      assert.equal(changedTheme.reset.values.color.brand, 'red');
      assert.equal(changedTheme.child.background, 'rgb(0, 255, 0)');
      await page.locator('[data-theme-local]').click();
      const localTheme = await themeState();
      assert.equal(localTheme.child.background, 'rgb(255, 255, 0)');
      assert.equal(localTheme.parent.background, 'rgb(0, 0, 0)');
      assert.equal(localTheme.child.values.color.text, 'yellow');
      assert.equal(localTheme.parent.values.color.text, 'black');
      await page.locator('[data-theme-spacing]').click();
      for (const state of Object.values(await themeState())) assert.equal(state.gap, '8px');
      assert.deepEqual(
        await page
          .locator('[data-theme-leaf]')
          .evaluateAll((elements) => elements.map((element) => getComputedStyle(element).padding)),
        Array(5).fill('8px'),
      );
      for (const name of Object.keys(localTheme))
        assert.equal(localTheme[name].content, ssrTheme[name].content);
      assert.equal(
        await page.evaluate(
          () =>
            window.fixture
              .snapshot()
              .runtime.records.filter((record) => record.name === 'themed-content').length,
        ),
        1,
      );
      const count = Number(await page.locator('[data-differential]').getAttribute('data-count'));
      assert(
        Number.isSafeInteger(count) && count >= 14,
        'Differential cases must not be silently skipped.',
      );
      for (let index = 0; index < count * 2; index++) {
        const values = await page.evaluate(() =>
          ['candidate', 'reference'].map((kind) => {
            const style = getComputedStyle(document.querySelector('[data-diff-' + kind + ']'));
            return {
              color: style.color,
              width: style.width,
              display: style.display,
              padding: style.padding,
              margin: style.marginLeft,
              opacity: style.opacity,
            };
          }),
        );
        assert.deepEqual(values[0], values[1], `${framework} differential case ${index % count}`);
        await page.locator('[data-diff-next]').click();
      }
      await page.evaluate(async () => {
        await window.fixture.destroy();
        window.fixture.dispose();
      });
      assert.equal(await page.locator('style').count(), 0);
      await page.evaluate(async (framework) => {
        window.fixture = await (await import('/client.mjs')).start(framework, false);
      }, framework);
      assert.equal((await read()).width, '20px');
      assert.deepEqual(await themeState(), ssrTheme);
      await page.evaluate(async () => {
        await window.fixture.destroy();
        window.fixture.dispose();
      });
      assert.deepEqual(errors, []);
      report.push({
        framework,
        ssr,
        initial,
        bound,
        ordinary,
        ssrTheme,
        changedTheme,
        localTheme,
        ssrPresets,
        switched,
        differentialCases: count * 2,
        supportProbeCases,
      });
    });
  }
  for (const framework of ['vue', 'svelte']) {
    await withBrowserPage(browser, output, framework + '-strict-csp', async (page) => {
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (['warning', 'error'].includes(message.type())) errors.push(message.text());
      });
      await page.goto(`http://127.0.0.1:${http.address().port}/${framework}-csp`);
      const element = page.locator('[data-csp-value]');
      const read = () =>
        element.evaluate((node) => ({
          width: getComputedStyle(node).width,
          color: getComputedStyle(node).color,
          className: node.className,
        }));
      const ssr = await read();
      assert.equal(ssr.width, '20px');
      assert.equal(ssr.color, 'rgb(255, 0, 0)');
      assert.equal(await page.locator('[data-csp-shadow]').getAttribute('class'), 'local3');
      assert.equal(await page.locator('[style]').count(), 0);
      await page.evaluate(async (framework) => {
        window.fixture = await (await import('/client.mjs')).start(framework, true, true);
      }, framework);
      assert.deepEqual(await read(), ssr);
      await page.locator('[data-csp-change]').click();
      const updated = await read();
      assert.equal(updated.width, '21px');
      assert.notEqual(updated.className, ssr.className);
      assert.equal(await page.locator('[style]').count(), 0);
      assert(
        await page
          .locator('style')
          .evaluateAll((nodes) => nodes.every((node) => node.nonce === 'style-token')),
      );
      await page.evaluate(async () => {
        await window.fixture.destroy();
        window.fixture.dispose();
      });
      assert.equal(await page.locator('style').count(), 0);
      assert.deepEqual(errors, []);
      report.push({ framework, strictCsp: true, ssr, updated });
    });
  }
  await writeFile(
    resolve(output, 'results.json'),
    JSON.stringify(
      { runId: browserRunId, engine: browserEngine, status: 'passed', passed: true, report },
      null,
      2,
    ),
  );
  console.log(
    'VERIFIED: automatic CSS, presets, differential values, strict CSP, SSR/hydration, scopes and disposal',
  );
} finally {
  await browser?.close();
  await new Promise((ok) => http.close(ok));
}
