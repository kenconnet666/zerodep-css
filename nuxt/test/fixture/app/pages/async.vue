<script setup lang="ts">
import { computed } from 'vue';
import { styles } from '../styles';

const route = useRoute();
const css = styles.useCss();
const tone = route.query.tone === 'blue' ? 'blue' : 'red';
const { data, error } = await useFetch('/api/tone', { query: { tone } });
if (error.value) throw error.value;
const swatch = computed(() =>
  css((s) => {
    s.name('nuxt-async-swatch');
    s.backgroundColor.raw(data.value?.color ?? '#000000');
    s.width.px(48);
  }),
);
</script>

<template>
  <div data-async :data-async-color="data?.color" :class="swatch">async</div>
</template>
