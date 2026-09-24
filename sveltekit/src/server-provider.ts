import { getContext, setContext } from 'svelte';
import type { StyleHost } from '@zerodep-css/svelte';
import { beginRoot, requestStyles } from './server-context.js';

const rootMarker = Symbol('zerodep-css SvelteKit root');

/** 每棵 SSR 根组件树调用一次；Kit 错误页重渲染会取得全新的宿主。 */
export function provideStyles(): StyleHost {
  const state = requestStyles.getStore();
  if (!state) throw new Error('provideStyles() requires createStyleHandle() in hooks.server.');
  if (getContext(rootMarker))
    throw new Error('provideStyles() must be called only once at the root +layout.svelte.');

  // HttpError 不经过 Kit handleError；新根布局就是可靠的渲染尝试边界。
  const host = beginRoot(state);
  host.provide();
  setContext(rootMarker, true);
  return host;
}
