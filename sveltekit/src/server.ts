import type { Handle } from '@sveltejs/kit';
import { createServerCssHost, serializeCssRules, withCssHost } from '@zerodep-css/svelte/server';

/** 首版缓冲 HTML 到渲染结束，确保首屏包含所有同步 SSR 规则。 */
export const handle: Handle = ({ event, resolve }) => {
  const host = createServerCssHost();
  let page = '';
  return withCssHost(host, () =>
    resolve(event, {
      transformPageChunk({ html, done }) {
        page += html;
        if (!done) return '';
        const marker = '%zerodep-css%';
        if (!page.includes(marker))
          throw new Error('Add %zerodep-css% inside the head of app.html.');
        const { cssText, manifest } = serializeCssRules(host.rules());
        return page.replace(
          marker,
          () =>
            `<style data-zerodep-css>${cssText}</style><script type="application/json" data-zerodep-css>${manifest}</script>`,
        );
      },
    }),
  );
};
