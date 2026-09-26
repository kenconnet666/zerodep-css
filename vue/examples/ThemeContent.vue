<script setup lang="ts">
import { css } from '@zerodep-css/vue';
import { useCss } from './preset-context.js';
defineProps<{ label: string }>();
const s = useCss();
const panel = css(
  s.color._text,
  s.backgroundColor._surface,
  s._hover(s.backgroundColor._surfaceHover),
);
</script>
<template>
  <div :data-theme-sample="label" :class="panel">主题内容</div>
</template>
