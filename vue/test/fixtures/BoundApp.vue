<script setup lang="ts">
import type { StyleContext } from '@zerodep-css/core';
import BoundStyles from './BoundStyles.vue';
import ThemeApp from './ThemeApp.vue';
defineProps<{ context: StyleContext; initialWidth: number; record: (kind: string) => void }>();
</script>
<template>
  <div id="theme-portal"></div>
  <ThemeApp :initial="initialWidth === 20 ? 'red' : 'blue'" />
  <section data-instance="a">
    <BoundStyles :initial-width="initialWidth" :record="record" />
  </section>
  <section data-instance="b"><BoundStyles :initial-width="40" :record="record" /></section>
</template>
