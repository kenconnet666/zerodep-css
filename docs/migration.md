# API 与目录精简

本轮对 private 的 0.2 开发版本直接收敛入口，不提供旧名转发。组件 API 见各包 README，底层框架接入不属于业务作者入口。

## 需要修改的用法

| 旧写法                              | 统一写法                                                 |
| ----------------------------------- | -------------------------------------------------------- |
| `useStyleRuntime(context)`          | `useStyleRuntime({ context })`                           |
| `useStyleRuntime(undefined, scope)` | `useStyleRuntime({ theme: scope })`                      |
| `useStyleRuntime(context, scope)`   | `useStyleRuntime({ context, theme: scope })`             |
| `StyleBuilder` 参数类型             | `Css`；回调使用 `StyleFactory` 或 `StyleFactory<AppCss>` |

`useStyleRuntime()` 仍表示使用当前组件的默认上下文。需要自定义作者类时传 cssType；显式泛型仍须提供实际构造器。旧位置参数在类型检查和 JavaScript 运行时都会被拒绝，避免静默丢失主题。

更新后重新构建客户端与服务端，保持 SSR 恢复使用同一批产物。

Css 是唯一局部样式作者模型：用户可直接继承系统 Css，也可继承内置 ThemeCss 再扩展。DeclarationBuilder、GlobalBuilder 等表示不同 CSS 上下文，继续保留。

通用 pseudo 与常用状态方法保留静态便捷写法；属性关键字、token/raw、单位方法分别提供静态选择、动态字面量、开放值和数值约束。globalCss 定义与 useGlobalCss 生命周期挂载、readTheme 快照与 useTheme 原生上下文读取各有职责，不按相似名称强行合并。

## 目录与模块

- 当前说明集中到 docs：architecture、support、compiler、themes、language-services、handoff、roadmap、validation 和本页。包 README 负责各自用法，CHANGELOG 记录版本差异。
- 原 `.design` 的已完成计划、重复审计和 history 文档从工作树移除；必要的验收/性能证据集中在 [validation](validation.md)。原文可通过 Git 提交 `8a09c05` 的 `.design` 路径恢复，例如 `git show 8a09c05:.design/api-usability.md`。
- 框架接入模块 `theme-runtime.ts` 改名为 `style-scope.ts`，子路径同步为 `@zerodep-css/core/style-scope`。它同时负责主题、作者类型选择与共享 runtime 视图，原有名称已不能完整表达职责。业务代码继续从适配器根入口使用 useStyleRuntime/useTheme。
- 接入函数 withTheme 改名 createRuntimeView，styleRuntimeOptions 改名 normalizeStyleOptions；旧名不重导出，新旧子路径不并存。
- 测试仍放所属包 test，公共执行器在 scripts/testing；Node 编译源码留在 internal/compiler、vue/compiler、svelte/compiler；研究代码继续在 .research，不进入产品 dist。

生成覆盖报告移到 docs/css-coverage.json，仍由 generate:css 维护。构建清除旧 dist，独立消费者检查旧子路径不再导出，避免更名后残留文件造成假兼容。
