import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@zerodep-css/nuxt'],
  alias: { '@example': fileURLToPath(new URL('../../../vue/examples/App.vue', import.meta.url)) },
  devtools: { enabled: false },
  nitro: { preset: 'node-server', prerender: { routes: ['/prerender'] } },
  compatibilityDate: '2026-09-26',
});
