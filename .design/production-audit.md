# 生产验收审查

此页将用户目标映射到实际实现和验收证据。不是以 CI 绿灯代替审查；最终提交仍需完整 CI 成功。包继续保持 private，本轮不自动公开发布或选择项目许可证。当前 SSR 合同是完整字符串收集与恢复，不将流式 SSR 和专用元框架插件列为已实现能力。

## 要求与证据

| 要求                                | 实现与证据                                                                                                               | 当前判断                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| 无公开 bx，普通值自动绑定           | core values/生成类型已移除宏；compiler 只有 cssPlugin/transformCss；automatic 编译测试、真实 AutomaticStyles 与 HMR 测试 | 已实现；最终 CI 复核                                        |
| 保留结构/复杂运行时行为             | automatic 分析不确定时不改源码；条件/局部写入/调用/脚本快照/派生类负例；BoundStyles 真实运行时回归                       | 已实现；不以变量优化改变原生求值边界                        |
| 静态系统 token、安全 if/switch 优化 | automatic、prepareStyle、runtime 的 256 项计算缓存；prepared/result-cache 单测和性能探针                                 | 已实现；首次仍完整校验，驱逐后允许重新计算                  |
| 类型化 CSS 扩展与真实继承           | Css 类、extendProperty、core types/css/theme 和 unit/css/theme，独立消费者派生类型                                       | 已实现；保留 super/私有字段/生命周期                        |
| 主题预设与向下覆盖                  | defineTheme/extend/resolve；Vue computed、Svelte rune provider；ThemeApp/Branch/Leaf                                     | 已实现；覆盖重置、兄弟隔离、多主题、DOM 移动、SSR/hydration |
| name/config 与诊断                  | style-metadata、manifest v2 兼容 v1、相对来源与 32 项来源上限；metadata 单测、编译映射测试                               | 已实现；config 当前只有 debug                               |
| 性能与有界缓存                      | 数值快路径、128 项字符串校验缓存、256 项计算缓存、注册命中快路径；可复现 Node 探针                                       | 已实现；DOM 仍验证所有权，规则由 runtime 持有至 dispose     |
| 声明顺序、全局与资源事务            | runtime/serializer 单测；三引擎 CSSOM、nonce、ShadowRoot、全局顺序、注册冲突与回滚                                       | 已覆盖支持范围                                              |
| 安装、地图与迁移                    | tarball 独立消费者、全部导出目标检查、内嵌 JS 源码、无失效声明地图；本地 LSP 保留源码条件                                | 已实现且独立 CI 通过                                        |
| 完整浏览器与语言门禁                | 94202c3 / CI 35761324299 的 Chromium、Firefox、WebKit、Windows/Linux、LSP、消费者全部成功                                | 当前完整基线，后续修改必须重新验收                          |
| 最终目录/文档/交接                  | 当前 API 与旧研究逐步分离；还需更新 architecture、handoff 和历史页提示                                                   | 未完成                                                      |

## 缺陷复核

旧审查 R1–R6 的原始记录保留在 phase4-audit.md。R1 props 来源由 Vue binding metadata 解析；R2 列表只在原模板使用点求值；R3/R5 保留词法身份或直接回退；R4 空值/CSS-wide 保留直接声明语义；R6 按生成片段保存独立映射。相应核心边界保留在 automatic/transform 测试与真实组件，而不是继续测试已删除的宏 API。

本轮新增 R7：任意 selector 内的动态值不能一律绑定到宿主。兄弟和祖先拿不到宿主变量，后代又可能被嵌套实例的同名变量遮蔽。当前修复收紧为可证明的同宿主路径；其他目标保留运行时，并增加兄弟宽度真实组件回归。修复尚须新提交三引擎 CI 确认。

## 性能与生命周期合同

普通 CSS 回调每次调用都执行，缓存只跳过重复编译；被编译器证明稳定的准备样式才会跳过回调。自动绑定的普通标量变化复用 class，空值/CSS-wide 切换有限声明形态。复杂运行时、主题有效值和资源变化仍可能产生新的内容类，不能把这些记录按 LRU 删除，因为其他 DOM 或已保存字符串可能继续引用它们。应用可设置 maxRecords，宿主最终 dispose；这与有界计算缓存是不同责任。

const 字符串是调用时快照，动态样式和动态主题应放在模板、computed 或 $derived 中。框架 provider 只作用于逻辑组件作用域，不把局部变量写入全局 :root，也不接管共享 context 的销毁。
