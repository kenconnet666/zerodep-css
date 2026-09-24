# 实施路线

已拍板合同见 [runtime-first](runtime-first.md)，具体进度和证据见 [production](production.md)。当前持续实施目标尚未全部完成；以下按工作顺序推进。

1. **P1 作者语义**：同上下文同名属性后写替换、原生简写关系、raw 结构边界、空值省略和主题继承，已完成基础验证。
2. **P2 API 与包边界**：已完成 createStyles/useCss/createHost、统一组合、旧同义入口移除与独立消费。完整引擎归位 `internal/runtime`，构建时复制到 Vue/Svelte 的包内私有 `dist/runtime`；core 保留作者模型及共享宿主仲裁。
3. **P3 生命周期与诊断**：已完成同 key 同内容共享、请求/应用边界、失败恢复和宽松增长诊断；保持 native computed/runes 的所有权，不叠加第二套响应式系统。
4. **P4 等价优化与性能**：已完成新 API 下 Vue/Svelte 横向测量、变量结构/主题缓存键优化、简短回调/单位计划复用和新 class 解析复用。持续优化以热点和等价性证据为准；跨模块及复杂控制流能正确回退，不作为强制编译门槛。
5. **P5 元框架**：两个适配包已完成本地独立 Node SSR、hydration、导航、HMR 与静态部署验收；远程结果以阶段提交为准。Nuxt 单根全局 HMR 交接与 Kit cookie 修补见各包 README。边缘运行环境、Nuxt 3 和组件 HTML 流式 SSR 后续单独验收。
6. **P6 收敛交付**：五包独立消费、三引擎和双平台、依赖/类型/目录/文档审计、性能及资源增长复核；问题修复后更新交接和远程 CI 证据。

运行时 if/else/switch 与普通函数复用始终是作者能力，recipes/variants 不是默认目标。可选优化无法证明等价时保留合法运行时，不能退回强制静态或强制编译器路线。所有版本保持 private，公开发布另行决定。
