import { computed, getCurrentScope, onScopeDispose, watch } from 'vue';
import { Css, type CssConstructor, type StylesheetFactory } from '@zerodep-css/core';
import { globalCss, type StyleContext } from '#runtime';
import { resolveContext } from './context.js';

/** 初始化时挂载一次；原生依赖变化更新同一槽位，scope 结束时停止监听。 */
export function useGlobalCss<C extends Css = Css>(
  identity: string,
  factory: StylesheetFactory<C>,
  explicit?: StyleContext,
  cssType: CssConstructor<C> = Css as CssConstructor<C>,
): { readonly id: string; dispose(): void } {
  if (!getCurrentScope())
    throw new Error('useGlobalCss requires an active Vue setup/effect scope.');
  const context = resolveContext(explicit);
  // SSR 不建立 watcher，也不在 scope 清理时删掉尚未输出的规则。
  if (context.server) return context.mountGlobal(identity, globalCss(factory, cssType));
  // 派生阶段只生成不可变定义；watch 负责写入 CSSOM，避免把注册状态变成响应式依赖。
  const definition = computed(() => globalCss(factory, cssType));
  // 首次构建/挂载直接抛错，不让 Vue 的 watcher 错误处理吞掉失败的初始化。
  const handle = context.mountGlobal(identity, definition.value);
  let closed = false;
  const stop = watch(definition, (value) => handle.update(value), { flush: 'pre' });
  const dispose = () => {
    if (!closed) {
      closed = true;
      stop();
      handle.dispose();
    }
  };
  // 仅释放这个组件拥有的全局槽位，不 dispose 应用共享的 context/runtime。
  onScopeDispose(dispose);
  return Object.freeze({
    get id() {
      return handle.id;
    },
    dispose,
  });
}
