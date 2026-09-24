# zerodep-css 工作约定

- 现行决策：运行时 CSS 是不可放弃的正式能力；主分支为 master，已合入 codex/runtime-first 的实现。编译、预计算、缓存和变量绑定均是优化，无法证明等价时保留合法运行时行为，不因优化器限制而拒绝作者代码。codex/static-css 仅作研究和性能参考，不合并其强制静态合同。

- 范围和证据见 `docs/support.md`、`docs/validation.md`，API/目录迁移见 `docs/migration.md`。维护时分阶段中文提交，完整回归交给 CI/CD，本地完成类型/构建和针对性关键验证；旧方案从 Git 历史查询，不作为当前 API。
- 保持运行时的混合架构：公开 bx 已移除，动态属性值自动编译为变量绑定，结构和复杂情形保留正确的运行时回退；当前自动路径与回退边界见 `docs/compiler.md`。
- 默认中文沟通。当前 Vue/Svelte 使用内部完整运行时和框架原生响应式、上下文与完整字符串 SSR 接入；已移除公开 bx，自动编译支持范围见 `docs/compiler.md`。实际 API 见各包 README，当前架构见 `docs/architecture.md`，后续计划见 `docs/roadmap.md`，不要把其他候选 API 当作已实现功能。
- 五个产品包 core/vue/svelte/nuxt/sveltekit 保持 private。core 不依赖框架，根入口只提供 Css/cssVar/defineTheme 作者运行值及类型；`core/internal` 是非业务共享身份桥。完整引擎源码位于 `internal/runtime`，构建时复制进 Vue/Svelte 的 `dist/runtime`，通过各包私有 `#runtime` 导入；Nuxt/Kit 复用对应适配器，不再携带另一份引擎。实际阶段见 docs/production.md，不能把未运行的验收写成已完成。
- 安全模板声明中的动态单位/raw/token 自动绑定；空值和 CSS-wide 保持直接声明语义，复杂回调与脚本快照保留运行时行为。
- 作者模型采用 `class AppCss extends Css` 的真实类继承，在项目 `createStyles({ cssType: AppCss })` 后使用绑定的 `useCss()`；系统基类提供标准 CSS，派生 getter 可用 extendProperty 增加关键字，不能覆盖既有属性操作。defineTheme/provideTheme 已提供预设继承、局部覆盖和框架逻辑作用域。运行时 if/switch/函数复用优先，recipes/variants 不是既定目标。
- 局部作者类型统一为 Css，ThemeCss 是可选的第二层。项目 createStyles({cssType?,theme?}) 绑定 useCss/useTheme/provideTheme/useGlobalCss；组件 const css=useCss()。旧 useStyleRuntime 和业务 context 入口不再公开。适配器根入口保留 createStyles/Css/defineTheme/cssVar/keyframes 五个运行值；keyframes 来自适配器内部引擎。host 每应用/请求创建：Vue app.use(host)，Svelte 根 host.provide，SSR 输出后 finally dispose。
- s.name('xxx').config({debug}) 已实现根样式命名与开发来源诊断；config 当前只含 debug，不能把 runtime 的 target/nonce 等所有权选项放入局部配置。
- host 的 warnAt 是软提示起点，默认开发浏览器 10000 条逻辑记录后翻倍去重，false 关闭；SSR/生产默认静默，host debug:true 可显式启用。maxRecords 仍是单独的显式硬上限，默认无限；不能让诊断失败影响注册，也不能为了缓存或诊断删除仍可能使用的记录。
- CSS 属性对象不可调用。使用 s.display.flex、s.display.token(value)、s.width.raw('50%')、s.width.px(50)；token 是严格字面量，raw 保留类型/补全并允许任意字符串。s.xx(...) 用于 selector/media/hover 等结构方法，不用于属性直接赋值。
- Git 提交说明使用中文；验证通过后提交，不把过渡中的失败状态当作完成版提交。
- 代码保留适当的中文注释，重点解释公共 API 合同、所有权/生命周期、响应式与 SSR 边界、事务/缓存策略；不要逐行复述显而易见的语法。生成文件的注释由生成器维护。
- 依赖精确版本集中在 `pnpm-workspace.yaml`，包内使用 catalog/workspace 协议。使用 Node 24、pnpm 10.34.5，不升级全局工具。
- 修改 TS/Vue/Svelte 后至少执行对应包的 check；内部引擎变更另执行 `pnpm check:runtime`，基础配置或跨包变更执行根 `pnpm check`、`pnpm build`。
- 修改 CSS 数据/生成器后运行 `pnpm generate:css`、`pnpm generate:check`；不要手改 `core/src/generated/properties.ts` 或 `internal/runtime/generated/metadata.ts`。Builder 或生成类型变更运行 `pnpm test`、`pnpm test:types`，保留规范独立负例。
- 修改序列化、资源注册或 SSR 恢复后运行 `pnpm test:browser:runtime`；默认使用已安装 Chrome。业务样式只从项目绑定的 `useCss()` 取得，SSR 每请求独立 host，不增加服务端全局缓存。
- 框架/上下文变更运行 `pnpm test:unit`、`pnpm test:browser:frameworks`。后者通过官方编译器构建真实组件并测试 dist，覆盖客户端与 SSR 恢复；Svelte rune 模块不能当作普通未编译 JS 执行。
- 元框架变更运行对应 `pnpm test:nuxt --no-build` / `pnpm test:sveltekit --no-build`，消费仓库外 tarball 并验证 Node、HMR、SSR/hydration 与静态部署。Nuxt 的诊断 resume 报告不能替代 cleanFullPass；Windows temp 先 realpath，避免短路径造成 Vite 模块身份分裂。
- Nuxt 根全局 HMR 的 hot.data 交接只用于单实例根，遵循卸载再挂载语义；不放宽真实多 owner 内容冲突。Kit 在完整组件渲染/HTML transform 后释放请求 host，原样保留 deferred 数据 Response；不要为等待数据而额外缓存整个响应体。
- Kit 2.70.3 的 cookie 依赖使用 workspace 中的有界安全 override，独立消费者继承同一修补；不能用根工作区对目录名/0.2.0 版本的误报告替代真实消费者审计，也不能静默忽略真实漏洞。
- 长时完整 LSP、生成一致性和运行时浏览器回归可交给 GitHub Actions；本地仍完成类型/构建与改动对应的关键测试。交付须区分本地通过、CI 通过或 CI 未完成，不把 workflow 文件当作运行成功。
- 内部 createStyleContext 只由 host 拥有；业务全局样式用稳定 key，恢复后 completeHydration 检查遗漏。Vue 应用卸载释放 host；Svelte 根组件卸载只释放认领以支持 HMR，入口 unmount 后显式 host.dispose。组件只释放自己的槽位/订阅。同 key 同序列化内容共享，多个 owner 存活时禁止改值，仅剩一个 owner 才可更新；最后一个释放才删规则。动态全局在根组件声明一次。host.dispose 同时停止已登记的全局 watcher/effect。
- 使用项目 `zerodep_lsp` 做诊断、hover、definitions、references、completions。当前会话没有该 MCP 时，使用 `pnpm lsp:inspect <相对文件路径...>`。超时或 complete=false 不是无错误。
- Node 编译源码放 internal/compiler 与 vue/compiler、svelte/compiler；浏览器完整运行时源码在 internal/runtime，框架接入位于各包 src。两套内部源码都用严格 TS，分别执行 pnpm check:compiler 与 pnpm check:runtime；根 check 自动包含它们，声明由根 build 生成，不手写 .d.mts 替代实现检查。
- 修改语言服务桥或升级相关依赖后运行 `pnpm lsp:verify`，必须通过预置错误检出、修复清零和五项工具验收。WebStorm MCP 的空问题列表不能代替语义验收。
- `.codex/config.toml` 由 `pnpm lsp:setup` 生成并忽略；模板和启动脚本可迁移。不要修改用户全局 Codex 配置或结束其他项目 Node 进程。
- `.research` 只保留当前可运行的类型/性能探针及运行时主线原始样本，不参与产品构建；旧模板与旧实验从 Git 历史查询。测试夹具放所属包的 test 目录，不发布到 dist。

- 构建与测试命令见根 README；pnpm test 汇总全部快速单元测试。CI 每 job 构建一次并使用 --no-build，不能依赖残留 dist。包入口/依赖改动运行 test:consumer，体积改动运行 size:check。

- 多代理验证只由主流程统一 build；其余测试用 --no-build 或直接 Node 入口，禁止并发清理/写同一 dist。类型负例探针运行期间不做全目录格式化。
