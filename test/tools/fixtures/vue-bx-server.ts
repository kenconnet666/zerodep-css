import { createSSRApp, defineComponent, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { createServerCssHost, withCssHost, serializeCssRules } from '@zerodep-css/vue';
import { AppCss } from '../../../core/examples/theme.js';
import { provideCss } from '../../../vue/examples/context.js';
import Component from './VueBx.vue';
export async function renderPage() {
  const host = createServerCssHost();
  const Root = defineComponent({
    setup() {
      provideCss(new AppCss());
      return () => [24, 40].map((initial) => h(Component, { initial, expose() {} }));
    },
  });
  const html = await withCssHost(host, () => renderToString(createSSRApp(Root)));
  return { html, rules: host.rules(), ...serializeCssRules(host.rules()) };
}
