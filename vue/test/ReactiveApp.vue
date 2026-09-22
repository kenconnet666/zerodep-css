<script setup lang="ts">
import { ref } from 'vue';
import { provideStyleContext, useStyleRuntime, type StyleContext } from '@zerodep-css/vue';
import ReactiveStyles from './ReactiveStyles.vue';
const props = defineProps<{
  context: StyleContext;
  initialColor: string;
  record: (kind: string) => void;
}>();
provideStyleContext(props.context);
const { css } = useStyleRuntime(props.context);
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
