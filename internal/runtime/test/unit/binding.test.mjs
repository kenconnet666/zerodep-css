import assert from 'node:assert/strict';
import test from 'node:test';
import { createRuntime, cssVar } from '../../dist/index.js';
import {
  validateUnitValues,
  formatUnitValues,
  bindUnit,
  bindValue,
  createDeclarationBinding,
} from '../../dist/binding.js';

test('声明位置绑定共享一次输入且空值不产生变量或删除前声明', () => {
  const bindings = Object.create(null);
  const alternatives = [[{}, {}]];
  assert.equal(formatUnitValues([null, 4], alternatives, 'px', ' '), undefined);
  assert.equal(bindUnit(bindings, '--padding', [1, undefined], alternatives, 'px', ' '), undefined);
  assert.deepEqual(Object.keys(bindings), []);
  assert.equal(bindUnit(bindings, '--padding', [0, 4], alternatives, 'px', ' '), 'var(--padding)');
  assert.equal(bindings['--padding'], '0px 4px');
  assert.throws(() => formatUnitValues([null], alternatives, 'px', ' '), /argument combination/);
  let reads = 0;
  const input = {
    get color() {
      reads++;
      return 'red';
    },
  };
  const binding = createDeclarationBinding('--color', { property: 'color' });
  assert.equal(bindValue(bindings, '--color', binding, input.color), 'var(--color)');
  assert.equal(reads, 1);
  assert.equal(bindings['--color'], 'red');
  assert.equal(bindValue(bindings, '--empty', createDeclarationBinding('--empty'), null), null);
  assert(!Object.hasOwn(bindings, '--empty'));
});

test('格式化快路径不能放宽联合参数备选约束', () => {
  const alternatives = [
    [{ min: 0 }, {}],
    [{}, { min: 0 }],
  ];
  assert.deepEqual(validateUnitValues([-1, 1], alternatives), [-1, 1]);
  assert.throws(() => validateUnitValues([-1, -1], alternatives));
});

test('自动绑定不额外读取 raw 引用对象，token 对引用对象仍严格拒绝', () => {
  const run = (optimized) => {
    let reads = 0;
    const input = new Proxy(cssVar('--color'), {
      getOwnPropertyDescriptor(target, key) {
        if (typeof key === 'symbol') reads++;
        return Reflect.getOwnPropertyDescriptor(target, key);
      },
    });
    const runtime = createRuntime({ target: null });
    const binding = createDeclarationBinding('--bound', { property: 'color' });
    try {
      runtime.css((s) => {
        s.color.raw(optimized ? bindValue({}, '--bound', binding, input) : input);
        s.width.px(reads);
      });
      return runtime.snapshot().records[0].body;
    } finally {
      runtime.dispose();
    }
  };
  assert.equal(run(true), run(false));
  const token = createDeclarationBinding('--token', { property: 'color', tokens: ['red'] });
  assert.throws(() => bindValue({}, '--token', token, cssVar('--color')), /expects a CSS string/);
});

test('越界 raw 数字经绑定后保留直接声明且不写元素变量', () => {
  const bindings = Object.create(null);
  const zIndex = createDeclarationBinding('--z', {
    property: 'z-index',
    numbers: [{ integer: true }],
  });
  const runtime = createRuntime({ target: null });
  try {
    runtime.css((s) => s.zIndex.raw(bindValue(bindings, '--z', zIndex, 1.5)));
    assert.deepEqual(Object.keys(bindings), []);
    assert.equal(runtime.snapshot().records[0].body, 'z-index:1.5;');
    runtime.css((s) => s.zIndex.raw(bindValue(bindings, '--z', zIndex, 2)));
    assert.equal(bindings['--z'], '2');
    assert.equal(runtime.snapshot().records[1].body, 'z-index:var(--z);');
  } finally {
    runtime.dispose();
  }
});
