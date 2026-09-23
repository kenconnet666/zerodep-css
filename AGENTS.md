# zerodep-css 工作约定

- 2026-09-23 最新决策：运行时 CSS 是不可放弃的正式能力；主线为 codex/runtime-first，基于 2db10e3。编译、预计算、缓存和变量绑定均是优化，无法证明等价时保留合法运行时行为，不因优化器限制而拒绝作者代码。codex/static-css 仅作研究和性能参考，不合并其强制静态合同。

- 范围和证据见 `docs/support.md`、`docs/validation.md`，API/目录迁移见 `docs/migration.md`。维护时分阶段中文提交，完整回归交给 CI/CD，本地完成类型/构建和针对性关键验证；旧方案从 Git 历史查询，不作为当前 API。
- 保持运行时的混合架构：公开 bx 已移除，动态属性值自动编译为变量绑定，结构和复杂情形保留正确的运行时回退；当前自动路径与回退边界见 `docs/compiler.md`。
- 默认中文沟通。当前已实现 core 样式引擎和 Vue/Svelte 原生响应式、上下文与完整字符串 SSR 接入；已移除公开 bx，自动编译支持范围见 `docs/compiler.md`。实际 API 见各包 README，当前架构见 `docs/architecture.md`，后续计划见 `docs/roadmap.md`，不要把其他候选 API 当作已实现功能。
- 当前三个产品包是 core/vue/svelte，保持 private；目标新增 Nuxt 4/SvelteKit 2 两个适配包。core 不依赖框架，正在向薄作者模型收敛。实际阶段见 docs/production.md，不能把待做包或 API 写成已完成。
- 安全模板声明中的动态单位/raw/token 自动绑定；空值和 CSS-wide 保持直接声明语义，复杂回调与脚本快照保留运行时行为。
- 作者模型采用 `class AppCss extends Css` 的真实类继承，通过 css(factory, AppCss) 使用；系统基类提供标准 CSS，派生 getter 可用 extendProperty 增加关键字，不能覆盖既有属性操作。defineTheme/provideTheme 已提供预设继承、局部覆盖和框架逻辑作用域。运行时 if/switch/函数复用优先，recipes/variants 不是既定目标。
- 局部作者类型统一为 Css，ThemeCss 是可选的第二层。项目 createStyles({cssType?,theme?}) 绑定 useCss/useTheme/provideTheme/useGlobalCss；组件 const css=useCss()。旧 useStyleRuntime 和业务 context 入口不再公开。host 每应用/请求创建：Vue app.use(host)，Svelte 根 host.provide，SSR 输出后 finally dispose。框架内部桥暂在 core/style-scope，P2 后续迁移共享引擎。
- s.name('xxx').config({debug}) 已实现根样式命名与开发来源诊断；config 当前只含 debug，不能把 runtime 的 target/nonce 等所有权选项放入局部配置。
- CSS 属性对象不可调用。使用 s.display.flex、s.display.token(value)、s.width.raw('50%')、s.width.px(50)；token 是严格字面量，raw 保留类型/补全并允许任意字符串。s.xx(...) 用于 selector/media/hover 等结构方法，不用于属性直接赋值。
- Git 提交说明使用中文；验证通过后提交，不把过渡中的失败状态当作完成版提交。
- 代码保留适当的中文注释，重点解释公共 API 合同、所有权/生命周期、响应式与 SSR 边界、事务/缓存策略；不要逐行复述显而易见的语法。生成文件的注释由生成器维护。
- 依赖精确版本集中在 `pnpm-workspace.yaml`，包内使用 catalog/workspace 协议。使用 Node 24、pnpm 10.34.5，不升级全局工具。
- 修改 TS/Vue/Svelte 后至少执行对应包的 check；基础配置或跨包变更执行根 `pnpm check`、`pnpm build`。
- 修改 CSS 数据/生成器后运行 `pnpm generate:css`、`pnpm generate:check`；不要手改 `core/src/generated`。Builder 或生成类型变更运行 `pnpm test`、`pnpm test:types`，保留规范独立负例。
- 修改序列化、资源注册或 SSR 恢复后运行 `pnpm test:browser:core`；默认使用已安装 Chrome。css 顶层入口只使用浏览器默认实例，SSR 每请求独立 createRuntime，不增加服务端全局缓存。
- 框架/上下文变更运行 `pnpm test:unit`、`pnpm test:browser:frameworks`。后者通过官方编译器构建真实组件并测试 dist，覆盖客户端与 SSR 恢复；Svelte rune 模块不能当作普通未编译 JS 执行。
- 长时完整 LSP、生成一致性和 core 浏览器回归可交给 GitHub Actions；本地仍完成类型/构建与改动对应的关键测试。交付须区分本地通过、CI 通过或 CI 未完成，不把 workflow 文件当作运行成功。
- 内部 createStyleContext 只由 host 拥有；业务全局样式用稳定 key，恢复后 completeHydration 检查遗漏。Vue 应用卸载释放 host；Svelte 根组件卸载只释放认领以支持 HMR，入口 unmount 后显式 host.dispose。组件只释放自己的槽位/订阅。同 key 同内容共享仍在 P3 计划中。
- 使用项目 `zerodep_lsp` 做诊断、hover、definitions、references、completions。当前会话没有该 MCP 时，使用 `pnpm lsp:inspect <相对文件路径...>`。超时或 complete=false 不是无错误。
- Node 编译源码放 internal/compiler 与 vue/compiler、svelte/compiler；浏览器源码仍放各包 src。编译代码使用严格 TS，执行 pnpm check:compiler；根 check 自动包含它，声明由根 build 生成，不手写 .d.mts 替代实现检查。
- 修改语言服务桥或升级相关依赖后运行 `pnpm lsp:verify`，必须通过预置错误检出、修复清零和五项工具验收。WebStorm MCP 的空问题列表不能代替语义验收。
- `.codex/config.toml` 由 `pnpm lsp:setup` 生成并忽略；模板和启动脚本可迁移。不要修改用户全局 Codex 配置或结束其他项目 Node 进程。
- `.research` 保留研究探针和旧模板归档，不参与产品构建；测试夹具放所属包的 test 目录，不发布到 dist。

- 构建与测试命令见根 README；pnpm test 汇总全部快速单元测试。CI 每 job 构建一次并使用 --no-build，不能依赖残留 dist。包入口/依赖改动运行 test:consumer，体积改动运行 size:check。

- 多代理验证只由主流程统一 build；其余测试用 --no-build 或直接 Node 入口，禁止并发清理/写同一 dist。类型负例探针运行期间不做全目录格式化。
