import { defineNuxtPlugin } from 'nuxt/app';
import { hydrateCss } from '@zerodep-css/vue';

export default defineNuxtPlugin({
  name: 'zerodep-css:restore',
  enforce: 'pre',
  setup() {
    hydrateCss();
  },
});
