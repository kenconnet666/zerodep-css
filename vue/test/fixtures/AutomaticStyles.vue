<script setup lang="ts">
import { ref } from 'vue';
import { createStyles } from '@zerodep-css/vue';
const css = createStyles().useCss();
const width = ref(10);
const siblingWidth = ref(10);
const colors = ['red', 'blue', 'initial', undefined];
let colorIndex = 0;
const color = ref<string | undefined>(colors[0]);
const sizes = [null, 24, 30, undefined];
let sizeIndex = 0;
const size = ref<number | null | undefined>(null);
</script>

<template>
  <button
    data-nullable-change
    @click="
      sizeIndex = (sizeIndex + 1) % sizes.length;
      size = sizes[sizeIndex];
    "
  >
    nullable
  </button>
  <div
    data-nullable
    :class="
      css((s) => {
        s.width.px(16);
        s.width.px(size);
        s.padding.px(4);
        s.padding.px(2, size);
      })
    "
  ></div>
  <button data-sibling-change @click="siblingWidth = 20">sibling</button>
  <div
    data-sibling-source
    :class="
      css((s) => {
        s.selector('& + [data-auto-sibling]', (n) => {
          n.width.px(siblingWidth);
        });
      })
    "
  ></div>
  <div data-auto-sibling></div>
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
