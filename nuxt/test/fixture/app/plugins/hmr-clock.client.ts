import { nextTick } from 'vue';

declare global {
  interface Window {
    __zerodepHmrEvents?: string[][];
    __zerodepRecordHmr?: (signal: { event: string; paths: string[]; at: number }) => void;
  }
}

/** 测试专用：记录公开Vite HMR完成事件，不改变应用样式或组件生命周期。 */
export default defineNuxtPlugin(() => {
  if (!import.meta.hot) return;
  const events = (window.__zerodepHmrEvents ??= []);
  const paths = (updates: readonly { path: string; acceptedPath?: string }[]) =>
    updates.flatMap((update) => [update.path, update.acceptedPath ?? '']);
  const record = (event: string, items: string[] = []) =>
    window.__zerodepRecordHmr?.({ event, paths: items, at: performance.now() });
  import.meta.hot.on('vite:beforeUpdate', (payload) =>
    record('beforeUpdate', paths(payload.updates)),
  );
  import.meta.hot.on('vite:afterUpdate', async (payload) => {
    await nextTick();
    const updated = paths(payload.updates);
    events.push(updated);
    record('afterUpdate', updated);
  });
  import.meta.hot.on('vite:beforeFullReload', (payload) =>
    record('beforeFullReload', payload.path ? [payload.path] : []),
  );
  import.meta.hot.on('vite:invalidate', (payload) =>
    record('invalidate', payload.path ? [payload.path] : []),
  );
});
