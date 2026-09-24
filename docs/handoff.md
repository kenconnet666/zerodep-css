# 换机交接

更新：2026-09-24。主线为 `codex/runtime-first`，远程仓库为 [kenconnet666/zerodep-css](https://github.com/kenconnet666/zerodep-css)。运行时 CSS 是正式能力；可选编译器只优化可证明等价的写法，不能把 `codex/static-css` 的强制静态合同带回本分支。`core`、`vue`、`svelte`、`nuxt`、`sveltekit` 五个产品包均为 private，尚未发布 npm。

## 当前状态

约定的 P1—P6 范围已完成。[`e2a2d04` 的九项远程 CI](https://github.com/kenconnet666/zerodep-css/actions/runs/35955089598)全部成功，包括 Windows/Linux、三浏览器、LSP、独立包消费和 Nuxt/SvelteKit。这个结果对应精确代码提交；本文件之后的任何产品改动仍须验证自己的提交。分阶段修复理由留在[实施记录](production.md)，当前功能和版本边界见[支持范围](support.md)。

项目的 `styles.ts` 用 `createStyles({ cssType?, theme? })` 配置作者类型与默认主题，并导出 `useCss`、`useTheme`、`provideTheme`、`useGlobalCss`、`createHost`。组件在初始化时取得 `const css = useCss()`；普通函数、`if/switch` 和真实 `Css` 继承都可运行。CSS class 字符串是调用时快照；响应式值在模板、Vue `computed` 或 Svelte `$derived` 中读取。跨模块项目 hook 保留完整运行时，尚不保证可选编译器命中。

每个浏览器应用或 SSR 请求创建自己的 host。Vue 用 `app.use(host)`；Svelte 根组件用 `host.provide()`，最终 `unmount` 后显式 `host.dispose()`。SSR 完整渲染后输出 styles/manifest，并在 `finally` 释放请求 host；客户端恢复后调用 `completeHydration()`。Nuxt/Kit 的请求接入、HMR 和 CSP 细节以各包 [Nuxt](../nuxt/README.md)、[SvelteKit](../sveltekit/README.md) README 为准。

## 新机器恢复

需要 Node 24、pnpm 10.34.5；Windows 使用 PowerShell 7。版本由 `pnpm-workspace.yaml` 与锁文件固定，不升级全局工具绕过约束。

```powershell
git clone https://github.com/kenconnet666/zerodep-css.git
cd zerodep-css
git switch codex/runtime-first
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
