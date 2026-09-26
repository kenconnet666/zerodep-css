import assert from 'node:assert/strict';
import { launchBrowser } from '../../.research/string-css-probe/browser.mjs';
import { Css } from '../../core/dist/index.js';
import { createRuleRegistry } from '../../core/test/runtime/runtime.mjs';

class AppCss extends Css {
  theme = { brand: 'color:purple;' };
}

const s = new AppCss();
assert.equal(s.theme.brand, 'color:purple;');
const rules = [];
const registry = createRuleRegistry((name, body) => rules.push(`.${name}{${body}}`));
const parts = [
  s.color.red,
  s._hover([false, s.color.raw('var(--hover-color)')]),
  s._active(s.color.green),
  s._selector('& > .icon', s.opacity.raw('0.6'), 'text-decoration:underline;'),
  s._selector('@media (min-width: 100px)', 'border-left-width:3px;', 'border-left-style:solid;'),
  s._focus(s.outlineStyle.solid),
  s._focusVisible(s.outlineWidth.px(3)),
  s._focusWithin(s.borderRightStyle.solid),
  s._before(s.content.raw('"before"')),
  s._after(s.content.raw('"after"')),
  s._disabled(s.opacity.raw(0.4)),
  s._checked(s.outlineWidth.px(5), s.outlineStyle.solid),
];
const className = registry.css(...parts);
assert.equal(registry.css(...parts), className);
assert.equal(registry.size, 1);
assert.equal(rules.length, 1);

const browser = await launchBrowser();
try {
  const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
  try {
    await page.setContent(
      `<button class="${className}" style="--hover-color:blue"><span class="icon">text</span></button><input type="checkbox" class="${className}">`,
    );
    await page.evaluate((rule) => {
      const style = document.createElement('style');
      document.head.append(style);
      style.sheet.insertRule(rule, 0);
    }, rules[0]);
    const color = () => page.locator('button').evaluate((node) => getComputedStyle(node).color);
    assert.equal(await color(), 'rgb(255, 0, 0)');
    await page.hover('button');
    assert.equal(await color(), 'rgb(0, 0, 255)');
    await page
      .locator('button')
      .evaluate((node) => node.style.setProperty('--hover-color', 'purple'));
    assert.equal(await color(), 'rgb(128, 0, 128)');
    await page.mouse.down();
    assert.equal(await color(), 'rgb(0, 128, 0)');
    await page.mouse.up();
    assert.equal(
      await page.locator('.icon').evaluate((node) => getComputedStyle(node).textDecorationLine),
      'underline',
    );
    assert.equal(
      await page.locator('.icon').evaluate((node) => getComputedStyle(node).opacity),
      '0.6',
    );
    assert.equal(
      await page.locator('button').evaluate((node) => getComputedStyle(node).borderLeftWidth),
      '3px',
    );
    await page.keyboard.press('Tab');
    await page.locator('button').focus();
    assert.equal(
      await page.locator('button').evaluate((node) => getComputedStyle(node).outlineWidth),
      '3px',
    );
    assert.equal(
      await page.locator('button').evaluate((node) => getComputedStyle(node).outlineStyle),
      'solid',
    );
    assert.equal(
      await page.locator('button').evaluate((node) => getComputedStyle(node).borderRightStyle),
      'solid',
    );
    assert.equal(
      await page.locator('button').evaluate((node) => getComputedStyle(node, '::before').content),
      '"before"',
    );
    assert.equal(
      await page.locator('button').evaluate((node) => getComputedStyle(node, '::after').content),
      '"after"',
    );
    await page.locator('button').evaluate((node) => {
      node.disabled = true;
    });
    assert.equal(
      await page.locator('button').evaluate((node) => getComputedStyle(node).opacity),
      '0.4',
    );
    await page.locator('input').check();
    assert.equal(
      await page.locator('input').evaluate((node) => getComputedStyle(node).outlineWidth),
      '5px',
    );
    console.log(JSON.stringify({ status: 'passed', browser: browser.version(), rule: rules[0] }));
  } finally {
    await page.close();
  }
} finally {
  await browser.close();
}
