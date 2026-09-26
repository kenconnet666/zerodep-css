# zerodep-css：运行时 CSS

这是运行时 CSS 工作区，包含五个 private 包、类型检查和 Codex 语言服务。`core` 从固定的 `csstype` 生成 502 条属性链与 12,586 个关键字，提供单位 / 颜色 / 数学方法、`s._hover` / `s._selector` 选择器、类组合、动画及命名全局块。Vue/Svelte 提供上下文、Node 请求宿主、hydration 和可选显式 bx 绑定；Nuxt 4 / SvelteKit 2 接入标准 Node SSR、客户端恢复和预渲染。**流式 SSR、边缘部署尚未验收，包尚未公开发布**。旧方案可从本地 Git 历史或另存归档查询，不作为本分支实现。

| 子项目      | 职责                 |
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

class 对象写法、浏览器注册、Node 请求隔离及元框架接入已有验证。[包入口说明](docs/package-exports.md)与[Nuxt/SvelteKit 接入](docs/metaframeworks.md)记录当前使用方法和支持边界。

生成内容在 [core/src/generated](core/src/generated)，使用 `pnpm css:generate` 更新；`pnpm check` 会核对生成结果、检查五个包，并验证 Bundler/NodeNext 包类型入口。`useCss()` 由 Vue/Svelte 适配器提供，`core` 只提供作者类型与规则基础。

## 使用文档

- [开始使用](docs/getting-started.md)：Vue/Svelte 组件、上下文与手工 SSR。
- [作者 API](docs/author-api.md)：声明组合、选择器、动画、全局规则和单位/颜色方法。
- [bx 绑定](docs/bindings.md)：显式变量、模板缓存、列表、派生值与支持边界。
- [主题](docs/themes.md)：系统/预设/用户继承，亮暗切换和子树覆盖。
- [类型设计](docs/author-types.md)：直观字段、方法签名与生成器。
- [元框架](docs/metaframeworks.md)：Nuxt 4 / SvelteKit 2 的 Node SSR、静态部署和 CSP。
- [生命周期与诊断](docs/lifecycle-and-diagnostics.md)：清理、HMR、统计与资源边界。
- [执行记录](docs/production-progress.md)：阶段状态及精确提交的远程验收结果。

## 工程目录

五包源代码各自位于包内 src；core/src/generated 只通过生成器更新。共享编译器按转换、模板缓存分析、源码编辑分在 core/src/compiler。正式浏览器验收在 test/browser，共享组件夹具、测试工具与性能对照在 [test/tools](test/tools/README.md)。

.research 仅保留历史决策与测量解释，原始样本位于 test/tools/results；历史文本中的旧 API 和旧性能结论不代表当前版本。已失效的阶段计划和单宿主实现从工作树删除，Git 历史仍可查阅。

本地运行改动相关的焦点检查。CI 并行执行基础检查、单元测试、三浏览器、Vue/Svelte 生命周期、Nuxt/Kit 及性能对照；提交推送后继续工作，在下一次提交前检查上次结果。
