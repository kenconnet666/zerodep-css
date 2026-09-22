<script setup lang="ts">
import type { StyleContext } from '@zerodep-css/core';
import BoundStyles from './BoundStyles.vue';
defineProps<{ context: StyleContext; initialWidth: number; record: (kind: string) => void }>();
</script>
<template>
  <section data-instance="a">
    <BoundStyles :initial-width="initialWidth" :record="record" />
  </section>
  <section data-instance="b"><BoundStyles :initial-width="40" :record="record" /></section>
</template>
