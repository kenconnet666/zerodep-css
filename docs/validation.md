# 验证与性能证据

当前实现合同见 [support](support.md)，使用方式见三个包 README；这里集中验收入口和可复现证据，不重复记录已完成任务的执行过程。

最新停止点、实际已验证范围与尚未重跑的最终汇总状态见 [换机交接](handoff.md)。Vue/Svelte 与其他样式引擎的测量集中在 [性能对照](performance.md)。

## 验证入口

| 范围                                                   | 命令或证据                                         |
| ------------------------------------------------------ | -------------------------------------------------- |
| TS/Vue/Svelte 与编译器类型                             | `pnpm check`、`pnpm lsp:verify`、`pnpm test:types` |
| 产品与编译器单元                                       | `pnpm test:unit`                                   |
| CSSOM、资源、顺序、CSP、ShadowRoot、事务和 SSR         | `pnpm test:browser:runtime`                        |
| 原生响应式、主题、派生类、自动绑定、SSR/hydration、HMR | `pnpm test:browser:frameworks`                     |
| 独立 tarball、官方插件、导出、声明、地图与生产依赖审计 | `pnpm test:consumer`                               |
| 生成一致性与体积                                       | `pnpm generate:check`、`pnpm size:check`           |

CI 在 Windows/Linux 执行基础检查，并分别运行 Chromium、Firefox、WebKit。每个 job 只 build 一次，后续使用 --no-build。本地浏览器默认使用已安装 Chrome；本地通过不能代替其他引擎成功。实际运行状态以目标提交的 Actions 记录为准。

浏览器报告带运行 ID，启动新一轮会撤销旧成功摘要；失败保留截图、trace 与日志。证据链自检刻意制造失败，其 verification.json 必须通过。独立消费者成功后清理自己的临时目录，锁文件和报告留在忽略的 test-results。

## 已通过的历史基线

| 提交                                                                            | 验收范围                                                                |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [0025950](https://github.com/kenconnet666/zerodep-css/actions/runs/35780244572) | 0.2 亮暗预设与完整七个 CI job                                           |
| [312099a](https://github.com/kenconnet666/zerodep-css/actions/runs/35787137310) | 主题读取、配置校验、编译副作用修复                                      |
| [8a09c05](https://github.com/kenconnet666/zerodep-css/actions/runs/35791166663) | 作者类选择、两重继承、主题一致性、解析优化与类型约束；七个 job 全部通过 |

基线不表示后续提交自动通过。当前整理涉及导出、类型、模块和文档路径，须重新运行对应检查和完整 CI。

## 性能探针

运行前先 pnpm build；脚本读取 dist，不把源码与旧产物混测。

- `pnpm research:compare` 分别执行 Vue/Svelte 与原生、Emotion、goober、vanilla-extract、UnoCSS 的真实组件对照，保留编译命中与规则数量证据。
- `.research/performance/browser-native.mjs` 是不含框架调度的纯 DOM 对照，不能与组件更新总耗时混算。
- `.research/performance/profile-runtime.mjs <label>` 仅定位 Node 计算热点，采样开销不作页面速度结论。
- `.research/performance/cache-paired.mjs <baseline> <label> [--control]` 隔离构建两个版本，并交替计时、验证完整输出与工厂次数。基线必须采用 internal/runtime 之后的同 API 版本。

当前数据与范围以[性能对照](performance.md)为准。旧主题算法、预热和编译优先实验保留在 Git 历史与研究原始样本中；旧脚本不再代表当前 API，也不能将不同基准数字拼成页面提速。
