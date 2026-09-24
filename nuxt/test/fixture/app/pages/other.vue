<script setup lang="ts">
import { computed } from 'vue';
import { styles } from '../styles';

const css = styles.useCss();
const card = computed(() =>
  css((s) => {
    s.name('nuxt-other-card');
    s.color.brand;
    s.width.px(64);
  }),
);
</script>

<template>
  <section>
    <div data-other-card :class="card">other</div>
    <NuxtLink data-home-link to="/?tone=red">home</NuxtLink>
  </section>
</template>
