# Vue 3.5 与 Svelte 5 的运行时结合方式

本轮只研究现有 `useCss()`、`css(...parts)` 如何顺着框架的更新机制使用，不引入编译器、recipes／variants 或第二套样式 API。`css()` 会注册规则，是有副作用的同步函数；`s.color.red` 等关键字仍是声明字符串。

## 先按值的形态决定何时调用 `css()`

**静态组合**在组件初始化时注册一次，模板只绑定结果。必须在组件创建／SSR 请求的活动宿主内执行，不把 `css()` 放在模块顶层：

```ts
const s = useCss();
const baseClass = css(s.display.flex, ic('&:hover', s.color.red));
```

**少量有限状态**可以在组件初始化时注册几条**完整组合**，之后用纯派生值选择字符串：

```ts
// Vue <script setup>。
const s = useCss();
const size = ref<'small' | 'large'>('small');
const classes = {
  small: css(s.color.red, s.width.px(24)),
  large: css(s.color.red, s.width.px(48)),
};
const chosen = computed(() => classes[size.value]);
// <div :class="chosen" />
```

```svelte
<script lang="ts">
  const s = useCss();
  const classes = {
    small: css(s.color.red, s.width.px(24)),
    large: css(s.color.red, s.width.px(48)),
  };
  let size = $state<'small' | 'large'>('small');
  let chosen = $derived(classes[size]);
</script>

<div class={chosen}></div>
```

`computed`／`$derived` 在此只读状态、返回已有类名；不要把 `css()` 普遍放进其 getter。Vue [computed 会按响应式依赖缓存，getter 应无副作用](https://vuejs.org/guide/essentials/computed)；Svelte [`$derived` 也要求纯表达式，并在值未变化时跳过下游更新](https://svelte.dev/docs/svelte/%24derived)。状态很少且每个分支常用时，预注册表合适；状态很多或大部分不会用到时，它会让 SSR 输出未使用的规则，可以继续由 `if`／`switch` 选择分支、按需调用原运行时。若多个类声明同一属性，不能把 HTML 类名顺序当作 CSS 级联顺序；需要保留完整组合规则的声明顺序。

**连续新值**可以手写一条稳定的变量规则，不必等编译器：

```ts
const widthClass = css(s.width.raw('var(--item-width)'));
// Vue: <div :class="widthClass" :style="{ '--item-width': `${width}px` }" />
// Svelte: <div class={widthClass} style:--item-width={`${width}px`}></div>
```

Vue 的 [`v-bind()` in SFC CSS](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css) 也把值绑定成组件根上的自定义属性；列表每项宽度不同则需在各自元素绑定。Svelte 的 [`style:--item-width` 指令](https://svelte.dev/docs/svelte/style)直接支持元素级自定义属性。有限值的旧基准中变量路径更慢；持续新值则避免反复新增规则，见[性能记录](minimum-usable-performance.md)。CSS 自定义属性天然向后代继承，也适合将来的子树主题覆盖，但作者类继承与 DOM 主题作用域仍需分别设计。[CSS 自定义属性规范](https://www.w3.org/TR/css-variables-1/#inheritance)

同一方式也可放进 `ic('&:hover', s.color.raw('var(--hover-color)'))`：浏览器处理 hover 分支，Vue/Svelte 只更新元素上的 `--hover-color`。上面的有限状态组件片段已用当前安装的 Vue 3.5 与 Svelte 5 编译器分别编译客户端／服务端语法；这不替代后续真实应用的 SSR 与 hydration 验收。

## Vue 和 Svelte 不应被统一包装成同一种派生 API

当前适配器把一个 `AppCss` 实例放进框架上下文；后代在组件初始化时 `useCss()` 一次，不创建新作者或 Proxy。Vue [provide/inject](https://vuejs.org/guide/components/provide-inject) 会从最近的提供者取得值；若提供 ref，响应式连接保留。现在提供的是普通类实例，替换上层实例不会自动改变已挂载后代所保存的 `s`。无需默认给它加 [`markRaw`](https://vuejs.org/api/reactivity-advanced#markraw)：当前路径本来没有把实例包进 `reactive()`，强加该标记会限制未来明确需要的状态用法。Svelte 的 [context](https://svelte.dev/docs/svelte/context) 同样可以保存普通类或响应式对象；当前 `getContext` 在初始化时取得的普通实例不是动态主题切换机制。

以现有 200 元素组件探针做一轮焦点验证：

| 负载与 `css()` 调用 | Vue 直接模板 | Vue 预注册类表 | Svelte 直接模板 | Svelte 预注册类表 |
| ------------------- | -----------: | -------------: | --------------: | ----------------: |
| 20 次无关更新       |        4,000 |              0 |               0 |                 0 |
| 30 次有限值更新     |        6,000 |              0 |           6,000 |                 0 |

这里报告的是调用次数，不把单轮更新时间当性能结论。Vue 的直接模板在无关更新时会再次执行 `classFor(row)`，因而适合对**已注册类名的选择**使用纯 `computed`；也可在确实很大的列表里由应用根据正确依赖考虑 [`v-memo`](https://vuejs.org/guide/best-practices/performance#v-memo)。Svelte 模板已按依赖更新，无关状态没有重做这一表达式；只有同一结果多处使用或选择逻辑复杂时，纯 `$derived` 才有额外价值。当前 Svelte peer 范围是 `^5.0.0`，而 `class` 数组／对象写法从 [5.16](https://svelte.dev/docs/svelte/class#objects-and-arrays) 才加入，文档与首版 API 不应默认依赖它。

也不建议自动通过框架 effect 注册所有类。Vue `watchEffect` 适用于副作用，但会额外引入 watcher 与调度，SSR 时还需明确何时收集规则；Svelte [`$effect` 只在浏览器运行，不在 SSR 运行](https://svelte.dev/docs/svelte/%24effect)，不能作为服务端样式收集的唯一入口。当前在组件初始化或渲染表达式中同步注册，才能与 `withCssHost()` 的请求级收集保持一致。

## 建议的适配器边界

先保持 `createCssContext<AppCss>()`、`provideCss()`、`useCss()` 和导入式 `css()`，给出上述三类写法的 Vue/Svelte 对照示例；没有证据需要新增 `computedCss()`、`derivedCss()` 或包装组件。若后续要支持动态主题，优先探测“子树上的 CSS 变量宿主＋框架绑定”的一致 SSR/hydration 行为，而不是假设重新 `provideCss(new ThemeCss())` 会刷新已挂载组件。Nuxt/SvelteKit 封装负责把请求宿主、样式输出和客户端恢复接上，不应让 core 引入框架响应式状态。
