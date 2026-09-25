import type { Css } from '@zerodep-css/core';
import { getContext, setContext } from 'svelte';

/** 用 Symbol 绑定类型，兼容整个 Svelte 5 peer 范围。 */
export function createCssContext<T extends Css>() {
  const key = Symbol('zerodep-css');
  return {
    provideCss(instance: T): T {
      return setContext(key, instance);
    },
    useCss(): T {
      const instance = getContext<T | undefined>(key);
      if (!instance) throw new Error('CSS author was not provided.');
      return instance;
    },
  };
}
