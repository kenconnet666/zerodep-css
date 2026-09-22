import {
  computed,
  inject,
  provide,
  getCurrentInstance,
  getCurrentScope,
  onScopeDispose,
  type InjectionKey,
} from 'vue';
import type { ThemeDefinition, ThemeOverrides, ThemeScope, ThemeTree } from '@zerodep-css/core';
import { createThemeScope, resolveTheme } from '@zerodep-css/core/theme-runtime';

export const themeKey: InjectionKey<ThemeScope> = Symbol('zerodep-css-theme');
const localScopes = new WeakMap<object, ThemeScope>();

/** 当前组件显式使用返回作用域；后代通过 Vue provide/inject 继承。 */
export function provideTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  overrides: () => ThemeOverrides<T> | null | undefined = () => undefined,
): ThemeScope {
  if (typeof overrides !== 'function')
    throw new TypeError('Theme overrides must be read from a getter.');
  const instance = getCurrentInstance();
  if (!instance || !getCurrentScope())
    throw new Error('provideTheme must run during component setup.');
  // 同一组件可连续提供多个主题；Vue inject 本身只读取祖先，不包含先前的 provide。
  const parent = localScopes.get(instance) ?? inject(themeKey, undefined);
  const values = computed(() => resolveTheme(definition, overrides(), parent));
  const scope = createThemeScope(definition, () => values.value, parent);
  provide(themeKey, scope);
  localScopes.set(instance, scope);
  onScopeDispose(() => {
    if (localScopes.get(instance) === scope) localScopes.delete(instance);
  });
  return scope;
}
