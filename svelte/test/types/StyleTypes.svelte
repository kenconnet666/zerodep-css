<script lang="ts">
  import { Css, createStyles, keyframes } from '@zerodep-css/svelte';

  const { useCss, useGlobalCss } = createStyles();
  const css = useCss();
  class CustomCss extends Css {
    control() {
      this.padding.px(8);
    }
  }
  createStyles({ cssType: CustomCss }).useCss()((s) => s.control());
  // @ts-expect-error 声明泛型不能代替实际传入构造器
  createStyles<CustomCss>();

  let { width = 120 }: { width?: number } = $props();
  const fade = keyframes((k) => {
    k.from((s) => {
      s.opacity.raw(0);
    });
    k.to((s) => {
      s.opacity.raw(1);
    });
  });
  const base = useGlobalCss('type-base', (g) => {
    g.fontFace((d) => {
      d.fontFamily.raw('Demo');
      d.src.raw('url(demo.woff2)');
    });
    g.animation(fade);
  });
</script>

<div
  data-rules={base.id}
  class={css((s) => {
    s.display.flex;
    s.width.px(width);
    s.hover((h) => {
      h.color.red;
    });
    s.animationName.raw(fade);
  })}
></div>
