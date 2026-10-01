import assert from 'node:assert/strict';
import { launchBrowser, expect } from '../tools/browser.mjs';
import { bundle } from '../tools/mup-bundle.mjs';
import vuePlugin from '../../vue/dist/vite.js';
import sveltePlugin from '../../svelte/dist/vite.js';

const browser = await launchBrowser();
try {
  for (const framework of ['vue', 'svelte']) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      await page.setContent('<div id="app"></div>');
      const plugin = framework === 'vue' ? vuePlugin() : sveltePlugin();
      const options = {
        dist: true,
        vueCompilerOptions: framework === 'vue' ? plugin.api.compilerOptions : undefined,
        transformSfc: (code, id) =>
          plugin.transform.call({ warn: (message) => errors.push(String(message)) }, code, id)
            ?.code ?? code,
      };
      await page.addScriptTag({
        content: await bundle(framework, 'browser', `${framework}-keywords-driver.ts`, options),
      });
      await page.evaluate(async () => {
        window.keywordApp = await window.mupBundle.start(document.querySelector('#app'));
      });
      const root = page.locator('[data-keyword-content="root"]');
      const nested = page.locator('[data-keyword-content="nested"]');
      const sibling = page.locator('[data-keyword-content="sibling"]');
      await expect(root).toHaveCSS('color', 'rgb(29, 78, 216)');
      await expect(nested).toHaveCSS('color', 'rgb(147, 197, 253)');
      await page.locator('[data-keyword-dark]').click();
      await expect(root).toHaveCSS('color', 'rgb(147, 197, 253)');
      await expect(sibling).toHaveCSS('color', 'rgb(147, 197, 253)');
      await page.locator('[data-keyword-light]').click();
      await expect(root).toHaveCSS('color', 'rgb(29, 78, 216)');
      await expect(sibling).toHaveCSS('color', 'rgb(29, 78, 216)');
      await expect(nested).toHaveCSS('color', 'rgb(147, 197, 253)');
      const initialClass = await root.getAttribute('class');
      await page.locator('[data-keyword-width]').click();
      await expect(root).toHaveCSS('width', '18px');
      await expect(sibling).toHaveCSS('width', '18px');
      await expect(nested).toHaveCSS('width', '12px');
      assert.equal(await root.getAttribute('class'), initialClass);
      await page.evaluate(() => window.keywordApp.dispose());
      assert.deepEqual(errors, []);
      console.log(
        `${framework}: injected keywords, reactive replacement and scope isolation passed`,
      );
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
