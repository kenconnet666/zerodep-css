import assert from 'node:assert/strict';
import { launchBrowser } from './browser.mjs';
import { bundle } from './mup-bundle.mjs';

const browser = await launchBrowser();
try {
  for (const framework of ['vue', 'svelte']) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      await page.setContent('<main id="first"></main><main id="second"></main>');
      await page.addScriptTag({ content: await bundle(framework, 'browser') });
      await page.evaluate(async () => {
        window.first = await window.mupBundle.start(document.querySelector('#first'));
        window.second = await window.mupBundle.start(document.querySelector('#second'));
        if (window.first.author === window.second.author)
          throw new Error('Two app roots shared an author instance.');
      });
      const first = page.locator('#first button');
      const second = page.locator('#second button');
      const width = (button) => button.evaluate((node) => getComputedStyle(node).width);
      const color = (button) => button.evaluate((node) => getComputedStyle(node).color);
      const rules = () =>
        page.evaluate(
          () => document.querySelector('style[data-zerodep-css]').sheet.cssRules.length,
        );
      assert.equal(await width(first), '24px');
      assert.equal(await width(second), '24px');
      assert.equal(await color(first), 'rgb(255, 0, 0)');
      assert.equal(await rules(), 1);
      await page.evaluate(() => window.first.step());
      assert.equal(await width(first), '25px');
      assert.equal(await width(second), '24px');
      assert.equal(await rules(), 2);
      await page.hover('#first button');
      assert.equal(await color(first), 'rgb(0, 0, 255)');
      await page.evaluate(() => window.first.preset());
      assert.equal(await width(first), '48px');
      assert.equal(await rules(), 3);
      if (framework === 'vue') {
        await page.evaluate(() => {
          const node = document.createElement('div');
          node.className = window.mupBundle.duplicateClass();
          node.id = 'duplicate';
          document.body.append(node);
        });
        assert.equal(await color(page.locator('#duplicate')), 'rgb(0, 0, 255)');
      }
      await page.evaluate(async () => {
        await window.first.dispose();
        await window.second.dispose();
      });
      assert.deepEqual(errors, []);
      console.log(JSON.stringify({ framework, status: 'passed', rules: await rules() }));
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
