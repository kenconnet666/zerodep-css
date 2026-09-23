# 交接与换机恢复

当前主线是 codex/runtime-first，基于完整运行时基线 2db10e3。用户已授权目标模式持续实施至约定生产范围可用；不要把旧的“停止剩余工作”记录当成当前指令，也不能把 codex/static-css 的强制静态限制带回本分支。

## 先读这些记录

- [已拍板合同](runtime-first.md)：运行时 CSS 是正式能力；编译、变量绑定和缓存只做等价优化。Vue 3.5/Svelte 5、Nuxt 4/SvelteKit 2、Node SSR 与静态部署是首版目标。
- [阶段、提交和实际验证](production.md)：P1 已完成基础阶段；P2e 引擎归位、构建、独立消费和本地回归已通过；对应提交的远程 CI 仍须确认。后续 P3–P6 尚须继续，不宣称目标已经全部完成。
- [当前公开 API 迁移](migration.md)、[支持边界](support.md)、[编译边界](compiler.md)：以这些文件和当前源码为准。历史 API/性能证据从 Git 查询。

新项目使用 `createStyles` 绑定 `useCss`/`useTheme`/`provideTheme`/`useGlobalCss`，`createHost` 按应用或请求创建。Vue `app.use(host)`，Svelte 根 `host.provide()`；Vue 应用卸载释放 host，Svelte 最终 `unmount` 后由入口显式释放。SSR 都在完整输出后 `finally dispose`。core 根入口是薄作者模型；完整引擎在 `internal/runtime`，构建时复制到两个适配包。`core/internal` 与适配包 `#runtime` 是内部边界，不用于业务代码。

## 取得工作区

```powershell
git clone https://github.com/kenconnet666/zerodep-css.git
cd zerodep-css
git switch codex/runtime-first
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm check:runtime
pnpm test:browser:runtime --no-build
pnpm lsp:setup
```

使用 Node 24、pnpm 10.34.5；Windows 安装脚本使用 PowerShell 7。不升级全局工具绕过项目约束。开始前检查 git status、当前 HEAD 与远程对应 SHA 的 CI，保留用户已有改动。测试和源码不依赖旧机器的绝对目录。

## 语言服务

.codex/config.toml 被忽略，由 lsp:setup 按当前机器重建；必要时重启 Codex 加载新 MCP。不要复制旧机器路径，不修改用户全局配置，也不结束其他项目进程。

优先使用 zerodep_lsp 的 diagnostics、hover、definitions、references、completions；没有该 MCP 时运行 pnpm lsp:inspect <项目相对文件路径...>。complete=false 或超时不能视为零错误。桥或依赖变化后执行 pnpm lsp:verify；完整语义验收也在 CI 中。

## 验证与提交

只由一个流程统一 build，其余测试传 --no-build；不要让多个代理同时清理/写 dist。类型负例会创建临时夹具，运行期间不要全目录格式化或中途终止；若意外中断，先确认遗留探针确属本次执行，再定点清理。

分阶段中文提交并推送，明确区分本地通过与对应提交 CI 通过。CI 覆盖 Windows/Linux、三浏览器引擎、类型/LSP、SSR/hydration/HMR 和独立 tarball。pnpm pack 通过仓库 hook 去掉开发源码条件，产品不包含 test/src 或机器配置。五包矩阵最终以 Nuxt/Kit 适配加入后的真实消费与部署验收为准。

性能文档中的早期横向数据属于历史基线；P4 要按新 API 分别复测 Vue/Svelte、运行时/可选优化和原生 CSS，不把小入口体积当成完整引擎体积，也不承诺等于原生 CSS。

测试只清理本次创建的临时目录；需要保留的失败证据放研究结果或相应报告目录，不删除来源不明的共享数据。

产品包保持 private，不自动发布 npm 或改变许可证。
