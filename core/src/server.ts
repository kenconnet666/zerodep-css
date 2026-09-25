import { AsyncLocalStorage } from 'node:async_hooks';
import { createCss, type CssRule } from './css.js';

export interface ServerCssHost {
  css(...parts: string[]): string;
  rules(): CssRule[];
  cssText(): string;
}

const current = new AsyncLocalStorage<ServerCssHost>();

export function createServerCssHost(): ServerCssHost {
  const registry = createCss(() => {});
  return {
    css: registry.css,
    rules: registry.rules,
    cssText: () =>
      registry
        .rules()
        .map(({ className, body }) => `.${className}{${body}}`)
        .join(''),
  };
}

/** 请求异步链路独占规则收集器，避免并发 SSR 写入同一张表。 */
export function withCssHost<T>(host: ServerCssHost, render: () => T): T {
  return current.run(host, render);
}

export function css(...parts: string[]): string {
  const host = current.getStore();
  if (!host) throw new Error('CSS server host is unavailable.');
  return host.css(...parts);
}
