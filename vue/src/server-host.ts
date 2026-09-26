import { hasInjectionContext, inject, type App, type InjectionKey } from 'vue';
import { requireHost, type ServerCssHost } from '@zerodep-css/core/server';

const hostKey: InjectionKey<ServerCssHost> = Symbol('zerodep-css-host');
/** 应用级宿主与绑定运行时共享同一 Symbol，不修改全局异步上下文。 */
export function provideCssHost(app: App, host: ServerCssHost): void {
  app.provide(hostKey, host);
}
export function resolveCssHost(): ServerCssHost {
  return (hasInjectionContext() ? inject(hostKey, null) : null) ?? requireHost();
}
