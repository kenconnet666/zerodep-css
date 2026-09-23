# 当前交接与换机恢复

## 2026-09-23 换机交接状态

用户要求尽快推送，并明确停止剩余测试和优化。此交接提交保存当前整理与已完成的性能对照，不宣称最终汇总状态已重新通过完整 CI；推送后由接续者核对对应提交的工作流。

- 已完成 API 收敛提交 `5f87b49`：useStyleRuntime 只保留选项对象，作者类型统一 Css；theme-runtime 改为 style-scope，内部函数同步改名，不留旧子路径别名。
- 现行说明从 .design 迁到 docs，移除 13 份旧计划/重复审计，历史内容在 `8a09c05` 的 .design 下。生成覆盖报告仅移动，内容 hash 相同；格式忽略、生成脚本、文档引用和 AGENTS 已更新。新增本地文档链接检查。
- 本轮 API 整理已实际通过 check/build、111 项快速测试、三语言类型负例、框架浏览器/SSR/HMR、独立消费者、生成一致性、体积门禁；新增文档链接测试也单独通过。style-scope 的 LSP 返回 complete=true、errors=0，修改的 Svelte 夹具通过官方检查器。
- 随后新增了 YAML 开发依赖和 benchmark catalog，并完成 Vue/Svelte 各自的 Emotion/goober/vanilla-extract 对照。最终这些配置与文档合并后的全套 check/build/test **尚未重跑**，按用户要求直接交接。YAML 只是开发工具依赖；锁文件同时更新了 Vite 的可选 yaml peer 身份，没有升级 Vue/Svelte/Vite 版本。
- 性能原始样本、对照版本、编译路径和依赖锁已提交到 `.research/performance/results/2026-09-23-*`，汇总见 [性能对照](performance.md)。它们可以随 Git 换机，不需要复制 test-results。

## 留给接续者的工作

1. 拉取该分支，先核对最新提交 CI；未通过则按日志处理。需要本地复验时按下面的构建步骤执行，不把旧 CI 成功当作当前状态成功。
2. 性能尚未整体追平原生 CSS。自动变量路径接近原生变量，普通运行时仍慢于 Emotion/goober；ThemeCss 回退的重复主题构建和约 100 KB gzip 的完整运行时仍是突出问题。详见性能文档，当前没有继续改实现。
3. 对照脚本使用真实 SFC、生产构建、200 元素、30 批更新、5 轮中位数，Vue/Svelte 分开测量；仅当前 Chrome，未测网络首屏、真实绘制、复杂业务和长期无限唯一值。复跑使用 `pnpm research:compare`，它会在临时目录安装固定对照依赖。
4. 旧机器本轮调试留有 `%TEMP%/zerodep-bench-HhK6XT`（初始化失败）和 `%TEMP%/zerodep-bench-3CrKUv`（prepare-only 产物）。一次递归清理命令被自动审批审查拒绝，工具仅报告 blocked by policy；用户随后要求停止收尾之外的工作，未再清理。这些目录不提交、不影响换机，删除前核对归属。正常完成的对照运行已自动清理自己的临时目录。

本机忽略目录中的报告和生成的 .codex/config.toml 不会随 Git 推送；需要保留的性能证据已单独归档，语言服务配置在新机器重建。

本项目为 core/vue/svelte 三包的混合 CSS 框架，保留运行时与复杂场景回退。当前 API 见各包 README，支持范围与实际验证见 [support](support.md)、[validation](validation.md)。目录与 API 已收敛，换机时先核对 [migration](migration.md)，不要沿用旧位置参数或旧模块名。

## 取得工作区

仓库：`https://github.com/kenconnet666/zerodep-css.git`。本轮工作在 `feat/native-reactivity`；换机后明确检出该分支，再核对远端 CI 与提交。不要仅凭默认分支或旧交接中的提交号判断状态。

```powershell
git clone https://github.com/kenconnet666/zerodep-css.git
cd zerodep-css
git switch feat/native-reactivity
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm lsp:setup
```

环境使用 Node 24、pnpm 10.34.5、PowerShell 7。不升级全局工具来绕过版本约束。产品代码、测试入口和源码诊断均不依赖原机器的绝对目录。

## 语言服务

`.codex/config.toml` 被忽略，由 `pnpm lsp:setup` 按当前机器重建；必要时重启 Codex 以加载项目 MCP。不要复制旧配置中的本机路径或修改全局 Codex 配置。

优先使用 zerodep_lsp 的诊断、hover、definitions、references、completions；会话没有该 MCP 或连接关闭时使用 `pnpm lsp:inspect <项目相对文件路径...>`。必须检查 complete=true，超时不代表无错误。桥或依赖变化后执行 `pnpm lsp:verify`；完整语义验收也由 CI 执行。

## 当前主要入口

- core：css/createRuntime/createStyleContext、Css 类与 extendProperty、defineTheme/readTheme、全局样式与动画资源。
- Vue/Svelte：useStyleRuntime、useGlobalCss、provideStyleContext、provideTheme/useTheme；Vue 应用入口另有 installStyleContext。
- 编译器：适配器的 `/compiler` 子路径提供 cssPlugin/transformCss。内部生成代码入口不作为业务作者 API。
- 预设：三个包的 `/themes` 子路径提供 lightTheme/darkTheme/ThemeCss；严格 CSP 可用 cssPlugin({ bindings: 'runtime' })。
- `s.name(...).config({ debug })` 提供根命名和相对源码诊断；配置中的 target/nonce/layers 属于 runtime 宿主。

主题和动态样式放在模板、computed 或 $derived 中；普通 const 字符串保留调用时快照。主题视图返回可用于 class 属性的类名列表。模板编译只在可证明正确的作用域提升值，其他代码保留运行时语义；具体边界见 [编译说明](compiler.md)。

## 构建与交付

本地执行类型、构建与改动对应的关键测试。完整生成一致性、LSP/负例、三引擎浏览器、SSR/HMR、独立 tarball 和体积回归由 GitHub Actions 执行。各 CI job 构建一次，后续传 --no-build。

打包使用仓库内的 pnpm pack。beforePacking hook 在 tarball 中移除仅供本地使用的源码条件，不修改工作区清单；JS 地图内嵌源码，声明直接定位已发布的 d.ts。测试夹具、研究探针和机器配置不进入 dist。

所有者负责 context/runtime.dispose。组件只释放自己的全局槽位与订阅；不要清理共享浏览器缓存、其他项目进程或非本轮容器。主题定义不持有请求状态，SSR 每请求创建独立上下文，客户端恢复后调用 completeHydration。

三个包仍保持 private，不自动公开发布或变更许可证。旧交接和审查可从 Git 历史恢复；当前维护先读本页、architecture、compiler 和 validation。
