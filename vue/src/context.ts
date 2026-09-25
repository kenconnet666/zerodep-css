import type { Css } from '@zerodep-css/core';
import { inject, provide, type InjectionKey } from 'vue';

/** 类型只需在项目入口声明一次；后代注入同一个作者实例。 */
export function createCssContext<T extends Css>() {
  const key = Symbol('zerodep-css') as InjectionKey<T>;
  return {
    provideCss(instance: T): T {
      provide(key, instance);
      return instance;
    },
    useCss(): T {
      const instance = inject(key);
      if (!instance) throw new Error('CSS author was not provided.');
      return instance;
    },
  };
}
