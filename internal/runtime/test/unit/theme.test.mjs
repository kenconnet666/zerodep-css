import assert from 'node:assert/strict';
import test from 'node:test';
import { defineTheme, createRuntime, Css } from '../../dist/index.js';

test('主题预设继承保持变量身份，空值继承父值且 defaults 显式重置', () => {
  const theme = defineTheme('app', { color: { brand: 'red', text: 'black' }, opacity: 1 });
  const dark = theme.extend({ color: { text: 'white' } });
  assert.equal(dark.tokens.color.text.name, theme.tokens.color.text.name);
  assert.equal(dark.tokens.color.text.fallback, 'white');
  assert.equal(theme.tokens.color.text.fallback, 'black');
  assert.equal(theme.schema, dark.schema);
  const parent = theme.resolve({ color: { brand: 'blue' }, opacity: 0.8 });
  const child = theme.resolve({ color: { text: 'green' } }, parent);
  assert.equal(child.color.brand, 'blue');
  assert.equal(child.color.text, 'green');
  assert.equal(child.opacity, 0.8);
  assert.deepEqual(theme.resolve(undefined, child), child);
  assert.deepEqual(theme.resolve(null, child), child);
  assert.deepEqual(theme.resolve({ color: null }, child).color, child.color);
  assert.equal(theme.resolve({ color: { brand: null } }, child).color.brand, 'blue');
  assert.equal(theme.resolve({ color: { brand: null } }, child).color.text, 'green');
  assert.deepEqual(theme.resolve(theme.defaults, child), theme.defaults);
  assert.deepEqual(
    theme.resolve({ color: theme.defaults.color }, child).color,
    theme.defaults.color,
  );
  assert.equal(
    theme.resolve({ color: { brand: theme.defaults.color.brand } }, child).color.brand,
    'red',
  );
  assert.equal(parent.color.text, 'black');
});

test('定义和有效值不会随外部对象修改，并拒绝非法类型及未知字段', () => {
  const defaults = { color: { brand: 'red' }, opacity: 1 };
  const theme = defineTheme('app', defaults);
  defaults.color.brand = 'blue';
  assert.equal(theme.defaults.color.brand, 'red');
  const overrides = { color: { brand: 'green' } };
  const values = theme.resolve(overrides);
  overrides.color.brand = 'blue';
  assert.equal(values.color.brand, 'green');
  assert(Object.isFrozen(values.color));
  for (const value of [
    { unknown: 1 },
    { color: { other: 'blue' } },
    { color: 'red' },
    { opacity: '1' },
    { opacity: NaN },
    { color: { brand: 'initial' } },
    { color: { brand: '\\69 nitial' } },
    { color: { brand: 'red;color:blue' } },
  ])
    assert.throws(() => theme.resolve(value));
  const cyclic = {};
  cyclic.self = cyclic;
  for (const value of [
    cyclic,
    {},
    { value: null },
    { value: true },
    { value: [] },
    { value: Infinity },
  ])
    assert.throws(() => defineTheme('bad', value));
  assert.throws(() => defineTheme('bad name', { value: 'red' }));
});

test('主题叶只验证结构与 CSS-wide 值，并保留原始字符串', () => {
  const original = '/*before*/ future(??? [a;b]) /*after*/\r\n';
  const theme = defineTheme('future-values', { value: original });
  assert.equal(theme.defaults.value, original);
  assert.equal(theme.resolve({ value: original }).value, original);
  assert.equal(theme.resolve({ value: '/**/' }).value, '/**/');
  assert.equal(theme.resolve({ value: 'ini/**/tial' }).value, 'ini/**/tial');
  assert.equal(theme.resolve({ value: '\\69/**/nitial' }).value, '\\69/**/nitial');
  assert.equal(theme.resolve({ value: 'initial red' }).value, 'initial red');
  assert.equal(theme.resolve({ value: '"initial"' }).value, '"initial"');
  assert.equal(theme.resolve({ value: '!foo' }).value, '!foo');

  for (const value of [
    '',
    ' \t\n ',
    'initial',
    'INITIAL',
    'inherit',
    'unset',
    'revert',
    '/*before*/ revert-layer /*after*/',
    '\\69 nitial',
    '/*before*/ \\69 nitial /*after*/',
    'red;blue',
    'red!important',
    'future(foo',
    'red}',
    '{a:b}',
  ])
    assert.throws(() => theme.resolve({ value }), undefined, value);

  for (const value of [NaN, Infinity, -Infinity])
    assert.throws(() => defineTheme('nonfinite', { value }));
});

test('相同默认值复用仍保留外部输入隔离、getter 读取和负零语义', () => {
  const theme = defineTheme('reuse', { color: { brand: 'red', text: 'black' }, zero: 0 });
  assert.equal(theme.resolve(undefined, theme.defaults), theme.defaults);
  let reads = 0;
  const input = {
    color: {
      get brand() {
        reads++;
        return 'red';
      },
      text: 'black',
    },
    zero: 0,
  };
  const first = theme.resolve(undefined, input);
  assert.equal(reads, 1);
  assert(Object.isFrozen(first.color));
  input.color.text = 'blue';
  const second = theme.resolve(undefined, input);
  assert.equal(reads, 2);
  assert.equal(first.color.text, 'black');
  assert.equal(second.color.text, 'blue');
  assert(Object.is(theme.resolve({ zero: -0 }, theme.defaults).zero, -0));
  assert.throws(() => theme.resolve(undefined, { ...input, other: 'red' }), /Unknown theme field/);
  assert.throws(() => theme.resolve({ color: { brand: 'initial' } }, theme.defaults), /CSS-wide/);
  assert.equal(theme.resolve({ color: { brand: null } }, second).color.brand, 'red');
});

test('真实 Css 派生关键字引用主题变量，规则与主题值分别复用且请求隔离', () => {
  const theme = defineTheme('app', { color: { brand: 'red' } });
  class AppCss extends Css {
    get color() {
      return this.extendProperty(super.color, theme.tokens.color);
    }
  }
  const first = createRuntime({ target: null });
  const second = createRuntime({ target: null });
  try {
    const style = first.css((s) => {
      s.color.brand;
      s.hover((h) => {
        h.color.brand;
      });
    }, AppCss);
    const red = theme.className(first);
    const blue = theme.className(first, { color: { brand: 'blue' } });
    assert.notEqual(red, blue);
    assert.equal(theme.className(first, { color: { brand: 'blue' } }), blue);
    assert.equal(
      first.css((s) => {
        s.color.brand;
        s.hover((h) => {
          h.color.brand;
        });
      }, AppCss),
      style,
    );
    assert.equal(first.stats().classes, 3);
    theme.className(second, { color: { brand: 'green' } });
    assert(!second.renderStyles().includes('blue'));
    assert(!first.renderStyles().includes('green'));
    assert(first.renderStyles().includes(`var(${theme.tokens.color.brand.name},red)`));
  } finally {
    first.dispose();
    second.dispose();
  }
  assert.throws(() => theme.className(first), /disposed/i);
});
