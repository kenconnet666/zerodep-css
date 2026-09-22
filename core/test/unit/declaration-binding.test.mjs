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
  for (const value of [-1, NaN, {}, true, 'red;color:blue', ''])
    assert.throws(() => binding.value(value));
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
