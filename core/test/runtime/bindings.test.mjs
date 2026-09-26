import test from 'node:test';
import assert from 'node:assert/strict';
import { createRuleRegistry, hash, ruleText } from './runtime.mjs';

test('绑定恢复原子校验，移除后缓存类可重新关联新值', () => {
  const origin = createRuleRegistry(() => {});
  const key = 'component:slot';
  const name = `zv-${hash(key)}`;
  origin.setBindings(key, `--${name}-0:12px;`);
  const body = `width:var(--${name}-0);`;
  const cls = origin.css(body);
  const rules = origin.rules();
  const binding = rules.find((rule) => rule.kind === 'bindings');
  assert.deepEqual(binding.targets, [cls]);
  const target = createRuleRegistry(() => {});
  assert.throws(() => target.hydrate([...rules, { ...binding, targets: ['body'] }]), /targets/);
  assert.equal(target.size, 0);
  assert.throws(() => target.hydrate([...rules, { ...binding, body: 'different' }]), /conflicting/);
  assert.equal(target.size, 0);
  target.hydrate(rules);
  assert.equal(target.css(body), cls);
  target.setBindings(key, null);
  target.setBindings(key, `--${name}-0:24px;`);
  target.css(body);
  assert.deepEqual(target.rules().find((rule) => rule.kind === 'bindings').targets, [cls]);
  assert.deepEqual(target.stats(), {
    rules: 2,
    classes: 1,
    animations: 0,
    globals: 0,
    bindings: 1,
  });
  const snapshot = target.rules();
  snapshot.find((rule) => rule.kind === 'bindings').targets.push('external');
  assert.deepEqual(target.rules().find((rule) => rule.kind === 'bindings').targets, [cls]);
});

test('动画与组合类保留变量引用，越过子树的选择器使用私有根变量', () => {
  const registry = createRuleRegistry(() => {});
  const key = 'animation';
  const variable = `--zv-${hash(key)}-0`;
  registry.setBindings(key, `${variable}:0.5;`);
  const animation = registry.keyframes(`from{opacity:var(${variable});}to{opacity:1;}`);
  const a = registry.css(`animation:${animation} 1s;`);
  const merged = registry.css(a, 'color:red;');
  registry.css(`& + span{opacity:var(${variable});}`);
  const rule = registry.rules().find((item) => item.kind === 'bindings');
  assert.ok(rule.targets.includes(a));
  assert.ok(rule.targets.includes(merged));
  assert.equal(rule.root, true);
  assert.ok(ruleText(rule).startsWith(':root,'));
});

test('所有者释放回收私有类和动画，活动组合及静态缓存不被删除', () => {
  const removed = [];
  const registry = createRuleRegistry(
    () => {},
    () => {},
    undefined,
    (names) => removed.push(...names),
  );
  const a = 'owner-a',
    b = 'owner-b',
    av = `--zv-${hash(a)}-0`,
    bv = `--zv-${hash(b)}-0`;
  registry.setBindings(a, `${av}:12px;`);
  registry.setBindings(b, `${bv}:24px;`);
  const plain = registry.css('color:red;'),
    first = registry.css(`width:var(${av});`),
    second = registry.css(`height:var(${bv});`);
  const combined = registry.css(first, second, plain);
  const animation = registry.keyframes(`to{width:var(${av});}`);
  const animated = registry.css(`animation:${animation} 1s;`);
  const hydrated = createRuleRegistry(() => {});
  hydrated.hydrate(registry.rules());
  registry.releaseBindings([a]);
  assert.ok(registry.rules().some((r) => r.className === combined));
  assert.ok(registry.rules().some((r) => r.className === second));
  assert.deepEqual(new Set(removed), new Set([first, animation, animated]));
  registry.releaseBindings([b]);
  assert.deepEqual(
    registry.rules().map((r) => r.className),
    [plain],
  );
  assert.equal(registry.css('color:red;'), plain);
  hydrated.releaseBindings([a, b]);
  assert.deepEqual(
    hydrated.rules().map((r) => r.className),
    [plain],
  );
  registry.setBindings(a, `${av}:36px;`);
  assert.equal(registry.css(`width:var(${av});`), first);
  assert.deepEqual(registry.rules().find((r) => r.kind === 'bindings').targets, [first]);
});
