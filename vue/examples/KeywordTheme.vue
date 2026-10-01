<script setup lang="ts">
import { shallowRef } from 'vue';
import { Css } from 'zerodep-css-vue';
import {
  LightKeywords,
  DarkKeywords,
  type AppKeywords,
} from '../../core/examples/injected-keywords.js';
import { provideCss } from './keyword-context.js';
import Content from './KeywordContent.vue';
const current = shallowRef<AppKeywords>(new LightKeywords());
provideCss(new Css(() => current.value));
const width = shallowRef(12);
</script>
<template>
  <button data-keyword-dark @click="current = new DarkKeywords()">暗色</button>
  <button data-keyword-light @click="current = new LightKeywords()">亮色</button>
  <button data-keyword-width @click="width += 6">绑定宽度</button>
  <Content label="root" :width="width" /><Content label="nested" nested /><Content
    label="sibling"
    :width="width"
  />
</template>
