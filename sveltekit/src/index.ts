import { hydrateCss } from '@zerodep-css/svelte';

/** 从 hooks.client.ts 导出；Kit 在组件 hydration 前调用。 */
export function init(): void {
  hydrateCss();
}
