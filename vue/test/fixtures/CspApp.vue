<script setup lang="ts">
import { ref } from 'vue';
import { useStyleRuntime } from '@zerodep-css/vue';
const props = defineProps<{ initialWidth: number }>();
const width = ref(props.initialWidth);
const { css } = useStyleRuntime();
const rows = [{ css: (value: number) => 'local' + value }];
</script>
<template>
  <div v-for="{ css } in rows" data-csp-shadow :class="css(3)">local</div>
  <button data-csp-change @click="width++">update</button>
  <div
    data-csp-value
    :class="
      css((s) => {
        s.name('csp');
        s.width.px(width);
        s.color.red;
      })
    "
  >
    value
  </div>
</template>
