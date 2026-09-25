<script setup lang="ts">
import { computed, ref } from 'vue';
import { css, useCss } from './runtime.ts';

const props = defineProps<{
  mode: 'direct' | 'memo' | 'table' | 'variable' | 'emotion';
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
    ? Array.from({ length: 16 }, (_, index) => css(s.color.red, s.width.raw(`${index + 20}px`)))
    : [];
const variableClass =
  props.mode === 'variable' ? css(s.color.red, s.width.raw('var(--probe-width)')) : '';
const memo = computed(() =>
  props.mode === 'memo' ? rows.map((row) => css(s.color.red, s.width.raw(`${width(row)}px`))) : [],
);
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
      :class="
        props.mode === 'direct'
          ? css(s.color.red, s.width.raw(`${width(row)}px`))
          : props.mode === 'memo'
            ? memo[row]
            : props.mode === 'table'
              ? table[width(row) - 20]
              : props.mode === 'variable'
                ? variableClass
                : props.emit(s.color.red, s.width.raw(`${width(row)}px`))
      "
      :style="props.mode === 'variable' ? { '--probe-width': `${width(row)}px` } : undefined"
    ></div>
  </div>
</template>
