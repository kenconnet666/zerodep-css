import { AsyncLocalStorage } from 'node:async_hooks';
import type { StyleHost } from '@zerodep-css/svelte';

export interface RequestStyles {
  host: StyleHost;
  createHost(): StyleHost;
  rootProvided: boolean;
}

/** 仅 server 条件导出会引用此模块；浏览器入口不依赖 Node 内建模块。 */
export const requestStyles = new AsyncLocalStorage<RequestStyles>();

export function beginRoot(state: RequestStyles): StyleHost {
  if (state.rootProvided) {
    state.host.dispose();
    state.host = state.createHost();
  }
  state.rootProvided = true;
  return state.host;
}
