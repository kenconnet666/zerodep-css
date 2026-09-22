import assert from 'node:assert/strict';
import test from 'node:test';
import { defineTheme, createRuntime } from '../../dist/index.js';
import { createThemeScope, resolveTheme, withTheme } from '../../dist/theme-runtime.js';

test('作用域替换同名主题并保留其他主题，运行时视图跟随有效值变化', () => {
  const theme = defineTheme('colors', { brand: 'red', text: 'black' });
  const space = defineTheme('space', { gap: '8px' });
  let parentValues = theme.resolve({ brand: 'blue' });
  const parent = createThemeScope(theme, () => parentValues);
  const combined = createThemeScope(space, () => space.defaults, parent);
  let childValues = resolveTheme(theme, { text: 'white' }, combined);
  const child = createThemeScope(theme, () => childValues, combined);
  assert.equal(child.themes.length, 2);
  assert(Object.isFrozen(child.themes));
  const runtime = createRuntime({ target: null });
  const view = withTheme(runtime, child);
  try {
    const factory = (s) => {
      s.color.raw(theme.tokens.brand);
    };
    const before = view.css(factory).split(' ');
    assert.equal(before.length, 3);
    assert.equal(view.css(factory), before.join(' '));
    parentValues = theme.resolve({ brand: 'green' });
    childValues = resolveTheme(theme, { text: 'white' }, combined);
    const after = view.css(factory).split(' ');
    assert.notEqual(before[0], after[0]);
    assert.equal(before[1], after[1]);
    assert.equal(before[2], after[2]);
    assert.equal(childValues.brand, 'green');
    assert.equal(childValues.text, 'white');
    assert.equal(parentValues.text, 'black');
    assert.equal(view.config, runtime.config);
  } finally {
    runtime.dispose();
  }
  assert.throws(
    () =>
      view.css((s) => {
        s.color.red;
      }),
    /disposed/i,
  );
});

test('同名不兼容定义不能进入父主题作用域', () => {
  const first = defineTheme('app', { color: 'red' });
  const second = defineTheme('app', { color: { brand: 'red' } });
  const parent = createThemeScope(first, () => first.defaults);
  assert.throws(() => createThemeScope(second, () => second.defaults, parent), /schema/);
  assert.throws(() => resolveTheme(second, undefined, parent), /schema/);
});
