import assert from 'node:assert/strict';
import test from 'node:test';
import { createRuntime } from '../../dist/index.js';
import { withStyleSource } from '../../dist/compiler-runtime.js';

test('名称与哈希共同标识样式，诊断配置不改变 CSS 身份', () => {
  const runtime = createRuntime({ target: null });
  try {
    const style = (s) => {
      s.name('按钮-root').config({ debug: true });
      s.color.red;
      s.hover((h) => h.opacity.raw(0.5));
    };
    const first = runtime.css(
      withStyleSource(style, { file: 'src/Button.vue', line: 10, column: 3 }),
    );
    const same = runtime.css(
      withStyleSource(style, { file: 'src/Other.vue', line: 20, column: 5 }),
    );
    const plain = runtime.css((s) => {
      s.name('按钮-root').config({ debug: false });
      s.color.red;
      s.hover((h) => h.opacity.raw(0.5));
    });
    assert.match(first, /^z-c-按钮-root-/);
    assert.equal(first, same);
    assert.equal(first, plain);
    const record = runtime.snapshot().records[0];
    assert.equal(record.name, '按钮-root');
    assert.equal(record.debug.declarations, 2);
    assert.deepEqual(
      record.debug.sources.map((x) => x.file),
      ['src/Button.vue', 'src/Other.vue'],
    );
    assert.match(runtime.renderStyles(), /data-zerodep-name="按钮-root"/);
    assert.match(runtime.renderStyles(), /src\/Button.vue/);
    assert.notEqual(
      runtime.css((s) => {
        s.name('other');
        s.color.red;
        s.hover((h) => h.opacity.raw(0.5));
      }),
      first,
    );
  } finally {
    runtime.dispose();
  }
});

test('命名与局部配置在源位置和恢复协议中严格校验', () => {
  const runtime = createRuntime({ target: null });
  try {
    for (const name of ['', 'has space', 'bad.name'])
      assert.throws(() =>
        runtime.css((s) => {
          s.name(name);
          s.color.red;
        }),
      );
    assert.throws(
      () =>
        runtime.css((s) => {
          s.name('a');
          s.name('b');
        }),
      /conflicting/,
    );
    assert.throws(() => runtime.css((s) => s.hover((h) => h.name('child'))), /root local/);
    assert.throws(
      () =>
        runtime.css((s) => {
          s.config({ cache: false });
        }),
      /Unknown local/,
    );
    assert.throws(
      () => withStyleSource(() => {}, { file: 'C:/private/file.ts', line: 1, column: 1 }),
      /relative/,
    );
    runtime.css((s) => {
      s.name('card');
      s.padding.px(8);
    });
    const manifest = runtime.snapshot();
    assert.equal(manifest.version, 2);
    const restored = createRuntime({ target: null, hydrate: manifest });
    restored.dispose();
    const invalid = structuredClone(manifest);
    invalid.records[0].name = 'other';
    assert.throws(() => createRuntime({ target: null, hydrate: invalid }), /hash/);
    const old = structuredClone(manifest);
    old.version = 1;
    assert.throws(() => createRuntime({ target: null, hydrate: old }), /version 2/);
  } finally {
    runtime.dispose();
  }
});

test('旧的未命名 manifest 仍可恢复', () => {
  const runtime = createRuntime({ target: null });
  runtime.css((s) => s.color.red);
  const old = structuredClone(runtime.snapshot());
  old.version = 1;
  runtime.dispose();
  const restored = createRuntime({ target: null, hydrate: old });
  assert.equal(restored.stats().classes, 1);
  restored.dispose();
});

test('局部配置拒绝非数据对象与所有未知自有字段，失败不注册规则', () => {
  const runtime = createRuntime({ target: null });
  try {
    for (const config of [
      new Date(),
      Object.create({ debug: true }),
      { [Symbol('cache')]: true },
      Object.defineProperty({}, 'cache', { value: false }),
    ]) {
      assert.throws(() =>
        runtime.css((s) => {
          s.config(config);
          s.color.red;
        }),
      );
      assert.equal(runtime.stats().classes, 0);
    }
    const config = Object.assign(Object.create(null), { debug: true });
    runtime.css((s) => {
      s.config(config);
      s.color.red;
    });
    assert.equal(runtime.snapshot().records[0].debug.declarations, 1);
  } finally {
    runtime.dispose();
  }
});
