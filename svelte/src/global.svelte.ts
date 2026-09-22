import { onDestroy, untrack } from 'svelte';
import { globalCss, type RootFactory, type StyleContext } from '@zerodep-css/core';
import { resolveContext } from './context.js';

export function useGlobalCss(
  identity: string,
  factory: RootFactory,
  explicit?: StyleContext,
): { readonly id: string; dispose(): void } {
  const context = resolveContext(explicit);
  // 服务端 effect 不执行；保留规则直到宿主输出并释放请求上下文。
  if (context.server) return context.mountGlobal(identity, globalCss(factory));
  let handle: ReturnType<StyleContext['mountGlobal']> | undefined;
  let closed = false;
  const definition = $derived(globalCss(factory));
  const stop = $effect.root(() => {
    $effect.pre(() => {
      const value = definition;
      untrack(() => {
        if (handle) handle.update(value);
      });
    });
  });
  try {
    // 同步首次挂载，保证首屏有规则；effect 之后只更新原槽位。
    handle = context.mountGlobal(
      identity,
      untrack(() => definition),
    );
    onDestroy(dispose);
  } catch (error) {
    stop();
    handle?.dispose();
    throw error;
  }
  function dispose() {
    if (!closed) {
      closed = true;
      stop();
      handle?.dispose();
    }
  }
  return Object.freeze({
    get id() {
      return handle!.id;
    },
    dispose,
  });
}
