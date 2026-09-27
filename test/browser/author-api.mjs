import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { createServerCssHost, serializeCssRules } from '../../core/dist/server.js';
import { launchBrowser } from '../../test/tools/browser.mjs';

import { Css } from '../../core/dist/index.js';
import { ProjectCss } from '../../core/examples/project-css.ts';
const s = new Css();
const host = createServerCssHost();
const colorSamples = [
  [s.color.rgb('var(--red)', 20, 30, 'var(--alpha)'), 'rgb(120 20 30 / 0.5)'],
  [s.color.hsl('1turn', 'var(--saturation)', 50), 'hsl(1turn 60% 50%)'],
  [s.color.oklch(0.7, 0.15, 240), 'oklch(0.7 0.15 240)'],
  [s.color.oklab('70%', 0.1, 0.15), 'oklab(70% 0.1 0.15)'],
].map(([body, native]) => ({ className: host.css(body), native }));
const gridSamples = [
  ['grid-template-columns', s.gridTemplateColumns.repeat(2, '20px', '1fr'), 'repeat(2, 20px 1fr)'],
  ['grid-template-rows', s.gridTemplateRows.repeat('auto-fill', '20px'), 'repeat(auto-fill, 20px)'],
  [
    'grid-template-columns',
    s.gridTemplateColumns.repeat('auto-fit', 'minmax(20px, 1fr)'),
    'repeat(auto-fit, minmax(20px, 1fr))',
  ],
  ...[
    ['grid-template-columns', s.gridTemplateColumns],
    ['grid-template-rows', s.gridTemplateRows],
    ['grid-auto-columns', s.gridAutoColumns],
    ['grid-auto-rows', s.gridAutoRows],
  ].flatMap(([property, author]) => [
    [property, author.minmax(0, '1fr'), 'minmax(0, 1fr)'],
    [property, author.fitContent('50%'), 'fit-content(50%)'],
  ]),
].map(([property, body, native]) => ({
  property,
  native,
  className: host.css(s.display.grid, s.width.px(240), s.height.px(120), body),
}));
const project = new ProjectCss();
const projectClasses = {
  parent: host.css(project.theme({ text: '#7c3aed', surface: '#faf5ff' })),
  text: host.css(project.color._text, project.backgroundColor._surface),
  nested: host.css(project.theme({ text: '#166534' })),
  conditions: host.css(
    project._media('(min-width: 1px)', s.width.px(25)),
    project._supports('(display: grid)', s.height.px(19)),
    project._container('(min-width: 200px)', s.opacity.raw(0.5)),
  ),
};
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
  const grids = await page.evaluate(
    (samples) =>
      samples.map((sample) => {
        const actual = document.createElement('div'),
          expected = document.createElement('div');
        actual.className = sample.className;
        expected.style.cssText = 'display:grid;width:240px;height:120px;';
        expected.style.setProperty(sample.property, sample.native);
        actual.innerHTML = expected.innerHTML = '<span>track</span>'.repeat(6);
        document.body.append(actual, expected);
        const result = {
          supported: CSS.supports(sample.property, sample.native),
          actual: getComputedStyle(actual).getPropertyValue(sample.property),
          expected: getComputedStyle(expected).getPropertyValue(sample.property),
        };
        actual.remove();
        expected.remove();
        return result;
      }),
    gridSamples,
  );
  for (const sample of grids) {
    assert.equal(sample.supported, true);
    assert.equal(sample.actual, sample.expected);
  }
  const extension = await page.evaluate((names) => {
    const parent = document.createElement('section'),
      child = document.createElement('div'),
      sibling = document.createElement('div');
    parent.className = names.parent;
    parent.style.cssText = 'container-type:inline-size;width:240px;';
    child.className = names.text + ' ' + names.nested + ' ' + names.conditions;
    sibling.className = names.text;
    parent.append(child, sibling);
    document.body.append(parent);
    const before = {
      color: getComputedStyle(child).color,
      surface: getComputedStyle(child).backgroundColor,
      sibling: getComputedStyle(sibling).color,
      width: getComputedStyle(child).width,
      height: getComputedStyle(child).height,
      opacity: getComputedStyle(child).opacity,
    };
    child.classList.remove(names.nested);
    const restored = getComputedStyle(child).color;
    parent.remove();
    return { before, restored };
  }, projectClasses);
  assert.deepEqual(extension.before, {
    color: 'rgb(22, 101, 52)',
    surface: 'rgb(250, 245, 255)',
    sibling: 'rgb(124, 58, 237)',
    width: '25px',
    height: '19px',
    opacity: '0.5',
  });
  assert.equal(extension.restored, 'rgb(124, 58, 237)');
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
  const warnings = [];
  page.on('console', (message) => {
    if (message.type() === 'warning' && message.text().includes('[zerodep-css]'))
      warnings.push(message.text());
  });
  const diagnostics = await page.evaluate(() => {
    api.disposeCss();
    let rejected = false;
    try {
      api.configureCss({ warnAfter: 0 });
    } catch {
      rejected = true;
    }
    api.configureCss({ warnAfter: 2 });
    api.css('color:red;');
    api.css('color:blue;');
    api.css('color:blue;');
    api.css('color:green;');
    return { rejected, classes: api.cssStats().classes };
  });
  assert.deepEqual(diagnostics, { rejected: true, classes: 3 });
  assert.equal(warnings.length, 1);
  const identities = Array.from({ length: 10 }, (_, i) => {
    const key = 'owner-' + i,
      host = createServerCssHost();
    host.setBindings(key, '');
    return { key, name: host.rules()[0].className };
  });
  const released = await page.evaluate((identities) => {
    api.disposeCss();
    const baseline = api.css('color:red;');
    const widths = [];
    for (const { key, name } of identities) {
      const variable = '--' + name + '-0';
      api.setBindings(key, variable + ':12px;');
      const animation = api.keyframes('to{width:var(' + variable + ');}');
      const node = document.createElement('div');
      node.className = api.css('width:var(' + variable + ');animation-name:' + animation + ';');
      document.body.append(node);
      widths.push(getComputedStyle(node).width);
      node.remove();
      api.releaseBindings([key]);
    }
    return {
      classes: api.cssStats().classes,
      bindings: api.cssStats().bindings,
      animations: api.cssStats().animations,
      rules: document.querySelector('style[data-zerodep-css]').sheet.cssRules.length,
      widths,
      same: api.css('color:red;') === baseline,
    };
  }, identities);
  assert.deepEqual(released, {
    classes: 1,
    bindings: 0,
    animations: 0,
    rules: 1,
    widths: Array(10).fill('12px'),
    same: true,
  });

  console.log(
    JSON.stringify({ authorApi: 'passed', recovery: 'passed', nonceAndPlacement: 'passed' }),
  );
} finally {
  await browser.close();
}
