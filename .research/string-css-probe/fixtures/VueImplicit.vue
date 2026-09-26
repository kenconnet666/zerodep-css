<script setup lang="ts">
import { ref } from 'vue';
import { css, cx, globalCss, ic, keyframes } from '@zerodep-css/vue';
import { useCss } from '../../../vue/examples/context.js';
import Plain from './VuePlainClass.vue';
const props = defineProps<{
  initial: number;
  expose: (control: { step(): void; reorder(): void }) => void;
}>();
const s = useCss();
const width = ref(props.initial);
const side = ref(3);
const red = ref(10);
const alpha = ref(0.5);
const snapshot = width.value;
const rows = ref([
  { id: 'a', width: 11 },
  { id: 'b', width: 22 },
]);
const fade = keyframes(
  ic('from', s.opacity.raw(alpha.value / 2)),
  ic('to', s.opacity.raw(alpha.value)),
);
const box = css(
  s.width.px(width.value),
  s.padding.px(side.value, width.value),
  s.color.rgb(red.value, 20, 30, alpha.value),
  s.transform.raw(`translate(${width.value}px, ${side.value}px) rotate(${red.value}deg)`),
);
const animated = css(s.animationName.raw(fade), s.animationDuration.ms(1000));
const combined = cx(box, css(s.backgroundColor.blue));
const fixed = css(s.height.px(snapshot));
const dual = css(s.width.px(side.value), s.height.rem(side.value));
const sibling = css(ic('& + [data-bound="sibling"]', s.marginLeft.px(width.value)));
function rowClass(row: { width: number }) {
  return css(s.width.px(row.width));
}
globalCss(
  `implicit-${props.initial}`,
  ic(`[data-global="${props.initial}"]`, s.color.rgb(red.value, 0, 0)),
);
props.expose({
  step() {
    width.value++;
    side.value++;
    red.value++;
    alpha.value = 0.75;
    rows.value[0]!.width++;
  },
  reorder() {
    rows.value.reverse();
  },
});
</script>
<template>
  <section :data-instance="props.initial">
    <div data-bound="box" :class="combined"></div>
    <div data-bound="animated" :class="animated"></div>
    <div data-bound="snapshot" :class="fixed"></div>
    <div data-bound="dual" :class="dual"></div>
    <div :class="sibling"></div>
    <div data-bound="sibling"></div>
    <Plain :value="combined" />
    <div v-for="row in rows" :key="row.id" :data-row="row.id" :class="rowClass(row)"></div>
  </section>
</template>
