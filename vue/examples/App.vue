<script setup lang="ts">
import { ref } from 'vue';
import { AppCss, themes, type ExampleProps } from '../../core/examples/theme.js';
import { provideCss } from './context.js';
import Styles from './Styles.vue';

const props = withDefaults(defineProps<ExampleProps>(), {
  initialWidth: 24,
  initialTheme: 'light',
});
provideCss(new AppCss(props.initialWidth));
const theme = ref(props.initialTheme);
</script>

<template>
  <main :style="themes[theme]">
    <button data-action="theme" @click="theme = theme === 'light' ? 'dark' : 'light'">
      切换主题
    </button>
    <Styles />
  </main>
</template>
