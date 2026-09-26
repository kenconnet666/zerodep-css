<script setup lang="ts">
defineProps<{ value: string }>();
</script>
<template><div data-bound="forward" :class="value"></div></template>
