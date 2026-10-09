<script setup lang="ts">
import { onMounted, ref } from 'vue';
const ready = ref(false);
onMounted(() => {
  ready.value = true;
});
</script>
<template>
  <div :data-ready="ready">
    <NuxtLink to="/prerender" data-nav="prerender">预渲染页</NuxtLink>
    <NuxtLink to="/" data-nav="home">主页</NuxtLink>
    <NuxtPage />
  </div>
</template>
