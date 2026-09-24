import node from '@sveltejs/adapter-node';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const staticBuild = process.env.ZCSS_ADAPTER === 'static';
export default {
  preprocess: vitePreprocess(),
  compilerOptions: { experimental: { async: true } },
  kit: {
    ...(staticBuild ? { prerender: { crawl: false, entries: ['/', '/other'] } } : {}),
    adapter: staticBuild
      ? staticAdapter({ pages: 'build-static', assets: 'build-static', strict: false })
      : node({ out: 'build-node' }),
  },
};
