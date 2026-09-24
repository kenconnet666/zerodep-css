<script setup lang="ts">
import { computed } from 'vue';
import { styles } from '../styles';

const css = styles.useCss();
const { data, error } = await useFetch('/api/cache-serial');
if (error.value) throw error.value;
const card = computed(() =>
  css((s) => {
    s.name('nuxt-cached-card');
    s.color.raw('#0f766e');
    s.width.px(72);
  }),
);
</script>

<template>
  <div data-cached :data-cache-serial="data?.serial" :class="card">cached</div>
</template>
