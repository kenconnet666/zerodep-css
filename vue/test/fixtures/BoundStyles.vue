<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStyleRuntime } from '@zerodep-css/vue';
import AutomaticStyles from './AutomaticStyles.vue';

const props = defineProps<{ initialWidth: number; record: (kind: string) => void }>();
const { css } = useStyleRuntime();
const width = ref(props.initialWidth);
const color = ref('red');
const x = ref(2);
const y = ref(3);
const unrelated = ref(0);
const visible = ref(true);
const rows = ref<{ id: string; width?: number }[]>([
  { id: 'a', width: 11 },
  { id: 'b', width: 22 },
  // 隐藏行没有宽度，编译优化不得越过模板守卫求值。
  { id: 'hidden' },
]);
const shared = computed(() =>
  css((s) => {
    props.record('shared');
    s.color.raw(color.value);
    s.width.px(width.value);
    s.padding.px(1, x.value, 3, y.value);
    s.transform.raw(`translate(${x.value}px, ${y.value}px)`);
  }),
);
</script>

<template>
  <AutomaticStyles />
  <button
    data-bound
    @click="
      width++;
      x++;
      y++;
    "
  >
    bound
  </button>
  <button data-color @click="color = color === 'red' ? 'blue' : 'red'">color</button>
  <button data-other @click="unrelated++">{{ unrelated }}</button>
  <button data-visible @click="visible = !visible">visible</button>
  <button data-row @click="if (rows[0]?.width !== undefined) rows[0].width++;">row</button>
  <button data-reorder @click="rows.reverse()">reorder</button>
  <div
    data-shared
    :class="shared"
    :style="[{ height: '7px' }, 'border-top: 2px solid green']"
  ></div>
  <div v-if="visible" data-shared-copy :class="shared" style="height: 9px"></div>
  <div
    data-inline
    :class="
      css((s) => {
        props.record('inline');
        s.color.raw(color);
        s.width.px(width);
      })
    "
  ></div>
  <template v-for="row in rows" :key="row.id">
    <div
      v-if="row.width !== undefined"
      :data-row-id="row.id"
      :class="
        css((s) => {
          props.record('row');
          s.height.px(5);
          s.width.px(row.width!);
        })
      "
    ></div>
  </template>
</template>
