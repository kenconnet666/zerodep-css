import { defineNuxtPlugin } from 'nuxt/app';
import { createStyles, type StyleManifest } from '@zerodep-css/vue';
import options from '#build/zerodep-css-options.mjs';

const project = createStyles();
const manifestId = '__zerodep_css_manifest__';

export default defineNuxtPlugin({
  name: 'zerodep-css',
  enforce: 'pre',
  setup(nuxtApp) {
    const marker = document.getElementById(manifestId) as HTMLScriptElement | null;
    if (!marker && nuxtApp.payload.serverRendered)
      throw new Error('Missing zerodep-css SSR manifest before hydration.');
    if (marker && marker.type !== 'application/json')
      throw new Error('Invalid zerodep-css SSR manifest element.');
    const hydrate = marker ? (JSON.parse(marker.textContent ?? '') as StyleManifest) : undefined;
    const host = project.createHost({
      ...options,
      hydrate,
      nonce: marker?.nonce || undefined,
    });
    try {
      nuxtApp.vueApp.use(host);
    } catch (error) {
      host.dispose();
      throw error;
    }
    if (hydrate) {
      let complete = false;
      nuxtApp.hook('app:suspense:resolve', () => {
        if (complete) return;
        host.completeHydration();
        complete = true;
        marker?.remove();
      });
    }
  },
});
