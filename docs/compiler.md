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

## 按需诊断

开发 serve 默认只添加项目相对源码位置，不输出未优化日志。显式 `cssPlugin({ debug: true })` 才通过 Vite logger.info 报告详细原因；`transformCss(source, filename, { debug: true })` 的返回值也提供可选 `diagnostics`，包含稳定 code、相对文件、1-based 行列及人可读 message。只有诊断时可返回原代码和 identity map；默认无改写仍返回 null。

| code                    | 含义                               |
| ----------------------- | ---------------------------------- |
| custom-author           | 显式配置了作者类型，保留运行时     |
| unknown-project-options | 项目选项无法在本文件证明           |
| script-snapshot         | 脚本创建的 class 保持调用时快照    |
| template-context        | 当前元素或模板作用域不支持自动绑定 |
| style-attribute         | 原有 style 属性保持求值顺序        |
| dynamic-structure       | 输入或回调结构不能静态证明         |
| csp-bindings            | runtime 绑定模式关闭动态元素变量   |

只诊断词法上确认的本库 css 调用，每个站点报告一个主要原因；未知同名函数与跨模块来源不猜测。没有诊断不代表所有代码都已优化，回退也不是作者错误。诊断不执行回调或 getter，日志器异常不影响转换。来源包装仅用于可证明的函数输入，class、数组、条件值、空值和未知 getter 保持原表达式；可变函数声明也不为添加来源而改变行为。

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

完整静态值与能证明边界的动态值可分别准备或绑定。单条动态单位、raw 或 token 声明若能证明输入来源和声明结构，编译器在当前组件脚本中建立一次固定变量规则；Vue 组件值使用 `computed`，Svelte 组件值使用 `$derived`，Svelte keyed each 行使用 `{@const}` 派生值。模板更新只计算变量并交给框架的 class/style 绑定，不再执行原 `css` 回调。Vue 列表行仍在 `renderList` 中求值一次，当前使用整对象 `v-bind`；它尚不是每行独立的 render effect。

固定规则首次实际使用时才向当前应用或 SSR 请求的 host 注册。缓存命中读取 class 仍检查宿主样式节点；空值和不能安全变量化的 CSS-wide/未来值回到原声明，保留 class 切换。其他多声明、嵌套、分支不可静态证明的回调继续在原样式位置绑定或完整运行时回退，具体值交给浏览器判断。编译器不会因它的语法表无法证明而拒绝合法新值。

简短箭头与语句块使用同一套检查，例如 `css(s => s.width.px(gap))`、`css(s => s.hover(h => h.width.px(gap)))`。提升路径只读取动态参数一次；其余路径仍在原回调位置读取一次。编译器生成的单位约束表位于组件初始化处，避免每个元素、每次更新重复创建常量数组。Vue 只提升可从 `<script setup>` 读取的表达式；仅模板可见的 prop 留在模板原路径。Svelte 列表局部变量留在 keyed each 中，固定规则仍可共享。

raw 字符串中出现负的 number、dimension 或 percentage token 时保留直接声明，不把 css-tree 的类型匹配当成完整范围证明。规范正文可能另有限制，例如 `stroke-width`、`border-width` 和 `line-height` 的负值无效；负值合法的 margin 等属性也采用同一保守回退。opacity 的有限 `raw(number)` 保留独立快速路径，因为超界值会按 CSS 规则钳制。

raw 数字的自动绑定只覆盖已核实语义的常用数值属性；语法元数据不足以单独证明浏览器的实际值约束。其余有限数字保持直接声明，整数属性还检查序列化后的 token 形态。该边界只影响优化，不限制运行时 raw 写法。

作者应优先使用普通函数复用和 `if`/`switch` 编写条件样式。已知结构的同 host class 可由 `css(base, override, [condition && extra])` 组合；外部 class 透传。组合得到的普通 class 字符串是快照，不会携带或复制元素变量绑定。

## 回退边界

以下情况保留 runtime 行为：

- 脚本内的 const/computed/$derived、组件 class 透传、SVG/MathML 或已有 style 属性。当前元素变量优化只面向直接的原生 HTML class 使用点。
- `createStyles` 与 `useCss` 通过另一个模块导出，或者作者配置只能在运行时确定。跨模块 `styles.ts` 是推荐的配置复用方式；优化不可证明时，功能仍然有效。
- `createStyles` 指定 `cssType`，或包含编译器不认识的配置。开发来源诊断可继续记录。
- 动态条件、函数调用、副作用、局部写入、复杂 selector/结构参数或嵌套控制流无法安全证明。
- 可能改变 CSS 级联、继承或 var fallback 的值，及完整语法不能确认的未来 CSS 值。

编译优化不改变框架对模板、`computed`/`$derived` 的依赖跟踪，也不跳过需保留的业务 getter 求值。把动态值存入普通局部字符串只得到一次快照；需要更新时，在模板位置调用 `css`，或使用框架派生值。

`cssPlugin` 是可选工具。未安装插件时，`createStyles().useCss()` 仍可完整运行。独立编译入口为 `transformCss(source, filename, { root?, debug?, bindings? })`；没有改动或诊断时返回 `null`。显式 `debug: true` 若仅产生诊断，则返回原源码、identity source map 与 diagnostics。

验证使用官方 Vue/Svelte 编译器构建客户端与 SSR 组件，并对生成产物进行浏览器水合测试。[Nuxt 模块](../nuxt/README.md)可通过 compiler 选项接入同一个优化器；[Kit 接入](../sveltekit/README.md)负责请求/根宿主，可选编译仍使用 Svelte 的 compiler 入口。组件 HTML 流式 SSR 不在首版范围。建议运行 `pnpm check:compiler`、`pnpm test:types` 和 `pnpm test:browser:frameworks`；元框架入口另跑对应独立消费命令。
