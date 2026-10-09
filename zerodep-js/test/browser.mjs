import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { compile } from 'zerodep-js-compiler';
import cssCompiler from '../dist/compiler.js';
import { launchBrowser, expect } from '../../test/tools/browser.mjs';

const fixture = compile(
  await readFile(new URL('./fixture.tsx', import.meta.url), 'utf8'),
  'fixture.tsx',
  { extensions: [cssCompiler()] },
).code;
const root = fileURLToPath(new URL('..', import.meta.url));
async function bundle(platform) {
  const boot =
    platform === 'browser'
      ? `import {_mount,_hydrate} from 'zerodep-js'; import {hydrateCss} from 'zerodep-css-zerodep-js'; export function start(hydrate){hydrateCss();return (hydrate?_hydrate:_mount)(App,{target:document.querySelector('#app')});}`
      : `import {renderToString} from 'zerodep-js-ssr'; import {createServerCssHost,withCssHost,serializeCssRules} from 'zerodep-css-zerodep-js'; export function render(){const host=createServerCssHost();const html=withCssHost(host,()=>renderToString(App));return {html,...serializeCssRules(host.rules())};}`;
  const result = await build({
    stdin: { contents: fixture + boot, resolveDir: root, loader: 'js' },
    bundle: true,
    write: false,
    platform,
    format: platform === 'browser' ? 'iife' : 'esm',
    ...(platform === 'browser' ? { globalName: 'adapterFixture' } : {}),
    metafile: true,
  });
  if (platform === 'browser')
    assert.ok(
      !Object.keys(result.metafile.inputs).some(
        (p) => p.includes('@babel') || p.includes('/typescript/'),
      ),
    );
  return result.outputFiles[0].text;
}
const server = await import(
  `data:text/javascript;base64,${Buffer.from(await bundle('node')).toString('base64')}`
);
const rendered = server.render();
const client = await bundle('browser');
const browser = await launchBrowser();
try {
  for (const hydrate of [false, true]) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    try {
      await page.setContent(
        hydrate
          ? `<style data-zerodep-css>${rendered.cssText}</style><script type="application/json" data-zerodep-css>${rendered.manifest}</script><div id="app">${rendered.html}</div>`
          : '<div id="app"></div>',
      );
      if (hydrate) {
        await expect(page.locator('[data-box]')).toHaveCSS('width', '24px');
        await page.locator('[data-box]').evaluate((n) => (window.serverBox = n));
      }
      await page.addScriptTag({ content: client });
      await page.evaluate((h) => {
        window.stopAdapter = window.adapterFixture.start(h);
      }, hydrate);
      const box = page.locator('[data-box]');
      const className = await box.getAttribute('class');
      await page.getByRole('button', { name: '增加宽度' }).click();
      await expect(box).toHaveCSS('width', '28px');
      await expect(box).toHaveCSS('padding', '3px');
      assert.equal(await box.getAttribute('class'), className);
      if (hydrate) assert.equal(await box.evaluate((n) => n === window.serverBox), true);
      await page.evaluate(() => window.stopAdapter());
      await expect(page.locator('#app')).toBeEmpty();
      assert.deepEqual(errors, []);
      console.log(`zerodep-js adapter ${hydrate ? 'SSR/hydration' : 'CSR'} passed`);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
