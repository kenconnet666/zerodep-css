import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // 本夹具验证 style-src-attr 'none'；元素内联变量由独立浏览器夹具验收。
  modules: [['zerodep-css-vue/nuxt', { inlineBindings: false }]],
  alias: { '@example': fileURLToPath(new URL('../../../vue/examples/App.vue', import.meta.url)) },
  devtools: { enabled: false },
  nitro: { preset: 'node-server', prerender: { routes: ['/prerender', '/bindings'] } },
  compatibilityDate: '2026-09-26',
});
