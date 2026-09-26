# 模板声明数组与派生提取研究

本轮只添加研究夹具，不增加正式模板语法或修改绑定插件。运行环境为锁定的 Vue 3.5.43 / Svelte 5.57.0；耗时浏览器测量由 CI 执行。

## 写法与转换含义

候选输入：

```vue
<div :class="[s.color.red, s.width.px(width)]" />
```

```svelte
<div class={[s.color.red, s.width.px(width)]}></div>
```

框架原生的 class 数组合并的是类名；我们的字段返回 `color:red;` 这样的声明。因此此简写需要额外转换成 `css(s.color.red, s.width.px(width))` 才能工作。不得把普通 class 数组一律送入 css：外部类名、标记类名和原生条件对象必须保留其原有意义。

分别比较四种生成结果：

| 模式     | 生成结果                                                     | 更新方式                                 |
| -------- | ------------------------------------------------------------ | ---------------------------------------- |
| runtime  | 模板直接 `css(...)`                                          | 依赖框架模板求值，数值改变后生成或复用类 |
| derived  | Vue `computed(() => css(...))` / Svelte `$derived(css(...))` | 派生值缓存，仍然是运行时类路径           |
| implicit | 模板 `css(...)` 再经现有隐式绑定插件                         | 框架模板求值，复用类并更新私有 CSS 变量  |
| hoisted  | script 中 `const derivedClass = css(...)` 再经绑定插件       | 一次登记，绑定订阅负责后续数值更新       |

derived 模式不启动隐式绑定；现有插件本来也会让派生内部的 css 调用回退，避免在派生求值中反复建立订阅。不能把此模式的收益说成已经与变量绑定叠加。hoisted 只在结构固定的本夹具成立，普通运行时的 setup const 不会自行响应更新。

## 编译器观察与初步判断

- Vue 的普通动态 class 数组在 render 内经过 `normalizeClass`；组件因为无关状态重渲染时仍会求值。computed 能按自身依赖缓存，这里有明确优化机会。
- Svelte 已经把动态 class 组织成细粒度的模板 effect；与 class 无关的状态改变不必重新执行该表达式。额外 `$derived` 可能只是增加一层，不能从 Vue 的结论推导 Svelte 收益。
- 纯数值变化优先比较稳定绑定 const；本身不需要派生类名。
- 条件样式、选择器变化等结构变化仍需重新求值；可以研究“固定动态声明绑定 + 结构派生”，但不能随意把条件分支内的声明提前求值。

官方依据：[Vue class 数组](https://vuejs.org/guide/essentials/class-and-style)、[Vue computed 缓存](https://vuejs.org/guide/essentials/computed)、[Svelte class](https://svelte.dev/docs/svelte/class)、[Svelte $derived](https://svelte.dev/docs/svelte/$derived)。Svelte 要求派生表达式无副作用；css 登记是库的幂等外部副作用，因此本次派生对照仅用于衡量当前运行时行为，不据此承诺任意样式登记都适合自动移入 derived。

## 测法与验收范围

`pnpm --dir .research/string-css-probe probe:template-derived`：每个框架、每条路径使用全新页面，200 个独立组件，20 次无关更新、20 次宽度更新，五轮轮换顺序，记录挂载和更新耗时、规则统计、类名变化及卸载后的绑定数。时间包含框架刷新与布局读取，无性能硬阈值。两个框架挂载组织不同，只做各框架内部的方案对照。

组件初始宽度为 20 + 序号，每轮加 1，因此各组件间存在规则共享，运行时最终宽度类理论上为 220 种；不拿这个数字模拟每次完全唯一值的最坏情况。绑定路径应始终保持类名和规则数量稳定，卸载后绑定规则为零。

本地只执行 `node .research/string-css-probe/template-derived.mjs --compile-only`，验证八份变体通过生产编译与实际绑定转换。CI 上传 `runtime-diagnostics/template-derived/results.json`。浏览器正确性与性能状态以对应提交的 CI 为准。

## 正式实现前需要保留的边界

1. 本研究以固定标记替换生成等价候选代码，不是任意源码的 AST 转换器，不作为公开支持。
2. Vue 模板自动解包 ref；移动到 script 必须依据编译器绑定信息恢复 `.value` 或解包逻辑，不能字符串替换所有标识符。
3. 循环项、slot/snippet 局部变量不能直接移到组件 setup。首先保留模板路径，不为了覆盖它们引入逐项 computed 缓存和复杂清理。
4. 条件挂载、短路分支、可能有副作用的自定义方法需要保留原有求值时机；不要为了优化提前访问不存在的数据。
5. 多元素复用、SSR/hydration、HMR、用户覆盖方法和变量绑定生命周期，需要在正式接入时单独验收。本探针只验收 CSR 的固定结构场景。

推荐按“可识别的声明数组简写”和“求值优化”拆开决策：先明确语法边界，再按框架选择稳定绑定或派生缓存，不默认对两个框架统一套 computed / $derived。
