import assert from 'node:assert/strict';
import test from 'node:test';
import { createRuntime } from '../../dist/index.js';

test('运行时配置拒绝错误容器/序列类型，而不是静默切到服务端或拆成字符层', () => {
  for (const options of [
    null,
    [],
    false,
    { target: false },
    { target: 0 },
    { target: '' },
    { target: {} },
    { target: { nodeType: 1 } },
    { target: { nodeType: 11 } },
    { target: null, layers: 'base' },
    { target: null, layers: new Set(['base']) },
    { target: null, namespace: null },
    { target: null, maxRecords: null },
    { target: null, nonce: 1 },
  ])
    assert.throws(() => createRuntime(options));
});

test('调用者后续修改不改变已创建运行时的 nonce、层与诊断配置', () => {
  const options = { target: null, nonce: 'first', layers: ['base'], layer: 'base', debug: true };
  const runtime = createRuntime(options);
  try {
    options.nonce = 'changed';
    options.layers.push('later');
    options.debug = false;
    runtime.css((s) => {
      s.color.red;
    });
    assert(runtime.renderStyles().includes('nonce="first"'));
    assert(!runtime.renderStyles().includes('changed'));
    assert.deepEqual(runtime.config.layers, ['base']);
    assert(runtime.snapshot().records.find((record) => record.kind === 'class').debug);
  } finally {
    runtime.dispose();
  }
});

test('配置 getter 只在创建时读取一次', () => {
  const reads = { namespace: 0, nonce: 0, debug: 0 };
  const runtime = createRuntime({
    target: null,
    get namespace() {
      reads.namespace++;
      return 'once';
    },
    get nonce() {
      reads.nonce++;
      return 'nonce';
    },
    get debug() {
      reads.debug++;
      return true;
    },
  });
  try {
    runtime.css((s) => {
      s.color.red;
    });
    runtime.renderStyles();
    runtime.renderStyles();
    assert.deepEqual(reads, { namespace: 1, nonce: 1, debug: 1 });
  } finally {
    runtime.dispose();
  }
});
