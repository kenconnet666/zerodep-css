import assert from 'node:assert/strict';
import test from 'node:test';
import { computed, ref, createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { defineTheme } from '../../dist/index.js';
import { useTheme, provideTheme } from '../../dist/theme.js';
import { createThemeScope } from '../../../internal/runtime/dist/style-scope.js';

test('Vue 主题 getter 在使用点跟踪依赖，初始化不读取且请求间不共享值', () => {
  const theme = defineTheme('app', { color: 'red' });
  const color = ref('blue');
  let reads = 0;
  const scope = createThemeScope(theme, () => {
    reads++;
    return theme.resolve({ color: color.value });
  });
  const current = useTheme(theme, scope);
  const other = useTheme(
    theme,
    createThemeScope(theme, () => theme.defaults),
  );
  assert.equal(reads, 0);
  const derived = computed(() => current().color);
  assert.equal(derived.value, 'blue');
  color.value = 'green';
  assert.equal(derived.value, 'green');
  assert.equal(reads, 2);
  assert.equal(other(), theme.defaults);
  assert.equal(useTheme(theme)(), theme.defaults);
});

test('当前 provider 可以立即读取主题，先前读取函数不追溯切换作用域', async () => {
  const theme = defineTheme('self', { color: 'red' });
  let values;
  await renderToString(
    createSSRApp({
      setup() {
        const before = useTheme(theme);
        const scope = provideTheme(theme, () => ({ color: 'blue' }));
        values = [before().color, useTheme(theme)().color, useTheme(theme, scope)().color];
        return () => h('div');
      },
    }),
  );
  assert.deepEqual(values, ['red', 'blue', 'blue']);
});
