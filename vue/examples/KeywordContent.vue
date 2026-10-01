<script setup lang="ts">
import { Css, css, bx } from 'zerodep-css-vue';
import { DarkKeywords } from '../../core/examples/injected-keywords.js';
import { provideCss, useCss } from './keyword-context.js';
const props = defineProps<{ nested?: boolean; label: string; width?: number }>();
const s = props.nested ? provideCss(new Css(new DarkKeywords())) : useCss();
</script>
<template>
  <p
    :data-keyword-content="props.label"
    :class="css(s.color._primary, s.fontSize._md, s.width.raw(bx((props.width ?? 12) + 'px')))"
  >
    注入主题
  </p>
</template>
