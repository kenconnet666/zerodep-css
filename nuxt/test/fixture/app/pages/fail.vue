<script setup lang="ts">
import { styles } from '../styles';

styles.useGlobalCss('failed-tree', (g) => g.rule('body', (s) => s.outlineColor.raw('#123456')));
throw createError({ statusCode: 418, statusMessage: 'Fixture failure', fatal: true });
</script>

<template>
  <div data-unexpected-fail-body>unreachable</div>
</template>
