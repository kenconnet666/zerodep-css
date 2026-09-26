# Vue v-for 的 class 局部派生缓存

结论：可以不改变用户模板、不拆行组件，在循环内部复用每行的 computed。Vue 3.5.43 的既有 `renderList` 缓存提供了比独立 key 表更小的接入点。本次是可运行研究原型，尚未接入正式插件。

## 现有编译过程

输入：

```vue
<div
  v-for="(item, index) in items"
  :key="item.id"
  :class="css(s.display.flex, item.compact ? s.padding.px(4) : s.padding.px(16))"
>
  {{ item.label }}
</div>
```

`transformFor` 建立循环作用域并处理变量别名；`transformElement` 生成元素与 class；最后 `transformFor` 的退出阶段创建 `renderList(items, callback)`。简化后的代码：

```js
renderList(items, (item, index) =>
  createVNode(
    'div',
    {
      key: item.id,
      class: css(s.display.flex, item.compact ? s.padding.px(4) : s.padding.px(16)),
    },
    item.label,
  ),
);
```

Vue 的 `v-memo` 会给这个调用增加第三、第四参数：组件 render cache 和缓存槽号；回调增加第四个参数，接收上次对应位置的 VNode。运行时实质为 `renderItem(item, index, undefined, cached[index])`，本轮结束后用新 VNode 数组替换缓存槽。

源码依据为本地锁定依赖的 `@vue/compiler-core/dist/compiler-core.cjs.js` 中 `transformFor` / `createForLoopParams`，以及 `@vue/runtime-core/dist/runtime-core.cjs.js` 中 `renderList`。这是当前版本机制，不把它宣称为跨版本稳定的公开扩展协议。

## 原型：只缓存 class，VNode 继续正常生成

原型在根节点退出转换时，读取已经完成的 FOR codegen AST，保留框架解析过的作用域和表达式，仅替换 class 求值部分。实际产物的简化形式：

```js
renderList(
  items,
  (item, index, unused, previous) => {
    const style = readRowStyle(previous, item.id, [item, index], () =>
      css(s.display.flex, item.compact ? s.padding.px(4) : s.padding.px(16)),
    );
    const node = createVNode(
      'div',
      {
        key: item.id,
        class: style.className.value,
      },
      item.label,
    );
    return rememberRowStyle(node, style);
  },
  renderCache,
  slot,
);
```

`readRowStyle` 用 WeakMap 从上一 VNode 找到记录：

1. key 与捕获的循环变量身份都没变：复用已有 computed。
2. 同一个 reactive item 的 compact 改变：Vue 自动使 computed 失效，读取时重新计算。
3. 同 key 替换 item 对象或 index 变化：新建 computed，捕获本轮变量；不继续读取旧对象。
4. 文字或其他属性更新：重新生成 VNode，class 的 computed 可以保持缓存。

无关重渲染仍有闭包、局部变量数组和缓存比较的成本；省去的是样式 getter 中的属性方法、拼接与注册器查询。原型不使用 watch/effect，不在 render 中写入响应式状态，也不建立独立的 key → computed 强引用表。

## 为什么不直接加 v-memo

`v-memo="[item.compact]"` 会缓存整个子树。若只改 item.label，依赖数组不变，文字也可能被冻结。官方要求作者完整提供子树依赖，而本库只负责样式，不能替用户接管其余内容。探针包含这个反例。

