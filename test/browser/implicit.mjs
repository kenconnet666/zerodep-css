import assert from 'node:assert/strict';
import { launchBrowser, expect } from '../tools/browser.mjs';
import { bundle } from '../tools/mup-bundle.mjs';
import vuePlugin from '../../vue/dist/vite.js';
import sveltePlugin from '../../svelte/dist/vite.js';

const browser = await launchBrowser();
try {
  for (const framework of ['vue', 'svelte']) {
    const plugin = framework === 'vue' ? vuePlugin() : sveltePlugin();
    const options = {
      dist: true,
      vueCompilerOptions: plugin.api?.compilerOptions,
      transformSfc: (code, id) =>
        plugin.transform.call({ warn: console.warn }, code, id)?.code ?? code,
    };
    const source = await bundle(framework, 'node', `${framework}-implicit-server.ts`, options);
    const server = await import(
      `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
    );
    const rendered = await server.renderPage();
    const client = await bundle(framework, 'browser', `${framework}-implicit-driver.ts`, options);
    for (const hydrate of [false, true]) {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (['warning', 'error'].includes(message.type())) errors.push(message.text());
      });
      try {
        await page.setContent(
          hydrate
            ? `<style data-zerodep-css>${rendered.cssText}</style><script type="application/json" data-zerodep-css>${rendered.manifest}</script><div id="app">${rendered.html}</div>`
            : '<div id="app"></div>',
        );
        if (hydrate) {
          await expect(page.locator('[data-named]')).toHaveCSS('width', '24px');
          await expect(page.locator('[data-custom]')).toHaveCSS('opacity', '0.5');
          await page.locator('[data-named]').evaluate((node) => (node.dataset.preserved = 'true'));
        }
        await page.addScriptTag({ content: client });
        await page.evaluate(async (hydrate) => {
          window.implicitApp = await window.mupBundle.start(
            document.querySelector('#app'),
            hydrate,
          );
        }, hydrate);
        const named = page.locator('[data-named]');
        await expect(named).toHaveCSS('width', '24px');
        const before = await named.getAttribute('class');
        if (hydrate) await expect(named).toHaveAttribute('data-preserved', 'true');
        await page.locator('[data-update]').click();
        for (const selector of ['[data-named]', '[data-direct]']) {
          await expect(page.locator(selector)).toHaveCSS('width', '28px');
          await expect(page.locator(selector)).toHaveCSS('color', 'rgb(102, 51, 153)');
        }
        assert.equal(await named.getAttribute('class'), before);
        await expect(named).toHaveCSS('padding', '3px');
        await expect(page.locator('[data-row="b"]')).toHaveCSS('width', '41px');
        await expect(page.locator('[data-row="a"]')).toHaveCSS('width', '12px');
        assert.deepEqual(
          await page
            .locator('[data-row]')
            .evaluateAll((nodes) => nodes.map((node) => node.dataset.row)),
          ['b', 'a'],
        );
        await expect(page.locator('[data-shared]')).toHaveCSS('height', '28px');
        await expect(page.locator('[data-saved]')).toHaveCSS('height', '24px');
        await expect(page.locator('[data-combined]')).toHaveCSS('height', '28px');
        await expect(page.locator('[data-combined]')).toHaveCSS('color', 'rgb(255, 0, 0)');
        await expect(page.locator('[data-custom]')).toHaveCSS('opacity', '0.5');
        await page.locator('[data-invalid]').click();
        await expect(page.locator('[data-custom]')).toHaveCSS('opacity', '0.8');
        await page.evaluate(() => window.implicitApp.dispose());
        await expect(page.locator('#app')).toBeEmpty();
        assert.deepEqual(errors, []);
        console.log(`${framework} ${hydrate ? 'SSR/hydration' : 'CSR'} implicit CSS passed`);
      } finally {
        await page.close();
      }
    }
  }
} finally {
  await browser.close();
}
