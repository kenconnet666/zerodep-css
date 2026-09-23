# 自动 CSS 编译

Vue 与 Svelte 编译器使用 `createStyles` 和项目 CSS hook。编译器只在能从当前组件源码证明作者配置和调用位置时做安全优化；其他写法继续由 runtime 处理。

## Vite 接入

```ts
// Vue
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { cssPlugin } from '@zerodep-css/vue/compiler';

export default defineConfig({ plugins: [cssPlugin(), vue()] });
```

Svelte 使用 `@zerodep-css/svelte/compiler` 的 `cssPlugin()`，放在官方 `svelte()` 插件之前。官方框架插件继续处理响应式、SSR 和 HMR。

严格 CSP 禁止 style 属性时，可设置 `cssPlugin({ bindings: 'runtime' })`。该模式保留运行时 class 更新，不生成元素变量绑定；静态准备和调试来源仍可用。它不会移除业务代码自己编写的 style 属性，服务端和客户端应使用相同编译配置。

## 自动路径

当前编译器识别组件同文件中的常量 `createStyles` 与 `useCss` 绑定，包括默认选项、`{ theme }` 选项和直接链式调用：

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { createStyles } from '@zerodep-css/vue';

const styles = createStyles();
const css = styles.useCss();
const gap = ref(8);
const color = ref('red');
</script>

<template>
  <div
    :class="
      css((s) => {
        s.display.flex;
        s.padding.px(8, gap);
        s.color.raw(color);
      })
    "
  ></div>
</template>
```

```svelte
<script lang="ts">
  import { createStyles } from '@zerodep-css/svelte';

  const styles = createStyles();
  const css = styles.useCss();
  let gap = $state(8);
</script>

<div
  class={css((s) => {
    s.padding.px(gap);
  })}
></div>
```

完整静态值与能证明边界的动态值可分别准备或绑定。可绑定的动态声明保留在原样式位置；分支不可静态证明、CSS 值结构复杂或属性语法未知时，继续走 runtime，具体值交给浏览器判断。编译器不会因它的语法表无法证明而拒绝合法新值。

作者应优先使用普通函数复用和 `if`/`switch` 编写条件样式。已知结构的同 host class 可由 `css(base, override, [condition && extra])` 组合；外部 class 透传。组合得到的普通 class 字符串是快照，不会携带或复制元素变量绑定。

## 回退边界

以下情况保留 runtime 行为：

- 脚本内的 const/computed/$derived、组件 class 透传、SVG/MathML 或已有 style 属性。当前元素变量优化只面向直接的原生 HTML class 使用点。
- 回调尚未使用可分析的语句块时，例如单表达式箭头函数；这类简写可以运行，但当前仍保留原运行时。
- `createStyles` 与 `useCss` 通过另一个模块导出，或者作者配置只能在运行时确定。跨模块 `styles.ts` 是推荐的配置复用方式；优化不可证明时，功能仍然有效。
- `createStyles` 指定 `cssType`，或包含编译器不认识的配置。开发来源诊断可继续记录。
- 动态条件、函数调用、副作用、局部写入、复杂 selector/结构参数或嵌套控制流无法安全证明。
- 可能改变 CSS 级联、继承或 var fallback 的值，及完整语法不能确认的未来 CSS 值。

编译优化不改变框架对模板、`computed`/`$derived` 的依赖跟踪，也不跳过需保留的业务 getter 求值。把动态值存入普通局部字符串只得到一次快照；需要更新时，在模板位置调用 `css`，或使用框架派生值。

`cssPlugin` 是可选工具。未安装插件时，`createStyles().useCss()` 仍可完整运行。独立编译入口为 `transformCss(source, filename, { root?, debug?, bindings? })`；没有改动时返回 `null`。

验证使用官方 Vue/Svelte 编译器构建客户端与 SSR 组件，并对生成产物进行浏览器水合测试。流式 SSR、Nuxt 专用模块和 Kit 插件不属于当前已完成范围。建议运行 `pnpm check:compiler`、`pnpm test:types` 和 `pnpm test:browser:frameworks`。
