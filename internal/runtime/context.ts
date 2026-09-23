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
  /** 同一 key 同时只允许一个活跃挂载；释放后可以重新使用。 */
  mountGlobal(key: string, value: StylesheetDefinition | StylesheetFactory): GlobalStyleHandle;
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
  // keys 同时保存待认领和已活跃的槽位；pending/active 分别控制恢复与重复挂载。
  // 使用稳定 key 查找，允许客户端组件的初始化顺序与服务端不同。
  const keys = new Map<string, string>();
  const pending = new Set<string>();
  const active = new Set<string>();
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
  const alive = () => {
    if (disposed) throw new Error('Style context has been disposed.');
  };
  const context: StyleContext = {
    runtime,
    server:
      options.target === null || (options.target === undefined && typeof document === 'undefined'),
    mountGlobal(key, value) {
      alive();
      if (typeof key !== 'string' || !key.trim())
        throw new TypeError('Global style key must be non-empty.');
      if (active.has(key)) throw new Error('Global style key is already active: ' + key);
      // claimGlobal 内部先事务更新再认领；成功返回后才推进上下文状态。
      // 若构建或 CSSOM 写入失败，pending 保持不变，调用方仍可修正后重试。
      const handle = pending.has(key)
        ? runtime.claimGlobal(keys.get(key)!, value)
        : runtime.mountGlobal(value);
      keys.set(key, handle.id);
      pending.delete(key);
      active.add(key);
      let closed = false;
      return Object.freeze({
        id: handle.id,
        update: handle.update,
        dispose() {
          // 防止旧句柄重复清理，误删同 key 后来重新挂载的新 owner。
          if (closed) return;
          closed = true;
          handle.dispose();
          keys.delete(key);
          active.delete(key);
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
      runtime.dispose();
      keys.clear();
      pending.clear();
      active.clear();
    },
  };
  return Object.freeze(context);
}
