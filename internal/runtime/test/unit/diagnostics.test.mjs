import assert from 'node:assert/strict';
import test from 'node:test';
import { createRecordWarning } from '../../dist/diagnostics.js';

test('默认阈值翻倍且去重，计数回落不重置提示', () => {
  const original = console.warn;
  const messages = [];
  console.warn = (message) => messages.push(message);
  try {
    const observe = createRecordWarning('app', true, undefined, 0);
    for (const count of [9_999, 10_000, 10_000, 19_999, 20_000, 1, 39_999, 40_000]) observe(count);
    assert.equal(messages.length, 3);
    assert(messages[0].includes('namespace=app') && messages[0].includes('10000'));
    assert(messages[1].includes('20000'));
    assert(messages[2].includes('40000'));
    assert(messages[0].includes('class') && messages[0].includes('host.stats()'));
    assert(messages[0].includes('动态值') && messages[0].includes('变量绑定'));
  } finally {
    console.warn = original;
  }
});

test('SSR 初始记录跳过已有桶，单次跨多个阈值只提示一次', () => {
  const original = console.warn;
  const messages = [];
  console.warn = (message) => messages.push(message);
  try {
    const restored = createRecordWarning('ssr', true, undefined, 25_000);
    restored(25_000);
    restored(39_999);
    assert.equal(messages.length, 0);
    restored(40_000);
    assert.equal(messages.length, 1);

    const jump = createRecordWarning('jump', true, 3, 0);
    jump(10); // 跨过 3 和 6，只提示当前数量。
    jump(11);
    jump(12);
    assert.equal(messages.length, 3);
    assert(messages[1].includes('10'));
    assert(messages[2].includes('12'));
  } finally {
    console.warn = original;
  }
});

test('禁用仍校验配置，false 和生产关闭均无输出', () => {
  const original = console.warn;
  const messages = [];
  console.warn = (message) => messages.push(message);
  try {
    createRecordWarning('off', true, false, 0)(100_000);
    createRecordWarning('disabled', false, 1, 0)(100_000);
    assert.deepEqual(messages, []);
    for (const threshold of [0, -1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1, '10'])
      assert.throws(() => createRecordWarning('bad', false, threshold, 0), /threshold/);
  } finally {
    console.warn = original;
  }
});

test('告警输出抛错不影响调用且不重复同一阈值', () => {
  const original = console.warn;
  try {
    const observe = createRecordWarning('safe', true, 10_000, 0);
    console.warn = () => {
      throw new Error('console unavailable');
    };
    assert.doesNotThrow(() => observe(10_000));
    const messages = [];
    console.warn = (message) => messages.push(message);
    observe(10_000);
    observe(20_000);
    assert.equal(messages.length, 1);
    assert(messages[0].includes('20000'));
  } finally {
    console.warn = original;
  }
});

test('超过安全整数后不继续设置可达阈值', () => {
  const original = console.warn;
  const messages = [];
  console.warn = (message) => messages.push(message);
  try {
    const max = Number.MAX_SAFE_INTEGER;
    const observe = createRecordWarning('max', true, max, max - 1);
    observe(max);
    observe(max);
    assert.equal(messages.length, 1);
  } finally {
    console.warn = original;
  }
});
