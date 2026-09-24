# Vue/Svelte 原生响应式缓存决策

日期：2026-09-24。范围：原 `codex/runtime-first` 阶段的 Vue 3.5.43、Svelte 5.57.0。结论：**不向任意 `css` 回调叠加通用 `computed`、`$derived`、逐元素缓存或 `v-memo`。** 后来可证明的单条动态声明在编译器中固定 CSS 规则，并使用 Vue `computed`、Svelte `$derived`/keyed each 行派生值仅计算变量；这不是缓存任意作者回调，当前边界见[编译器](compiler.md)。完整运行时仍是语义基线。

## 当前已经由框架缓存的工作

| 路径       | Vue                                                                                     | Svelte                                                                               | 为什么分层                                                                                 |
| ---------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 主题       | `values = computed(resolveTheme)` → `style = computed(prepareThemeStyle(values.value))` | `values = $derived.by(resolveTheme)` → `style = $derived(prepareThemeStyle(values))` | 只读 `useTheme()` 时不必准备 CSS；实际消费主题类时再准备。两个派生均由当前组件生命周期持有 |
| 全局样式   | `computed(globalCss(factory))` → `watch` 写同一槽位                                     | `$derived(globalCss(factory))` → 可停止的 `$effect.root` 写同一槽位                  | 纯计算与 CSSOM 副作用分开；SSR 同步创建，卸载或 host.dispose 停止订阅                      |
| 普通 class | `useCss()` 在 setup 绑定当前 runtime/作用域；模板调用参加组件 render effect             | `useCss()` 在初始化绑定 runtime/作用域；动态属性由模板更新 effect 读取依赖           | 普通作者回调按本次调用执行；缓存一个字符串不能代替宿主验证                                 |

源码入口为 [Vue theme](../vue/src/theme.ts)、[Svelte theme](../svelte/src/theme.svelte.ts)、[Vue global](../vue/src/global.ts)、[Svelte global](../svelte/src/global.svelte.ts) 与 [runtime scope](../internal/runtime/style-scope.ts)。Vue 3.5.43 的 `computed` 根据依赖版本懒刷新；[Vue 官方说明](https://vuejs.org/guide/essentials/computed)明确它只在响应式依赖变化时重算。Svelte 5.57.0 的 `$derived` 按同步读取建立依赖并在下次读取时惰性计算；见 [Svelte 官方说明](https://svelte.dev/docs/svelte/$derived)。

现有 [Vue 主题回归](../vue/test/unit/theme-prepared.test.mjs)确认：同一主题派生准备值被读取 20 次只准备 1 次，但普通 CSS 作者回调仍执行 21 次；另一个请求必须独立注册。合并两层主题派生只能省少量依赖读取，反会让“只读主题值”也执行 CSS 准备。普通项目 host 已提供默认主题作用域，[projectThemeScope](../internal/runtime/style-scope.ts)遇到同名主题会复用它，正常组件的每次 `useCss()` 不会重新准备一份默认主题。

## 模板中再加缓存的实际效果

[真实组件回归](../scripts/testing/browser-frameworks.mjs)在相同的“无关状态”更新后检查回调计数：Vue 内联 `css(...)` 随组件 render 再执行，显式 `computed` 不重算；Svelte 的内联 `css(...)` 与显式 `$derived` 都不重算。测试同时经过 SSR/hydration、依赖变化和卸载。Vue 的组件 render effect 会重新执行模板方法；Svelte 编译后的动态属性在模板 effect 中按实际读取建立依赖。Svelte 自己的 `$derived` 再包一次普通单元素内联表达式，通常只增加信号与依赖边。

当前 200 元素、30 批更新的[同机报告](../.research/performance/results/2026-09-24-p4c-retest/README.md)也提供量级参照：Vue 纯静态样式每次走完整运行时约 27.5/35.9 ms，可证明的静态准备约 5.7/6.1 ms，setup 一次性 class 约 1.5/2.2 ms；Svelte 在该无依赖更新场景三种路径均不超过 0.3 ms。这些是不同作者写法的整体结果，**不能**把差额直接归因于新增一层 `computed`，也不能推广到有动态值的样式。

## 逐项取舍

1. **保留主题两层派生；不合并、不继续嵌套。** `values` 与 `style` 的消费者不同，现有框架缓存已避免无关更新的重复准备。用值相等缓存主题树还会改变对外可见快照的引用身份；未见真实热点证据。
2. **不在库内部自动给每个 `css(...)` 建 computed/derived。** Vue `v-for` 的每行数据、条件作用域和 Svelte keyed each 的生命周期各不相同，新增派生对象与订阅的成本随元素数增长。缓存 class 字符串还可能在宿主被外部删除、禁用或 dispose 后跳过原 `runtime.css()` 的校验。对任意作者回调按函数身份缓存会改变 getter、控制流与错误时机。
3. **不自动注入 Vue `v-memo`，也不对动态 CSS 使用 Svelte `untrack`。** [Vue `v-memo` 文档](https://vuejs.org/api/built-in-directives#v-memo)说明它跳过整棵子树；仅从 CSS 表达式无法推断子节点所需的完整依赖列表。`untrack` 会让样式失去应有的响应依赖；现有 Svelte 全局样式只在写非响应式 registry/CSSOM 时使用它。
4. **保留应用作者的显式选择。** Vue 中同一 class 由多个节点复用，或昂贵计算的依赖窄于组件 render 时，可以在组件 setup 使用 `computed(() => css(...))`。Svelte 中同一结果被多处消费或有昂贵的共享子计算时，可以使用 `$derived`；单元素普通模板绑定优先直接调用。两种用法已在各包 README 展示，由组件作者决定快照与生命周期。

此决策不增加产品代码或新的跨框架缓存 API。未来若一个真实应用在主题准备或大量列表更新上出现可复现瓶颈，先以实际组件分别记录回调/准备次数、挂载与更新耗时、规则数、内存及 SSR/hydration；再只对那个可证明的消费作用域比较原生派生方式。不能把 Node 微基准或一次静态模板的差额当成增加内部缓存层的理由。
