import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createStyleContext, keyframes } from '../../dist/index.js';

const server = (options = {}) => createStyleContext({ target: null, ...options });
test('同 key 同内容共享一个槽位，冲突不改旧内容，最后租约释放才删除', () => {
  const a = server();
  const first = a.mountGlobal('first', (g) => g.rule('body', (s) => s.color.red));
  const shared = a.mountGlobal('first', (g) => g.rule('body', (s) => s.color.red));
  const last = a.mountGlobal('last', (g) => g.rule('body', (s) => s.color.blue));
  assert.equal(shared.id, first.id);
  assert.equal(a.runtime.stats().globals, 2);
  assert.equal(a.snapshot().globals.length, 2, 'SSR 只输出 key 与槽位，不序列化 owner 数');
  const before = a.snapshot();
  assert.throws(
    () => a.mountGlobal('first', (g) => g.rule('body', (s) => s.color.blue)),
    /conflicts/,
  );
  assert.throws(() => first.update((g) => g.rule('body', (s) => s.color.blue)), /conflicts/);
  assert.deepEqual(a.snapshot(), before);
  first.update((g) => g.rule('body', (s) => s.color.red));
  first.dispose();
  assert.equal(a.runtime.stats().globals, 2);
  shared.update((g) => g.rule('body', (s) => s.color.blue));
  assert.match(a.renderStyles(), /body\{color:blue/);
  shared.dispose();
  assert.equal(a.runtime.stats().globals, 1);
  const next = a.mountGlobal('first', () => {});
  assert.notEqual(next.id, first.id);
  first.dispose();
  assert.equal(a.runtime.stats().globals, 2, '旧租约重复释放不能删新 owner');
  next.dispose();
  last.dispose();
  a.dispose();
});

test('hydration 只按稳定 key 认领一次，客户端可重建不同 owner 数', () => {
  const a = server();
  const first = a.mountGlobal('first', (g) => g.rule('body', (s) => s.color.red));
  a.mountGlobal('first', (g) => g.rule('body', (s) => s.color.red));
  const last = a.mountGlobal('last', (g) => g.rule('body', (s) => s.color.blue));
  const b = server({ hydrate: a.snapshot() });
  assert.throws(() => b.completeHydration(), /Unclaimed/);
  const restoredLast = b.mountGlobal('last', (g) => g.rule('body', (s) => s.color.blue));
  const restoredFirst = b.mountGlobal('first', (g) => g.rule('body', (s) => s.color.red));
  const restoredShared = b.mountGlobal('first', (g) => g.rule('body', (s) => s.color.red));
  assert.equal(restoredLast.id, last.id);
  assert.equal(restoredFirst.id, first.id);
  assert.equal(restoredShared.id, first.id);
  assert.deepEqual(b.runtime.snapshot().records, a.runtime.snapshot().records);
  b.completeHydration();
  restoredFirst.dispose();
  assert.equal(b.runtime.stats().globals, 2);
  restoredShared.dispose();
  assert.equal(b.runtime.stats().globals, 1);
  restoredLast.dispose();
  a.dispose();
  b.dispose();
});

test('共享比较使用规范化内容与动画依赖，失败不改变槽位和 owner 数', () => {
  const context = server();
  const canonical = context.mountGlobal('canonical', (g) => g.rawRule('body {color:red;}'));
  const equivalent = context.mountGlobal('canonical', (g) => g.rawRule('body{color:red}'));
  assert.equal(equivalent.id, canonical.id);
  equivalent.dispose();
  canonical.dispose();

  const fade = keyframes((k) => {
    k.from((s) => s.opacity.raw(0));
    k.to((s) => s.opacity.raw(1));
  });
  const different = keyframes((k) => {
    k.from((s) => s.opacity.raw(1));
    k.to((s) => s.opacity.raw(0));
  });
  const factory = (animation) => (g) => g.rule('body', (s) => s.animationName.raw(animation));
  const first = context.mountGlobal('animation', factory(fade));
  const shared = context.mountGlobal('animation', factory(fade));
  const before = context.snapshot();
  assert.throws(() => first.update(factory(different)), /conflicts/);
  assert.deepEqual(context.snapshot(), before);
  shared.dispose();
  first.update(factory(different));
  assert.notDeepEqual(context.snapshot(), before);
  first.dispose();
  context.dispose();
});

test('单 owner 更新写入失败保留旧规则及可重试租约', () => {
  const context = server({ maxRecords: 1 });
  const owner = context.mountGlobal('page', (g) => g.rule('body', (s) => s.color.red));
  const before = context.snapshot();
  const fade = keyframes((k) => {
    k.from((s) => s.opacity.raw(0));
    k.to((s) => s.opacity.raw(1));
  });
  assert.throws(
    () => owner.update((g) => g.rule('body', (s) => s.animationName.raw(fade))),
    /limit/,
  );
  assert.deepEqual(context.snapshot(), before);
  owner.update((g) => g.rule('body', (s) => s.color.blue));
  assert.match(context.renderStyles(), /color:blue/);
  owner.dispose();
  context.dispose();
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
  assert.throws(() => a.assertActive(), /disposed/);
});

test('宿主提前销毁先停止全部 owner，单个清理失败也释放 runtime', () => {
  const context = server();
  const first = context.mountGlobal('one', (g) => g.rule('body', (s) => s.color.red));
  context.mountGlobal('two', (g) => g.rule('main', (s) => s.color.blue));
  const calls = [];
  const unsubscribe = context.onDispose(() => calls.push('unsubscribed'));
  unsubscribe();
  context.onDispose(() => {
    calls.push('first');
    first.dispose();
    throw new Error('cleanup failed');
  });
  context.onDispose(() => {
    calls.push('second');
    assert.throws(() => context.mountGlobal('late', () => {}), /disposed/);
  });
  assert.throws(() => context.dispose(), /cleanup failed/);
  assert.deepEqual(calls, ['first', 'second']);
  assert.equal(context.runtime.stats().records, 0);
  assert.throws(() => context.onDispose(() => {}), /disposed/);
  assert.doesNotThrow(() => context.dispose());
});
