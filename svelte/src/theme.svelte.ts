import { getContext, setContext } from 'svelte';
import type { ThemeDefinition, ThemeOverrides, ThemeScope, ThemeTree } from '@zerodep-css/core';
import { createThemeScope, resolveTheme } from '@zerodep-css/core/theme-runtime';

export const themeKey = Symbol('zerodep-css-theme');

/** 派生值由当前组件的 rune 生命周期拥有，不创建额外 store 或跨请求订阅。 */
export function provideTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  overrides: () => ThemeOverrides<T> | null | undefined = () => undefined,
): ThemeScope {
  if (typeof overrides !== 'function')
    throw new TypeError('Theme overrides must be read from a getter.');
  const parent = getContext<ThemeScope | undefined>(themeKey);
  const values = $derived.by(() => resolveTheme(definition, overrides(), parent));
  const scope = createThemeScope(definition, () => values, parent);
  setContext(themeKey, scope);
  return scope;
}
