import assert from 'node:assert/strict';
import test from 'node:test';
import { bindValue, createDeclarationBinding } from '../../dist/compiler-runtime.js';
import { createRuntime, cssVar } from '../../dist/index.js';

test('普通声明自动绑定并保留 CSS-wide、空值和显式变量语义', () => {
  const binding = createDeclarationBinding('--auto', { numbers: [{ min: 0, max: 1 }] });
  for (const value of ['red', 'calc(1px + 2px)', 0.5]) {
    assert.equal(binding.value(value), 'var(--auto)');
    assert.equal(binding.inline(value), String(value));
  }
  for (const value of [
    null,
    undefined,
    'initial',
    'INHERIT',
    '/* comment */revert-layer',
    '\\69 nitial',
    cssVar('--theme-color'),
  ]) {
    assert.equal(binding.value(value), value);
    assert.equal(binding.inline(value), undefined);
  }
  assert.equal(binding.value(-1), -1);
  assert.equal(binding.inline(-1), undefined);
  for (const value of [NaN, Infinity, {}, true, 'red;color:blue'])
    assert.throws(() => binding.value(value));
  assert.equal(binding.value(''), '');
  assert.equal(binding.inline(''), undefined);
});

test('同一输入生成声明和内联变量的快照，异常不污染已有绑定', () => {
  const color = createDeclarationBinding('--color', { property: 'color' });
  for (const [input, expected, inline] of [
    ['red', 'var(--color)', 'red'],
    ['red\r', 'var(--color)', 'red\n'],
    ['initial', 'initial', undefined],
    [null, null, undefined],
    [undefined, undefined, undefined],
    ['future-color(1)', 'future-color(1)', undefined],
  ]) {
    const bindings = Object.create(null);
    assert.equal(bindValue(bindings, '--color', color, input), expected);
    assert.equal(bindings['--color'], inline);
  }
  const variable = cssVar('--external');
  const bindings = Object.create(null);
  assert.equal(bindValue(bindings, '--color', color, variable), variable);
  const opaque = new Proxy(
    {},
    {
      get() {
        throw new Error('raw object must reach Builder without inspection');
      },
    },
  );
  assert.equal(bindValue(bindings, '--color', color, opaque), opaque);
  assert.deepEqual(Object.keys(bindings), []);

  const token = createDeclarationBinding('--display', {
    property: 'display',
    tokens: ['flex', 'grid', 'initial'],
  });
  assert.equal(bindValue(bindings, '--display', token, 'flex'), 'var(--display)');
  assert.equal(bindings['--display'], 'flex');
  const saved = { ...bindings };
  for (const [binding, name, input] of [
    [color, '--color', 'red;color:blue'],
    [color, '--color', NaN],
    [token, '--display', 'banana'],
    [token, '--display', variable],
  ]) {
    assert.throws(() => bindValue(bindings, name, binding, input));
    assert.deepEqual({ ...bindings }, saved);
  }
});

test('raw 数字仅在元数据证明时变量化，未知或越界数保留直接声明', () => {
  const zIndex = createDeclarationBinding('--z', {
    property: 'z-index',
    numbers: [{ integer: true }],
  });
  assert.equal(zIndex.value(2), 'var(--z)');
  assert.equal(zIndex.inline(2), '2');
  assert.equal(zIndex.value(1.5), 1.5);
  assert.equal(zIndex.inline(1.5), undefined);
  assert.equal(zIndex.value(1e21), 1e21);
  assert.equal(zIndex.inline(1e21), undefined);
  assert.equal(zIndex.value('1e21'), '1e21');
  const weight = createDeclarationBinding('--weight', {
    property: 'font-weight',
    numbers: [{ min: 1, max: 1000 }],
  });
  assert.equal(weight.value(450.5), 'var(--weight)');
  assert.equal(weight.value(1001), 1001);
  assert.equal(weight.inline(1001), undefined);
  const opacity = createDeclarationBinding('--opacity', { property: 'opacity', numbers: [{}] });
  assert.equal(opacity.value(2), 'var(--opacity)');
  assert.equal(opacity.inline(2), '2');
  const color = createDeclarationBinding('--color-number', { property: 'color', numbers: [] });
  assert.equal(color.value(1), 1);
  assert.equal(color.inline(1), undefined);
  // 元数据和 css-tree 都接受此数字，但规范正文要求非负，不能只依据宽泛语法表。
  const stroke = createDeclarationBinding('--stroke', { property: 'stroke-width', numbers: [{}] });
  assert.equal(stroke.value(-1), -1);
  assert.equal(stroke.inline(-1), undefined);
  assert.equal(stroke.value(2), 2);
  assert.equal(stroke.value('-1'), '-1');
  assert.equal(stroke.inline('-1'), undefined);
  for (const value of [NaN, Infinity, -Infinity])
    assert.throws(() => zIndex.value(value), /numeric/);
  const token = createDeclarationBinding('--token-number', {
    property: 'display',
    tokens: ['flex'],
  });
  assert.throws(() => token.value(1), /token/);
});

