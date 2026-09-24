<script setup lang="ts">
definePageMeta({
  middleware: () => navigateTo('/other?tone=blue'),
});
</script>

<template>
  <div data-unexpected-redirect-body>redirecting</div>
</template>