参考：[Vue v-memo](https://vuejs.org/api/built-in-directives.html#v-memo)。本原型只借用列表缓存参数，没有给 VNode 设置 memo，也不跳过 VNode 生成。

## 作用域与生命周期边界

- 原生缓存按位置取旧 VNode；检查 key 不等于按 key 搜索。重排时不匹配就重建 computed。正确性保留，但不承诺重排也命中。
- 当前原型把所有简单循环别名放入 locals，包含外层循环别名，避免嵌套同 key 读取其他父项。这样偏保守；未使用的 index 变化也可能重建。
- 同一内层循环编译点在多个外层项中共享原生缓存槽，可能只留下最近一次内层列表，导致较低命中率。已验证正确性，不宣称嵌套列表都有相同缓存收益。
- 删除项后，本轮 renderList 的数组替换旧数组；不独立保留历史 key。隐藏整个列表时，Vue 的缓存槽仍可能保留上一次列表直到重用或组件销毁；不声称立即释放隐藏行或已经测过堆内存。
- 原型仅处理有 key、单元素根、简单循环形参和普通 props 的 class。解构别名、slot、多根 template v-for、已有 v-memo/v-once、动态 props 合并等保留原样；未来可逐项补齐，不把原型当成任意模板转换器。
- 缓存仍遵循 Vue 响应式语义：不可追踪的普通可变字段、时间或外部副作用不适合自动缓存。正式插件需要识别本库 css 导入与可接受表达式；研究夹具不做完整纯度推导。
- 与隐式变量绑定、SSR/hydration、HMR、KeepAlive 及用户覆写方法的协作尚未验收。本次只研究普通运行时 css 路径。

## 为什么编译中更合适

这次不需要把 item 搬到 setup：computed 可以首次渲染时创建，再由既有 VNode 缓存持有。闭包天然处在 item 的作用域中。

原型使用 compiler-dom 的 nodeTransforms，在框架处理完循环和表达式、输出 JS 之前改写 codegen AST。相比纯源码前处理，避免手动改写 Vue 的 ref 解包；相比事后解析 JS，不必重新猜测哪个回调是 v-for、哪个 `_cache` 属于组件。

因此更新此前建议：组件级表达式可以采用源码提升；针对 v-for，应优先研究框架编译阶段的局部转换，而不是先造独立 key 缓存系统。正式接入还需验证 SFC 开发 / 生产 / SSR 编译路径，并对锁定 Vue 版本设置编译产物回归检查。

## 验证与性能

本地焦点检查：

```powershell
pnpm --dir test/tools test:vfor-style
node test/tools/vfor-style-performance.mjs --compile-only
```

五项测试使用真实官方编译产物、真实 Vue 响应式调度与无 DOM 的小型 renderer。已验证无关更新不重复计算 class、文本继续更新、同对象字段变化、同 key 替换、重排与索引变化、外部响应式值变化、删除与重挂、嵌套同 key，以及 v-memo 冻结文本反例。主用例七轮操作没有产生额外渲染。

浏览器探针由 CI 执行：200 行、21 次无关更新、21 次样式更新、五轮计时；另设独立调用计数轮，不把计数开销混进计时。浏览器断言检查实际 padding/width、文本、重排、对象替换与清空。输出 `runtime-diagnostics/vfor-style/`。时间无硬阈值；需要结合挂载与真实样式更新成本判断是否默认启用。

实现文件：[编译原型](../test/tools/vfor-style-compiler.mjs)、[小型缓存](../test/tools/vfor-style-cache.mjs)、[焦点测试](../test/tools/vfor-style-cache.test.mjs)、[CI 性能探针](../test/tools/vfor-style-performance.mjs)。

## 已取得的 CI 结果

代码提交 `7b0b235` 的 [CI 36239497834](https://github.com/kenconnet666/zerodep-css/actions/runs/36239497834) 已全部通过，包含 Windows / Ubuntu 基础检查、浏览器探针与项目其余完整验收。下表为同一次 CI 的五轮中位数，单位 ms；200 行批量更新，包含 Vue 刷新和布局读取。

| 方案                | 挂载 | 21 次无关更新 | 21 次全部样式变化 |
| ------------------- | ---: | ------------: | ----------------: |
| 原模板运行时        | 17.4 |          17.1 |              40.0 |
| 每行 class computed | 17.5 |           8.7 |              45.5 |

独立计数轮：

| 场景              | 原模板 css 调用 | 每行 computed css 调用 |
| ----------------- | --------------: | ---------------------: |
| 挂载              |             200 |                    200 |
| 21 次无关更新     |           4,200 |                      0 |
| 21 次全部样式变化 |           4,200 |                  4,200 |
| 全列表反转        |             200 |                    200 |

当前证据支持技术可行性，也显示实际取舍：无关更新明显受益，而每次全部样式都变时，额外 computed 与缓存管理使本次样本变慢。不能据此宣布所有列表都更快。原型可以作为下一阶段 Vue 循环优化的候选，默认启用范围还需结合隐式绑定、SSR/HMR 和更复杂列表测量决定。
