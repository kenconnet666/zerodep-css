# zerodep-css：运行时 CSS 重新研究

这是一个从基础设施重新开始的本地研究分支。当前有 pnpm 工作区、五个 private 包、类型检查和 Codex 语言服务。`core` 已从固定的 `csstype` 生成 502 条属性链与 12,586 个关键字，并提供 `ic()` 片段和规则去重；Vue/Svelte 已有浏览器上下文、Node 请求宿主及 hydration 的可运行原型。**Nuxt/SvelteKit 封装和响应式绑定编译器尚未实现，试验 API 尚未定稿**。旧方案可从本地 Git 历史或另存的归档目录查询，不作为本分支实现。

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
pnpm css:generate:check
pnpm check
pnpm build
pnpm lsp:setup
pnpm lsp:verify
```

`lsp:setup` 按当前机器的 Node 与项目目录生成被忽略的 `.codex/config.toml`；信任项目并重载 Codex 后，使用 `zerodep_lsp` 的 diagnostics、hover、definitions、references 和 completions。需要验证 Codex 实际解析的项目配置时，在 PowerShell 7 运行 `pwsh -NoProfile -File scripts/language-services/setup.ps1 -Verify -SkipInstall`。Codex MCP 不可用时，可运行 `pnpm lsp:inspect <项目相对路径>`。

class 对象写法、浏览器规则注册和 Node 请求隔离已有最小可用验证。下一步仍需 Nuxt/SvelteKit 封装、响应式绑定优化和生产环境审计；当前试验 API 尚未定稿。

生成内容在 [core/src/generated](core/src/generated)，使用 `pnpm css:generate` 更新；`pnpm check` 会核对生成结果、检查五个包，并验证 Bundler/NodeNext 包类型入口。`useCss()` 由 Vue/Svelte 适配器提供，`core` 只提供作者类型与规则基础。

字符串作者写法及响应式 CSS 变量绑定的独立测量见 [研究探针](.research/string-css-probe/README.md)。
完整属性链、关键字生成与上下文生命周期的讨论稿见 [作者模型设计](.research/css-author-generation-design.md)。
下一阶段的最小可用范围与性能验收见 [实施规划](.research/next-stage-minimum-usable.md)。
当前 Vue/Svelte 工作区包的调用和手工 Node SSR 接入见 [最小用法](docs/minimum-usage.md)；两轮真实适配器的[性能记录](.research/minimum-usable-performance.md)与原始样本在 `.research/string-css-probe/`。
包类型入口、生成文件与命名整理的证据见[本轮实施记录](.research/type-layout-next-stage.md)。
运行时成本、Vue/Svelte 派生值使用边界和下一步性能选择见[性能方向复核](.research/runtime-performance-review.md)。
关键字直接字段的试验结果和取舍见[直接字段报告](.research/direct-keyword-fields-probe.md)。
直接字段可用的缓存与静态分支优化候选见[优化研究](.research/direct-field-optimization-research.md)。
