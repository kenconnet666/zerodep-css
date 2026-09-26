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
  },
  locations?: Readonly<Record<string, string>>,
) {
  const scope = createBindings(
    `${file}:${host.bindingId(getBindingOwner())}:${id}`,
    host.setBindings,
    schedule,
    locations,
  );
  // SSR 的 onDestroy 会在取出规则之前执行，不能删除首屏值。
  if (typeof document !== 'undefined') onDestroy(scope.dispose);
  return scope;
}
