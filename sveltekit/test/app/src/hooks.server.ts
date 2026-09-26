import { sequence } from '@sveltejs/kit/hooks';
import { handle as cssHandle } from '@zerodep-css/sveltekit/server';
import { createHash, randomUUID } from 'node:crypto';
// Kit 自带的两个固定内联样式使用精确哈希，不放宽任意内联样式。
const styleHashes = [
  'display: contents',
  'position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px',
]
  .map((value) => `'sha256-${createHash('sha256').update(value).digest('base64')}'`)
  .join(' ');
export const handle = sequence(
  async ({ event, resolve }) => {
    if (event.url.pathname !== '/bindings-live') return resolve(event);
    const nonce = randomUUID();
    (event.locals as { zerodepCssNonce?: string }).zerodepCssNonce = nonce;
    const response = await resolve(event);
    response.headers.set(
      'Content-Security-Policy',
      `style-src 'nonce-${nonce}'; style-src-attr 'unsafe-hashes' ${styleHashes}`,
    );
    return response;
  },
  cssHandle,
  async ({ event, resolve }) => {
    const response = await resolve(event);
    response.headers.set('x-fixture-hook', 'preserved');
    return response;
  },
);
