# 模板声明数组与派生提取研究

本轮只添加研究夹具，不增加正式模板语法或修改绑定插件。运行环境为锁定的 Vue 3.5.43 / Svelte 5.57.0；耗时浏览器测量由 CI 执行。后续讨论已收敛为保留显式 `class={css(...)}` / `:class="css(...)"` 入口，数组简写只是早期研究输入，不作为推荐新语法。

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

首轮建议把“声明数组简写”和“求值优化”拆开决策。后续已选择显式 css 入口，优化仍按框架区分，不默认对两个框架统一套 computed / $derived。

## 显式 css 条件调用：后续研究结论

当前推荐保持普通 JavaScript 参数，不把表达式写进反引号字符串：

```svelte
<div class={css(s.display.flex, compact ? s.padding.px(4) : s.padding.px(16))}></div>
```

这段只有两种 CSS 内容。现有注册器已按内容缓存，反复切换通常只登记两个类；computed 的潜在收益主要是少做重复函数调用、拼接和缓存查找，不是消除重复插入（原本就没有）。不能把这段直接提取成 setup const，否则会冻结初始分支。

### 官方编译器实际输出

Vue 生产模式的关键代码（省略与结论无关的包装）：

```js
class: _normalizeClass(_unref(css)(
  _unref(s).display.flex,
  compact.value ? _unref(s).padding.px(4) : _unref(s).padding.px(16),
))
```

它位于 render 内，无关状态也可能触发重复求值。源码提取为 computed 后，render 读取 `derivedClass.value`。

Svelte 的原模板会生成：

```js
$.template_effect(
  ($0) => {
    $.set_attribute(div, 'data-noise', $.get(noise));
    $.set_class(div, 1, $0);
  },
  [() => $.clsx(css(s.display.flex, $.get(compact) ? s.padding.px(4) : s.padding.px(16)))],
);
```

本地锁定版本的 `Memoizer.add` 对有函数调用的模板表达式启用 memo；`template_effect` 经 `flatten` 把同步表达式变成 `sync.map(derived)`。因此即使 noise 和 class 在同一个模板 effect 里，css 也有自己的派生依赖缓存，不是每次 effect 更新都重新调用。源码位置：Svelte 的 `compiler/phases/3-transform/client/visitors/shared/utils.js`、`internal/client/reactivity/effects.js` 和 `internal/client/reactivity/async.js`。这属于当前版本实现观察，不依赖它作为本库公开协议。

单处使用的 Svelte 不默认额外提取 `$derived`。同一组件的多个元素使用同一结果时，共享派生才可能合并多处模板计算；自动合并仍须证明作用域相同，不能只比较代码文本。

### 编译前、编译中与编译后

| 位置                                        | 优点                                                                               | 主要代价                                                                                                    | 本轮建议                         |
| ------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------- |
| SFC 前处理，读取官方模板 AST / 脚本绑定信息 | 保留 css 导入身份、作者意图、分支和循环作用域；框架负责派生生命周期与 SSR 代码生成 | Vue 模板 ref 解包、props 别名等要恢复正确脚本表达式；插槽/循环不宜强提取                                    | 首选入口，保守处理可证明的场景   |
| 框架编译中使用扩展点                        | 可以复用框架已经分析的表达式和绑定信息                                             | 两个框架能力不对称；Vue template compilerOptions 扩展不等于可任意改 setup；不能依赖 Svelte 未承诺的内部钩子 | 仅在前处理遇到具体障碍时局部采用 |
| 官方编译后的 JS AST                         | 模板已消失，Vue ref / Svelte state 访问显式化；适合纯局部优化                      | 需要理解 render/setup、循环闭包、SSR/HMR 产物和版本内部 helper；源码映射还要串接                            | 不作为建立响应式绑定的主路径     |

编译后确实可能更容易识别“这里是一次函数调用”。但是在 Svelte 编译后追加 `$derived(...)` 已经太晚：rune 转换完成了，必须操作内部 derived/get 或另跑编译，复杂度随之增加。Vue 可用公开 computed，但仍需把它放进正确实例作用域；开发 render 常与 setup 分开，不能只把生产 inline render 的文本搬动规则套到开发输出。

Vite 的 `enforce: 'post'` 表示插件顺序，不表示一定处于所有 TS 降级、打包和压缩之后。若采用后处理，必须明确所接收的模块 ID、阶段和 sourcemap，避免改写 virtual module、重复处理或污染服务端分支。参考 [Vite 插件顺序](https://vite.dev/guide/api-plugin.html#plugin-ordering)。

### 需要守住的语义与成本

- computed 只跟踪响应式依赖。如果作者调用 `readExternalState()`、使用普通可变字段或用户覆盖的方法，自动缓存可能改变每次渲染重新求值的语义；不能把所有 css 调用都当成可缓存纯函数。
- 条件分支保持惰性，不提前执行两边来登记所有类，避免改变样式插入顺序、自定义方法副作用或条件数据访问。
- 组件级派生不能直接捕获 `v-for` / each / slot / snippet 局部参数。保留模板运行路径优先于引入逐项派生缓存。
- 纯派生阶段不创建绑定订阅。混合连续值与结构分支，要与现有隐式绑定分析协作；不是先套 computed 再期待插件自动保留变量优化。
- CSS 登记是幂等外部副作用，框架派生函数建议保持纯净；本轮用现有运行时调用研究实际执行次数，正式自动转换仍需生命周期、SSR/hydration 和宿主恢复验收。

### 条件场景探针

`probe:template-conditional` 测量原模板与显式派生两条路径，覆盖一个元素和两个元素共享相同表达式，Vue / Svelte 分开；200 个组件、21 次无关更新、21 次 compact 切换、五轮中位数。样式断言覆盖全部元素，普通样式应只有两个类。

另有不参与耗时统计的独立计数轮，记录真实 css 调用次数，区分“框架已经跳过计算”和“调用了但注册器命中缓存”。CI 输出 `template-conditional/results.json` 及四份官方编译输出。计数包装只用于这个研究，不改变正式运行时。

### 首轮连续值结果（已完成）

提交 `9b9fd46` 的 [CI](https://github.com/kenconnet666/zerodep-css/actions/runs/36237795863) 三个任务全部成功，[原始样本](string-css-probe/results/template-derived-9b9fd46.json)已存档。以下为 Chrome 153 / Node 24 的五轮中位数，单位 ms；每栏包含 200 个组件的 20 次批量更新及布局读取，不是单次 css 调用时间。

| 框架 / 路径           | 无关更新 | 宽度更新 |
| --------------------- | -------: | -------: |
| Vue 模板运行时        |     14.4 |     28.3 |
| Vue computed          |     12.6 |     33.0 |
| Vue 模板隐式绑定      |     21.7 |     41.2 |
| Vue setup 稳定绑定    |     11.7 |     37.3 |
| Svelte 模板运行时     |      6.7 |     26.6 |
| Svelte $derived       |      8.2 |     26.9 |
| Svelte 模板隐式绑定   |      8.9 |     37.2 |
| Svelte setup 稳定绑定 |      9.2 |     32.7 |

这组结果不支持“提取一定更快”：Vue 无关更新减少，但真实值更新略慢；Svelte 单次使用没有表现出额外派生收益。变量路径维护每实例的值规则，不能期待始终比高度共享、短小声明的类缓存更快。它的明确优势是连续值不累计普通类。条件样式的新结果应独立分析，不能套用此表。
