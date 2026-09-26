import { sequence } from '@sveltejs/kit/hooks';
import { handle as cssHandle } from '@zerodep-css/sveltekit/server';
export const handle = sequence(cssHandle, async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.set('x-fixture-hook', 'preserved');
  return response;
});