test('绑定缓存不放宽 token 校验，原始配置修改不影响已创建的绑定', () => {
  const format = { tokens: ['flex', 'initial'] };
  const binding = createDeclarationBinding('--auto', format);
  format.tokens.push('grid');
  assert.equal(binding.value('flex'), 'var(--auto)');
  assert.equal(binding.value('initial'), 'initial');
  for (const value of ['grid', 'var(--other)', 1, cssVar('--other')])
    assert.throws(() => binding.inline(value));
  assert.equal(binding.inline(null), undefined);
});

test('值变化复用规则，空值恢复前置声明，CSS-wide 保留直接覆盖', () => {
  const binding = createDeclarationBinding('--color');
  const runtime = createRuntime({ target: null });
  try {
    const render = (value) =>
      runtime.css((s) => {
        s.color.red;
        s.color.raw(binding.value(value));
      });
    const red = render('red');
    assert.equal(render('blue'), red);
    const omitted = render(undefined);
    assert.equal(
      omitted,
      runtime.css((s) => {
        s.color.red;
      }),
    );
    const initial = render('initial');
    assert.equal(
      initial,
      runtime.css((s) => {
        s.color.red;
        s.color.raw('initial');
      }),
    );
    assert.notEqual(initial, omitted);
    assert.equal(runtime.stats().classes, 3);
  } finally {
    runtime.dispose();
  }
});

test('不合法或无法证明的属性值保留原声明，不能改变前置 fallback', () => {
  const color = createDeclarationBinding('--color', { property: 'color', numbers: [] });
  for (const value of ['banana', 'future-color(1)', 'var(--external, green)']) {
    assert.equal(color.value(value), value);
    assert.equal(color.inline(value), undefined);
  }
  for (const value of ['red', 'rgb(30 40 50 / .8)', 'rebeccapurple']) {
    assert.equal(color.value(value), 'var(--color)');
    assert.equal(color.inline(value), value);
  }
  const width = createDeclarationBinding('--width', { property: 'width' });
  assert.equal(width.value('-2px'), '-2px');
  assert.equal(width.value('10px'), 'var(--width)');
  assert.equal(width.value('fit-content(10px)'), 'fit-content(10px)');
  assert.equal(width.value('calc(20px * 10px)'), 'calc(20px * 10px)');
  const display = createDeclarationBinding('--display', { property: 'display' });
  assert.equal(display.value('run-in'), 'run-in');
  assert.equal(display.value('ruby-base-container'), 'ruby-base-container');
  assert.equal(display.value('flex'), 'var(--display)');
});

test('语法表没有表达的负值范围保留为直接声明', () => {
  for (const [property, value] of [
    ['stroke-width', '-1px'],
    ['stroke-dasharray', '5px -1px'],
    ['line-height', '-1px'],
    ['border-width', '-1px'],
  ]) {
    const binding = createDeclarationBinding('--negative', { property });
    assert.equal(binding.value(value), value, property);
    assert.equal(binding.inline(value), undefined, property);
  }

  const margin = createDeclarationBinding('--margin', { property: 'margin-left' });
  assert.equal(margin.value('-1px'), '-1px');
  assert.equal(margin.inline('-1px'), undefined);

  const opacity = createDeclarationBinding('--opacity', {
    property: 'opacity',
    numbers: [{}],
  });
  assert.equal(opacity.value(-0.5), 'var(--opacity)');
  assert.equal(opacity.inline(-0.5), '-0.5');
});
