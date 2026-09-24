import { randomBytes } from 'node:crypto';
import { setStyleNonce } from '@zerodep-css/nuxt/server';

export default defineEventHandler((event) => {
  const url = new URL(event.path, 'http://localhost');
  if (url.pathname === '/cached') {
    // 缓存响应必须有与请求无关的CSP；不能把一次性nonce冻结到HTML缓存中。
    event.node.res.setHeader('Content-Security-Policy', "style-src 'self' 'unsafe-inline'");
    return;
  }
  const nonce = randomBytes(16).toString('base64');
  setStyleNonce(event, nonce);
  // 严格 CSP 原型通过 ?csp=1 启用；默认路径只验证 nonce 贯穿 SSR 与 hydration。
  if (url.searchParams.has('csp'))
    event.node.res.setHeader('Content-Security-Policy', `style-src 'self' 'nonce-${nonce}'`);
});
