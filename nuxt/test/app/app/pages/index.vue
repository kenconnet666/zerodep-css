<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import Demo from '@example';
import { css } from '@zerodep-css/vue';
const route = useRoute();
// 验证异步 setup 恢复组件上下文后仍使用本次应用的宿主。
await new Promise((done) => setTimeout(done, route.query.width === '40' ? 0 : 10));
const asyncClass = css('outline-width:0;');
</script>
<template>
  <Demo
    :class="asyncClass"
    :key="route.fullPath"
    :initial-width="Number(route.query.width ?? 24)"
    :initial-theme="route.query.theme === 'dark' ? 'dark' : 'light'"
  />
</template>
