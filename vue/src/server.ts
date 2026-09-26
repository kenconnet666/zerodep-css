export * from '@zerodep-css/core';
import { hasInjectionContext, inject, type App, type InjectionKey } from 'vue';
import {
  css as requestCss,
  cx as requestCx,
  keyframes as requestKeyframes,
  globalCss as requestGlobal,
  type ServerCssHost,
} from '@zerodep-css/core/server';
import type { ClassNames } from '@zerodep-css/core';
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
function injectedHost() {
  return hasInjectionContext() ? inject(hostKey, null) : null;
}
export const cx = (...values: ClassNames[]): string => (injectedHost()?.cx ?? requestCx)(...values);
export const keyframes = (...parts: string[]): string =>
  (injectedHost()?.keyframes ?? requestKeyframes)(...parts);
export const globalCss = (key: string, ...parts: string[]): void =>
  (injectedHost()?.globalCss ?? requestGlobal)(key, ...parts);
