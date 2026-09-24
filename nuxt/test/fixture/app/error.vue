<script setup lang="ts">
import { computed } from 'vue';
import { styles } from './styles';

defineProps<{ error: { statusCode?: number } }>();
const css = styles.useCss();
const errorClass = computed(() =>
  css((s) => {
    s.name('nuxt-error-page');
    s.color.raw('#a21caf');
  }),
);
</script>

<template>
  <main data-error-page :class="errorClass">error {{ error.statusCode }}</main>
</template>
