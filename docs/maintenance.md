# 维护与支持范围

## 工作区与接续

主线为 `main`，远程为 `kenconnet666/zerodep-css`。六个 npm 包统一版本、采用 MIT；根工作区仍为 private。运行时 CSS 是基础能力，bx 与模板缓存是优化，不要求把全部样式静态提取。

使用 Node 24、pnpm 10.34.5，依赖由 catalog 和锁文件固定。新机器执行：

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm --dir test/tools install --frozen-lockfile
pnpm lsp:setup
pnpm lsp:verify
```

不复制其他机器的 node_modules、dist 或 Codex 绝对路径配置。`.codex/config.toml` 由本机生成且不入 Git；重载 Codex 后验证 MCP 连接，必要时运行 `pnpm lsp:inspect <相对路径>`。不修改全局工具或结束其他项目进程。

## 代码归属和生成器

| 位置                                                                           | 职责                                                                |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| core/src/generated                                                             | 502 个属性、关键字、单位与类型签名；只通过 `pnpm css:generate` 更新 |
| scripts/generate-css-author.mjs、css-author-methods.mjs、css-author-notes.json | 生成规则、方法代码和参数配置                                        |
| scripts/css-author-docs.json、css-author-docs.mjs                              | 中文语义、调用示例、单位和重载说明及覆盖校验                        |
| compiler/src                                                                   | bx 与模板表达式分析、源码编辑和定位                                 |
| core/src/selector-shortcuts.ts、author-guards.ts                               | 选择器元数据、系统作者身份检查                                      |
| core/src/registry.ts、bindings.ts、browser.ts、server.ts                       | 注册缓存、变量生命周期、浏览器与 Node 宿主                          |
| vue/src、svelte/src                                                            | 上下文、框架编译与响应式接入                                        |
| nuxt/src、sveltekit/src                                                        | 元框架 Node SSR、hydration 与预渲染                                 |
| test/browser、test/tools                                                       | 正式浏览器用例、共享夹具、性能与打包工具                            |

作者类型采用普通 readonly 字段和明确的方法参数。基类只复用格式化逻辑，不传值类型泛型，不引入 Proxy 或声明合并：

```ts
class AnimationPlayStateCss extends CssProperty {
  readonly paused = 'animation-play-state:paused;';
  constructor() {
    super('animation-play-state');
  }
  raw(value: Property.AnimationPlayState | CssString): string {
    return this.declaration(value);
  }
}
```

`CssString` 是 `string & {}`，用于保留关键字补全并接受任意字符串。参数保留原生数值约束，例如 width 裸数字只接受 0，opacity 接受普通数字。长度方法只出现在适合的属性上，简写属性按元数据生成参数数量。全部属性与公开方法的 JSDoc 随类型声明发布；覆盖入口字段、关键字、继承单位方法及每个重载的参数提示。维护规则和验收见[作者 API 注释维护](author-documentation.md)。

protected `declaration` 是动态方法的公共格式化点；关键字字段保持已生成的字符串。用户通过属性子类和 `AppCss extends Css / ThemeCss` 扩展；不为少量体积或极限微基准收益增加类型层次。

## 生命周期和诊断

- 模板元素变量随 DOM 更新和移除，共享类由宿主缓存；列表 key 变化不建立私有值规则。
- setup、派生回调等样式表路径停止订阅并在所有者卸载时回收私有变量及失去所有者的类/动画。其 class 可以转交，但不能超出所有者生命周期使用。
- 样式表路径的旧列表帧保留到组件卸载；长期轮换大量 key 可用独立行组件划分生命周期。KeepAlive 停用保留，最终卸载清理。
- 普通静态类、静态动画、命名全局块属于宿主。`globalCss(name)` 删除全局块；`disposeCss()` 只用于整个宿主退出。
- `cssStats()` 返回 rules/classes/animations/globals/bindings/connected；bindings 只统计私有样式表值规则，不统计内联变量。`configureCss({ warnAfter: 50_000 })` 可启用一次性提示，默认关闭，不限制登记。
- 开发编译保留源位置和 source map；HMR、挂卸、SSR 与性能由独立 CI 任务验收，失败产物保留用于定位。

## 环境与交付边界

锁定验收版本为 Vue 3.5.43、Svelte 5.57.0、Nuxt 4.5.2、SvelteKit 2.70.3 和 Node 24。覆盖三浏览器自动化、标准 Node SSR、预渲染和 CSP；peer 范围不代表每个历史版本都已实测。流式 SSR、边缘部署、Shadow DOM、跨宿主微前端合并尚未验收。

选择器、层叠、单位和无效值由浏览器处理；raw 不过滤任意 CSS。主题按实际 DOM 继承，Teleport/portal 不自动复制主题边界。bx 的具体转换范围与严格 CSP 设置统一见[绑定文档](bindings.md)。

分阶段中文提交并逐次推送。本地运行本次改动相关测试；类型入口/基础配置变更运行 `pnpm check`。完整浏览器、真实 HMR、元框架和性能交 CI。推送后不等待或轮询，下一次提交前检查上次结果。未取得当前提交的完整结果，不称为完整验收通过。

最近证据见[性能与验收记录](performance.md)。旧方案和阶段讨论从 Git 历史查询；`test/tools/results` 保留历史原始样本，不作为当前性能结论。

## npm 发布

六包名称为 zerodep-css、zerodep-css-compiler、zerodep-css-vue、zerodep-css-svelte、zerodep-css-nuxt、zerodep-css-sveltekit。发布顺序先 core、再 compiler、两个框架适配器、最后两个元框架包。包间 workspace/catalog 协议由 pnpm pack 转换，不能直接把源码 package.json 交给 npm publish。

在已提交并推送的 main 上运行 `pnpm build` 和 `pnpm release:pack`，再运行 `pnpm release:publish`。产物和 SHA-512 清单位于被忽略的 test-results/release；发布脚本只接受当前提交的产物，并核对 registry 摘要后才继续下一个包。中途失败保留产物，可用同一清单重试，不覆盖已发布版本。

令牌只使用 NPM_TOKEN。Windows 用户变量尚未进入当前终端时，发布脚本会读取当前用户变量；临时 npmrc 只含环境变量占位符并在结束时清理。不将令牌写入仓库或复制到命令行参数。源码分支的完整测试和 `release:check` 的 tarball 消费检查都由 CI 执行，本地发布阶段不重复运行完整测试。

## 0.3.0 编译器边界

`zerodep-css/compiler` 已迁移为 `zerodep-css-compiler`，旧入口删除。使用最新版 Vue/Svelte 适配器无需手动安装编译器；直接引用旧内部入口的工具需更新导入和依赖。CSS 核心不再声明 TypeScript/magic-string peer，公开作者与运行时类型可独立由 TS7 消费。旧模板转换仍使用其自己的 TS6 AST；不宣称这个编译器能改用 TS7 AST。

原生适配器可从 `/bindings` 使用 `inlineDeclaration`。它仅将已确认的系统单位、关键字、颜色十六进制值与 opacity 转成元素变量；CSS-wide、important、未知值、负单位和自定义作者回退原声明。普通 `css`、Vue/Svelte 的 bx 语义没有改变。

0.3.0 跨仓库接入先发布到 `next`；`pnpm release:publish` 默认不改动 latest。明确批准正式提升后才传 `--tag latest`。发布前必须确认相同提交 CI 通过、重新打包和核对。
