import { getCurrentInstance, onMounted, onUnmounted, useId, watchEffect } from 'vue';
import { createBindings } from '@zerodep-css/core/bindings';

export function createVueBindings(
  file: string,
  host: {
    bindingId(owner: object): number;
    setBindings(key: string, body: string | null): void;
  },
  locations?: Readonly<Record<string, string>>,
) {
  const instance = getCurrentInstance();
  if (!instance) throw new Error('CSS bindings require component setup.');
  const owner = instance.appContext.config.idPrefix || host.bindingId(instance.appContext.app);
  const scope = createBindings(
    `${file}:${owner}:${useId()}`,
    host.setBindings,
    (run) => watchEffect(run),
    locations,
  );
  onMounted(scope.finishSetup);
  onUnmounted(scope.dispose);
  return scope;
}
