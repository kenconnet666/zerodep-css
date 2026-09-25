# 运行时写法与性能方向复核

这份记录最初针对惰性原型版；直接字段试验及新的取舍见[关键字直接字段试验](direct-keyword-fields-probe.md)。优化应保留 `s.color.red` 返回声明字符串、`css(...parts)` 运行时注册、原生 CSS 层叠以及无法静态识别时的运行时回退。

## 当前一次调用做了什么

根组件创建一个 `AppCss extends Css` 并提供给上下文，后代的 `useCss()` 在组件初始化时读取同一个实例。`Css` 的 502 个系统属性在原型上有 getter；首次读到 `s.color` 时才创建并缓存共享的 `ColorCss`。当前生成的 `ColorCss` 用只读实例字段保存关键字声明；此前的惰性原型版把它们放在类原型上。之后 `s.color.red` 是普通属性读取，得到已生成的 `color:red;` 字符串；`raw()`、`px()` 和 `ic()` 只拼字符串，不解析 CSS。

浏览器 `css(...parts)` 在当前 `Document` 的规则注册器中拼接声明、查 `Map`。命中时直接返回旧类名；未命中时计算哈希、通过 `CSSStyleSheet.insertRule()` 插入并记录正反向映射。正反向映射同时用于检查类名哈希冲突，不宜为了少一张表而删除。服务端由 `AsyncLocalStorage` 把相同调用路由到每个请求的收集器；hydration 预热已有规则。动态值若不断变化，会产生新的声明组合和新规则。

## 已有端到端证据

[最小可用性能记录](minimum-usable-performance.md)在 Vue、Svelte 各用 200 个元素测得：16 个值反复切换时，缓存类的总更新时间接近预声明原生类；持续新值时，本框架约 25–31／25–28 ms，原生 CSS 变量约 18–25／19–21 ms，且本框架产生 1,400 条规则。这些时间包含框架更新和布局读取，不能解释为单次 `css()` 的开销。完整 `core` 作者模型的旧冷加载中位数约 22 ms；浏览器规则注册器单独约 1.3 ms。属性文件拆分未改变完整构建入口的体积。

## 本轮只读探针：真正挡住按需打包的点

生成的 `author.ts` 在模块顶层调用 502 次 `defineSystemProperty()`。即使只从 `core` 根入口导入 `ic` 或单独的 `ColorCss`，这些注册也被打包器视为可能有副作用。按当前构建参数进行“库构建 → 消费端再打包”的两阶段 esbuild 探针，得到以下压缩 JS 字节数：

| 仅用到的入口          |    当前 | 假设将注册推迟到首次 `new Css()` |
| --------------------- | ------: | -------------------------------: |
| `ic()`                | 577,763 |                               98 |
| `new ColorCss().red`  | 577,700 |                            6,131 |
| `new Css().color.red` | 577,707 |                          577,762 |

