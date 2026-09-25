# zerodep-css 研究工作区

- 当前只有五包 pnpm 基础配置与 Codex LSP。空入口不是已实现的运行时 CSS API；讨论并决定 class 作者写法后再增加产品代码。
- `core` 保持框架无关；`vue`、`svelte`、`nuxt`、`sveltekit` 各自负责未来适配。五包保持 private，包间使用 `workspace:*`。
- 使用 Node 24、pnpm 10.34.5 和工作区固定依赖；不要升级全局工具。修改基础配置后运行 `pnpm check`，修改 LSP 桥后运行 `pnpm lsp:verify`。
- `.codex/config.toml` 由 `pnpm lsp:setup` 按本机路径生成且不入 Git。不修改用户全局 Codex 配置，也不结束其他项目的进程。
- 旧实现只作为本地 Git 历史和 `zerodep-css-归档` 中的参考。保持归档目录只读，不把旧 API、测试或性能结论当作新分支功能。
- 只在本地分阶段用中文提交；在用户另行要求前，不配置或推送远程仓库。
