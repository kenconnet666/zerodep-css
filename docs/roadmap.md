# 后续路线

当前 [支持范围](support.md)内的 P1—P6 功能与九项远程验收已完成。运行时 CSS、五包入口和锁定版本的 Node SSR/静态部署未发现已知阻断项；五个包仍为 private。单声明响应式规则提升已经覆盖同 SFC 可证明的单位、raw/token 与 keyed 列表，范围和测量见[编译器](compiler.md)、[性能记录](performance.md)。其余优化方向需要在本阶段验收后再讨论。

1. **真实项目试用与反馈**：在一个 Vue 或 Svelte 应用按推荐的跨模块 `styles.ts` 接入，并覆盖主题切换、动态值、条件样式、全局样式、SSR/hydration、导航和卸载。记录作者回调次数、CSS 记录增长与实际更新耗时。跨模块 hook 当前可以完整运行，但通常不命中同 SFC 编译优化；只有真实瓶颈和等价性证据充分时，才考虑扩展分析范围。
2. **按需求扩大平台范围**：边缘运行环境、Nuxt 3、组件 HTML 流式 SSR 或框架版本升级尚未纳入当前验收。选定一个目标后单独建立类型、请求隔离、CSP、SSR/hydration 和部署验证，不能沿用 Node SSR 的成功结论。
3. **公开发布准备**：若决定发布 npm 包，再确定包名、版本与兼容策略，审核 exports/peer 依赖、许可、独立消费示例以及应用侧 Kit cookie 修补的传播。当前 CI 通过不等于已有对外兼容承诺。

[性能架构决策](performance-architecture-decision.md)和[框架缓存决策](framework-reactivity-cache-decision.md)记录的是原阶段对**通用**快路径的取舍；单声明提升不改变任意回调的运行时能力。下一轮可分别讨论跨模块项目 hook 的编译证明、Vue 大列表的逐行更新成本和纯运行时直接序列化；先测量真实工作负载，再选择其中一个方向。普通 `if/else/switch` 与函数复用已经可用，recipes/variants 不是默认待办。
