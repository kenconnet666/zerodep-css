import { AsyncLocalStorage } from 'node:async_hooks';
import { createRuleRegistry, type CssRule, type CssInput } from './registry.js';
import { serializeStyleRules } from './serialization.js';
export { serializeCssRules } from './serialization.js';

export interface ServerCssHost {
  css(...parts: CssInput[]): string;
  keyframes(...parts: CssInput[]): string;
  globalCss(key: string, ...parts: CssInput[]): void;
  setBindings(key: string, body: string | null): void;
  releaseBindings(keys: readonly string[]): void;
  bindingId(owner: object): number;
  readonly nonce?: string;
  rules(): CssRule[];
  cssText(): string;
}

const current = new AsyncLocalStorage<ServerCssHost>();

export function createServerCssHost(options: { nonce?: string } = {}): ServerCssHost {
  const registry = createRuleRegistry(() => {});
  return {
    css: registry.css,
    keyframes: registry.keyframes,
    globalCss: registry.globalCss,
    setBindings: registry.setBindings,
    releaseBindings: registry.releaseBindings,
    bindingId: registry.bindingId,
    nonce: options.nonce,
    rules: registry.rules,
    cssText: () => serializeStyleRules(registry.rules()),
  };
}

/** 请求异步链路独占规则收集器，避免并发 SSR 写入同一张表。 */
export function withCssHost<T>(host: ServerCssHost, render: () => T): T {
  return current.run(host, render);
}

export function css(...parts: CssInput[]): string {
  const host = current.getStore();
  if (!host) throw new Error('CSS server host is unavailable.');
  return host.css(...parts);
}

export function requireHost(): ServerCssHost {
  const host = current.getStore();
  if (!host) throw new Error('CSS server host is unavailable.');
  return host;
}
export const keyframes = (...parts: CssInput[]): string => requireHost().keyframes(...parts);
export const globalCss = (key: string, ...parts: CssInput[]): void =>
  requireHost().globalCss(key, ...parts);
