import assert from 'node:assert/strict';
import test from 'node:test';
import { formatValue, validateUnitValues, createValueFormatter } from '../../dist/binding.js';

test('已知数值路径保留类型、范围、整数与单位约束', () => {
  const format = createValueFormatter({
    unit: 'px',
    numbers: [{ min: 0, max: 100, integer: true }],
  });
  assert.equal(format(0), '0px');
  assert.equal(format(100), '100px');
  for (const value of [-1, 101, 0.5, NaN, Infinity, null, undefined, '1', {}])
    assert.throws(() => format(value));
  assert.equal(formatValue(1e30, { unit: 'px' }), '1e+30px');
  assert.equal(formatValue(-0, { unit: '%' }), '0%');
  assert.throws(() => createValueFormatter({ unit: 'px;color:red' }));
});

test('格式快照不被调用者后续修改，token 与 raw 缓存不能绕过校验', () => {
  const options = { tokens: ['red', 'blue'] };
  const format = createValueFormatter(options);
  options.tokens.push('green');
  assert.equal(format('red'), 'red');
  assert.throws(() => format('green'));
  const raw = createValueFormatter({ numbers: [] });
  for (let index = 0; index < 160; index++)
    assert.equal(raw(`calc(${index}px + 1px)`), `calc(${index}px + 1px)`);
  assert.equal(raw('calc(0px + 1px)'), 'calc(0px + 1px)');
  for (let index = 0; index < 2; index++) {
    assert.throws(() => raw('red;color:blue'));
    assert.equal(raw(''), '');
    assert.throws(() => raw(1));
  }
});

test('格式化快路径不能放宽联合参数备选约束', () => {
  const alternatives = [
    [{ min: 0 }, {}],
    [{}, { min: 0 }],
  ];
  assert.deepEqual(validateUnitValues([-1, 1], alternatives), [-1, 1]);
  assert.throws(() => validateUnitValues([-1, -1], alternatives));
});
