# 后续路线

当前 [支持范围](support.md)内的 P1—P6 功能与九项远程验收已完成。运行时 CSS、五包入口和锁定版本的 Node SSR/静态部署未发现已知阻断项；五个包仍为 private。现阶段需要选择下一种实际消费目标，而不是继续叠加通用缓存或编译快路径。

1. **真实项目试用与反馈**：在一个 Vue 或 Svelte 应用按推荐的跨模块 `styles.ts` 接入，并覆盖主题切换、动态值、条件样式、全局样式、SSR/hydration、导航和卸载。记录作者回调次数、CSS 记录增长与实际更新耗时。跨模块 hook 当前可以完整运行，但通常不命中同 SFC 编译优化；只有真实瓶颈和等价性证据充分时，才考虑扩展分析范围。
2. **按需求扩大平台范围**：边缘运行环境、Nuxt 3、组件 HTML 流式 SSR 或框架版本升级尚未纳入当前验收。选定一个目标后单独建立类型、请求隔离、CSP、SSR/hydration 和部署验证，不能沿用 Node SSR 的成功结论。
3. **公开发布准备**：若决定发布 npm 包，再确定包名、版本与兼容策略，审核 exports/peer 依赖、许可、独立消费示例以及应用侧 Kit cookie 修补的传播。当前 CI 通过不等于已有对外兼容承诺。

[性能架构决策](performance-architecture-decision.md)和[框架缓存决策](framework-reactivity-cache-decision.md)已经结束本阶段的泛化优化研究：保留完整运行时，暂不新增动态结构准备、函数身份缓存、style 节点池或逐元素 computed/$derived。真实项目若暴露明确问题，只针对那一个可证明场景按决策文档的正确性与性能门槛评估。普通 `if/else/switch` 与函数复用已经可用，recipes/variants 不是默认待办。
