import assert from 'node:assert/strict';

export const ruleCount = (page) =>
  page.evaluate(() => document.querySelector('style[data-zerodep-css]').sheet.cssRules.length);

async function style(page, sample, property) {
  return page
    .locator(`[data-sample="${sample}"]`)
    .evaluate((node, property) => getComputedStyle(node).getPropertyValue(property), property);
}

export async function assertInitial(page, width = 24, theme = 'light') {
  for (const sample of ['static', 'runtime', 'variable'])
    assert.equal(await style(page, sample, 'width'), `${width}px`);
  assert.equal(await style(page, 'finite', 'width'), '24px');
  assert.equal(await style(page, 'variable-other', 'width'), `${width + 5}px`);
  assert.equal(await style(page, 'media', 'padding-left'), '4px');
  const color = theme === 'light' ? 'rgb(17, 24, 39)' : 'rgb(229, 231, 235)';
  assert.equal(await style(page, 'root-theme', 'color'), color);
  assert.equal(await style(page, 'sibling-theme', 'color'), color);
  assert.equal(await style(page, 'nested-theme', 'color'), 'rgb(220, 38, 38)');
}

/** 文档示例和 SSR 恢复后的组件共用同一组交互验收。 */
export async function exerciseExample(page, width = 24, theme = 'light') {
  const click = async (action) => {
    await page.locator(`[data-action="${action}"]`).click();
    await page.evaluate(() => window.exampleControl.flush());
  };
  const initialRules = await ruleCount(page);
  const classes = await page
    .locator('[data-sample]')
    .evaluateAll((nodes) => nodes.map((node) => node.className));
  for (let i = 0; i < 3; i++) await click('noise');
  assert.equal(await ruleCount(page), initialRules);
  assert.deepEqual(
    await page.locator('[data-sample]').evaluateAll((nodes) => nodes.map((node) => node.className)),
    classes,
  );

  await click('size');
  assert.equal(await style(page, 'finite', 'width'), '48px');
  assert.equal(await style(page, 'runtime', 'width'), `${width + 10}px`);
  assert.equal(await ruleCount(page), initialRules + 1);
  await click('size');
  const warmRules = await ruleCount(page);
  for (let i = 0; i < 4; i++) await click('size');
  assert.equal(await style(page, 'finite', 'width'), '24px');
  assert.equal(await style(page, 'runtime', 'width'), `${width}px`);
  assert.equal(await ruleCount(page), warmRules);

  for (let i = 0; i < 10; i++) await click('width');
  assert.equal(await style(page, 'variable', 'width'), `${width + 10}px`);
  assert.equal(await style(page, 'variable-other', 'width'), `${width + 15}px`);
  assert.equal(await ruleCount(page), warmRules);
  await click('runtime');
  assert.equal(await style(page, 'runtime', 'width'), `${width + 1}px`);
  assert.equal(await style(page, 'static', 'width'), `${width}px`);
  assert.equal(await ruleCount(page), warmRules + 1);

  const beforeTheme = await ruleCount(page);
  await click('theme');
  const toggledColor = theme === 'light' ? 'rgb(229, 231, 235)' : 'rgb(17, 24, 39)';
  assert.equal(await style(page, 'root-theme', 'color'), toggledColor);
  assert.equal(await style(page, 'sibling-theme', 'color'), toggledColor);
  assert.equal(await style(page, 'nested-theme', 'color'), 'rgb(220, 38, 38)');
  await page.locator('[data-sample="root-theme"]').hover();
  assert.equal(
    await style(page, 'root-theme', 'color'),
    theme === 'light' ? 'rgb(147, 197, 253)' : 'rgb(37, 99, 235)',
  );
  await page.locator('[data-sample="nested-theme"]').hover();
  assert.equal(await style(page, 'nested-theme', 'color'), 'rgb(124, 58, 237)');
  await page.mouse.move(0, 0);
  await click('subtree');
  assert.equal(await style(page, 'nested-theme', 'color'), toggledColor);
  assert.equal(await style(page, 'sibling-theme', 'color'), toggledColor);
  await page.locator('[data-sample="nested-theme"]').hover();
  assert.equal(
    await style(page, 'nested-theme', 'color'),
    theme === 'light' ? 'rgb(147, 197, 253)' : 'rgb(37, 99, 235)',
  );
  await page.mouse.move(0, 0);
  await click('subtree');
  assert.equal(await style(page, 'nested-theme', 'color'), 'rgb(220, 38, 38)');
  await page.setViewportSize({ width: 500, height: 720 });
  assert.equal(await style(page, 'media', 'padding-left'), '8px');
  await page.setViewportSize({ width: 1280, height: 720 });
  assert.equal(await style(page, 'media', 'padding-left'), '4px');
  assert.equal(await ruleCount(page), beforeTheme);
}
