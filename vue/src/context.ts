import { hasInjectionContext, inject, type App, type InjectionKey } from 'vue';
import type { StyleContext } from '#runtime';

const key: InjectionKey<StyleContext> = Symbol('zerodep-css');
/** 仅由项目 host 安装；组件取得样式函数，不接管共享引擎。 */
export function installStyleContext(app: App, context: StyleContext): void {
  app.provide(key, context);
}
export function resolveContext(explicit?: StyleContext): StyleContext {
  const context = explicit ?? (hasInjectionContext() ? inject(key, undefined) : undefined);
  if (!context) throw new Error('Provide a style context by installing a style host.');
  context.assertActive();
  return context;
}
