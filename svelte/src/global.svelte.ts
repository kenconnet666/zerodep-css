import { onDestroy, untrack } from 'svelte';
import { globalCss, type StylesheetFactory, type StyleContext } from '@zerodep-css/core';
import { resolveContext } from './context.js';

/** 全局样式 owner：初始化挂载、原生响应式更新、提前停止或组件卸载清理。 */
export function useGlobalCss(
  identity: string,
  factory: StylesheetFactory,
  explicit?: StyleContext,
): { readonly id: string; dispose(): void } {
  const context = resolveContext(explicit);
  // 服务端 effect 不执行；保留规则直到宿主输出并释放请求上下文。
  if (context.server) return context.mountGlobal(identity, globalCss(factory));
  let handle: ReturnType<StyleContext['mountGlobal']> | undefined;
  let closed = false;
  // derived 只运行纯构建器；依赖读取留在这里，规则注册留在 effect/首次挂载中。
  const definition = $derived(globalCss(factory));
  // 独立 root 让返回句柄可以提前停止；因此必须由 onDestroy 显式回收。
  const stop = $effect.root(() => {
    $effect.pre(() => {
      const value = definition;
      // 此处只更新非响应式 registry 和 CSSOM，不写 Svelte 状态。
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
    // 首次挂载或生命周期注册失败时，也不能留下无人负责的 effect root。
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
