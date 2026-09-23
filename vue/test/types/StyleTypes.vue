<script setup lang="ts">
import { ref } from 'vue';
import { Css, createStyles, keyframes } from '@zerodep-css/vue';

const styles = createStyles();
const css = styles.useCss();
class CustomCss extends Css {
  control() {
    this.padding.px(8);
  }
}
const customStyles = createStyles({ cssType: CustomCss });
customStyles.useCss()((s) => s.control());
// @ts-expect-error 项目 CSS 构造器必须继承系统 Css
createStyles({ cssType: class NotCss {} });
// @ts-expect-error 系统 Css 不会被项目派生类污染
css((s) => s.control());

const width = ref(120);
const fade = keyframes((k) => {
  k.from((s) => {
    s.opacity.raw(0);
  });
  k.to((s) => {
    s.opacity.raw(1);
  });
});
const global = styles.useGlobalCss('style-types', (g) => {
  g.fontFace((d) => {
    d.fontFamily.raw('Demo');
    d.src.raw('url(demo.woff2)');
  });
  g.animation(fade);
});
</script>

<template>
  <div
    :aria-label="global.id"
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
