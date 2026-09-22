import assert from 'node:assert/strict';
import test from 'node:test';
import { computed, ref } from 'vue';
import { defineTheme, useTheme } from '../../dist/index.js';
import { createThemeScope } from '../../../core/dist/theme-runtime.js';

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
