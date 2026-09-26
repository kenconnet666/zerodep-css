import test from 'node:test';
import assert from 'node:assert/strict';
import { createRuleRegistry, className } from './runtime.mjs';

test('Unicode 与已知旧哈希碰撞均生成不同类，标记不占规则', () => {
  const registry = createRuleRegistry(() => {});
  assert.notEqual(registry.css('--probe:28fx-1rqasrx;'), registry.css('--probe:28vj-gi2s3j;'));
  assert.notEqual(registry.css('content:"Ā";'), registry.css('content:"Ȁ";'));
  assert.equal(className('Card.title'), className('Card.title'));
  assert.notEqual(className('Card.title'), className('Card.icon'));
  assert.equal(registry.size, 4);
});

test('cx 按顺序合并已登记类并保留条件输入、标记和外部类', () => {
  const registry = createRuleRegistry(() => {});
  const a = registry.css('color:red!important;padding:1px;');
  const b = registry.css('color:blue;padding-left:2px;');
  const marker = className('title');
  assert.equal(registry.cx(a, false, [null, { external: true }]), `${a} external`);
  assert.equal(registry.size, 2);
  const merged = registry.cx(marker, [a, { [b]: true }], 'external');
  const combined = registry.css('color:red!important;padding:1px;color:blue;padding-left:2px;');
  assert.equal(merged, `${marker} external ${combined}`);
  assert.equal(registry.size, 3);
});

test('动画去重、全局块原位更新移除、恢复清单整体回滚', () => {
  const writes = [];
  const registry = createRuleRegistry(
    () => {},
    (key, rule) => writes.push([key, rule?.body]),
  );
  const frames = registry.keyframes('from{opacity:0}to{opacity:1}');
  assert.equal(frames, registry.keyframes('from{opacity:0}', 'to{opacity:1}'));
  registry.globalCss('first', 'body{color:red}');
  registry.globalCss('second', 'html{padding:0}');
  registry.globalCss('first', 'body{color:blue}');
  registry.globalCss('first', 'body{color:red}');
  assert.deepEqual(
    registry
      .rules()
      .filter((rule) => rule.kind === 'global')
      .map((rule) => rule.key),
    ['first', 'second'],
  );
  registry.globalCss('first');
  registry.globalCss('first', 'body{color:red}');
  assert.deepEqual(
    registry
      .rules()
      .filter((rule) => rule.kind === 'global')
      .map((rule) => rule.key),
    ['second', 'first'],
  );
  const next = createRuleRegistry(() => {});
  assert.throws(() => next.hydrate([...registry.rules(), { className: 'bad', body: 'x:y' }]));
  assert.equal(next.size, 0);
  next.hydrate(registry.rules());
  assert.equal(next.keyframes('from{opacity:0}to{opacity:1}'), frames);
  assert.deepEqual(next.rules(), registry.rules());
  assert.equal(writes.length, 6);
});
