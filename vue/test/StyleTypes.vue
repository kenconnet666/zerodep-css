<script setup lang="ts">
import { ref } from 'vue';
import { useStyleRuntime, keyframes, globalCss } from '@zerodep-css/vue';

const { css } = useStyleRuntime();

const width = ref(120);
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

<template>
  <div
    :aria-label="String(base.rules.length)"
    :class="
      css((s) => {
        s.display.flex;
        s.width.px(width);
        s.hover((h) => {
          h.color.red;
        });
        s.animationName.raw(fade);
      })
    "
  ></div>
</template>
