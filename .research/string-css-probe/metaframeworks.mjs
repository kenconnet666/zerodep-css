import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchBrowser } from './browser.mjs';
import { startNode, startStatic } from './framework-server.mjs';
import { assertInitial, exerciseExample, ruleCount } from './example-assertions.mjs';
import { assertBindings } from './binding-assertions.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const targets = {
  nuxt: { entry: '.output/server/index.mjs', staticRoots: ['.output/public'] },
  sveltekit: { entry: 'build/index.js', staticRoots: ['build/prerendered', 'build/client'] },
};
const browser = await launchBrowser();
try {
  for (const [name, target] of Object.entries(targets)) {
    const cwd = resolve(root, name, 'test/app');
    const server = await startNode(target.entry, cwd);
    try {
      const health = await fetch(`${server.url}/${name === 'nuxt' ? 'api/health' : 'health'}`);
      assert.equal(await health.text(), 'ok');
      const firstBindings = await browser.newPage({ javaScriptEnabled: false });
      try {
        await firstBindings.goto(`${server.url}/bindings-live`);
        await assertBindings(firstBindings, false);
      } finally {
        await firstBindings.close();
      }
      const liveBindings = await browser.newPage();
      const bindingErrors = [];
      liveBindings.on('pageerror', (error) => bindingErrors.push(error.message));
      liveBindings.on('console', (message) => {
        if (/hydration/i.test(message.text())) bindingErrors.push(message.text());
      });
      try {
        await liveBindings.addInitScript(() => {
          window.cspFailures = [];
          document.addEventListener('securitypolicyviolation', (event) =>
            window.cspFailures.push(event.violatedDirective),
          );
        });
        const response = await liveBindings.goto(`${server.url}/bindings-live`);
        assert.match(response.headers()['content-security-policy'], /style-src 'nonce-/);
        await liveBindings.locator('[data-ready="true"]').waitFor();
        await assertBindings(liveBindings);
        assert.deepEqual(bindingErrors, []);
        assert.deepEqual(await liveBindings.evaluate(() => window.cspFailures), []);
      } finally {
        await liveBindings.close();
      }
      const requests = [
        { width: 24, theme: 'light' },
        { width: 40, theme: 'dark' },
      ];
      const html = await Promise.all(
        requests.map(async ({ width, theme }) => {
          const response = await fetch(`${server.url}/?width=${width}&theme=${theme}`);
          assert.equal(response.status, 200);
          if (name === 'sveltekit')
            assert.equal(response.headers.get('x-fixture-hook'), 'preserved');
          return response.text();
        }),
      );
      for (let i = 0; i < requests.length; i++) {
        const props = requests[i];
        // 禁用 JS 检查真正的 SSR 首屏，并读取尚未被客户端消费的清单。
        const firstPaint = await browser.newPage({
          javaScriptEnabled: false,
          viewport: { width: 1280, height: 720 },
        });
        try {
          await firstPaint.setContent(html[i]);
          await assertInitial(firstPaint, props.width, props.theme);
          const manifest = JSON.parse(
            await firstPaint.locator('script[data-zerodep-css]').textContent(),
          );
          if (i === 0)
            assert.equal(
              manifest.some((rule) => rule.body.includes('width:40px;')),
              false,
            );
        } finally {
          await firstPaint.close();
        }
        const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        page.on('console', (message) => {
          if (/hydration/i.test(message.text())) errors.push(message.text());
        });
        try {
          await page.goto(`${server.url}/?width=${props.width}&theme=${props.theme}`);
          await page.locator('[data-ready="true"]').waitFor();
          await assertInitial(page, props.width, props.theme);
          assert.equal(await page.locator('script[data-zerodep-css]').count(), 0);
          assert.equal(await page.locator('style[data-zerodep-css]').count(), 1);
          const initial = await ruleCount(page);
          await exerciseExample(page, props.width, props.theme, true);
          assert.equal(await ruleCount(page), initial + 1);
          await page.evaluate(() => {
            window.navigationMarker = true;
          });
          await page.locator('[data-nav="prerender"]').click();
          await page.waitForURL('**/prerender');
          await assertInitial(page, 32, 'dark');
          assert.equal(await page.evaluate(() => window.navigationMarker), true);
          assert.equal(await page.locator('style[data-zerodep-css]').count(), 1);
          assert.deepEqual(errors, []);
        } finally {
          await page.close();
        }
      }
    } finally {
      await server.close();
    }
    const files = await startStatic(target.staticRoots.map((path) => resolve(cwd, path)));
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      await page.goto(`${files.url}/prerender`);
      await page.locator('[data-ready="true"]').waitFor();
      await assertInitial(page, 32, 'dark');
      await exerciseExample(page, 32, 'dark', true);
      await page.goto(`${files.url}/bindings`);
      await page.locator('[data-ready="true"]').waitFor();
      await assertBindings(page);
      assert.deepEqual(errors, []);
    } finally {
      await page.close();
      await files.close();
    }
    console.log(
      JSON.stringify({
        framework: name,
        nodeSsr: 'passed',
        navigation: 'passed',
        staticDeployment: 'passed',
      }),
    );
  }
} finally {
  await browser.close();
}
