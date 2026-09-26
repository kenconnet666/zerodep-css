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
  const merged = registry.cx(a, registry.css('color:red;'));
  registry.css(`& + span{opacity:var(${variable});}`);
  const rule = registry.rules().find((item) => item.kind === 'bindings');
  assert.ok(rule.targets.includes(a));
  assert.ok(rule.targets.includes(merged));
  assert.equal(rule.root, true);
  assert.ok(ruleText(rule).startsWith(':root,'));
});
