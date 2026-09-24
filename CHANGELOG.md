# 变更记录

## 未发布 — 运行时优先生产基线

五包保持 private，尚未发布 npm。当前使用方式见 [迁移说明](docs/migration.md)，锁定版本和验收边界见 [支持范围](docs/support.md)。

- core 收敛为作者模型，完整运行时归入 internal/runtime 并随 Vue/Svelte 适配器交付；createStyles 统一绑定 useCss、主题、全局样式和宿主，不保留 useStyleRuntime 等同义入口。
- 同属性同上下文采用后写替换，包括前 important；简写/长属性保留原生关系，null/undefined 跳过整声明，raw 保留浏览器值语义。两重作者继承、亮暗主题与原生作用域继续支持。
- 完善全局共享租约、冲突事务、应用销毁、SSR 请求隔离、hydration 和宽松增长诊断；不增加独立响应式调度器。
- 编译优化可选，支持简短箭头与安全变量绑定；未知写法完整保留运行时。显式 debug 提供未命中原因，开发来源只包装可证明的函数，避免改变 class/数组组合语义。
- 根据测量减少值扫描、主题字符串和新 class 注册的重复解析；Vue/Svelte 分别对照原生 CSS、Emotion、goober 与编译方案，不承诺原生 CSS 性能。
- 动态 raw/token 绑定对同一个输入只规范化和判定一次，同时产出声明值与元素变量；保留独立取值方法、原生响应式和运行时回退。
- 新增 Nuxt 4 与 SvelteKit 2 薄适配包，验证 Node SSR、静态部署、nonce、错误恢复、SPA、异步子组件及 HMR；Nuxt 按实际 event 隔离宿主，防止共享 context 串用请求。
- CI 扩展为九个 job；清理过时 bx/旧 API 探针和示例，保留可复现性能原始样本，更新换机交接与诊断文档。

## 0.2.0 — 2026-09-23

- 新增独立 themes 入口的 lightTheme/darkTheme、可继续继承的 ThemeCss；暗色继承相同 token 身份，默认入口不加载预设。
- 增加明确配色对比度、全部便利成员映射、真实亮暗面板、局部覆盖、SSR/hydration、重复切换和焦点回归。
- 增加 bindings:'runtime' 编译模式，支持严格禁止 style 属性的 CSP；保留静态准备与开发诊断。
- 修复复杂循环/slot/await 中局部同名函数被开发诊断误包装的问题。
- 修复未知属性值、浏览器不支持值和 var fallback 的变量化语义；未确认值保留直接声明。
- 修复原型成员误入 CSS 元数据、错误 runtime 配置被静默接受，以及外部 nonce 修改影响已创建实例的问题。
- 绑定缓存增加字符预算；预设声明降至约 3.9 KiB 并增加体积门禁。
- 增加每框架 28 次多状态差分、931 项实际浏览器支持性检查，以及运行 ID 和旧成功摘要撤销验证。

## 0.1.0 — 2026-09-23

三个产品包的首个内部生产基线，保持 private；本次不进行公共 npm 发布。

- 移除公开 bx/Binding 和旧插件名称，统一 cssPlugin/transformCss。动态值直接写入 CSS 属性方法，保留复杂代码的运行时回退。
- 支持安全的动态单位/raw/token/模板值、同宿主嵌套和可判定 if/switch；空值与 CSS-wide 保持级联语义。
- 增加真实 Css 继承、类型化关键字扩展、根 name/config(debug) 和相对源码诊断。
- 增加冻结主题定义、预设继承、Vue/Svelte 原生主题作用域、多主题局部覆盖与 DOM 移动支持。
- 增加数值快路径、有界值校验/编译缓存、静态准备和注册命中快路径；保留顺序、资源依赖、事务和 SSR 所有权。
- 修复 props 提升、隐藏行求值、词法遮蔽、局部捕获、重复表达式映射和跨宿主选择器绑定。
- 编译器迁入严格 TypeScript，声明由实现生成；测试与工具目录按职责整理，旧方案文档归档。
- 完整 CI 覆盖 Windows/Linux、LSP、三种浏览器引擎、SSR/HMR、独立安装、生成一致性、产物完整性和体积预算。

从内部 0.0.0 基线迁移：删除 bx 包装与导入，改用 cssPlugin；服务端和客户端一起重新构建。脚本 const 仍是快照，动态场景使用模板、computed 或 $derived。详细边界见 [docs/support.md](docs/support.md)。
