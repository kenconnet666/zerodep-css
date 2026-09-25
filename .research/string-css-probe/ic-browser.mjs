import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { Css, useCss } from '../../core/src/author.ts';
import { createCss } from '../../core/src/css.ts';
import { ic } from '../../core/src/ic.ts';

class AppCss extends Css {
  theme = { brand: 'color:purple;' };
}

const s = useCss(AppCss);
assert.equal(s.theme.brand, 'color:purple;');
const rules = [];
const registry = createCss((name, body) => rules.push(`.${name}{${body}}`));
const parts = [
  s.color.red,
  ic('&:hover', s.color.raw('var(--hover-color)')),
  ic('&:active', s.color.green),
  ic('& > .icon', s.opacity.raw('0.6'), 'text-decoration:underline;'),
  ic('@media (min-width: 100px)', 'border-left-width:3px;', 'border-left-style:solid;'),
];
const className = registry.css(...parts);
assert.equal(registry.css(...parts), className);
assert.equal(registry.size, 1);
assert.equal(rules.length, 1);

const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
  try {
    await page.setContent(
      `<button class="${className}" style="--hover-color:blue"><span class="icon">text</span></button>`,
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
    console.log(JSON.stringify({ status: 'passed', browser: browser.version(), rule: rules[0] }));
  } finally {
    await page.close();
  }
} finally {
  await browser.close();
}
