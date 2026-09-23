import assert from 'node:assert/strict';
import test from 'node:test';
import { createRuntime } from '../../dist/index.js';

test('增长提示只跟随成功新增，恢复、命中、更新及失败不重复提示', () => {
  const messages = [];
  const original = console.warn;
  console.warn = (message) => messages.push(message);
  const runtime = createRuntime({ target: null, debug: true, warnAt: 2, maxRecords: 4 });
  let restored;
  try {
    const first = runtime.mountGlobal((g) => g.rule('body', (s) => s.color.red));
    runtime.css((s) => s.width.px(1));
    assert.equal(messages.length, 1);
    runtime.css((s) => s.width.px(1));
    first.update((g) => g.rule('body', (s) => s.color.blue));
    assert.equal(messages.length, 1);
    runtime.css((s) => s.width.px(2));
    runtime.css((s) => s.width.px(3));
    assert.equal(messages.length, 2);
    assert.throws(() => runtime.css((s) => s.width.px(4)), /limit/);
    assert.equal(messages.length, 2);
    const snapshot = runtime.snapshot();
    restored = createRuntime({ target: null, debug: true, warnAt: 2, hydrate: snapshot });
    assert.equal(messages.length, 2);
    restored.css((s) => s.width.px(4));
    assert.equal(messages.length, 2);
    first.dispose();
    runtime.css((s) => s.width.px(4));
    assert.equal(messages.length, 2);
    assert.equal(runtime.stats().records, 4);
  } finally {
    runtime.dispose();
    restored?.dispose();
    console.warn = original;
  }
});

test('默认服务端不刷请求日志，诊断输出异常不影响注册', () => {
  let calls = 0;
  const original = console.warn;
  console.warn = () => {
    calls++;
    throw new Error('unavailable console');
  };
  const quiet = createRuntime({ target: null, warnAt: 1 });
  const debug = createRuntime({ target: null, debug: true, warnAt: 1 });
  try {
    quiet.css((s) => s.color.red);
    assert.equal(calls, 0);
    assert.doesNotThrow(() => debug.css((s) => s.color.red));
    assert.equal(debug.stats().records, 1);
    assert.equal(calls, 1);
  } finally {
    quiet.dispose();
    debug.dispose();
    console.warn = original;
  }
});
