import assert from 'node:assert/strict';
import test from 'node:test';
import { createRuntime } from '../../dist/index.js';
import { defineTheme } from '../../../../core/dist/index.js';
import { createRuntimeView, createThemeScope } from '../../dist/style-scope.js';
import {
  createCompiledBinding,
  createDeclarationBinding,
  bindUnit,
  bindValue,
} from '../../dist/compiler-runtime.js';

test('固定规则仅注册一次，值变化只更新元素变量并保留空值回退', () => {
  const runtime = createRuntime({ target: null });
  let builds = 0;
  const bind = createCompiledBinding(
    runtime.css,
    (s) => {
      builds++;
      s.width.raw('var(--width)');
    },
    'a'.repeat(64),
    '--width',
    (bindings, values) => bindUnit(bindings, '--width', values, [[{ min: 0 }]], 'px', ' '),
    (values) => (s) => s.width.px(values[0]),
  );
  let registered;
  try {
    const first = bind(() => [20]);
    registered = first;
    const next = bind(() => [24]);
    assert.equal(first.class, next.class);
    assert.deepEqual({ ...first.style }, { '--width': '20px' });
    assert.deepEqual({ ...next.style }, { '--width': '24px' });
    assert.equal(runtime.stats().records, 1);
    assert.equal(builds, 1);
    assert.equal(runtime.snapshot().records[0].body, 'width:var(--width);');

    const absent = bind(() => [null]);
    assert.equal(absent.style, undefined);
    assert.notEqual(absent.class, first.class);
    assert.equal(runtime.snapshot().records.find((record) => record.id === absent.class)?.body, '');
    assert.throws(() => bind(() => [-1]), /Invalid CSS binding unit argument combination/);
    assert.equal(builds, 1);
  } finally {
    runtime.dispose();
  }
  assert.throws(() => registered.class, /disposed/);
  let reads = 0;
  assert.throws(
    () =>
      bind(() => {
        reads++;
        return [20];
      }),
    /disposed/,
  );
  assert.equal(reads, 0);
});

test('固定内容类保持身份，主题作用域变化时仍更新主题类', () => {
  const theme = defineTheme('compiled-scope', { color: 'red' });
  let current = theme.defaults;
  const runtime = createRuntime({ target: null });
  const view = createRuntimeView(
    runtime,
    createThemeScope(theme, () => current),
  );
  const bind = createCompiledBinding(
    view.css,
    (s) => s.width.raw('var(--width)'),
    'e'.repeat(64),
    '--width',
    (bindings, values) => bindUnit(bindings, '--width', values, [[{ min: 0 }]], 'px', ' '),
    (values) => (s) => s.width.px(values[0]),
  );
  try {
    const before = bind(() => [20]);
    current = theme.resolve({ color: 'blue' });
    const after = bind(() => [20]);
    assert.notEqual(before.class, after.class);
    assert.equal(before.class.split(' ').at(-1), after.class.split(' ').at(-1));
    assert.equal(after.style['--width'], '20px');
  } finally {
    runtime.dispose();
  }
});

test('raw 与 token 的可绑定值复用规则，CSS-wide 和非法 token 保留原语义', () => {
  const runtime = createRuntime({ target: null });
  try {
    const colorValue = createDeclarationBinding('--color', { property: 'color' });
    const color = createCompiledBinding(
      runtime.css,
      (s) => s.color.raw('var(--color)'),
      'c'.repeat(64),
      '--color',
      (bindings, value) => bindValue(bindings, '--color', colorValue, value),
      (value) => (s) => s.color.raw(value),
    );
    const red = color(() => 'red');
    const blue = color(() => 'blue');
    assert.equal(red.class, blue.class);
    assert.equal(blue.style['--color'], 'blue');
    const wide = color(() => 'initial');
    assert.equal(wide.style, undefined);
    assert.equal(
      runtime.snapshot().records.find((r) => r.id === wide.class)?.body,
      'color:initial;',
    );

    const displayValue = createDeclarationBinding('--display', {
      property: 'display',
      tokens: ['flex', 'grid'],
    });
    const display = createCompiledBinding(
      runtime.css,
      (s) => s.display.raw('var(--display)'),
      'd'.repeat(64),
      '--display',
      (bindings, value) => bindValue(bindings, '--display', displayValue, value),
      (value) => (s) => s.display.token(value),
    );
    assert.equal(display(() => 'flex').class, display(() => 'grid').class);
    assert.throws(() => display(() => 'invalid'), /Invalid CSS binding token/);
  } finally {
    runtime.dispose();
  }
});
