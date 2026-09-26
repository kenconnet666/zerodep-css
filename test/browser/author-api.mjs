import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { createServerCssHost, serializeCssRules } from '../../core/dist/server.js';
import { launchBrowser } from '../../test/tools/browser.mjs';

import { Css } from '../../core/dist/index.js';
const s = new Css();
const host = createServerCssHost();
const colorSamples = [
  [s.color.rgb('var(--red)', 20, 30, 'var(--alpha)'), 'rgb(120 20 30 / 0.5)'],
  [s.color.hsl('1turn', 'var(--saturation)', 50), 'hsl(1turn 60% 50%)'],
  [s.color.oklch(0.7, 0.15, 240), 'oklch(0.7 0.15 240)'],
  [s.color.oklab('70%', 0.1, 0.15), 'oklab(70% 0.1 0.15)'],
].map(([body, native]) => ({ className: host.css(body), native }));
host.globalCss('variables', [false, ':root{--red:120;--alpha:0.5;--saturation:60%;}']);
host.globalCss('theme', 'body{color:red;}');
host.globalCss('reset', 'body{margin:0;}');
const animation = host.keyframes('from{opacity:0;}to{opacity:1;}');
const a = host.css('color:red!important;padding:8px;');
const b = host.css('color:blue;padding-left:4px;');
const combined = host.css(a, b);
const animated = host.css(`animation-name:${animation};animation-duration:0s;`);
const { cssText, manifest } = serializeCssRules(host.rules());
const { outputFiles } = await build({
  entryPoints: [fileURLToPath(new URL('../../core/src/browser.ts', import.meta.url))],
  bundle: true,
  write: false,
  format: 'iife',
  globalName: 'api',
  platform: 'browser',
});
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.setContent(
    `<style data-zerodep-css nonce="test-nonce">${cssText}</style><script type="application/json" data-zerodep-css>${manifest}</script><div id="box" class="${combined}"></div><div id="animated" class="${animated}"></div>`,
  );
  await page.addScriptTag({ content: outputFiles[0].text });
  const modern = await page.evaluate(
    (samples) =>
      samples.map((sample) => {
        const actual = document.createElement('span'),
          expected = document.createElement('span');
        actual.className = sample.className;
        expected.style.color = sample.native;
        document.body.append(actual, expected);
        const result = {
          supported: CSS.supports('color', sample.native),
          actual: getComputedStyle(actual).color,
          expected: getComputedStyle(expected).color,
        };
        actual.remove();
        expected.remove();
        return result;
      }),
    colorSamples,
  );
  for (const sample of modern) {
    assert.equal(sample.supported, true);
    assert.equal(sample.actual, sample.expected);
  }
  const result = await page.evaluate(
    ({ a, b, combined, animation }) => {
      api.hydrateCss();
      api.globalCss('variables');
      if ('cx' in api) throw new Error('Removed cx export is still present.');
      const box = document.querySelector('#box');
      const before = {
        color: getComputedStyle(box).color,
        padding: getComputedStyle(box).paddingLeft,
        animation: getComputedStyle(document.querySelector('#animated')).animationName,
      };
      const same = api.css([a, false, [null, b]]) === combined;
      const count = api.cssStats().rules;
      api.globalCss('theme', 'body{color:blue;}');
      const blue = getComputedStyle(document.body).color;
      api.globalCss('theme', 'body{color:red;}');
      const red = getComputedStyle(document.body).color;
      const first = document.querySelector('style[data-zerodep-global]');
      api.globalCss('theme', 'body{color:red;}');
      const sameNode = first === document.querySelector('style[data-zerodep-global]');
      document.querySelector('style[data-zerodep-css]').remove();
      const recovered = api.css('color:red!important;padding:8px;') === a;
      const after = getComputedStyle(box).color;
      const nonces = [...document.querySelectorAll('style')].map((node) => node.nonce);
      api.globalCss('theme');
      const removed = api.cssStats().globals === 1;
      api.globalCss('theme', 'body{color:green;}');
      const keys = [...document.querySelectorAll('style[data-zerodep-global]')].map(
        (node) => node.textContent,
      );
      api.disposeCss();
      return {
        before,
        same,
        count,
        blue,
        red,
        sameNode,
        recovered,
        after,
        nonces,
        removed,
        keys,
        finalCount: document.querySelectorAll('style').length,
        animation,
      };
    },
    { a, b, combined, animation },
  );
  assert.equal(result.before.color, 'rgb(255, 0, 0)');
  assert.equal(result.before.padding, '4px');
  assert.equal(result.before.animation, animation);
  assert.equal(result.same, true);
  assert.equal(result.blue, 'rgb(0, 0, 255)');
  assert.equal(result.red, 'rgb(255, 0, 0)');
  assert.equal(result.sameNode, true);
  assert.equal(result.recovered, true);
  assert.equal(result.after, result.before.color);
  assert.ok(result.nonces.every((nonce) => nonce === 'test-nonce'));
  assert.equal(result.removed, true);
  assert.deepEqual(result.keys, ['body{margin:0;}', 'body{color:green;}']);
  assert.equal(result.finalCount, 0);
  const placement = await page.evaluate(() => {
    const marker = document.createElement('meta');
    document.head.append(marker);
    const tail = document.createElement('style');
    document.head.append(tail);
    api.configureCss({ nonce: 'configured', insertionPoint: marker });
    api.css('color:blue;');
    const style = document.querySelector('style[data-zerodep-css]');
    return (
      style.previousSibling === marker && style.nextSibling === tail && style.nonce === 'configured'
    );
  });
  assert.equal(placement, true);
  console.log(
    JSON.stringify({ authorApi: 'passed', recovery: 'passed', nonceAndPlacement: 'passed' }),
  );
} finally {
  await browser.close();
}
