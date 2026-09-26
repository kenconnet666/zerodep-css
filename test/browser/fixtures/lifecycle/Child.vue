<script setup lang="ts">
import { ref } from 'vue';
import { bx, Css, css } from '@zerodep-css/vue';
import { width } from './state.js';
const s = new Css();
let generation = 0;
const rows = ref(Array.from({ length: 20 }, (_, id) => ({ id, width: id + 10 })));
const box = css(s.width.raw(bx(width.value + 'px')), s._hover(s.color.blue));
function replaceRows() {
  generation++;
  rows.value = Array.from({ length: 20 }, (_, i) => ({ id: generation * 20 + i, width: i + 10 }));
}
</script>
<template>
  <button data-replace @click="replaceRows">replace</button>
  <div data-probe :class="box">initial</div>
  <div
    v-for="row in rows"
    :key="row.id"
    data-row
    :class="css(s.width.raw(bx(row.width + 'px')))"
  ></div>
</template>
