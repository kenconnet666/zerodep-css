import { createRuleRegistry, type CssRule } from './registry.js';
import { serializeStyleRules } from './serialization.js';

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
export function hydrateCss(rules?: readonly CssRule[], target: Document = document): void {
  const manifest =
    rules === undefined
      ? target.querySelector('script[data-zerodep-css][type="application/json"]')
      : null;
  if (rules === undefined) {
    if (!manifest) return; // 纯客户端页面没有需要恢复的服务端清单。
    const parsed: unknown = JSON.parse(manifest.textContent ?? '');
    if (
      !Array.isArray(parsed) ||
      !parsed.every(
        (rule) => rule && typeof rule.className === 'string' && typeof rule.body === 'string',
      )
    )
      throw new Error('Invalid CSS hydration manifest.');
    rules = parsed;
  }
  if (hosts.has(target)) throw new Error('CSS hydration must precede client registration.');
  const style = target.querySelector('style[data-zerodep-css]');
  if (!style) throw new Error('CSS hydration stylesheet is missing.');
  const expected = serializeStyleRules(rules);
  if (style.textContent !== expected)
    throw new Error('CSS hydration manifest does not match styles.');
  try {
    getHost(target).hydrate(rules);
  } catch (error) {
    // 清单校验失败不占用文档宿主，修正清单后仍可重新恢复。
    hosts.delete(target);
    throw error;
  }
  manifest?.remove();
}
