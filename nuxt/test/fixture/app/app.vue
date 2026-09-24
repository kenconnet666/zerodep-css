<script setup lang="ts">
import { computed } from 'vue';
import { styles } from './styles';

const route = useRoute();
const brand = computed(() => (route.query.tone === 'blue' ? '#2563eb' : '#dc2626'));
styles.provideTheme(() => ({ color: { brand: brand.value } }));
// Vite保留该SFC模块的hot.data；脚本更新时新根setup先释放旧租约。
// 根组件单实例专用，纯模板HMR不重跑setup，也就不会误删全局样式。
const hot = import.meta.client ? import.meta.hot : undefined;
hot?.data['zerodep-css:root-global']?.dispose();
const rootGlobal = styles.useGlobalCss('fixture-body', (g) =>
  g.rule('body', (s) => s.backgroundColor.raw(brand.value === '#2563eb' ? '#dbeafe' : '#fee2e2')),
);
if (hot) hot.data['zerodep-css:root-global'] = rootGlobal;
</script>

<template>
  <main data-fixture-root :data-tone="route.query.tone === 'blue' ? 'blue' : 'red'">
    <NuxtPage />
  </main>
</template>
