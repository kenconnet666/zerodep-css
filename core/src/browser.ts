import { createCss } from './css';

type BrowserHost = ReturnType<typeof createCss>;
const hosts = new WeakMap<Document, BrowserHost>();

function getHost(target: Document): BrowserHost {
  const existing = hosts.get(target);
  if (existing) return existing;

  const style = target.createElement('style');
  style.dataset.zerodepCss = '';
  target.head.append(style);
  const host = createCss((className, body) => {
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
