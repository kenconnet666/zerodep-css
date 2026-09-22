import { hasInjectionContext, inject, provide, type App, type InjectionKey } from 'vue';
import {
  Css,
  type StyleContext,
  type StyleRuntime,
  type ThemeScope,
  type UseStyleRuntimeOptions,
} from '@zerodep-css/core';
import { styleRuntimeOptions, withTheme } from '@zerodep-css/core/theme-runtime';
import { resolveThemeScope } from './theme.js';

const key: InjectionKey<StyleContext> = Symbol('zerodep-css');
/** 应用安装不接管 context 的销毁；调用方在卸载/请求结束后 dispose。 */
export function installStyleContext(app: App, context: StyleContext): void {
  app.provide(key, context);
}
export function provideStyleContext(context: StyleContext): void {
  // provide 只作用于后代；当前组件可显式传入 useStyleRuntime(context)。
  provide(key, context);
}
export function resolveContext(explicit?: StyleContext): StyleContext {
  const context = explicit ?? (hasInjectionContext() ? inject(key, undefined) : undefined);
  if (!context) throw new Error('Provide a style context or pass one explicitly.');
  return context;
}
/** 初始化时取得实例；返回的 css 可在模板、computed 或业务函数中调用。 */
export function useStyleRuntime<T extends Css = Css>(
  options: UseStyleRuntimeOptions<T>,
): StyleRuntime<T>;
export function useStyleRuntime(context?: StyleContext, theme?: ThemeScope): StyleRuntime;
export function useStyleRuntime(
  input?: StyleContext | UseStyleRuntimeOptions,
  theme?: ThemeScope,
): StyleRuntime {
  const options = styleRuntimeOptions(input, theme);
  const scope = options.theme ?? (!options.context ? resolveThemeScope() : undefined);
  return withTheme(resolveContext(options.context).runtime, scope, options.cssType ?? Css);
}
