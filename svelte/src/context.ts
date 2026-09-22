import { getContext, setContext } from 'svelte';
import {
  Css,
  type CssConstructor,
  type StyleContext,
  type StyleRuntime,
  type ThemeScope,
  type UseStyleRuntimeOptions,
} from '@zerodep-css/core';
import { normalizeStyleOptions, createRuntimeView } from '@zerodep-css/core/style-scope';
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
export function useStyleRuntime<T extends Css>(
  options: UseStyleRuntimeOptions<T> & { readonly cssType: CssConstructor<T> },
): StyleRuntime<T>;
export function useStyleRuntime(options?: UseStyleRuntimeOptions): StyleRuntime;
export function useStyleRuntime(input?: UseStyleRuntimeOptions): StyleRuntime {
  if (arguments.length > 1) throw new TypeError('useStyleRuntime accepts one options object.');
  const options = normalizeStyleOptions(input);
  const scope =
    options.theme ?? (!options.context ? getContext<ThemeScope | undefined>(themeKey) : undefined);
  return createRuntimeView(resolveContext(options.context).runtime, scope, options.cssType ?? Css);
}
