import assert from 'node:assert/strict';
import { launchBrowser } from './browser.mjs';
import { bundle } from './mup-bundle.mjs';

const browser = await launchBrowser();
try {
  for (const framework of ['vue', 'svelte']) {
    const serverSource = await bundle(framework, 'node');
    const server = await import(
      `data:text/javascript;base64,${Buffer.from(serverSource).toString('base64')}`
    );
    const rendered = await server.renderPage(24);
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      await page.setContent(
        `<style data-zerodep-css>${rendered.cssText}</style><main id="app">${rendered.html}</main>`,
      );
      const before = await page.locator('#app').innerHTML();
      await page.addScriptTag({ content: await bundle(framework, 'browser') });
      const mismatch = await page.evaluate((rules) => {
        try {
          window.mupBundle.restore([{ ...rules[0], body: 'color:purple;' }]);
          return '';
        } catch (error) {
          return error.message;
        }
      }, rendered.rules);
      assert.match(mismatch, /manifest does not match/);
      await page.evaluate(async (rules) => {
        window.mupBundle.restore(rules);
        window.mupControl = await window.mupBundle.start(document.querySelector('#app'), true);
      }, rendered.rules);
      const button = page.locator('#app button');
      assert.equal(await button.count(), 1);
      assert.equal(await button.evaluate((node) => getComputedStyle(node).width), '24px');
      assert.equal(await page.locator('style[data-zerodep-css]').count(), 1);
      assert.equal(
        await page.evaluate(
          () => document.querySelector('style[data-zerodep-css]').sheet.cssRules.length,
        ),
        1,
      );
      assert.equal(await page.locator('#app').innerHTML(), before);
      await page.evaluate(() => window.mupControl.step());
      assert.equal(await button.evaluate((node) => getComputedStyle(node).width), '25px');
      assert.equal(
        await page.evaluate(
          () => document.querySelector('style[data-zerodep-css]').sheet.cssRules.length,
        ),
        2,
      );
      await page.evaluate(() => window.mupControl.dispose());
      assert.deepEqual(errors, []);
      console.log(JSON.stringify({ framework, status: 'passed', hydratedRules: 1 }));
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
