<script setup lang="ts">
import { ref } from 'vue';
import { useStyleRuntime } from '@zerodep-css/vue';
const { css } = useStyleRuntime();
const width = ref(10);
</script>

<template>
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
