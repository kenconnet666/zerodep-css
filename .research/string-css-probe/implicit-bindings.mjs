import assert from 'node:assert/strict';
import { mkdir, writeFile, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import vuePlugin from '../../vue/dist/vite.js';
import sveltePlugin from '../../svelte/dist/vite.js';
import { bundle } from './mup-bundle.mjs';
import { launchBrowser } from './browser.mjs';

const browser = await launchBrowser();
const output = new URL('../../test-results/implicit-bindings/', import.meta.url);
await mkdir(output, { recursive: true });
try {
  for (const framework of ['vue', 'svelte']) {
    const plugin = framework === 'vue' ? vuePlugin() : sveltePlugin();
    const options = {
      dist: true,
      transformSfc: (code, id) =>
        plugin.transform.call({ warn: (message) => console.log(message) }, code, id)?.code ?? code,
    };
    const source = await bundle(framework, 'browser', `${framework}-implicit-driver.ts`, options);
    const serverCode = await bundle(framework, 'node', `${framework}-implicit-server.ts`, options);
    const serverFile = new URL(`${framework}-server.mjs`, output);
    await writeFile(serverFile, serverCode);
    const server = await import(serverFile.href);
    await unlink(serverFile);
    const rendered = await server.renderPage();
    for (const hydrate of [false, true]) {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      try {
        const html = `${hydrate ? `<style data-zerodep-css nonce="binding-test">${rendered.cssText}</style><script type="application/json" data-zerodep-css>${rendered.manifest}</script>` : ''}<div data-global="24"></div><div data-global="40"></div><main id="app">${hydrate ? rendered.html : ''}</main>`;
        await page.addInitScript(() => {
          window.cspFailures = [];
          document.addEventListener('securitypolicyviolation', (event) =>
            window.cspFailures.push(event.violatedDirective),
          );
        });
        await page.route('http://bindings.test/**', (route) =>
          route.fulfill({
            status: 200,
            contentType: 'text/html',
            headers: {
              'Content-Security-Policy': "style-src 'nonce-binding-test'; style-src-attr 'none'",
            },
            body: html,
          }),
        );
        await page.goto('http://bindings.test/');
        if (hydrate)
          assert.equal(
            await page
              .locator('[data-instance="24"] [data-bound="box"]')
              .evaluate((node) => getComputedStyle(node).width),
            '24px',
          );
        await page.addScriptTag({ content: source });
        await page.evaluate(async (hydrate) => {
          if (hydrate) window.mupBundle.restore();
          else window.mupBundle.configure({ nonce: 'binding-test' });
          window.control = await window.mupBundle.start(document.querySelector('#app'), hydrate);
        }, hydrate);
        const inspect = () =>
          page.evaluate(() => ({
            stats: window.mupBundle.stats(),
            globals: [...document.querySelectorAll('[data-global]')].map(
              (node) => getComputedStyle(node).color,
            ),
            nodes: [...document.querySelectorAll('[data-instance]')].map((root) => {
              const box = root.querySelector('[data-bound="box"]');
              const style = getComputedStyle(box);
              const animated = root.querySelector('[data-bound="animated"]');
              const animationName = getComputedStyle(animated).animationName;
              const animation = [
                ...document.querySelector('style[data-zerodep-css]').sheet.cssRules,
              ].find((rule) => rule.name === animationName);
              const variable = animation.cssRules[0].style.opacity.match(/var\(([^)]+)\)/)[1];
              return {
                className: box.className,
                width: style.width,
                padding: style.padding,
                color: style.color,
                transform: style.transform,
                animationName,
                frameValue: Number(getComputedStyle(animated).getPropertyValue(variable)),
                dual: [
                  getComputedStyle(root.querySelector('[data-bound="dual"]')).width,
                  getComputedStyle(root.querySelector('[data-bound="dual"]')).height,
                ],
                sibling: getComputedStyle(root.querySelector('[data-bound="sibling"]')).marginLeft,
                forwarded: getComputedStyle(root.querySelector('[data-bound="forward"]')).width,
                snapshot: getComputedStyle(root.querySelector('[data-bound="snapshot"]')).height,
                rows: [...root.querySelectorAll('[data-row]')].map((node) => [
                  node.dataset.row,
                  getComputedStyle(node).width,
                ]),
              };
            }),
          }));
        const initial = await inspect();
        if (hydrate) assert.equal(initial.stats.rules, rendered.rules.length);
        assert.equal(initial.nodes[0].width, '24px');
        assert.equal(initial.nodes[1].width, '40px');
        for (let i = 0; i < 4; i++) await page.evaluate(() => window.control.step(0));
        const changed = await inspect();
        assert.equal(changed.nodes[0].width, '28px');
        assert.equal(changed.nodes[0].padding, '7px 28px');
        assert.equal(changed.nodes[0].color, 'rgba(14, 20, 30, 0.75)');
        assert.deepEqual(changed.globals, ['rgb(14, 0, 0)', 'rgb(10, 0, 0)']);
        assert.notEqual(changed.nodes[0].transform, initial.nodes[0].transform);
        assert.equal(changed.nodes[0].snapshot, '24px');
        assert.deepEqual(changed.nodes[0].dual, ['7px', '112px']);
        assert.equal(changed.nodes[0].sibling, '28px');
        assert.equal(changed.nodes[0].forwarded, '28px');
        assert.equal(changed.nodes[0].frameValue, 0.375);
        assert.equal(changed.nodes[0].animationName, initial.nodes[0].animationName);
        assert.deepEqual(changed.nodes[1], initial.nodes[1]);
        assert.equal(changed.nodes[0].className, initial.nodes[0].className);
        assert.equal(changed.stats.rules, initial.stats.rules);
        assert.deepEqual(changed.nodes[0].rows, [
          ['a', '15px'],
          ['b', '22px'],
        ]);
        await page.evaluate(() => window.control.reorder());
        const reordered = await inspect();
        assert.deepEqual(reordered.nodes[0].rows, [
          ['b', '22px'],
          ['a', '15px'],
        ]);
        assert.equal(reordered.stats.rules, initial.stats.rules);
        assert.deepEqual(errors, []);
        assert.deepEqual(await page.evaluate(() => window.cspFailures), []);
        await page.evaluate(() => window.control.dispose());
        assert.equal(await page.locator('[data-instance]').count(), 0);
        console.log(
          JSON.stringify({
            framework,
            hydrate,
            implicitBindings: 'passed',
            rules: initial.stats.rules,
          }),
        );
      } finally {
        await page.close();
      }
    }
  }
} finally {
  await browser.close();
}
