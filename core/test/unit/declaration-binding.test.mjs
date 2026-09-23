import assert from 'node:assert/strict';
import test from 'node:test';
import { createDeclarationBinding } from '../../dist/compiler-runtime.js';
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
  for (const value of [-1, NaN, {}, true, 'red;color:blue'])
    assert.throws(() => binding.value(value));
  assert.equal(binding.value(''), '');
  assert.equal(binding.inline(''), undefined);
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
