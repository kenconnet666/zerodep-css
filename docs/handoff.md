# 换机交接

## 2026-09-24 扁平写入器研究入口

纯运行时扁平写入试验在远程分支 `codex/runtime-single-writer`、提交 `89a61de`，**未合入 master**。Node 重复值配对计时有明显改善，但跨框架浏览器只完成一轮且 Vue 同轮原生/Emotion 对照漂移，尚不能决定采纳。试验代码、已通过/待运行的检查、原始样本和换机继续命令见[分支交接](https://github.com/kenconnet666/zerodep-css/blob/89a61de/.research/performance/results/2026-09-24-flat-writer-experiment/README.md)。新机器先 `git fetch origin`，再 `git switch codex/runtime-single-writer` 继续；不要将试验结果写成主分支能力。

更新：2026-09-24。主分支为 `master`，远程仓库为 [kenconnet666/zerodep-css](https://github.com/kenconnet666/zerodep-css)。运行时 CSS 是正式能力；可选编译器只优化可证明等价的写法，不能把 `codex/static-css` 的强制静态合同带回主分支。`core`、`vue`、`svelte`、`nuxt`、`sveltekit` 五个产品包均为 private，尚未发布 npm。

## 当前状态

约定的 P1—P6 范围已完成。[`e2a2d04` 的九项远程 CI](https://github.com/kenconnet666/zerodep-css/actions/runs/35955089598)是原实施阶段的成功验收基线，包括 Windows/Linux、三浏览器、LSP、独立包消费和 Nuxt/SvelteKit。后续产品改动仍须查看对应提交的 Actions，不能沿用旧成功结果。分阶段修复理由留在[实施记录](production.md)，当前功能和版本边界见[支持范围](support.md)。

项目的 `styles.ts` 用 `createStyles({ cssType?, theme? })` 配置作者类型与默认主题，并导出 `useCss`、`useTheme`、`provideTheme`、`useGlobalCss`、`createHost`。组件在初始化时取得 `const css = useCss()`；普通函数、`if/switch` 和真实 `Css` 继承都可运行。CSS class 字符串是调用时快照；响应式值在模板、Vue `computed` 或 Svelte `$derived` 中读取。跨模块项目 hook 保留完整运行时，尚不保证可选编译器命中。

可选编译器在同 SFC 直接模板调用中，对能证明固定结构的单条动态单位/raw/token 声明提升固定 class；Vue 组件使用 `computed`，Svelte 组件或 keyed each 行使用原生派生值写元素变量。值为空或无法安全变量化时保留直接声明与运行时 class 切换。Vue 列表行仍受 `renderList` 的父组件更新影响；完整边界见[编译器](compiler.md)，同机原始样本见[性能记录](performance.md)。

每个浏览器应用或 SSR 请求创建自己的 host。Vue 用 `app.use(host)`；Svelte 根组件用 `host.provide()`，最终 `unmount` 后显式 `host.dispose()`。SSR 完整渲染后输出 styles/manifest，并在 `finally` 释放请求 host；客户端恢复后调用 `completeHydration()`。Nuxt/Kit 的请求接入、HMR 和 CSP 细节以各包 [Nuxt](../nuxt/README.md)、[SvelteKit](../sveltekit/README.md) README 为准。

## 新机器恢复

需要 Node 24、pnpm 10.34.5；Windows 使用 PowerShell 7。版本由 `pnpm-workspace.yaml` 与锁文件固定，不升级全局工具绕过约束。

```powershell
git clone https://github.com/kenconnet666/zerodep-css.git
cd zerodep-css
git switch master
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm test:unit --no-build
pnpm lsp:setup
```

`.codex/config.toml` 由 `lsp:setup` 在本机生成且不进 Git；移动工作目录后重跑即可。已打开的桌面任务可能需要重载 MCP。先检查 `git status`、HEAD 和对应 CI，再继续修改；保留新机器已有改动。`zerodep_lsp` 不可用时，用 `pnpm lsp:inspect <项目相对路径...>`；未完成诊断或超时不能视为无错误。

## 继续工作的边界

- 支持矩阵目前锁定 Vue 3.5、Svelte 5、Nuxt 4、Kit 2 的 Node SSR 和静态部署；Nuxt 3、边缘运行环境与组件 HTML 流式 SSR 另行验收。Kit 2.70.3 的 cookie 修补需要消费应用采用包 README 的有界 override，不能假设本工作区配置自动传播。
- 全局样式使用稳定 key。多个 owner 共享同内容时不能同时改值；组件释放自身全局槽位和订阅，不 dispose 应用共享 host。Nuxt 根全局 HMR 按包 README 显式交接。
- [性能证据](performance.md)没有证明整体已追平原生 CSS。当前[性能架构](performance-architecture-decision.md)与[框架缓存](framework-reactivity-cache-decision.md)决策均不增加泛化快路径；真实应用试用和后续可选任务见[路线图](roadmap.md)。

验证命令、最新运行状态与原始样本入口集中在[验证记录](validation.md)。历史实验可从 Git 查询；`.research` 当前只保留可运行探针和运行时主线样本，忽略的 `test-results` 不需要换机复制。
