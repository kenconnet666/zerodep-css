import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, realpath, rm } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { test } from 'node:test';
import { build, transform } from 'esbuild';
import { compile, compileModule } from 'svelte/compiler';
import { launchBrowser } from '../../../scripts/testing/browser-launch.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

function components(server) {
  return {
    name: 'project-styles-components',
    setup(bundler) {
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

test('项目入口、根宿主、主题与水合使用同一请求运行时', async () => {
  const outputParent = resolve(root, 'test-results');
  await mkdir(outputParent, { recursive: true });
  const boundary = await realpath(outputParent);
  const output = await mkdtemp(resolve(boundary, 'svelte-project-'));
  let browser;
  let http;
  try {
    for (const server of [true, false]) {
      await build({
        entryPoints: [
          resolve(root, `svelte/test/browser/project-${server ? 'server' : 'client'}.mjs`),
        ],
        outfile: resolve(output, `${server ? 'server' : 'client'}.mjs`),
        bundle: true,
        format: 'esm',
        platform: server ? 'node' : 'browser',
        target: 'es2023',
        external: server ? ['svelte', 'svelte/*', 'css-tree'] : [],
        alias: {
          '@zerodep-css/core': resolve(root, 'core/dist/index.js'),
          '@zerodep-css/core/style-scope': resolve(root, 'core/dist/style-scope.js'),
        },
        define: { 'process.env.NODE_ENV': '"development"' },
        plugins: [
          {
            name: 'built-project-styles',
            setup(bundler) {
              bundler.onResolve({ filter: /^\.\.\/\.\.\/src\/styles\.js$/ }, ({ importer }) =>
                importer.endsWith('ProjectStyles.ts')
                  ? { path: resolve(root, 'svelte/dist/styles.js') }
                  : undefined,
              );
            },
          },
          components(server),
        ],
      });
    }
    const { renderPage } = await import(pathToFileURL(resolve(output, 'server.mjs')).href);
    const [red, blue, inherited] = await Promise.all([
      renderPage('red', 'getter'),
      renderPage('blue', 'static'),
      renderPage('blue', 'inherit'),
    ]);
    assert(red.html.includes('data-theme="red"'));
    assert(blue.html.includes('data-theme="blue"'));
    assert(inherited.html.includes('data-theme="red"'));
    assert(red.html.includes('project-body'));
    assert(red.manifest.globals.length === 1);
    assert(!red.html.includes('data-theme="blue"'));
    assert(!blue.html.includes('data-theme="red"'));

    const client = await readFile(resolve(output, 'client.mjs'));
    http = createServer((request, response) => {
      if (request.url === '/client.mjs') {
        response.setHeader('Content-Type', 'text/javascript');
        response.end(client);
      } else {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(red.html);
      }
    });
    await new Promise((ok, fail) => {
      http.once('error', fail);
      http.listen(0, '127.0.0.1', ok);
    });
    browser = await launchBrowser();
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`http://127.0.0.1:${http.address().port}/`);
    const color = () =>
      page.locator('[data-project-color]').evaluate((element) => getComputedStyle(element).color);
    assert.equal(await color(), 'rgb(255, 0, 0)');
    assert.equal(
      await page.locator('body').evaluate((element) => getComputedStyle(element).padding),
      '7px',
    );
    const before = await page.locator('style[data-zerodep]').count();
    await page.evaluate(async () => {
      window.initialStyles = [...document.querySelectorAll('style[data-zerodep]')];
      window.projectFixture = await (await import('/client.mjs')).start();
    });
    assert.equal(await page.locator('style[data-zerodep]').count(), before);
    assert.equal(
      await page.evaluate(() => window.initialStyles.every((node) => node.isConnected)),
      true,
    );
    assert.match(
      await page.evaluate(() => window.projectFixture.secondRootError()),
      /already provided to another root/,
    );
    await page.locator('[data-project-change]').click();
    await page.waitForFunction(
      () =>
        getComputedStyle(document.querySelector('[data-project-color]')).color === 'rgb(0, 0, 255)',
    );
    await page.evaluate(() => window.projectFixture.remount());
    assert.equal(await color(), 'rgb(0, 0, 255)');
    assert.equal(await page.locator('[data-project-color]').getAttribute('data-theme'), 'blue');
    await page.evaluate(() => window.projectFixture.stop());
    assert.equal(await page.locator('style[data-zerodep]').count(), 0);
    assert.deepEqual(errors, []);
  } finally {
    await browser?.close();
    if (http?.listening) await new Promise((ok) => http.close(ok));
    const target = await realpath(output);
    if (!target.startsWith(boundary + sep)) throw new Error('Test output leaves its workspace.');
    await rm(target, { recursive: true, force: true });
  }
});
