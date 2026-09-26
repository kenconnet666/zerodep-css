import { onDestroy } from 'svelte';
import { createBindings } from '@zerodep-css/core/bindings';
import { getBindingOwner } from './context.js';

export function createSvelteBindings(
  file: string,
  id: string,
  schedule: (run: () => void) => () => void,
  host: {
    bindingId(owner: object): number;
    setBindings(key: string, body: string | null): void;
    releaseBindings(keys: readonly string[]): void;
  },
  locations?: Readonly<Record<string, string>>,
  server = false,
) {
  const scope = createBindings(
    `${file}:${host.bindingId(getBindingOwner())}:${id}`,
    host.setBindings,
    schedule,
    locations,
    host.releaseBindings,
  );
  // 按包入口决定 SSR 语义，避免 DOM 模拟环境把服务端清单提前清空。
  if (!server) onDestroy(scope.dispose);
  return scope;
}
