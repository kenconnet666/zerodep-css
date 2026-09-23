<script setup lang="ts">
import { createStyles } from '@zerodep-css/vue';
import { lightTheme, ThemeCss } from '@zerodep-css/vue/themes';
const styles = createStyles({ cssType: ThemeCss, theme: lightTheme });
styles.provideTheme(() => ({
  color: { primary: '#9333ea', onPrimary: '#ffffff' },
}));
const css = styles.useCss();
</script>
<template>
  <div
    data-preset-local
    :class="
      css((s) => {
        s.color.text;
        s.backgroundColor.surface;
      })
    "
  >
    <span
      data-preset-custom
      :class="
        css((s) => {
          s.color.onPrimary;
          s.backgroundColor.primary;
          s.padding.xs;
          s.borderRadius.sm;
          s.fontSize.xs;
        })
      "
      >局部主色</span
    >
  </div>
</template>
