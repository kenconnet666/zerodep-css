# 验证与性能证据

当前实现合同见 [support](support.md)，使用方式见各包 README；这里集中验收入口和可复现证据，不重复记录已完成任务的执行过程。

当前交付状态、实际已验证范围与换机恢复方式见 [换机交接](handoff.md)。Vue/Svelte 与其他样式引擎的测量集中在 [性能对照](performance.md)。

## 验证入口

| 范围                                                   | 命令或证据                                         |
| ------------------------------------------------------ | -------------------------------------------------- |
| TS/Vue/Svelte 与编译器类型                             | `pnpm check`、`pnpm lsp:verify`、`pnpm test:types` |
| 产品与编译器单元                                       | `pnpm test:unit`                                   |
| CSSOM、资源、顺序、CSP、ShadowRoot、事务和 SSR         | `pnpm test:browser:runtime`                        |
| 原生响应式、主题、派生类、自动绑定、SSR/hydration、HMR | `pnpm test:browser:frameworks`                     |
| 独立 tarball、官方插件、导出、声明、地图与生产依赖审计 | `pnpm test:consumer`                               |
| Nuxt 独立消费、Node SSR、开发 HMR、可选插件与静态部署  | `pnpm test:nuxt`                                   |
| Kit 独立消费、Node SSR、异步 hydration、HMR 与静态部署 | `pnpm test:sveltekit`                              |
| 生成一致性与体积                                       | `pnpm generate:check`、`pnpm size:check`           |

CI 在 Windows/Linux 执行基础检查，并分别运行 Chromium、Firefox、WebKit。每个 job 只 build 一次，后续使用 --no-build。本地浏览器默认使用已安装 Chrome；本地通过不能代替其他引擎成功。实际运行状态以目标提交的 Actions 记录为准。

浏览器报告带运行 ID，启动新一轮会撤销旧成功摘要；失败保留截图、trace 与日志。证据链自检刻意制造失败，其 verification.json 必须通过。独立消费者成功后清理自己的临时目录，锁文件和报告留在忽略的 test-results。

Nuxt/Kit 的夹具源码位于各包 test/fixture，运行时复制到仓库外的隔离消费者。校验应用与适配器解析到同一份框架及 core，再运行官方类型检查、生产审计和部署构建。Kit 的 cookie 传递依赖使用根 workspace 中的有界安全修补，并验证合法序列化及非法参数拒绝。Nuxt 的 `--resume <临时目录>`（可加 `--hmr`）仅用于诊断，不重新安装产品包；报告中的 diagnosticResume=true 不能代替默认完整流程的 cleanFullPass。

## 提交与验收记录

[`e2a2d04` 的完整远程 CI](https://github.com/kenconnet666/zerodep-css/actions/runs/35955089598)是运行时优先方案合入主分支前的验收基线，九个 job 全部成功，覆盖 Windows/Linux、Chromium/Firefox/WebKit、三语言/LSP、独立安装及 Nuxt/Kit。此前动态绑定优化本地通过根 check/build、219 项单元、三语言类型负例、运行时与 Vue/Svelte 浏览器回归及体积门禁；`e2a2d04` 又补充了真实组件的 Vue/Svelte 无关更新计数断言。各阶段提交、修复和当时的验收状态见[实施记录](production.md)及 Git 历史；此后产品改动须查看对应提交的 Actions，不能沿用这次成功摘要。

单声明响应式规则提升在本地通过根 `pnpm check`、`pnpm build`、224 项快速单元、三语言类型负例、Chrome 的 Vue/Svelte SSR/hydration/HMR 与运行时 CSSOM 回归、独立 tarball 消费、Nuxt/Kit Node 与静态部署、体积门禁及修改文件的 LSP 完整诊断。浏览器性能的同机交替原始样本见[性能记录](performance.md)；其余 CI 平台和浏览器必须以本次产品提交的 Actions 状态为准。

## 性能探针

运行前先 pnpm build；脚本读取 dist，不把源码与旧产物混测。

- `pnpm research:compare` 分别执行 Vue/Svelte 与原生、Emotion、goober、vanilla-extract、UnoCSS 的真实组件对照，保留编译命中与规则数量证据。
- `.research/performance/browser-native.mjs` 是不含框架调度的纯 DOM 对照，不能与组件更新总耗时混算。
- `.research/performance/profile-runtime.mjs <label>` 仅定位 Node 计算热点，采样开销不作页面速度结论。
- `.research/performance/cache-paired.mjs <baseline> <label> [--control]` 隔离构建两个版本，并交替计时、验证完整输出与工厂次数。基线必须采用 internal/runtime 之后的同 API 版本。
- `.research/performance/binding-paired.mjs <baseline> <label> [--control]` 专测同输入的声明/内联绑定计算；`binding-browser.mjs` 与 `style-node-cost.mjs` 分别是隔离 DOM 变量写入和规则节点成本探针。范围与原始样本见[绑定优化探测](../.research/performance/results/2026-09-24-binding-optimization/README.md)。

当前数据与范围以[性能对照](performance.md)为准。旧主题算法、预热和编译优先实验只从 Git 历史查询；当前工作树仅保留运行时主线的原始样本。旧脚本不再代表当前 API，也不能将不同基准数字拼成页面提速。
