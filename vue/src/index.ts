import {
  computed,
  getCurrentScope,
  hasInjectionContext,
  inject,
  onScopeDispose,
  provide,
  watch,
  type App,
  type InjectionKey,
} from 'vue';
import {
  globalCss,
  type RootFactory,
  type StyleContext,
  type StyleRuntime,
} from '@zerodep-css/core';

export { createStyleContext, css, cssVar, keyframes, globalCss, ibind } from '@zerodep-css/core';
export type {
  StyleContext,
  StyleContextManifest,
  StyleContextOptions,
  StyleFactory,
  RootFactory,
} from '@zerodep-css/core';

const key: InjectionKey<StyleContext> = Symbol('zerodep-css');
/** 应用安装不接管 context 的销毁；调用方在卸载/请求结束后 dispose。 */
export function installStyleContext(app: App, context: StyleContext): void {
  app.provide(key, context);
}
export function provideStyleContext(context: StyleContext): void {
  // Vue provide 作用于后代；当前组件需要该实例时应显式传给 useStyleRuntime。
  provide(key, context);
}
function resolveContext(explicit?: StyleContext): StyleContext {
  const context = explicit ?? (hasInjectionContext() ? inject(key, undefined) : undefined);
  if (!context) throw new Error('Provide a style context or pass one explicitly.');
  return context;
}
/** 在 setup 中取得实例；返回的 css 可在模板、computed 或业务函数中调用。 */
export function useStyleRuntime(context?: StyleContext): StyleRuntime {
  return resolveContext(context).runtime;
}
/** 初始化时挂载一次；原生依赖变化更新同一槽位，scope 结束时停止监听。 */
export function useGlobalCss(
  identity: string,
  factory: RootFactory,
  explicit?: StyleContext,
): { readonly id: string; dispose(): void } {
  if (!getCurrentScope())
    throw new Error('useGlobalCss requires an active Vue setup/effect scope.');
  const context = resolveContext(explicit);
  // SSR 不建立 watcher，也不在 scope 清理时删掉尚未输出的规则。
  if (context.server) return context.mountGlobal(identity, globalCss(factory));
  // 派生阶段只生成不可变定义；watch 负责写入 CSSOM，避免把注册状态变成响应式依赖。
  const definition = computed(() => globalCss(factory));
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
