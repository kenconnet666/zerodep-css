import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage();
  try {
    await page.setContent(`
      <style>
        #duplicate { color: red; color: blue; }
        #literal { width: 12px; width: invalid; }
        #variable { width: 12px; width: var(--width); }
      </style>
      <div id="duplicate"></div>
      <div id="literal"></div>
      <div id="variable" style="--width: invalid"></div>
    `);
    const result = await page.evaluate(() => ({
      duplicate: getComputedStyle(document.querySelector('#duplicate')).color,
      literal: getComputedStyle(document.querySelector('#literal')).width,
      variable: getComputedStyle(document.querySelector('#variable')).width,
    }));
    assert.equal(result.duplicate, 'rgb(0, 0, 255)');
    assert.equal(result.literal, '12px');
    assert.notEqual(result.variable, '12px');
    console.log(JSON.stringify(result));
  } finally {
    await page.close();
  }
} finally {
  await browser.close();
}
