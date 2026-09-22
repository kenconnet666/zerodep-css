import { hasInjectionContext, inject, provide, type App, type InjectionKey } from 'vue';
import type { StyleContext, StyleRuntime, ThemeScope } from '@zerodep-css/core';
import { withTheme } from '@zerodep-css/core/theme-runtime';
import { themeKey } from './theme.js';

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
export function useStyleRuntime(context?: StyleContext, theme?: ThemeScope): StyleRuntime {
  const scope =
    theme ?? (!context && hasInjectionContext() ? inject(themeKey, undefined) : undefined);
  return withTheme(resolveContext(context).runtime, scope);
}
