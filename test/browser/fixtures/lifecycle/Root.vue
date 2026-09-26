<script setup lang="ts">
import { ref } from 'vue';
import { Css, css } from '@zerodep-css/vue';
import Child from './Child.vue';
const visible = ref(true);
const s = new Css();
const sibling = css(s.height.px(32));
</script>
<template>
  <button data-toggle @click="visible = !visible">toggle</button>
  <div data-sibling :class="sibling">sibling</div>
  <Child v-if="visible" />
</template>
