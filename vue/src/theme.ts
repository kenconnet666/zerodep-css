import {
  computed,
  inject,
  provide,
  getCurrentInstance,
  getCurrentScope,
  onScopeDispose,
  hasInjectionContext,
  type InjectionKey,
} from 'vue';
import type {
  ThemeDefinition,
  ThemeScope,
  ThemeTree,
  ThemeValues,
  ThemeInput,
} from '@zerodep-css/core';
import {
  createThemeScope,
  prepareThemeStyle,
  readTheme,
  resolveTheme,
} from '@zerodep-css/core/style-scope';

export const themeKey: InjectionKey<ThemeScope> = Symbol('zerodep-css-theme');
const localScopes = new WeakMap<object, ThemeScope>();

/** 与 Svelte 对齐：当前组件已提供的作用域优先，未提供时才继承祖先。 */
export function resolveThemeScope(): ThemeScope | undefined {
  const instance = getCurrentInstance();
  return (
    (instance ? localScopes.get(instance) : undefined) ??
    (hasInjectionContext() ? inject(themeKey, undefined) : undefined)
  );
}

/** 初始化时捕获当前有效作用域；在 computed/模板中调用 getter 才追踪主题依赖。 */
export function useTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  scope?: ThemeScope,
): () => ThemeValues<T> {
  const captured = scope ?? resolveThemeScope();
  return () => readTheme(definition, captured);
}

/** 当前组件后续读取与后代均可继承；返回值用于显式选择或跨 context 使用。 */
export function provideTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  overrides: ThemeInput<T> = undefined,
): ThemeScope {
  const read = typeof overrides === 'function' ? overrides : () => overrides;
  const instance = getCurrentInstance();
  if (!instance || !getCurrentScope())
    throw new Error('provideTheme must run during component setup.');
  // 同一组件可连续提供多个主题；Vue inject 本身只读取祖先，不包含先前的 provide。
  const parent = resolveThemeScope();
  const values = computed(() => resolveTheme(definition, read(), parent));
  // 原生 computed 管失效与缓存；声明准备只在有效主题变化后重算，不新增 watcher。
  const style = computed(() => prepareThemeStyle(definition, values.value));
  const scope = createThemeScope(
    definition,
    () => values.value,
    parent,
    () => style.value,
  );
  provide(themeKey, scope);
  localScopes.set(instance, scope);
  onScopeDispose(() => {
    if (localScopes.get(instance) === scope) localScopes.delete(instance);
  });
  return scope;
}
