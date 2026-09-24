import { randomBytes } from 'node:crypto';
import { setStyleNonce } from '@zerodep-css/nuxt/server';

export default defineEventHandler((event) => {
  const nonce = randomBytes(16).toString('base64');
  setStyleNonce(event, nonce);
  // 严格 CSP 原型通过 ?csp=1 启用；默认路径只验证 nonce 贯穿 SSR 与 hydration。
  if (new URL(event.path, 'http://localhost').searchParams.has('csp'))
    event.node.res.setHeader('Content-Security-Policy', `style-src 'self' 'nonce-${nonce}'`);
});
