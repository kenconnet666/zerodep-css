<script setup lang="ts">
import { computed, ref } from 'vue';
import { Css, css } from '@zerodep-css/vue';
const props = defineProps<{
  index: number;
  expose: (step: () => void, noise: () => void) => void;
}>();
const s = new Css();
const width = ref(20 + props.index);
const noise = ref(0);
// 探针只替换这一标记，生产插件不增加模板语法。
/* DERIVED_DECLARATION */
props.expose(
  () => {
    width.value++;
  },
  () => {
    noise.value++;
  },
);
</script>
<template>
  <div data-row :data-noise="noise" :class="[s.color.red, s.width.px(width)]"></div>
</template>
