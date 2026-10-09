export async function load({ url }: { url: URL }) {
  await new Promise((done) => setTimeout(done, url.searchParams.get('width') === '40' ? 0 : 10));
  return {
    width: Number(url.searchParams.get('width') ?? 24),
    theme: url.searchParams.get('theme') === 'dark' ? 'dark' : 'light',
  };
}
