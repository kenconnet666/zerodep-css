import assert from 'node:assert/strict';
import test from 'node:test';
import { createRuntime, Css } from '../../dist/index.js';
import { prepareStyle, withStyleSource } from '../../dist/compiler-runtime.js';

const key = (n) => n.toString(16).padStart(64, '0');

test('准备样式在同一 runtime 跳过重复 Builder，跨请求与恢复不共享缓存', () => {
  let builds = 0;
  const factory = prepareStyle((s) => {
    builds++;
    s.display.flex;
  }, key(1));
  const first = createRuntime({ target: null });
  const second = createRuntime({ target: null });
  let restored;
  try {
    const id = first.css(factory);
    for (let i = 0; i < 20; i++) assert.equal(first.css(factory), id);
    assert.equal(builds, 1);
    assert.equal(second.css(factory), id);
    assert.equal(builds, 2);
    restored = createRuntime({ target: null, hydrate: first.snapshot() });
    assert.equal(restored.css(factory), id);
    assert.equal(builds, 3);
    assert.equal(restored.stats().records, 1);
  } finally {
    first.dispose();
    second.dispose();
    restored?.dispose();
  }
  assert.throws(() => first.css(factory), /disposed/i);
});

test('缓存有界，驱逐计算结果不移除样式，失败不记录成功', () => {
  const runtime = createRuntime({ target: null });
  let firstBuilds = 0;
  const first = prepareStyle((s) => {
    firstBuilds++;
    s.width.px(1);
  }, key(1));
  try {
    runtime.css(first);
    for (let i = 2; i <= 257; i++)
      runtime.css(
        prepareStyle((s) => {
          s.width.px(i);
        }, key(i)),
      );
    assert.equal(runtime.stats().classes, 257);
    runtime.css(first);
    assert.equal(firstBuilds, 2);
    assert.equal(runtime.stats().classes, 257);
    let calls = 0;
    const broken = prepareStyle(() => {
      calls++;
      throw new Error('retry');
    }, key(300));
    for (let i = 0; i < 2; i++) assert.throws(() => runtime.css(broken), /retry/);
    assert.equal(calls, 2);
    assert.equal(runtime.stats().classes, 257);
  } finally {
    runtime.dispose();
  }
});

test('准备标记保留来源，派生类不能误复用基类缓存', () => {
  const runtime = createRuntime({ target: null });
  const source = { file: 'src/Card.vue', line: 1, column: 2 };
  let builds = 0;
  const factory = (s) => {
    builds++;
    s.display.flex;
  };
  class AppCss extends Css {}
  try {
    runtime.css(prepareStyle(withStyleSource(factory, source), key(1)));
    runtime.css(withStyleSource(prepareStyle(factory, key(1)), source));
    assert.equal(builds, 1);
    assert.deepEqual(runtime.snapshot().records[0].debug.sources, [source]);
    runtime.css(prepareStyle(factory, key(1)), AppCss);
    runtime.css(prepareStyle(factory, key(1)), AppCss);
    assert.equal(builds, 3);
  } finally {
    runtime.dispose();
  }
  assert.throws(() => prepareStyle(factory, 'bad-key'));
});
