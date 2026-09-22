# 后续实施路线

当前：阶段 1–3、阶段 3.5 和阶段四 bx 编译首版已实施。架构以 architecture.md 和三个包 README 为准；换机步骤与验证边界见 handoff.md。

## 阶段四：显式 bx 编译首版

实施决策见 [阶段四计划](bx-plan.md)，实际支持矩阵与 Vite 接入见 [bx 编译说明](bx-compiler.md)。原名 ibind 已改为 bx，不保留旧别名。

已采用官方编译器前的 AST 源码转换。Vue 使用稳定 computed，Svelte 使用原生 style 指令；普通动态值继续重算/换 class，只有 bx 创建元素变量绑定。三个产品包保持 private，编译依赖不进入默认浏览器入口。

已覆盖有限的同组件 class 复用、单位/多变量、源码映射、SSR/hydration、条件及简单 keyed 数组循环、HMR 和独立 tarball 消费。无法追踪的 class、复杂作用域和未知拼接明确诊断。绑定拥有元素变量，class 规则仍驻留到 runtime/context.dispose。

## 后续优先事项：扩展绑定覆盖并保持现有合同

- 动态属性 spread、嵌套 builder 回调中的 bx、嵌套/解构循环：先给出正反例和所有权策略，再逐项解除当前定位诊断。
- 组件透传、跨文件 class、Teleport、SVG/MathML、动态 keyframes/global：分别验证使用点和生命周期，不自动把绑定写到 :root。
- 宏诊断在构建插件中，编辑器目前负责原生类型与补全；如需即时宿主/作用域错误，另做框架语言工具接入。
- 根据实际场景测量编译耗时、Vue 数组派生和变量校验成本；优化前保留回调计数、规则数量及计算样式基线。

## 独立后续事项

- 根据 bundle metafile 优化 CSS 解析器/元数据成本，保留语义和失败校验；不因体积大直接删除校验，也不默认 sideEffects:false。
- 流式 SSR、异步 Suspense/boundary 完整流程、Nuxt/SvelteKit 插件单独研究。
- 发布前处理 LICENSE、repository/engines 等元数据、声明地图源码可达性、浏览器支持范围、版本策略。暂不发布、不改 private。
- 如增加跨框架共享编译实现，先证明重复部分值得共享，再建私有工具边界；不提前增加产品包。
