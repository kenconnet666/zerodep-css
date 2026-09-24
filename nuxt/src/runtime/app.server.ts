import { defineNuxtPlugin } from 'nuxt/app';
import { createStyles } from '@zerodep-css/vue';
import options from '#build/zerodep-css-options.mjs';
import {
  attachHost,
  onHostRelease,
  releaseHost,
  releaseHostQuietly,
  styleNonce,
} from './request.js';

const project = createStyles();

export default defineNuxtPlugin({
  name: 'zerodep-css',
  enforce: 'pre',
  setup(nuxtApp) {
    const event = nuxtApp.ssrContext?.event;
    if (!event) throw new Error('Nuxt SSR request event is unavailable.');
    const host = project.createHost({ ...options, target: null, nonce: styleNonce(event) });
    let attached = false;
    try {
      attachHost(event, host);
      attached = true;
      const release = () => releaseHostQuietly(event);
      // Node ServerResponse 的 close 同时覆盖完整结束和客户端断连。
      const response = event.node?.res;
      if (response && typeof response.once === 'function' && typeof response.off === 'function') {
        response.once('close', release);
        onHostRelease(event, () => response.off('close', release));
      }
      nuxtApp.vueApp.use(host);
      nuxtApp.hook('app:redirected', release);
      // app:error 可能先于错误页渲染，不能在这里提前释放。
    } catch (error) {
      if (attached) releaseHost(event);
      else host.dispose();
      throw error;
    }
  },
});
