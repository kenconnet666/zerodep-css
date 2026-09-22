<script setup lang="ts">
import '@zerodep-css/core';
import { computed, ref } from 'vue';

// 只验证原生 Vue 类型检查链路，不是 CSS 框架 API。
const count = ref(1);
const label = computed(() => count.value.toFixed(0));
</script>

<template>
  <span>{{ label }}</span>
</template>
