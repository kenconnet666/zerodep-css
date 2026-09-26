<script lang="ts">
  import { Css, WidthCss, createCssContext, css } from '../../src';

  class AppWidthCss extends WidthCss {
    readonly _md = this.px(48);
  }
  class AppCss extends Css {
    override readonly width = new AppWidthCss();
  }
  const { provideCss, useCss } = createCssContext<AppCss>();
  provideCss(new AppCss());
  const s = useCss();
  const className = css(s.width._md, s._hover(s.color.red));
  className satisfies string;
  // @ts-expect-error 只能注入绑定的作者类型
  provideCss(new Css());
</script>

<div class={className}></div>
