export default defineNuxtConfig({
  modules: ['@zerodep-css/nuxt'],
  zerodepCss: {
    namespace: 'nuxt-fixture',
    warnAt: false,
    compiler: process.env.ZERODEP_NUXT_COMPILER === '1',
  },
  devtools: { enabled: false },
  routeRules: {
    '/fail': { prerender: false },
    '/redirect': { prerender: false },
  },
  ...(process.env.ZERODEP_NUXT_GENERATE === '1'
    ? { nitro: { prerender: { routes: ['/', '/other'], crawlLinks: false } } }
    : {}),
});
