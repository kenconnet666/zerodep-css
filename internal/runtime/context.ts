import {
  createRuntime,
  type GlobalStyleHandle,
  type RuntimeOptions,
  type StyleManifest,
  type StyleRuntime,
} from './runtime.js';
import { type StylesheetFactory, type StylesheetDefinition } from '@zerodep-css/core/internal';

export interface StyleContextManifest {
  readonly version: 1;
  readonly runtime: StyleManifest;
  /** 业务 key 标识 owner；id 标识有序样式槽位，二者不能用 CSS 内容相互推断。 */
  readonly globals: readonly { readonly key: string; readonly id: string }[];
}
export interface StyleContextOptions extends Omit<RuntimeOptions, 'hydrate'> {
  readonly hydrate?: StyleContextManifest;
}
/** 一个应用、ShadowRoot 或 SSR 请求拥有一个上下文。不会自动共享服务端状态。 */
export interface StyleContext {
  readonly runtime: StyleRuntime;
  readonly server: boolean;
  /** 同 key 同当前内容共享；最后一个租约释放时才移除样式槽位。 */
  mountGlobal(key: string, value: StylesheetDefinition | StylesheetFactory): GlobalStyleHandle;
  assertActive(): void;
  /** 内部 owner 生命周期桥；宿主提前销毁时先停止框架订阅。 */
  onDispose(cleanup: () => void): () => void;
  snapshot(): StyleContextManifest;
  renderStyles(): string;
  renderManifest(): string;
  /** 在框架 hydration 完成后检查所有服务端全局槽位均已认领。 */
  completeHydration(): void;
  /** 由应用/请求宿主调用，会同时释放该上下文中的共享 class 和动画。 */
  dispose(): void;
}

export function createStyleContext(options: StyleContextOptions = {}): StyleContext {
  const { hydrate, ...runtimeOptions } = options;
  // keys 同时保存待认领和已活跃的槽位；refcount 只存在于当前应用/请求。
  // 使用稳定 key 查找，允许客户端组件的初始化顺序与服务端不同。
  const keys = new Map<string, string>();
  const pending = new Set<string>();
  const active = new Map<string, { handle: GlobalStyleHandle; owners: number }>();
  if (hydrate) {
    if (
      hydrate.version !== 1 ||
      !Array.isArray(hydrate.globals) ||
      !Array.isArray(hydrate.runtime?.records)
    )
      throw new Error('Invalid style context manifest.');
    // 在创建 runtime、接管 DOM 之前检查映射完整性，失败不能污染现有 SSR 样式。
    const ids = new Set(
      hydrate.runtime.records.filter((r) => r.kind === 'global').map((r) => r.id),
    );
    for (const entry of hydrate.globals) {
      if (
        !entry ||
        typeof entry.key !== 'string' ||
        !entry.key.trim() ||
        keys.has(entry.key) ||
        !ids.delete(entry.id)
      )
        throw new Error('Invalid or duplicate global style identity.');
      keys.set(entry.key, entry.id);
      pending.add(entry.key);
    }
    if (ids.size) throw new Error('Global styles must be mounted through their style context.');
  }
  const runtime = createRuntime({ ...runtimeOptions, hydrate: hydrate?.runtime });
  let disposed = false;
  const cleanups = new Set<() => void>();
  const alive = () => {
    if (disposed) throw new Error('Style context has been disposed.');
  };
  const context: StyleContext = {
    runtime,
    server:
      options.target === null || (options.target === undefined && typeof document === 'undefined'),
    assertActive: alive,
    onDispose(cleanup) {
      alive();
      if (typeof cleanup !== 'function') throw new TypeError('Expected a style owner cleanup.');
      cleanups.add(cleanup);
      return () => cleanups.delete(cleanup);
    },
    mountGlobal(key, value) {
      alive();
      if (typeof key !== 'string' || !key.trim())
        throw new TypeError('Global style key must be non-empty.');
      let entry = active.get(key);
      if (entry) {
        // 候选样式在 runtime 内只编译一次；冲突或宿主损坏均不新增 owner。
        entry.handle.update(value, key);
        entry.owners++;
      } else {
        // claimGlobal 内部先事务更新再认领；成功返回后才推进上下文状态。
        // 若构建或 CSSOM 写入失败，pending 保持不变，调用方仍可修正后重试。
        const handle = pending.has(key)
          ? runtime.claimGlobal(keys.get(key)!, value)
          : runtime.mountGlobal(value);
        entry = { handle, owners: 1 };
        keys.set(key, handle.id);
        pending.delete(key);
        active.set(key, entry);
      }
      const owner = entry;
      let closed = false;
      return Object.freeze({
        id: owner.handle.id,
        update(value: StylesheetDefinition | StylesheetFactory) {
          alive();
          if (closed || active.get(key) !== owner)
            throw new Error('Global style lease is no longer active: ' + key);
          owner.handle.update(value, owner.owners > 1 ? key : undefined);
        },
        dispose() {
          if (closed) return;
          closed = true;
          if (disposed || active.get(key) !== owner) return;
          if (--owner.owners) return;
          // 旧租约只持有旧 entry，不能删掉同 key 后来重建的 owner。
          owner.handle.dispose();
          active.delete(key);
          keys.delete(key);
        },
      });
    },
    snapshot() {
      alive();
      const manifest = runtime.snapshot();
      // runtime 是公开的，必须防止调用方绕过 context 挂载全局规则后输出残缺映射。
      const ids = new Set(manifest.records.filter((r) => r.kind === 'global').map((r) => r.id));
      if (ids.size !== keys.size || [...keys.values()].some((id) => !ids.has(id)))
        throw new Error('Global styles must be mounted through their style context.');
      return Object.freeze({
        version: 1,
        runtime: manifest,
        globals: Object.freeze([...keys].map(([key, id]) => Object.freeze({ key, id }))),
      });
    },
    renderStyles: runtime.renderStyles,
    renderManifest() {
      // JSON 可能直接嵌入 application/json script；不能让业务 key 提前闭合标签。
      return JSON.stringify(context.snapshot())
        .replaceAll('<', '\\u003c')
        .replaceAll('\u2028', '\\u2028')
        .replaceAll('\u2029', '\\u2029');
    },
    completeHydration() {
      alive();
      // 不静默删除未认领规则：这通常意味着服务端/客户端组件树或 key 不一致。
      if (pending.size)
        throw new Error('Unclaimed server global styles: ' + [...pending].join(', '));
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      const errors: unknown[] = [];
      for (const cleanup of [...cleanups]) {
        try {
          cleanup();
        } catch (error) {
          errors.push(error);
        }
      }
      cleanups.clear();
      try {
        runtime.dispose();
      } catch (error) {
        errors.push(error);
      } finally {
        keys.clear();
        pending.clear();
        active.clear();
      }
      if (errors.length === 1) throw errors[0];
      if (errors.length) throw new AggregateError(errors, 'Style context cleanup failed.');
    },
  };
  return Object.freeze(context);
}
