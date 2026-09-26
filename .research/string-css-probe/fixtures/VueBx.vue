<script setup lang="ts">
import { ref } from 'vue';
import { bx, css, globalCss, keyframes } from '@zerodep-css/vue';
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
  s._selector('from', s.opacity.raw(bx(alpha.value / 2))),
  s._selector('to', s.opacity.raw(bx(alpha.value))),
);
const box = css(
  s.width.raw(bx(width.value + 'px')),
  s.padding.raw(bx(side.value + 'px') + ' ' + bx(width.value + 'px')),
  s.color.raw('rgba(' + bx(red.value) + ',' + bx(20) + ',' + bx(30) + ',' + bx(alpha.value) + ')'),
  s.transform.raw(
    'translate(' +
      bx(width.value + 'px') +
      ', ' +
      bx(side.value + 'px') +
      ') rotate(' +
      bx(red.value + 'deg') +
      ')',
  ),
  s._hover(s.opacity.raw(bx(alpha.value))),
  s._selector('& > .child', [s.display.block, s.height.raw(bx(side.value + 'px'))]),
);
const animated = css(s.animationName.raw(fade), s.animationDuration.ms(1000));
const combined = css(box, [false, s.backgroundColor.blue]);
const fixed = css(s.height.px(snapshot));
const dual = css([
  null,
  side.value > 0 && s.width.raw(bx(side.value + 'px')),
  [s.height.raw(bx(side.value + 'rem'))],
]);
const sibling = css(
  s._selector('& + [data-bound="sibling"]', s.marginLeft.raw(bx(width.value + 'px'))),
);
function rowClass(row: { width: number }) {
  return css(s.width.raw(bx(row.width + 'px')));
}
globalCss(
  `bx-${props.initial}`,
  s._selector(
    `[data-global="${props.initial}"]`,
    s.color.raw('rgba(' + bx(red.value) + ',' + bx(0) + ',' + bx(0) + ',1)'),
  ),
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
    <div data-bound="box" :class="combined"><span class="child" data-bound="child"></span></div>
    <div data-bound="animated" :class="animated"></div>
    <div data-bound="snapshot" :class="fixed"></div>
    <div data-bound="dual" :class="dual"></div>
    <div :class="sibling"></div>
    <div data-bound="sibling"></div>
    <Plain :value="combined" />
    <div v-for="row in rows" :key="row.id" :data-row="row.id" :class="rowClass(row)"></div>
  </section>
</template>
