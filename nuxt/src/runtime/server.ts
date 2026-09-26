import { defineNuxtPlugin } from 'nuxt/app';
import { createServerCssHost, provideCssHost, serializeCssRules } from '@zerodep-css/vue/server';

export default defineNuxtPlugin({
  name: 'zerodep-css:host',
  enforce: 'pre',
  setup(app) {
    const nonce = app.ssrContext?.event?.context.zerodepCssNonce;
    const host = createServerCssHost({ nonce: typeof nonce === 'string' ? nonce : undefined });
    provideCssHost(app.vueApp, host);
    app.hook('app:rendered', ({ ssrContext }) => {
      const { cssText, manifest } = serializeCssRules(host.rules());
      ssrContext?.head.push({
        style: [
          { key: 'zerodep-css', 'data-zerodep-css': '', innerHTML: cssText, nonce: host.nonce },
        ],
        script: [
          {
            key: 'zerodep-css-manifest',
            type: 'application/json',
            'data-zerodep-css': '',
            innerHTML: manifest,
            nonce: host.nonce,
          },
        ],
      });
    });
  },
});
