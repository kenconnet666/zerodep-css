import { hasInjectionContext, inject, provide, type App, type InjectionKey } from 'vue';
import {
  Css,
  type CssConstructor,
  type StyleContext,
  type StyleRuntime,
  type UseStyleRuntimeOptions,
} from '@zerodep-css/core';
import { normalizeStyleOptions, createRuntimeView } from '@zerodep-css/core/style-scope';
import { resolveThemeScope } from './theme.js';

const key: InjectionKey<StyleContext> = Symbol('zerodep-css');
/** 应用安装不接管 context 的销毁；调用方在卸载/请求结束后 dispose。 */
export function installStyleContext(app: App, context: StyleContext): void {
  app.provide(key, context);
}
export function provideStyleContext(context: StyleContext): void {
  // provide 只作用于后代；当前组件可显式 useStyleRuntime({ context })。
  provide(key, context);
}
export function resolveContext(explicit?: StyleContext): StyleContext {
  const context = explicit ?? (hasInjectionContext() ? inject(key, undefined) : undefined);
  if (!context) throw new Error('Provide a style context or pass one explicitly.');
  return context;
}
/** 初始化时取得实例；返回的 css 可在模板、computed 或业务函数中调用。 */
export function useStyleRuntime<T extends Css>(
  options: UseStyleRuntimeOptions<T> & { readonly cssType: CssConstructor<T> },
): StyleRuntime<T>;
export function useStyleRuntime(options?: UseStyleRuntimeOptions): StyleRuntime;
export function useStyleRuntime(input?: UseStyleRuntimeOptions): StyleRuntime {
  if (arguments.length > 1) throw new TypeError('useStyleRuntime accepts one options object.');
  const options = normalizeStyleOptions(input);
  const scope = options.theme ?? (!options.context ? resolveThemeScope() : undefined);
  return createRuntimeView(resolveContext(options.context).runtime, scope, options.cssType ?? Css);
}
