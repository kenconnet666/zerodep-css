<script setup lang="ts">
import { ref } from 'vue';
import { provideTheme } from '@zerodep-css/vue';
import { theme } from './theme';
import ThemeLeaf from './ThemeLeaf.vue';
const props = defineProps<{ name: string; mode?: 'inherit' | 'defaults' }>();
const background = ref('lime');
provideTheme(theme, () =>
  props.mode === 'inherit'
    ? null
    : props.mode === 'defaults'
      ? theme.defaults
      : { color: { text: background.value } },
);
</script>
<template>
  <button
    v-if="!mode"
    data-theme-local
    @click="background = background === 'lime' ? 'yellow' : 'lime'"
  >
    local theme
  </button>
  <ThemeLeaf :name="name" />
</template>
