<script lang="ts">
  import { css, keyframes, globalCss } from '@zerodep-css/core';

  let { width = 120 }: { width?: number } = $props();
  const fade = keyframes((k) => {
    k.from((s) => {
      s.opacity.raw(0);
    });
    k.to((s) => {
      s.opacity.raw(1);
    });
  });
  const base = globalCss((g) => {
    g.fontFace((d) => {
      d.fontFamily.raw('Demo');
      d.src.raw('url(demo.woff2)');
    });
    g.animation(fade);
  });
</script>

<div
  data-rules={base.rules.length}
  class={css((s) => {
    s.display.flex;
    s.width.px(width);
    s.hover((h) => {
      h.color.red;
    });
    s.animationName.raw(fade);
  })}
></div>
