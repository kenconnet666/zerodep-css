import assert from 'node:assert/strict';
import test from 'node:test';
import { createCss } from '../../src/css.ts';

test('相同声明复用类名，且只写入一次', () => {
  const writes = [];
  const registry = createCss((name, body) => writes.push({ name, body }));
  const first = registry.css('color:red;', 'width:24px;');
  assert.equal(registry.css('color:red;', 'width:24px;'), first);
  assert.equal(registry.size, 1);
  assert.deepEqual(writes, [{ name: first, body: 'color:red;width:24px;' }]);
});

test('写入失败不污染缓存，可以重试', () => {
  let attempts = 0;
  const registry = createCss(() => {
    if (++attempts === 1) throw new Error('insert failed');
  });
  assert.throws(() => registry.css('color:blue;'), /insert failed/);
  assert.equal(registry.size, 0);
  registry.css('color:blue;');
  assert.equal(attempts, 2);
  assert.equal(registry.size, 1);
});

test('恢复已有规则后不重写，错误清单整体回滚', () => {
  const origin = createCss(() => {});
  origin.css('color:red;');
  const inserted = [];
  const restored = createCss((name) => inserted.push(name));
  assert.throws(
    () => restored.hydrate([...origin.rules(), { className: 'wrong', body: 'color:blue;' }]),
    /does not match/,
  );
  assert.equal(restored.size, 0);
  restored.hydrate(origin.rules());
  assert.equal(restored.css('color:red;'), origin.rules()[0].className);
  assert.deepEqual(inserted, []);
});
