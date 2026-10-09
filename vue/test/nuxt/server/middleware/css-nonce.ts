import { randomUUID } from 'node:crypto';
import { defineEventHandler, setResponseHeader } from 'h3';
export default defineEventHandler((event) => {
  if (event.path.split('?')[0] !== '/bindings-live') return;
  const nonce = randomUUID();
  event.context.zerodepCssNonce = nonce;
  setResponseHeader(
    event,
    'Content-Security-Policy',
    `style-src 'nonce-${nonce}'; style-src-attr 'none'`,
  );
});
