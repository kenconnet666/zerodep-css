# API 易用性：组件、主题与重复配置

用户已确认三个方向都实施。本轮保留普通函数复用、if/switch 和类继承，不引入 recipes/variants。

## 审查证据

`.research/api-usability/probe.mjs` 使用官方 Vue/Svelte 字符串 SSR，初始默认 red、当前组件提供 blue：Vue 的隐式 useTheme 读到 red，Svelte 读到 blue；显式 scope 均为 blue。提供之前创建的读取函数均继续读取原作用域。该差异虽已有文档说明，仍增加跨框架迁移成本。

当前全局 `g.rule` 不接受 AppCss，局部可用的自定义方法在全局失败。`StyleBuilder` 与 Css 的作者模型亦有历史重叠，本轮优先用 Css/StyleFactory 编写共享帮助函数，不贸然移除兼容类型。

## 实施决策

1. 组件写法：添加 focus/focusWithin/active/disabled 常用状态快捷方法；与 pseudo 等价，保留嵌套派生类型和保守自动编译。全局 rule 增加第三参数 AppCss，与 css(factory, AppCss) 对齐，只作用于该规则与其嵌套。
2. 重复配置：useStyleRuntime 新增选项对象 `{ context?, theme?, cssType? }`，默认类型在初始化时确定，后续 css 回调自动推断 AppCss；保留原位置参数。视图共享原 runtime，不创建新的样式表或所有权。
3. 主题体验：Vue 默认查询优先使用当前组件已提供的主题，再查祖先，与 Svelte 对齐。提供之前捕获的作用域不被后续提供追溯修改；显式 context 仍保留隔离语义。亮暗切换继续使用原生状态和预设 defaults，不新增切换状态机。
4. 编译器只能在确定使用系统 Css 时自动优化。包含 cssType、spread 或无法分析的初始化参数保留运行时；可确定的无参数/安全选项对象路径继续优化，debug 来源仍保留。
5. 易用性完成后测量主题查询、主题样式复用和配置视图的热路径；保留冷热对照、轮换顺序与结果校验，仅优化有明确收益且不破坏运行时校验的部分。

## 验收

分阶段中文提交。本地执行类型/构建、单元、关键类型负例与框架浏览器；最终 CI 验证生成一致性、完整 LSP、三引擎、独立消费者和体积。记录实际完成结果，不以计划替代通过证据。
