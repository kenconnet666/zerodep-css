import assert from 'node:assert/strict';

export async function assertBindings(page, update = true) {
  const inspect = () =>
    page.evaluate(() => ({
      rows: [...document.querySelectorAll('[data-instance="24"] [data-row]')].map((node) => [
        node.dataset.row,
        getComputedStyle(node).width,
      ]),
      widths: [...document.querySelectorAll('[data-bound="box"]')].map(
        (node) => getComputedStyle(node).width,
      ),
      classes: [...document.querySelectorAll('[data-bound="box"]')].map((node) => node.className),
      count: [
        ...document.querySelectorAll('style[data-zerodep-css],style[data-zerodep-bindings]'),
      ].reduce((n, style) => n + style.sheet.cssRules.length, 0),
    }));
  const before = await inspect();
  assert.deepEqual(before.widths, ['24px', '40px']);
  if (!update) return;
  await page.locator('[data-binding-step]').click();
  await page.waitForFunction(
    () => getComputedStyle(document.querySelector('[data-bound="box"]')).width === '25px',
  );
  const after = await inspect();
  assert.deepEqual(after.widths, ['25px', '40px']);
  assert.deepEqual(after.classes, before.classes);
  assert.equal(after.count, before.count);
  await page.locator('[data-binding-reorder]').click();
  await page.waitForFunction(() => document.querySelector('[data-row]').dataset.row === 'b');
  assert.deepEqual((await inspect()).rows, [
    ['b', '22px'],
    ['a', '12px'],
  ]);
}