右列只是在内存中改写生成结果再构建的**假设探针**，不是已实现功能，也没有做完整运行时验收。它说明“先移除模块顶层副作用”值得优先试；它**不**会缩小实际使用完整 `Css` 的主路径。原始库入口在该探针中约 589 KB，推迟注册前后也几乎相同。[esbuild 文档](https://esbuild.github.io/api/#tree-shaking-and-side-effects)说明其副作用判断是保守的，不能靠错误地标记整个包 `sideEffects: false` 来解决。

另一个一次性 Chrome 153 探针在 200 个元素、1,400 条新规则下，五次新页面测量的中位数为：逐条 `insertRule()` 写入约 3.2 ms，预拼好 CSS 后一次设置 `style.textContent` 约 1.6 ms；随后强制布局约 1.8／1.9 ms。这只比较规则写入方式，不含框架和 `css()`，也不支持在每次新值出现时重写整张样式表。批量写入至多是后续大批量首次注册的候选，不是当前更新差距的完整答案。

## 当时的建议与后续方向

1. **已实现的延迟注册。** 502 次系统属性 getter 注册移到了 `Css` 首次构造时，属性链在首次读取时创建。后来关键字又试改为直接类字段，相关收益与代价见[新探针](direct-keyword-fields-probe.md)。延迟注册的收益主要是按需导入与非作者页面的加载成本。
2. **按值的形态使用框架能力。** 有限状态预注册少数类，再用纯表达式选择类名：Vue 用 `computed(() => classes[state.value])`，Svelte 用 `$derived(classes[state])`；结构性 `if`／`switch` 仍可返回不同已注册类。当前探针中这一路径接近预声明原生类。持续新值则值得把稳定声明写成 `var(--x)`，在目标元素绑定值；Vue 可用元素 `:style`，Svelte 可用 `style:--x`。Vue SFC 的 [`v-bind()`](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css) 是编译成静态 CSS 变量的参考，但它默认作用于组件根，列表中各元素独立取值时仍需元素级绑定。Svelte 的 [`style:` 指令](https://svelte.dev/docs/svelte/style)直接支持自定义属性。变量路径应是可选的编译优化，未识别表达式继续运行时注册。
3. **不要普遍把 `css()` 包进派生值。** `css()` 会写 CSSOM 或收集 SSR 规则；Vue [computed](https://vuejs.org/guide/essentials/computed#best-practices) 与 Svelte [`$derived`](https://svelte.dev/docs/svelte/%24derived) 都建议派生表达式无副作用。旧探针证明 Vue `computed` 能避开无关更新中的重复调用，但不能据此把它做成适配器默认写法。纯粹的“从已注册类表中选一个字符串”才适合派生值。Svelte 5 的模板在该探针中对无关更新本来就没有重复调用，尤其没有理由统一套 `$derived`。
4. **后续再做静态表达式编译。** 可识别的 `css(s.color.red, s.width._md)` 或有限 `if`／`switch` 分支，可以在构建时生成规则和类名，省掉首次注册；复杂表达式继续原样调用运行时 `css()`。需要先定义 SSR 样式归属、源码变更和类名稳定性的边界，避免为了优化破坏作者写法。

Svelte 的 `class={[...]}`／对象写法从 5.16 才提供，而当前适配包的 peer 范围从 5.0 开始；不能把这种模板语法当作全范围默认写法。若组合多个类且它们声明同一属性，类名在 HTML 中的排列顺序也不能代替样式表中的级联顺序。因此条件分支优先选择一个完整的组合类。[Svelte class 文档](https://svelte.dev/docs/svelte/class)、[CSS 级联顺序](https://www.w3.org/TR/css-cascade-5/#cascade-sort)

有限值时，`css()` 在组件初始化时登记类，之后的派生表达式只选字符串：

```ts
// Vue 组件的 setup：Svelte 组件可把 computed 改成 $derived(classes[size])。
const s = useCss();
const classes = [12, 24, 48].map((width) => css(s.width.px(width)));
const chosen = computed(() => classes[size.value]);
// <div :class="chosen" />
```

连续值则共用一条规则，让框架更新目标元素的变量；Svelte 可把 Vue 的 `:style` 换成 `style:--element-width={width + 'px'}`：

```ts
const variableClass = css(s.width.raw('var(--element-width)'));
// Vue: <div :class="variableClass" :style="{ '--element-width': `${width}px` }" />
```

当前不建议加入通用 CSS 解析器、每组件创建作者 `Proxy`、将所有动态值强制改成 CSS 变量，或把每条声明都拆成原子类。前两者给热路径增加工作；第三种在本机有限值场景反而明显慢；原子类还会让同属性声明的实际优先级受样式表插入顺序影响，不能直接保持现有 `css(...parts)` 的原生层叠表现。`raw()` 的开放输入与主题类继承也不需要因此改变。规则缓存也不宜先加 LRU：只驱逐 `Map` 而不删除 CSSOM 规则，下一次相同组合会再次插入；安全的规则回收需要处理仍在 DOM 上使用的类。

还有一个功能边界需要单独设计：当前 `useCss()` 读取的是初始化时的作者实例，继承式主题关键字可用于静态预设，但替换上层实例并不会自动让已挂载后代更新。将来的动态主题切换若以 DOM 子树内的 CSS 自定义属性覆盖表达，可以让后代共享稳定类并由浏览器继承更新；这需要 Vue/Svelte 适配器明确主题宿主和绑定位置，不能只靠上下文对象继承。
