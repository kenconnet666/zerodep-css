import { getContext, setContext } from 'svelte';
import type {
  ThemeDefinition,
  ThemeInput,
  ThemeScope,
  ThemeTree,
  ThemeValues,
} from '@zerodep-css/core';
import {
  createThemeScope,
  prepareThemeStyle,
  readTheme,
  resolveTheme,
} from '@zerodep-css/core/style-scope';

export const themeKey = Symbol('zerodep-css-theme');

/** 初始化时捕获作用域；返回的 getter 可在模板/$derived 中保留原生依赖跟踪。 */
export function useTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  scope?: ThemeScope,
): () => ThemeValues<T> {
  const captured = scope ?? getContext<ThemeScope | undefined>(themeKey);
  return () => readTheme(definition, captured);
}

/** 派生值由当前组件的 rune 生命周期拥有，不创建额外 store 或跨请求订阅。 */
export function provideTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  overrides?: ThemeInput<T>,
): ThemeScope {
  const parent = getContext<ThemeScope | undefined>(themeKey);
  const read = typeof overrides === 'function' ? overrides : () => overrides;
  const values = $derived.by(() => resolveTheme(definition, read(), parent));
  // 使用同一组件拥有的原生派生缓存；不增加 effect root 或自定义主题缓存表。
  const style = $derived(prepareThemeStyle(definition, values));
  const scope = createThemeScope(
    definition,
    () => values,
    parent,
    () => style,
  );
  setContext(themeKey, scope);
  return scope;
}
