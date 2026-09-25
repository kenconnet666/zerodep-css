import { createRuleRegistry, type CssRule } from './registry.js';

type BrowserHost = ReturnType<typeof createRuleRegistry>;
const hosts = new WeakMap<Document, BrowserHost>();

function getHost(target: Document): BrowserHost {
  const existing = hosts.get(target);
  if (existing) return existing;

  let style = target.querySelector<HTMLStyleElement>('style[data-zerodep-css]');
  if (!style) {
    style = target.createElement('style');
    style.dataset.zerodepCss = '';
    target.head.append(style);
  }
  const host = createRuleRegistry((className, body) => {
    const sheet = style.sheet;
    if (!sheet) throw new Error('CSS stylesheet is unavailable.');
    sheet.insertRule(`.${className}{${body}}`, sheet.cssRules.length);
  });
  hosts.set(target, host);
  return host;
}

/** 浏览器文档共享规则；每次调用只注册尚未出现的声明组合。 */
export function css(...parts: string[]): string {
  if (typeof document === 'undefined') throw new Error('CSS browser host is unavailable.');
  return getHost(document).css(...parts);
}

/** 必须先把服务端的 style[data-zerodep-css] 放入页面，再登记其规则。 */
export function hydrateCss(rules: readonly CssRule[], target: Document = document): void {
  if (hosts.has(target)) throw new Error('CSS hydration must precede client registration.');
  const style = target.querySelector('style[data-zerodep-css]');
  if (!style) throw new Error('CSS hydration stylesheet is missing.');
  const expected = rules.map(({ className, body }) => `.${className}{${body}}`).join('');
  if (style.textContent !== expected)
    throw new Error('CSS hydration manifest does not match styles.');
  getHost(target).hydrate(rules);
}
