import { building } from '$app/environment';

export const load = ({ url }: { url: URL }) => ({
  tone: building ? 'red' : url.searchParams.get('tone') === 'blue' ? 'blue' : 'red',
});
