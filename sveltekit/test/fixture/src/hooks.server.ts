import { building } from '$app/environment';
import { createStyleHandle } from '@zerodep-css/sveltekit/server';

export const handle = createStyleHandle({
  host: { namespace: 'kit-fixture' },
  nonce: (event) =>
    building ? undefined : event.url.searchParams.has('nonce') ? 'fixture-nonce' : undefined,
});
