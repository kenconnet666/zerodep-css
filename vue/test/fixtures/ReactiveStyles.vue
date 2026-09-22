<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGlobalCss, useStyleRuntime } from '@zerodep-css/vue';
const props = defineProps<{ initialColor: string; record: (kind: string) => void }>();
const { css } = useStyleRuntime();
const width = ref(20);
const color = ref(props.initialColor);
const enabled = ref(true);
const unrelated = ref(0);
const external = computed(() =>
  css((s) => {
    props.record('derived');
    s.width.px(width.value);
    s.color.raw(enabled.value ? color.value : 'green');
  }),
);
const global = useGlobalCss('fixture/global', (g) => {
  props.record('global');
  g.rule('[data-global]', (s) => s.color.raw(color.value));
});
</script>

<template>
  <div
    data-inline
    :class="
      css((s) => {
        record('inline');
        s.width.px(width);
        s.color.raw(enabled ? color : 'green');
      })
    "
  >
    inline
  </div>
  <div data-derived :class="external">derived</div>
  <div
    data-shared
    :class="
      css((s) => {
        s.padding.px(7);
      })
    "
  >
    shared
  </div>
  <button data-width @click="width++">width</button>
  <button data-color @click="color = color === 'red' ? 'blue' : 'red'">color</button>
  <button data-branch @click="enabled = !enabled">branch</button>
  <button data-unrelated @click="unrelated++">{{ unrelated }}</button>
  <button data-stop-global @click="global.dispose()">stop global</button>
</template>
