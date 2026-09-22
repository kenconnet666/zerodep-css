import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createStyleContext } from '../dist/index.js';

const server = (options = {}) => createStyleContext({ target: null, ...options });
test('上下文的稳定 key 独立于认领顺序，重复 key 不覆盖其他 owner', () => {
  const a = server();
  const first = a.mountGlobal('first', (g) => g.rule('body', (s) => s.color.red));
  const last = a.mountGlobal('last', (g) => g.rule('body', (s) => s.color.blue));
  assert.throws(() => a.mountGlobal('first', () => {}), /already active/);
  const b = server({ hydrate: a.snapshot() });
  assert.throws(() => b.completeHydration(), /Unclaimed/);
  const restoredLast = b.mountGlobal('last', (g) => g.rule('body', (s) => s.color.blue));
  const restoredFirst = b.mountGlobal('first', (g) => g.rule('body', (s) => s.color.red));
  assert.equal(restoredLast.id, last.id);
  assert.equal(restoredFirst.id, first.id);
  assert.deepEqual(b.runtime.snapshot().records, a.runtime.snapshot().records);
  b.completeHydration();
  restoredFirst.dispose();
  const next = b.mountGlobal('first', () => {});
  restoredFirst.dispose();
  assert.equal(b.runtime.stats().globals, 2);
  assert.notEqual(next.id, first.id);
  a.dispose();
  b.dispose();
});
test('认领更新失败保留旧规则和 key，可修正后重试', () => {
  const a = server();
  a.mountGlobal('page', (g) => g.rule('body', (s) => s.color.red));
  const manifest = a.snapshot();
  const b = server({ hydrate: manifest });
  assert.throws(() =>
    b.mountGlobal('page', (g) => g.rule('body', (s) => s.color.raw('red;display:none'))),
  );
  assert.deepEqual(b.snapshot(), manifest);
  b.mountGlobal('page', (g) => g.rule('body', (s) => s.color.blue));
  b.completeHydration();
  assert.match(b.renderStyles(), /color:blue/);
  a.dispose();
  b.dispose();
});
test('SSR 请求隔离、manifest 校验、安全 JSON 与上下文销毁', () => {
  const a = server(),
    b = server();
  a.mountGlobal('</script>', (g) => g.rule('body', (s) => s.color.red));
  assert.equal(b.runtime.stats().records, 0);
  assert(!a.renderManifest().includes('<'));
  assert.deepEqual(JSON.parse(a.renderManifest()), a.snapshot());
  const manifest = a.snapshot();
  for (const globals of [
    [],
    [...manifest.globals, ...manifest.globals],
    [{ key: '', id: manifest.globals[0].id }],
    [{ key: 'x', id: 'missing' }],
  ]) {
    assert.throws(() => server({ hydrate: { ...manifest, globals } }));
  }
  b.runtime.mountGlobal(() => {});
  assert.throws(() => b.snapshot(), /through their style context/);
  a.dispose();
  a.dispose();
  b.dispose();
  assert.throws(() => a.mountGlobal('x', () => {}), /disposed/);
});
