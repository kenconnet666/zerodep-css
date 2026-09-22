<script setup lang="ts">
import { defineTheme, useTheme, useStyleRuntime } from '@zerodep-css/vue';
import { AppCss, theme, spacing } from './theme';
defineProps<{ name: string }>();
const { css } = useStyleRuntime();
const current = useTheme(theme);
const gap = useTheme(spacing);
const fallback = useTheme(defineTheme('unprovided', { opacity: 0.5 }));
</script>
<template>
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
      }, AppCss)
    "
  >
    theme
  </div>
</template>
