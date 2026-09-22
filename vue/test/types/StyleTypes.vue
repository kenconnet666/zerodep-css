<script setup lang="ts">
import { ref } from 'vue';
import { Css, useStyleRuntime, keyframes, globalCss } from '@zerodep-css/vue';

const { css } = useStyleRuntime();
class CustomCss extends Css {
  control() {
    this.padding.px(8);
  }
}
useStyleRuntime({ cssType: CustomCss }).css((s) => s.control());
// @ts-expect-error 声明泛型不能代替实际传入构造器
useStyleRuntime<CustomCss>({});

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
