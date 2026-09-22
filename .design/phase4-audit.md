# 阶段四缺陷与下一步方向审查（讨论稿）

审查日期：2026-09-22。代码基线：`ba5f98b`。本轮不修复产品实现、不移动目录；只记录复现结果和待讨论方案。用户已选择下一步优先改善组件内的条件、嵌套和动态值体验。

## 结论

建议先做阶段 4.1「编译语义修复与边界整理」，再做阶段 4.2「现有组件写法扩展」。目前有六类已复现缺陷，不能以已有 53 项快速测试通过替代这些缺失的语义验收。三个产品包和 core/runtime/context 的基本职责不需要因此推翻；需要优先修正的是宏分析、模板求值边界及变量降级。

复现使用当前 dist、项目锁定版本的官方 Vue/Svelte 编译器、SSR 渲染器及 Chrome。已比较 Vue/Svelte 的源码转换结果与 dist，结果一致，排除了旧构建干扰。未重新执行完整 CI，也不把此审查视为全部 CSS 语法的穷举验收。

本机证据保留在忽略目录 `test-results/audit-bx-20260922`：`probe.mjs` 可重跑，`results.json` 含对照组、错误和堆栈，`source-dist.json` 核对源码/产物，`check-coverage.json` 核对类型检查覆盖。复现文件和产物保留用于后续修复，不属于产品构建。

## 已复现缺陷

### R1 / P1：Vue 模板 props 提升后失去解析上下文

位置：`vue/src/compiler/index.mjs:44-61`。

标准 `<script setup>` 使用 `defineProps<{ width: number }>()`，模板直接读取 `width`，然后在内联 css 中写 `s.width.px(bx(width))`。转换器只重写 setup-ref/setup-maybe-ref/setup-let，没有处理 props，生成的脚本 computed 中留下未定义的 width。

- 实际：SSR 抛出 `ReferenceError: width is not defined`。
- 对照：同一模板改成普通 `s.width.px(width)`，交给官方编译器后正常输出 20px。
- 建议：根据 Vue binding metadata 完整解析模板读取，不能把模板标识符原样复制到脚本。覆盖无解构 props、显式 props 对象、解构及别名。

### R2 / P1：Vue 条件列表对隐藏项提前求值

位置：`vue/src/compiler/index.mjs:66-72`，同时涉及 visit 的条件信息传播。

用 keyed `v-for` 外层模板包住 `v-if="row.enabled"` 的元素；隐藏项 detail=null，可见项 detail.width=20。原生模板不会读取隐藏项的 detail.width。当前转换把样式计算和变量计算提升为整个数组的 map，没有带上 v-if 的执行边界。

- 实际：SSR 抛出 `Cannot read properties of null (reading 'width')`。
- 对照：相同列表和 v-if 使用普通 CSS 值时正常渲染可见项。
- 建议：在原本可见且存活的元素作用域中建立计算，或保存可证明等价的守卫；不能用全数组提前计算替代原生条件求值。补充隐藏项缺字段、条件切换和列表重排的组合用例。

### R3 / P1：Svelte 模板局部同名函数被误认成宏

位置：`svelte/src/compiler/index.mjs:65-77`、模板遍历 `115-127`。

组件导入 bx，模板中再用 `{@const bx = (v: number) => v * 3}` 定义局部函数。当前分析只记录 each 的局部名称，未记录 ConstTag 的词法绑定，仍把这个局部 bx 当作导入宏。

- 对照：官方编译器处理 `s.width.px(bx(10))` 得到 width:30px。
- 实际：启用 bx 转换后得到元素变量 10px，宽度语义被静默改写。
- 建议：使用完整的模板词法作用域信息，至少覆盖 const、each、snippet/slot 的局部声明；未开放的作用域也要正确辨认遮蔽，不能误处理普通函数。

### R4 / P2：CSS-wide 关键字经过 bx 后改变含义

位置：`core/src/binding.ts:53-66`、`scripts/compiler/shared.mjs:253-263`。

`s.color.token(bx(keyword))` 在 keyword='initial' 时通过校验，编译后输出 `--变量:initial; color:var(--变量)`。但 initial 在自定义属性上的含义是重置该自定义属性，不是把单词 initial 原样传给 color。

