<script setup lang="ts">
import { ref } from 'vue';
import { provideTheme } from '@zerodep-css/vue';
import { theme } from './theme';
import ThemeLeaf from './ThemeLeaf.vue';
const props = defineProps<{ name: string; reset?: boolean }>();
const background = ref('lime');
provideTheme(theme, () => (props.reset ? null : { color: { text: background.value } }));
</script>
<template>
  <button
    v-if="!reset"
    data-theme-local
    @click="background = background === 'lime' ? 'yellow' : 'lime'"
  >
    local theme
  </button>
  <ThemeLeaf :name="name" />
</template>
