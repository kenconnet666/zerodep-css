<script setup lang="ts">
import { defineTheme } from '@zerodep-css/vue';
import { theme, spacing, styles } from './theme';
defineProps<{ name: string }>();
const css = styles.useCss();
const current = styles.useTheme();
const gap = styles.useTheme(spacing);
const fallback = styles.useTheme(defineTheme('unprovided', { opacity: 0.5 }));
</script>
<template>
  <div
    :data-custom-unit="name"
    :class="
      css((s) => {
        s.width.px(10 + 1);
      })
    "
  ></div>
  <div
    :data-theme-leaf="name"
    :data-theme-values="JSON.stringify(current())"
    :data-theme-gap="gap().gap"
    :data-theme-fallback="fallback().opacity"
    :class="
      css((s) => {
        s.name('themed-content');
        s.color.brand;
        s.backgroundColor.text;
        s.padding.raw(spacing.tokens.gap);
      })
    "
  >
    theme
  </div>
</template>
