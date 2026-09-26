<script setup lang="ts">
import { computed, ref } from 'vue';
import { css, ic } from '@zerodep-css/vue';
import { useCss } from './context.js';

const s = useCss();
const expanded = ref(false);
const width = ref(s.initialWidth);
const runtimeWidth = ref(s.initialWidth);
const noise = ref(0);
const base = s.display.block + s.color._text;
const staticClass = css(base, s.width._initial);
const sizes = { small: css(base, s.width.px(24)), large: css(base, s.width.px(48)) };
// 派生值只选择已有类名，不在 getter 内注册规则。
const finiteClass = computed(() => (expanded.value ? sizes.large : sizes.small));
const variableClass = css(base, s.width._live);
const themeClass = css(base, ic('&:hover', s.color._hover));
const mediaClass = css(s.padding.px(4), ic('@media (max-width: 600px)', s.padding.px(8)));

// 开放动态值保留同步运行时路径；无需枚举全部分支。
function runtimeClass(): string {
  if (expanded.value) return css(base, s.width.px(runtimeWidth.value + 10));
  return css(base, s.width.px(runtimeWidth.value));
}
</script>

<template>
  <section :data-noise="noise">
    <button data-action="size" @click="expanded = !expanded">切换尺寸</button>
    <button data-action="width" @click="width++">增加宽度</button>
    <button data-action="runtime" @click="runtimeWidth++">运行时新值</button>
    <button data-action="noise" @click="noise++">无关状态</button>
    <div data-sample="static" :class="staticClass">静态样式</div>
    <div data-sample="finite" :class="finiteClass">有限状态</div>
    <div data-sample="runtime" :class="runtimeClass()">运行时分支</div>
    <div data-sample="variable" :class="variableClass" :style="{ '--demo-width': `${width}px` }">
      连续值
    </div>
    <div data-sample="root-theme" :class="themeClass">父级主题</div>
    <div style="--demo-text: #dc2626; --demo-hover: #7c3aed">
      <div data-sample="nested-theme" :class="themeClass">子树覆盖</div>
    </div>
    <div data-sample="sibling-theme" :class="themeClass">兄弟仍继承父级</div>
    <div data-sample="media" :class="mediaClass">响应式条件</div>
  </section>
</template>
