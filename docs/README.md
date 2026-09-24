# 文档导航

本仓库以运行时 CSS 为正式能力。需要接入项目时，先读根 [README](../README.md) 和对应包的 [Vue](../vue/README.md)、[Svelte](../svelte/README.md)、[Nuxt](../nuxt/README.md) 或 [SvelteKit](../sveltekit/README.md) 示例；`core` 的作者模型见 [core README](../core/README.md)。五个包仍为 private。

| 目的                                    | 现行文档                                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 确认支持版本、公开 API、宿主与 SSR 边界 | [支持范围](support.md)、[架构](architecture.md)                                                                    |
| 编写样式、主题和可选编译优化            | [主题](themes.md)、[编译器](compiler.md)                                                                           |
| 验证修改、诊断类型和查看性能数据        | [验证](validation.md)、[语言服务](language-services.md)、[性能](performance.md)、[CSS 覆盖清单](css-coverage.json) |
| 从旧入口迁移或换机继续                  | [迁移](migration.md)、[交接](handoff.md)                                                                           |
| 选择后续任务                            | [后续路线](roadmap.md)                                                                                             |

以下文件保留决策依据与实施过程，不是需要重新执行的待办清单：[运行时优先的原始决策](runtime-first.md)、[P1—P6 实施记录](production.md)、[固定版本元框架源码核对](framework-integration.md)、[性能架构取舍](performance-architecture-decision.md)、[Vue/Svelte 缓存取舍](framework-reactivity-cache-decision.md)及[版本变更记录](../CHANGELOG.md)。版本变化或真实应用出现新场景时再核对这些依据；旧强制静态方案从 Git 历史查询。

最新可重复执行的测试命令和对应提交的 CI 见[验证](validation.md)。历史阶段的数字只在其原测量条件下成立，不能与当前样本直接拼接为提速比例。
