import { defineNitroPlugin } from 'nitropack/runtime';
import type {} from '@nuxt/nitro-server/augments';
import { collectRendered, releaseHostQuietly, takeHead } from './request.js';

export default defineNitroPlugin((nitro) => {
  // 完整字符串 SSR 才能在 app:rendered 后收集全部规则并写入 head。
  nitro.hooks.hook('render:route', (context) => {
    context.prefersStream = false;
  });
  nitro.hooks.hook('render:html', (html, { event }) => {
    // 所有 app:rendered 钩子结束后再收集，不能在它们仍可注册样式时提前释放。
    collectRendered(event);
    html.head.push(...takeHead(event));
  });
  nitro.hooks.hook('render:response', (_response, { event }) => releaseHostQuietly(event));
  nitro.hooks.hook('error', (_error, { event }) => {
    if (event) releaseHostQuietly(event);
  });
  nitro.hooks.hook('afterResponse', (event) => releaseHostQuietly(event));
});
