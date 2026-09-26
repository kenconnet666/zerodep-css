export * from '@zerodep-css/core';
import { hasInjectionContext, inject, type App, type InjectionKey } from 'vue';
import { css as requestCss, type ServerCssHost } from '@zerodep-css/core/server';
export {
  createServerCssHost,
  withCssHost,
  serializeCssRules,
  type ServerCssHost,
} from '@zerodep-css/core/server';
export { createCssContext } from './context.js';

const hostKey: InjectionKey<ServerCssHost> = Symbol('zerodep-css-host');

/** 元框架拥有渲染调度时，把宿主绑定到本次 Vue 应用，不修改全局异步上下文。 */
export function provideCssHost(app: App, host: ServerCssHost): void {
  app.provide(hostKey, host);
}

export function css(...parts: string[]): string {
  const host = hasInjectionContext() ? inject(hostKey, null) : null;
  return host ? host.css(...parts) : requestCss(...parts);
}
