import assert from 'node:assert/strict';
import { launchBrowser } from './browser.mjs';
import { bundle } from './mup-bundle.mjs';
import { assertInitial, exerciseExample } from './example-assertions.mjs';

const browser = await launchBrowser();
try {
  for (const framework of ['vue', 'svelte']) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      await page.setContent('<div id="app"></div>');
      await page.addScriptTag({
        content: await bundle(framework, 'browser', `${framework}-examples-driver.ts`),
      });
      await page.evaluate(async () => {
        window.exampleControl = await window.mupBundle.start(document.querySelector('#app'));
      });
      await assertInitial(page);
      await exerciseExample(page);
      await page.evaluate(() => window.exampleControl.dispose());
      assert.equal(await page.locator('[data-sample]').count(), 0);
      assert.deepEqual(errors, []);
      console.log(JSON.stringify({ framework, examples: 'browser', status: 'passed' }));
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
