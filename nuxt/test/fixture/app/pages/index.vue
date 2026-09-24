<script setup lang="ts">
import { computed, ref } from 'vue';
import { createStyles } from '@zerodep-css/vue';
import { styles } from '../styles';

const width = ref(80);
// 同 SFC 直接来源供可选编译插件验收；共享项目 hooks 的那条路径继续测运行时。
const localCss = createStyles().useCss();
const css = styles.useCss();
const theme = styles.useTheme();
const card = computed(() =>
  css((s) => {
    s.name('nuxt-index-card');
    s.color.brand;
    s.width.px(width.value);
  }),
);
</script>

<template>
  <section>
    <h1>Nuxt zerodep fixture</h1>
    <div data-card :data-brand="theme().color.brand" :class="card">index</div>
    <div
      data-auto
      :class="
        localCss((s) => {
          s.width.px(width);
        })
      "
    >
      auto
    </div>
    <button type="button" data-grow @click="width += 20">grow</button>
    <NuxtLink data-other-link to="/other?tone=blue">other</NuxtLink>
  </section>
</template>
