import {
  createRuntime,
  type GlobalStyleHandle,
  type RuntimeOptions,
  type StyleManifest,
  type StyleRuntime,
} from './runtime.js';
import type { RootFactory } from './types.js';
import type { StylesheetDefinition } from './program.js';

export interface StyleContextManifest {
  readonly version: 1;
  readonly runtime: StyleManifest;
  readonly globals: readonly { readonly key: string; readonly id: string }[];
}
export interface StyleContextOptions extends Omit<RuntimeOptions, 'hydrate'> {
  readonly hydrate?: StyleContextManifest;
}
/** 一个应用、ShadowRoot 或 SSR 请求拥有一个上下文。不会自动共享服务端状态。 */
export interface StyleContext {
  readonly runtime: StyleRuntime;
  readonly server: boolean;
  mountGlobal(key: string, value: StylesheetDefinition | RootFactory): GlobalStyleHandle;
  snapshot(): StyleContextManifest;
  renderStyles(): string;
  renderManifest(): string;
  /** 在框架 hydration 完成后检查所有服务端全局槽位均已认领。 */
  completeHydration(): void;
  dispose(): void;
}

export function createStyleContext(options: StyleContextOptions = {}): StyleContext {
  const { hydrate, ...runtimeOptions } = options;
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
      return JSON.stringify(context.snapshot())
        .replaceAll('<', '\\u003c')
        .replaceAll('\u2028', '\\u2028')
        .replaceAll('\u2029', '\\u2029');
    },
    completeHydration() {
      alive();
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
