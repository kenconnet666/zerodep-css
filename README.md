# zerodep-css

强类型链式 CSS 框架，保留完整运行时能力；编译、预计算、缓存和元素变量绑定都是可选优化。当前在 `codex/runtime-first` 分阶段完善生产方案，已实现范围与验收状态见[实施记录](docs/production.md)。三个产品包保持 private，Nuxt 4/SvelteKit 2 适配仍在实施计划中。

项目统一配置，组件使用绑定的作者类型与主题：

```ts
// styles.ts（Vue 项目；Svelte 从 @zerodep-css/svelte 导入）
import { createStyles } from '@zerodep-css/vue';
export const styles = createStyles();
export const { useCss, useTheme, provideTheme, useGlobalCss } = styles;
```

每个应用或请求创建一个 host。Vue 通过 app.use(host) 安装；Svelte 在根组件调用 host.provide()。完整启动、SSR 和卸载示例见 [Vue](vue/README.md) 与 [Svelte](svelte/README.md)。

在组件初始化中取得 `const css = useCss()`，然后在模板或原生派生值中调用：

```ts
css((s) => {
  s.display.flex;
  s.padding.px(8, 16);
});
```

css 同步返回字符串；可用同一函数组合已有样式和回调。普通 if/else/switch 与函数复用均可用，不要求 recipes/variants。编译器无法证明等价时保留合法运行时行为，详见[编译说明](docs/compiler.md)。

属性对象不可调用：固定值 `s.display.flex`，严格字面量 `s.display.token(value)`，开放值 `s.width.raw('50%')`，单位方法 `s.width.px(50)`。raw 保留已知值补全，并允许任意字符串通过类型检查；不提供 `s.width(...)`。

```text
core/       作者模型、主题数据与尚待迁出的共享引擎
vue/        Vue 上下文、全局样式监听与组件夹具
svelte/     Svelte context、runes 全局样式与组件夹具
internal/   两端共用的严格 TypeScript 编译分析（引擎归位继续实施）
scripts/    数据生成、语言服务和浏览器/类型验收
docs/       现行架构、支持、验证、迁移与换机交接
.research/  研究探针、原始模板归档
```

要求 Node 24、pnpm 10.34.5；Windows 安装脚本使用 PowerShell 7。版本统一在 pnpm-workspace.yaml 管理，三个包仍保持 private。

打包使用仓库内 `pnpm pack`：`.pnpmfile.cjs` 在 tarball 清单中移除仅供本地 LSP 使用的 `zerodep-source` 条件。发布产物只导出存在的 dist 文件；core/Vue JS source map 内嵌源码，声明定位到已发布的 d.ts。独立消费者 CI 检查所有导出目标和地图，不依赖当前机器的源目录。

本地已有构建时，可用 `node scripts/testing/browser-core.mjs --match 缓存` 执行名称匹配的关键场景；定向报告放在 `test-results/browser-focused`，不会覆盖完整报告。CI 默认不传筛选条件，执行完整回归。

浏览器测试统一由 `ZERODEP_BROWSER_ENGINE` 选择 chromium/firefox/webkit；默认 chromium 使用本机 Chrome，`ZERODEP_BROWSER_CHANNEL=chromium` 改用 Playwright 安装的 Chromium。CI 对三种引擎分别运行样式、框架、SSR 和 HMR 回归；当前运行状态以实际 CI 结果为准。

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm generate:check
pnpm test
pnpm test:types
pnpm test:browser:core
pnpm test:consumer
pnpm size:check
pnpm test:browser:frameworks
```

- [core 作者模型与引擎迁移边界](core/README.md)
- [Vue 适配与 SSR](vue/README.md)
- [Svelte 适配与 SSR](svelte/README.md)
- [项目语言服务](docs/language-services.md)
- [当前架构](docs/architecture.md)
- [支持矩阵与生产使用合同](docs/support.md)
- [验证入口、历史证据与性能测量](docs/validation.md)
- [Vue/Svelte 与原生、Emotion、goober、vanilla-extract 的性能对照](docs/performance.md)
- [系统亮暗主题](docs/themes.md)
- [API 与目录迁移](docs/migration.md)
- [版本变更记录](CHANGELOG.md)
- [换机交接与恢复步骤](docs/handoff.md)
- [后续路线](docs/roadmap.md)
- [正式 CSS 覆盖清单](docs/css-coverage.json)

SSR 每请求创建 host，完成渲染后收集 styles/manifest，并在 finally 中释放。浏览器采用原生 CSS nesting，本地验证使用已安装 Chrome，CI 覆盖 Chromium、Firefox、WebKit；兼容范围和测试证据见 core 文档。

项目已配置 zerodep_lsp。可直接运行 `pnpm lsp:inspect <相对文件路径...>`；语言服务改动后运行 `pnpm lsp:verify`。换机使用 `./scripts/language-services/setup.ps1 -Verify` 生成本机配置，不改写用户全局设置。

GitHub Actions 在 Linux 运行完整验证、独立 tarball 消费与体积预算，在 Windows 验证安装、类型、构建和单元测试，并上传报告。测试命令默认准备构建；同一轮已构建后可传 --no-build，CI 每个 job 只构建一次。日常本地至少运行 `pnpm check`、`pnpm build` 与对应单元/组件测试；完整类型补全验收和 core 浏览器回归可由 CI 执行。CI 三引擎使用 Playwright 配套浏览器；不发布包或部署站点。
