import { getContext, setContext } from 'svelte';
import {
  Css,
  type StyleContext,
  type StyleRuntime,
  type ThemeScope,
  type UseStyleRuntimeOptions,
} from '@zerodep-css/core';
import { styleRuntimeOptions, withTheme } from '@zerodep-css/core/theme-runtime';
import { themeKey } from './theme.svelte.js';

const key = Symbol('zerodep-css');
export function provideStyleContext(context: StyleContext): void {
  setContext(key, context);
}
export function resolveContext(explicit?: StyleContext): StyleContext {
  // 显式实例不依赖组件上下文；默认分支必须在组件初始化阶段执行。
  const context = explicit ?? getContext<StyleContext | undefined>(key);
  if (!context) throw new Error('Provide a style context or pass one explicitly.');
  return context;
}
/** 在组件初始化时获取，后续模板求值无需再次访问 context。 */
export function useStyleRuntime<T extends Css = Css>(
  options: UseStyleRuntimeOptions<T>,
): StyleRuntime<T>;
export function useStyleRuntime(context?: StyleContext, theme?: ThemeScope): StyleRuntime;
export function useStyleRuntime(
  input?: StyleContext | UseStyleRuntimeOptions,
  theme?: ThemeScope,
): StyleRuntime {
  const options = styleRuntimeOptions(input, theme);
  const scope =
    options.theme ?? (!options.context ? getContext<ThemeScope | undefined>(themeKey) : undefined);
  return withTheme(resolveContext(options.context).runtime, scope, options.cssType ?? Css);
}
