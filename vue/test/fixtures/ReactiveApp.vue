<script setup lang="ts">
import { ref } from 'vue';
import { createStyles } from '@zerodep-css/vue';
import ReactiveStyles from './ReactiveStyles.vue';
const props = defineProps<{
  initialColor: string;
  record: (kind: string) => void;
}>();
const css = createStyles().useCss();
const show = ref(true);
</script>

<template>
  <div data-global>global</div>
  <div
    data-survivor
    :class="
      css((s) => {
        s.padding.px(7);
      })
    "
  >
    survivor
  </div>
  <button data-toggle @click="show = !show">toggle</button>
  <ReactiveStyles v-if="show" :initial-color="initialColor" :record="record" />
</template>