- Chrome 对照：红色父元素下，直接 color:initial 为黑色 `rgb(0, 0, 0)`。
- 实际：经过真实 Vue bx 编译的元素变成父元素的红色 `rgb(255, 0, 0)`；手工同形态变量替换得到相同结果。
- 建议先明确 API 合同：优先拒绝 bx 中的 CSS-wide 关键字并给改写建议，普通 token/raw 仍支持这些值；若要求完全等价，应另做完整的层叠/继承方案，不能直接改成 inline 属性而忽略层叠优先级。
- 依据：[W3C CSS 自定义属性规范](https://www.w3.org/TR/css-variables-1/#defining-variables)规定 CSS-wide 关键字对自定义属性本身生效，自定义属性初始值为 guaranteed-invalid。

### R5 / P2：回调内 class 声明逃过局部捕获检查

位置：`scripts/compiler/shared.mjs:153-179`。

回调中声明 `class Value { static width = 20 }`，再写 `s.width.px(bx(Value.width))`。这本应属于文档明确拒绝的回调局部变量，但 local 集合只采集变量和参数，漏掉 class 等声明。

- 实际：Vue/Svelte 两端均接受转换，然后在元素变量读取时抛出 `ReferenceError: Value is not defined`。
- 建议：统一词法绑定分析，覆盖 class/function/catch/循环等声明，非法捕获必须在原源码位置诊断。不要继续逐个补名称字符串判断。

### R6 / P2：重复 getter 的源码映射指向最后一处 bx

位置：`scripts/compiler/shared.mjs:377-395`。

同一回调中 width 和 height 都使用 `.px(bx(width))`，两处生成相同的格式化表达式。映射通过 `code.indexOf(text)` 搜索全部同名片段，后处理的锚点覆盖了前一处的位置。

- 实际：第一处 getter 应指向原源码偏移 272，实际指向第二处的 295。
- 建议：按生成片段及原 AST range 保存映射，避免依赖文本全局搜索。增加相同表达式出现两次、提升表达式和多行源码的定位用例。

## 目录、命名与工程边界

| 现状                                                                       | 判断                                                                                              | 建议                                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| core/vue/svelte 三个产品包                                                 | 职责基本成立                                                                                      | 保留，不为本次修复增加第四个产品包                                                             |
| scripts/compiler/shared.mjs 包含约 460 行产品编译逻辑                      | 导入/作用域、CSS 降级、source map 和 Vite 包装混在同一模块，名称也过泛                            | 移到明确的私有源码目录，例如 internal/compiler；按真实职责拆成少量分析、降级和映射模块         |
| 两个适配器 compiler/index.mjs 承担完整转换                                 | index 同时是入口与实现，难以单独验证框架语义                                                      | index 保留导出；框架转换移到 transform.ts，保持框架专属的 props/模板作用域逻辑在适配器         |
| compiler 使用 .mjs，公共类型手写 .d.mts                                    | 静态核对发现两个包 tsconfig 的文件集合均没有 compiler 实现；root check 不覆盖最复杂的产品编译代码 | 推荐转换为 TS 并由实现生成声明；若继续 JS，必须显式纳入 checkJs 并验证声明一致性               |
| core/binding 既叫“绑定”，实际只做格式化和校验                              | 容易和作者的 Binding<T> 类型、框架绑定生命周期混淆                                                | 可改为 core/compiler-runtime 子路径；这属于生成代码依赖的内部 ABI，仍需版本/独立消费验收       |
| build.mjs 导入 testing/environment.mjs；两套浏览器测试重复官方编译适配代码 | 通用执行环境放在 testing 下、测试启动器重复，容易导致路径配置漂移                                 | 通用命令环境归 scripts/lib；只提取已重复的官方编译/浏览器启动部分，业务断言保留在各测试中      |
| 适配器普通 dependencies 包含 TypeScript 等工具                             | 浏览器 bundle 未包含编译器，但安装依赖仍会安装这些工具                                            | 区分 bundle 体积与安装体积；发布前再决定是否使用可选 peer 或单独内部打包，不以拆包本身作为目标 |
| size:check 只覆盖 core 的四个函数                                          | 可以证明旧 core 基线，不能代表 Vue/Svelte 默认入口与 bx 真实使用的总体成本                        | 补充两个适配器入口和含 bx 的最小组件预算，并测变量更新中的 CSS 解析成本                        |

`bx`、`css`、`cssVar`、`token/raw`、`useStyleRuntime` 不建议再次公开改名。内部 `session` 可改为 `createTransformContext`，`expression` 可改为 `transformStyleExpression`。`globalCss` 定义、`useGlobalCss` 生命周期挂载和宿主 context/runtime 所有权已有区别，当前没有证据支持把这些 API 合并或重命名。

目录整理应服务于缺陷修复和类型覆盖，不一次性重排全部 core 文件。改目录、改行为分别提交；构建与 tarball 的入口检验必须跟随迁移。

## 组件内 API 扩展讨论

### 优先：扩展现有写法，不先新增 when/choose DSL

保持 `css(factory): string`、原生响应式和显式 bx 合同。下一步重点是让已有类型层允许的结构写法能够可靠使用 bx，例如：

```ts
// 以下是下一阶段候选，当前 bx 编译尚不支持这些嵌套/条件写法。
css((s) => {
  s.hover((h) => h.color.raw(bx(hoverColor)));
  s.media('(width > 48rem)', (m) => m.width.px(bx(width)));
  if (expanded) {
    s.height.px(bx(height));
  }
});
```

- hover/focus/pseudo 和 media/supports/container 的第一批范围，应限定为能证明属于同一个宿主元素的规则。任意 selector 可能选择兄弟或祖先，变量写在当前元素上不一定能作用到目标，不能一并宣布支持。
- expanded 是普通依赖：变化时允许重算并换 class；仅 height 变化仍只更新变量。隐藏分支不得读取值，分支退出必须撤掉自身变量。
- 需要保留 const 一次计算与 computed/$derived 原生派生的区别。不能通过额外读取条件或普通参数，悄悄把 const 样式变成动态样式。
- 当前已经接受部分无调用的标量表达式。先把允许的表达式、禁止的副作用和推荐的框架原生派生方式写成合同，不急于允许任意 getter/helper 调用。

### 实现方向：先保留源码转换，补足作用域与执行计划

推荐在现有官方编译器前的源码转换中，引入明确的私有分析结果：导入绑定、词法作用域、使用元素、分支/循环守卫、单位与值域、原始源码位置。它只描述已识别的语义，不是新的公开作者 API，也不需要自建响应式系统。

条件和列表的探针，应比较“原元素作用域内的原生派生/绑定”与“在原求值点生成私有绑定描述”两种实现，检查求值次数、隐藏分支、const 快照和清理。当前全数组 map 的提前求值已被 R2 证伪，不应继续当作一般模板语义的替代品。若前置转换无法可靠表达，再拿具体失败样例讨论官方编译钩子；不直接改写框架生成的 JS。

### 可选：复杂 CSS 值的类型 API

先强化现有 raw 模板的 CSS token 上下文分析。若实际组件证明字符串方案仍易错，再比较带单位的 CSS 值构造器，例如候选 `translate(px(bx(x)), px(bx(y)))`。后者能提高静态约束，但会增加一套值组合 API 和编译规则，现在不定名、不实现。

### 暂缓：recipes、variants、主题预设

用户本轮优先级是组件内写法。组件变体、slot recipes 和主题变量合约有成熟先例，但本项目尚不需要复制一整套体系。后续若转向组件库，可分别参考 [vanilla-extract recipes](https://github.com/vanilla-extract-css/vanilla-extract/blob/master/site/docs/packages/recipes.md)、[主题合约](https://github.com/vanilla-extract-css/vanilla-extract/blob/master/site/docs/api/create-theme-contract.md)和 [Panda slot recipes](https://github.com/chakra-ui/panda/blob/main/website/content/docs/concepts/slot-recipes.mdx)。这些是调研参照，不是本项目已接受的 API。

## 建议的下一步顺序

1. **4.1a：语义回归与修复。** 将 R1–R6 转成永久回归；先修 props、守卫、词法身份，再处理值域和映射。成功用例检查最终样式；不支持的用例检查定位诊断，而不是接受转换后等运行时报错。
2. **4.1b：编译代码工程化。** 把编译实现纳入类型检查，迁移私有公共编译代码、生成声明、减少测试启动器重复。保持 public API 和三产品包边界。
3. **4.2a：同宿主嵌套规则。** 先试点 hover/media，再扩展经过明确验收的其他结构；不自动支持任意选择器目标。
4. **4.2b：原生条件与局部作用域。** 支持有限 if/else 和现有条件列表组合，验证隐藏值不读、分支退出清理、const/derived 区别、SSR/hydration/HMR。

所有阶段均使用原生 LSP、类型/构建检查和对应浏览器/消费者回归；不以增加 API 数量作为退出条件。新的性能或 CSP/inline-style 支持承诺需要专项验收，本轮没有把它们计为已证明。

## 需要共同确定的取舍

最先需要确定的是 bx 的 CSS-wide 值域：建议首轮明确拒绝 initial/inherit/unset/revert/revert-layer 等关键字，并引导使用普通 token/raw 声明；如要求 bx 对这些值也完全等价，应先证明层叠和继承方案，再扩展支持。其他方向按用户已选的组件内体验推进，不重新讨论已确认的 bx 命名和普通值更新合同。
