<script setup lang="ts">
import { AppCss } from '../../../core/examples/theme.js';
import { provideCss } from '../../../vue/examples/context.js';
import Component from './VueImplicit.vue';
import Theme from '../../../vue/examples/Theme.vue';
provideCss(new AppCss());
const controls: Array<{ step(): void; reorder(): void }> = [];
</script>
<template>
  <Theme />
  <Theme :initial-dark="true" />
  <div data-global="24"></div>
  <div data-global="40"></div>
  <button data-binding-step @click="controls[0]!.step()">更新绑定</button>
  <button data-binding-reorder @click="controls[0]!.reorder()">重排</button>
  <Component :initial="24" :expose="(value) => (controls[0] = value)" />
  <Component :initial="40" :expose="(value) => (controls[1] = value)" />
</template>
