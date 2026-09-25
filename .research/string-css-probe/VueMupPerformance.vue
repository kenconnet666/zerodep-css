<script setup lang="ts">
import { computed, ref } from 'vue';
import { css, useCss } from './vue-mup-performance-context.ts';

type Mode = 'direct' | 'memo' | 'table' | 'variable' | 'native-table' | 'native-var' | 'emotion';
const props = defineProps<{
  mode: Mode;
  unique: boolean;
  rowCount: number;
  emit: (...parts: string[]) => string;
  expose: (control: { step(): void; noise(): void; read(): number }) => void;
}>();
const s = useCss();
const rows = Array.from({ length: props.rowCount }, (_, index) => index);
const iteration = ref(0);
const unrelated = ref(0);
const width = (row: number) =>
  props.unique ? 20 + iteration.value * props.rowCount + row : 20 + ((iteration.value + row) % 16);
const table =
  props.mode === 'table'
    ? Array.from({ length: 16 }, (_, index) => css(s.color.red, s.width.px(index + 20)))
    : [];
const variableClass =
  props.mode === 'variable' ? css(s.color.red, s.width.raw('var(--probe-width)')) : '';
const memo = computed(() =>
  props.mode === 'memo' ? rows.map((row) => css(s.color.red, s.width.px(width(row)))) : [],
);
function classFor(row: number): string {
  const value = width(row);
  switch (props.mode) {
    case 'direct':
      return css(s.color.red, s.width.px(value));
    case 'memo':
      return memo.value[row];
    case 'table':
      return table[value - 20];
    case 'variable':
      return variableClass;
    case 'native-table':
      return `native-${value}`;
    case 'native-var':
      return 'native-var';
    case 'emotion':
      return props.emit(s.color.red, s.width.px(value));
  }
}
props.expose({
  step() {
    iteration.value++;
  },
  noise() {
    unrelated.value++;
  },
  read() {
    return iteration.value;
  },
});
</script>

<template>
  <div class="rows" :data-unrelated="unrelated">
    <div
      v-for="row in rows"
      :key="row"
      :data-row="row"
      :class="classFor(row)"
      :style="
        props.mode === 'variable'
          ? { '--probe-width': `${width(row)}px` }
          : props.mode === 'native-var'
            ? { '--native-width': `${width(row)}px` }
            : undefined
      "
    ></div>
  </div>
</template>
