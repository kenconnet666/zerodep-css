export default defineNuxtConfig({
  modules: ['@zerodep-css/nuxt'],
  zerodepCss: {
    namespace: 'nuxt-fixture',
    warnAt: false,
    compiler: process.env.ZERODEP_NUXT_COMPILER === '1',
  },
  devtools: { enabled: false },
  // Nuxt 4.5.2可能因routeRules/payload模板重生成触发独立全页刷新；HMR夹具单独验组件热更新。
  routeRules:
    process.env.ZERODEP_NUXT_HMR === '1'
      ? {}
      : {
          '/fail': { prerender: false },
          '/redirect': { prerender: false },
          '/async': { prerender: false },
          '/cached': { cache: { maxAge: 60 }, prerender: false },
        },
  ...(process.env.ZERODEP_NUXT_GENERATE === '1'
    ? { nitro: { prerender: { routes: ['/', '/other'], crawlLinks: false } } }
    : {}),
});
