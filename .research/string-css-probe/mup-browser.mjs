import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { chromium } from '@playwright/test';
import { compile } from 'svelte/compiler';

const directory = dirname(fileURLToPath(import.meta.url));
async function bundle(framework) {
  const result = await build({
    entryPoints: [resolve(directory, `${framework}-mup-driver.ts`)],
    bundle: true,
    write: false,
    format: 'iife',
    globalName: 'mupBundle',
    platform: 'browser',
    target: 'es2023',
    define: {
      'process.env.NODE_ENV': '"production"',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    },
    plugins:
      framework === 'svelte'
        ? [
            {
              name: 'single-svelte-runtime',
              setup(bundler) {
                bundler.onResolve({ filter: /^svelte(?:\/.*)?$/ }, async (args) => {
                  if (args.pluginData?.singleSvelte) return;
                  const result = await bundler.resolve(args.path, {
                    resolveDir: directory,
                    kind: args.kind,
                    pluginData: { singleSvelte: true },
                  });
                  return { path: result.path, errors: result.errors };
                });
              },
            },
            {
              name: 'svelte-compiler',
              setup(bundler) {
                bundler.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
                  const source = await readFile(path, 'utf8');
                  const result = compile(source, {
                    filename: path,
                    generate: 'client',
                    dev: false,
                  });
                  assert.deepEqual(
                    result.warnings.filter((item) => item.code !== 'state_referenced_locally'),
                    [],
                  );
                  return { contents: result.js.code, loader: 'js', resolveDir: dirname(path) };
                });
              },
            },
          ]
        : [],
  });
  return result.outputFiles[0].text;
}

const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  for (const framework of ['vue', 'svelte']) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      await page.setContent('<main id="first"></main><main id="second"></main>');
      await page.addScriptTag({ content: await bundle(framework) });
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
