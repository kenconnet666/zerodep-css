import { createSSRApp, defineComponent, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import {
  Css,
  WidthCss,
  createCssContext,
  createServerCssHost,
  css,
  ic,
  withCssHost,
} from '@zerodep-css/vue';

class ThemeWidthCss extends WidthCss {
  readonly _md = this.px(48);
}
class AppCss extends Css {
  override readonly width = new ThemeWidthCss();
}
const { provideCss, useCss } = createCssContext<AppCss>();

export async function renderPage(width: number, delay = 0) {
  const host = createServerCssHost();
  return withCssHost(host, async () => {
    if (delay) await new Promise((done) => setTimeout(done, delay));
    const Child = defineComponent({
      setup() {
        const s = useCss();
        return () =>
          h(
            'button',
            {
              class: css(
                s.display.flex,
                s.width.px(width),
                s.color.red,
                ic('&:hover', s.color.blue),
              ),
            },
            'Vue',
          );
      },
    });
    const Root = defineComponent({
      setup() {
        provideCss(new AppCss());
        return () => h(Child);
      },
    });
    const html = await renderToString(createSSRApp(Root));
    return { html, rules: host.rules(), cssText: host.cssText() };
  });
}

export function withoutHost(): string {
  return css('color:red;');
}
