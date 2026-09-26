# zerodep-css：运行时 CSS 重新研究

这是运行时 CSS 工作区，包含五个 private 包、类型检查和 Codex 语言服务。`core` 从固定的 `csstype` 生成 502 条属性链与 12,586 个关键字，提供单位 / 颜色 / 数学方法、`s._hover` / `s._selector` 选择器、类组合、动画及命名全局块。Vue/Svelte 提供上下文、Node 请求宿主、hydration 和可选显式 bx 绑定；Nuxt 4 / SvelteKit 2 接入标准 Node SSR、客户端恢复和预渲染。**流式 SSR、边缘部署尚未验收，包尚未公开发布**。旧方案可从本地 Git 历史或另存归档查询，不作为本分支实现。

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

class 对象写法、浏览器注册、Node 请求隔离及元框架接入已有验证。[包入口说明](docs/package-exports.md)与[Nuxt/SvelteKit 接入](docs/metaframeworks.md)记录当前使用方法和支持边界。

生成内容在 [core/src/generated](core/src/generated)，使用 `pnpm css:generate` 更新；`pnpm check` 会核对生成结果、检查五个包，并验证 Bundler/NodeNext 包类型入口。`useCss()` 由 Vue/Svelte 适配器提供，`core` 只提供作者类型与规则基础。

字符串作者写法及响应式 CSS 变量绑定的独立测量见 [研究探针](.research/string-css-probe/README.md)。
完整属性链、关键字生成与上下文生命周期的讨论稿见 [作者模型设计](.research/css-author-generation-design.md)。
已完成阶段的最小可用范围与性能验收见 [实施规划](.research/next-stage-minimum-usable.md)。
框架用法阶段的依据与实施边界见[组件性能复测与规划](.research/framework-performance-next-stage.md)。
已落实的 Vue/Svelte 组件与主题边界示例见[可执行用法](docs/framework-examples.md)。
当前 Vue/Svelte 工作区包的调用和手工 Node SSR 接入见 [最小用法](docs/minimum-usage.md)；两轮真实适配器的[性能记录](.research/minimum-usable-performance.md)与原始样本在 `.research/string-css-probe/`。
包类型入口、生成文件与命名整理的证据见[本轮实施记录](.research/type-layout-next-stage.md)。
运行时成本、Vue/Svelte 派生值使用边界和下一步性能选择见[性能方向复核](.research/runtime-performance-review.md)。
关键字直接字段的试验结果和取舍见[直接字段报告](.research/direct-keyword-fields-probe.md)。
直接字段可用的缓存与静态分支优化候选见[优化研究](.research/direct-field-optimization-research.md)。
运行时同步快路径、Worker 与 SIMD 的实测取舍见[并行与 SIMD 研究](.research/runtime-parallel-simd-research.md)。
Vue/Svelte 的纯派生类选择、元素变量绑定与上下文边界见[框架结合研究](.research/vue-svelte-runtime-integration.md)。
Emotion 源码对照、可复现缺口和下一阶段取舍见[运行时库审查](.research/runtime-library-tradeoffs.md)。
新增作者方法见[作者 API](docs/author-api.md)，框架插件、显式变量绑定写法、SSR/CSP 和回退边界见[bx 绑定](docs/bindings.md)。[阶段计划](.research/next-phase-authoring-and-bindings.md)保留本轮决策依据。
本阶段交付内容和 Vue/Svelte 对照 Emotion、手工变量的测量见[实施与性能记录](.research/author-bindings-delivery.md)。

可选亮暗预设、两层继承和子树主题覆盖见[主题用法](docs/themes.md)。

最新[稳定性与主题交付记录](.research/stability-and-theme-delivery.md)包含远程 CI 的 HMR、挂卸、200 / 1,000 项性能数据和实际资源保留边界；使用时参考[生命周期与诊断](docs/lifecycle-and-diagnostics.md)。

属性名前缀与关键字分离的最新体积对照见[研究报告](.research/keyword-prefix-research.md)。这是候选表示研究，正式实现仍保持当前直接字段模型。

作者类型以可读性为先：使用非泛型基类、明确的方法签名和普通 readonly 字段，见[类型结构](docs/author-types.md)。

Vue 模板可直接使用 `:class="css(...)"`：插件通过 Vue AST 扩展自动缓存普通元素和 v-for 的样式计算，同时保留显式 bx CSS 变量绑定。支持范围与运行时回退见[模板自动缓存](docs/bindings.md#模板直接调用与自动缓存)。

Svelte 直接使用模板派生；bx 变量绑定支持 each、模板 const、await 分支和组件内 snippet，并区分每次 snippet 调用的变量值。
