import assert from 'node:assert/strict';
import test from 'node:test';
import { createRuntime, keyframes } from '../../dist/index.js';

test('普通结果复用仍执行回调，动态分支与声明顺序不被缓存吞掉', () => {
  const runtime = createRuntime({ target: null });
  let calls = 0,
    reverse = false;
  const factory = (s) => {
    calls++;
    s.color.raw(reverse ? 'blue' : 'red');
    s.color.raw(reverse ? 'red' : 'blue');
  };
  try {
    const original = runtime.css(factory);
    for (let i = 0; i < 10; i++) assert.equal(runtime.css(factory), original);
    assert.equal(calls, 11);
    reverse = true;
    const reversed = runtime.css(factory);
    assert.notEqual(reversed, original);
    reverse = false;
    assert.equal(runtime.css(factory), original);
    assert.equal(runtime.stats().classes, 2);
    assert.equal(calls, 13);
  } finally {
    runtime.dispose();
  }
});

test('重复结果的元数据和动画依赖保持完整，失败不会污染原规则', () => {
  const runtime = createRuntime({ target: null });
  const animation = keyframes((k) => {
    k.from((s) => {
      s.opacity.raw(0);
    });
    k.to((s) => {
      s.opacity.raw(1);
    });
  });
  try {
    const normal = runtime.css((s) => {
      s.name('a');
      s.color.red;
    });
    const other = runtime.css((s) => {
      s.name('b');
      s.color.red;
    });
    assert.notEqual(normal, other);
    runtime.css((s) => {
      s.name('a').config({ debug: true });
      s.color.red;
    });
    assert(runtime.snapshot().records.find((r) => r.id === normal).debug);
    const animated = runtime.css((s) => {
      s.animationName.raw(animation);
    });
    assert.equal(
      runtime.css((s) => {
        s.animationName.raw(animation);
      }),
      animated,
    );
    assert.equal(runtime.stats().keyframes, 1);
    const snapshot = runtime.snapshot();
    for (let i = 0; i < 2; i++)
      assert.throws(() =>
        runtime.css((s) => {
          s.color.raw('red;color:blue');
        }),
      );
    assert.deepEqual(runtime.snapshot(), snapshot);
  } finally {
    runtime.dispose();
  }
});
