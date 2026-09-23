import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { build } from 'esbuild';
import { launchBrowser } from '../../../scripts/testing/browser-launch.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

test('独立 runtime 模块共享浏览器宿主所有权', async () => {
  // 两个 URL 各自实例化完整 runtime；只有 host.js 是同一个浏览器模块。
  const bundled = await build({
    entryPoints: [resolve(root, 'core/dist/runtime.js')],
    bundle: true,
    format: 'esm',
    platform: 'browser',
    target: 'es2023',
    write: false,
    plugins: [
      {
        name: 'shared-host',
        setup(bundler) {
          bundler.onResolve({ filter: /^\.\/host\.js$/ }, () => ({
            path: '/host.js',
            external: true,
          }));
        },
      },
    ],
  });
  const runtimeJs = bundled.outputFiles[0].contents;
  const hostJs = await readFile(resolve(root, 'core/dist/host.js'));
  const http = createServer((request, response) => {
    if (request.url === '/host.js') {
      response.setHeader('Content-Type', 'text/javascript');
      response.end(hostJs);
    } else if (request.url === '/runtime-a.js' || request.url === '/runtime-b.js') {
      response.setHeader('Content-Type', 'text/javascript');
      response.end(runtimeJs);
    } else {
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.end('<!doctype html><html><head></head><body></body></html>');
    }
  });
  let browser;
  try {
    await new Promise((ok, fail) => {
      http.once('error', fail);
      http.listen(0, '127.0.0.1', ok);
    });
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${http.address().port}/`);
    const result = await page.evaluate(async () => {
      const [a, b] = await Promise.all([import('/runtime-a.js'), import('/runtime-b.js')]);
      const message = (action) => {
        try {
          action();
          return '';
        } catch (error) {
          return error.message;
        }
      };
      const property = (g, size) =>
        g.property('--shared-size', (d) => {
          d.syntax.raw('"<length>"');
          d.inherits.false;
          d.initialValue.raw(size + 'px');
        });
      const first = a.createRuntime({ namespace: 'same' });
      const sameTarget = message(() => b.createRuntime({ namespace: 'same' }));
      first.dispose();
      const reopened = b.createRuntime({ namespace: 'same' });
      reopened.dispose();

      const left = a.createRuntime({ namespace: 'left' });
      const right = b.createRuntime({ namespace: 'right' });
      const claim = left.mountGlobal((g) => property(g, 1));
      const crossRuntime = message(() => right.mountGlobal((g) => property(g, 2)));
      const rightAfterFailure = right.stats().globals;
      claim.dispose();
      const retry = right.mountGlobal((g) => property(g, 2));
      const retryCount = right.stats().globals;
      retry.dispose();
      left.dispose();
      right.dispose();

      const element = document.createElement('div');
      document.body.append(element);
      const shadow = element.attachShadow({ mode: 'open' });
      const shadowRuntime = a.createRuntime({ target: shadow, namespace: 'shadow' });
      const pageRuntime = b.createRuntime({ namespace: 'page' });
      const shadowClaim = shadowRuntime.mountGlobal((g) => property(g, 3));
      const crossShadow = message(() => pageRuntime.mountGlobal((g) => property(g, 4)));
      shadowClaim.dispose();
      shadowRuntime.dispose();
      pageRuntime.dispose();
      const shadowRemaining = shadow.querySelectorAll('style[data-zerodep]').length;
      element.remove();
      return {
        independent: a.createRuntime !== b.createRuntime,
        sameTarget,
        crossRuntime,
        rightAfterFailure,
        retryCount,
        crossShadow,
        remaining: document.querySelectorAll('style[data-zerodep]').length,
        shadowRemaining,
      };
    });
    assert.equal(result.independent, true);
    assert.match(result.sameTarget, /already has a runtime/);
    assert.match(result.crossRuntime, /Conflicting @property registration: --shared-size/);
    assert.equal(result.rightAfterFailure, 0);
    assert.equal(result.retryCount, 1);
    assert.match(result.crossShadow, /Conflicting @property registration: --shared-size/);
    assert.equal(result.remaining, 0);
    assert.equal(result.shadowRemaining, 0);
  } finally {
    await browser?.close();
    if (http.listening) await new Promise((ok) => http.close(ok));
  }
});
