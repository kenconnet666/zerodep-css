<script setup lang="ts">
import { ref } from 'vue';
import { Css, css } from '@zerodep-css/vue';
const props = defineProps<{
  mode: string;
  count: number;
  emit: (...parts: string[]) => string;
  expose: (step: () => void, noise: () => void) => void;
}>();
const s = new Css();
const iteration = ref(0);
const unrelated = ref(0);
const rows = Array.from({ length: props.count }, (_, i) => i);
const shared = props.mode === 'manual' ? css(s.color.red, s.width.raw('var(--width)')) : '';
function classFor(row: number) {
  const value = 20 + iteration.value * props.count + row;
  if (props.mode === 'manual') return shared;
  if (props.mode === 'emotion') return props.emit(s.color.red, s.width.px(value));
  return css(s.color.red, s.width.px(value));
}
props.expose(
  () => {
    iteration.value++;
  },
  () => {
    unrelated.value++;
  },
);
</script>
<template>
  <div class="rows" :data-noise="unrelated">
    <div
      v-for="row in rows"
      :key="row"
      data-row
      :class="classFor(row)"
      :style="
        props.mode === 'manual'
          ? { '--width': `${20 + iteration * props.count + row}px` }
          : undefined
      "
    ></div>
  </div>
</template>
