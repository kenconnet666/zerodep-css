<script setup lang="ts">
import { ref } from 'vue';
import { useStyleRuntime } from '@zerodep-css/vue';
const { css } = useStyleRuntime();
const width = ref(10);
const colors = ['red', 'blue', 'initial', undefined];
let colorIndex = 0;
const color = ref<string | undefined>(colors[0]);
</script>

<template>
  <button
    data-auto-color
    @click="
      colorIndex = (colorIndex + 1) % colors.length;
      color = colors[colorIndex];
    "
  >
    color
  </button>
  <div
    data-auto-value
    :class="
      css((s) => {
        s.name('automatic-color');
        s.color.red;
        s.color.raw(color);
      })
    "
  >
    value
  </div>
  <button data-auto-change @click="width++">automatic</button>
  <div
    data-auto
    :class="
      css((s) => {
        s.name('automatic');
        s.width.px(width);
        if (true) s.padding.px(2, width);
        s.hover((h) => {
          h.width.px(width + 1);
        });
      })
    "
  ></div>
</template>
