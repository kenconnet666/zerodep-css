import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, realpath, rm } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { test } from 'node:test';
import { build } from 'esbuild';
import { launchBrowser } from '../../../scripts/testing/browser-launch.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

test('Vue 项目入口使用真实 host 完整恢复主题、全局样式并在卸载时释放', async () => {
  const outputParent = resolve(root, 'test-results');
  await mkdir(outputParent, { recursive: true });
  const boundary = await realpath(outputParent);
  const output = await mkdtemp(resolve(boundary, 'vue-project-'));
  let browser;
  let http;
  try {
    const coreAliases = {
      '@zerodep-css/core': resolve(root, 'core/dist/index.js'),
      '@zerodep-css/core/style-scope': resolve(root, 'core/dist/style-scope.js'),
    };
    await build({
      entryPoints: [resolve(root, 'vue/test/browser/project-server.mjs')],
      outfile: resolve(output, 'server.mjs'),
      bundle: true,
      format: 'esm',
      platform: 'node',
      target: 'node24',
      external: ['vue', 'vue/*', 'css-tree'],
      alias: coreAliases,
      define: { 'process.env.NODE_ENV': '"development"' },
    });
    await build({
      entryPoints: [resolve(root, 'vue/test/browser/project-client.mjs')],
      outfile: resolve(output, 'client.mjs'),
      bundle: true,
      format: 'esm',
      platform: 'browser',
      target: 'es2023',
      alias: coreAliases,
      define: { 'process.env.NODE_ENV': '"development"' },
    });

    const { renderPage } = await import(pathToFileURL(resolve(output, 'server.mjs')).href);
    const [red, blue] = await Promise.all([renderPage('red'), renderPage('blue')]);
    assert.match(red.body, /data-theme="red"/);
    assert.match(blue.body, /data-theme="blue"/);
    assert.equal(red.manifest.globals.length, 1);
    assert.equal(blue.manifest.globals.length, 1);
    assert.match(red.head, /body\{padding:7px/);
    assert.match(blue.head, /body\{padding:7px/);
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
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    await page.goto(`http://127.0.0.1:${http.address().port}/`);

    const color = () =>
      page.locator('[data-project-color]').evaluate((element) => getComputedStyle(element).color);
    assert.equal(await page.locator('[data-project-color]').getAttribute('data-theme'), 'red');
    assert.equal(await color(), 'rgb(255, 0, 0)');
    assert.equal(
      await page.locator('body').evaluate((element) => getComputedStyle(element).padding),
      '7px',
    );

    const initialStyles = await page.locator('style[data-zerodep="project"]').count();
    await page.evaluate(async () => {
      window.initialProjectStyles = [...document.querySelectorAll('style[data-zerodep="project"]')];
      window.projectApp = await (await import('/client.mjs')).start();
    });
    assert.equal(await page.locator('style[data-zerodep="project"]').count(), initialStyles);
    assert.equal(
      await page.evaluate(() => window.projectApp.secondInstallError),
      'A style host belongs to one Vue application.',
    );
    assert.equal(
      await page.evaluate(() => window.initialProjectStyles.every((node) => node.isConnected)),
      true,
    );

    await page.locator('[data-project-change]').click();
    await page.waitForFunction(() => {
      const element = document.querySelector('[data-project-color]');
      return (
        element?.getAttribute('data-theme') === 'blue' &&
        getComputedStyle(element).color === 'rgb(0, 0, 255)'
      );
    });

    await page.evaluate(() => window.projectApp.stop());
    assert.equal(await page.locator('style[data-zerodep="project"]').count(), 0);
    assert.equal(
      await page.evaluate(() => window.initialProjectStyles.every((node) => !node.isConnected)),
      true,
    );
    assert.deepEqual(errors, []);
  } finally {
    await browser?.close();
    if (http?.listening) await new Promise((ok) => http.close(ok));
    const target = await realpath(output);
    if (!target.startsWith(boundary + sep)) throw new Error('Test output leaves its workspace.');
    await rm(target, { recursive: true, force: true });
  }
});
