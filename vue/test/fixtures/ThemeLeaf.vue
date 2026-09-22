<script setup lang="ts">
import { useStyleRuntime } from '@zerodep-css/vue';
import { AppCss, spacing } from './theme';
defineProps<{ name: string }>();
const { css } = useStyleRuntime();
</script>
<template>
  <div
    :data-theme-leaf="name"
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
