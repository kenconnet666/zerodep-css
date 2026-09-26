# 选择器移入作者对象

独立 `ic` / `IcSelector` 已移除。系统入口为 `s._selector(selector, ...parts)` 和 `_hover`、`_active`、`_focus`、`_focusVisible`、`_focusWithin`、`_disabled`、`_checked`、`_before`、`_after`，没有无前缀别名。`CssSelector` 提供常见字面量补全，同时允许任意字符串。

所有选择器方法只返回规则片段，接受声明字符串、只读嵌套数组和条件空项，不读宿主，也不展开 class。`keyframes` 保持登记、去重、返回动画名称的现状，帧片段改写为 `s._selector('from', ...)` / `s._selector('to', ...)`。

快捷方法表、选择器类型和纯拼接函数集中在 `core/src/selectors.ts`。生成器消费同一份元数据，检查与系统属性的命名冲突，并生成有中文提示的原型方法；不手改 generated，不为每个实例复制函数。502 个属性、12,586 个关键字保持不变，`s.width.ic(1)` 这种原生长度单位也保持不变。

绑定编译器识别系统选择器组合，在生成的内部调用中检查方法身份。若子类覆写快捷方法或 `_selector`，其内部声明保留原始值，避免用户的字符串加工收到变量占位符。CSS 内容与登记机制不变，此次调整不宣称提高运行速度。

本地针对性验证覆盖生成一致性、五包类型 / 构建、旧入口移除、中文提示、原型共享、子类扩展和覆写回退；浏览器覆盖九种快捷方法、子元素、media，以及 Vue/Svelte 的动态 hover、动态子元素、动画和 SSR 恢复。原浏览器探针已从 `legacy/ic-browser.mjs` 整理为 `selectors-browser.mjs`，命令为 `test:selectors`，CI 已同步。

当前 API 见 [作者说明](../docs/author-api.md)。较早研究记录中的 `ic` 是当时的历史名称，不构成兼容入口。每阶段按要求提交并推送，完整矩阵由当前提交的远程 CI 验收。
