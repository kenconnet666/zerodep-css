<script setup lang="ts">
import { ref } from 'vue';
import { css } from '@zerodep-css/vue';
import { themes } from '@zerodep-css/core/theme';
import { ProjectCss } from '../../core/examples/preset-theme.js';
import { provideCss } from './preset-context.js';
import Content from './ThemeContent.vue';
const s = provideCss(new ProjectCss());
const light = css(themes.light),
  dark = css(themes.dark);
const nested = css('--z-theme-text:#c026d3;');
const brand = css(s.color._brand);
const isDark = ref(false),
  override = ref(true);
</script>
<template>
  <section :class="isDark ? dark : light" data-preset-theme>
    <button data-theme-toggle @click="isDark = !isDark">亮暗切换</button>
    <button data-theme-override @click="override = !override">子树覆盖</button>
    <Content label="root" />
    <div :class="override ? nested : undefined"><Content label="nested" /></div>
    <Content label="sibling" />
    <div data-theme-brand :class="brand">项目扩展</div>
  </section>
</template>
