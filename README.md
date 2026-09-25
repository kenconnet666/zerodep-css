# zerodep-css：运行时 CSS 重新研究

这是一个从基础设施重新开始的本地研究分支。当前只有 pnpm 工作区、五个 private 包的空入口、类型检查和 Codex 语言服务；**没有 CSS 运行时、编译器或已确定的作者 API**。旧方案可从本地 Git 历史或另存的归档目录查询，不作为本分支实现。

| 子项目      | 预留职责             |
| ----------- | -------------------- |
| `core`      | 与框架无关的作者模型 |
| `vue`       | Vue 3.5 适配         |
| `svelte`    | Svelte 5 适配        |
| `nuxt`      | Nuxt 4 适配          |
| `sveltekit` | SvelteKit 2 适配     |

使用 Node 24 和 pnpm 10.34.5。版本集中在 `pnpm-workspace.yaml`，包间通过 `workspace:*` 关联。

```powershell
pnpm install --frozen-lockfile
pnpm check
pnpm lsp:setup
pnpm lsp:verify
```

`lsp:setup` 按当前机器的 Node 与项目目录生成被忽略的 `.codex/config.toml`；信任项目并重载 Codex 后，使用 `zerodep_lsp` 的 diagnostics、hover、definitions、references 和 completions。需要验证 Codex 实际解析的项目配置时，在 PowerShell 7 运行 `pwsh -NoProfile -File scripts/language-services/setup.ps1 -Verify -SkipInstall`。Codex MCP 不可用时，可运行 `pnpm lsp:inspect <项目相对路径>`。

下一步先讨论 class 对象写法、纯字符串片段、运行时规则注册、主题和响应式边界，再决定公开 API 与实现。这里的空入口只是语言与依赖骨架，不能用于业务样式。
