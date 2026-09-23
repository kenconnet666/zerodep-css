import assert from 'node:assert/strict';
import test from 'node:test';
import { computed, shallowRef, effectScope, watchEffect, nextTick } from 'vue';
import { defineTheme, createRuntime } from '../../../core/dist/index.js';
import {
  createThemeScope,
  createRuntimeView,
  prepareThemeStyle,
} from '../../../core/dist/style-scope.js';

test('原生 computed 缓存主题准备，普通回调继续执行，依赖更新及 runtime 隔离保持正确', async () => {
  const theme = defineTheme('native-cache', { color: 'red' });
  const current = shallowRef(theme.defaults);
  let preparations = 0,
    calls = 0,
    updates = 0;
  const style = computed(() => {
    preparations++;
    return prepareThemeStyle(theme, current.value);
  });
  const scope = createThemeScope(
    theme,
    () => current.value,
    undefined,
    () => style.value,
  );
  const first = createRuntime({ target: null, namespace: 'first' }),
    second = createRuntime({ target: null, namespace: 'second' });
  const view = createRuntimeView(first, scope),
    other = createRuntimeView(second, scope);
  const factory = (s) => {
    calls++;
    s.color.raw(theme.tokens.color);
  };
  let name;
  const owner = effectScope();
  owner.run(() =>
    watchEffect(() => {
      name = view.css(factory);
      updates++;
    }),
  );
  const initial = name;
  for (let i = 0; i < 20; i++) assert.equal(view.css(factory), initial);
  assert.equal(preparations, 1);
  assert.equal(calls, 21);
  assert.equal(updates, 1);
  assert.notEqual(other.css(factory), name);
  assert.equal(preparations, 1);
  current.value = theme.resolve({ color: 'blue' });
  await nextTick();
  assert.equal(updates, 2);
  assert.equal(preparations, 2);
  assert.notEqual(name, initial);
  assert.equal(first.stats().records, 3);
  // 同一派生准备值在另一个请求中仍须独立注册，不能仅缓存字符串。
  assert.equal(second.stats().records, 2);
  other.css(factory);
  assert.equal(second.stats().records, 3);
  owner.stop();
  current.value = theme.defaults;
  await nextTick();
  assert.equal(updates, 2);
  assert.equal(view.css(factory), initial);
  assert.equal(preparations, 3);
  first.dispose();
  assert.throws(() => view.css(factory), /disposed/);
  assert.equal(typeof other.css(factory), 'string');
  second.dispose();
});

test('主题准备与普通路径输出相同，缓存驱逐后可重建，并隔离外部可变输入', () => {
  const theme = defineTheme('equivalent', { color: 'red', gap: '8px' });
  const input = { color: 'blue', gap: '12px' };
  const prepared = prepareThemeStyle(theme, input);
  input.color = 'green';
  const first = createRuntime({ target: null }),
    second = createRuntime({ target: null });
  const className = first.css(prepared);
  const expected = theme.className(second, { color: 'blue', gap: '12px' });
  assert.equal(className, expected);
  assert.deepEqual(first.snapshot(), second.snapshot());
  for (let i = 0; i < 300; i++) first.css((s) => s.width.px(i));
  assert.equal(first.css(prepared), className);
  assert.throws(() => prepareThemeStyle(theme, { color: 'inherit', gap: '8px' }), /CSS-wide/);
  assert.throws(
    () => prepareThemeStyle(theme, defineTheme('other', { unexpected: 'red' }).defaults),
    /Unknown theme field/,
  );
  first.dispose();
  second.dispose();
});
