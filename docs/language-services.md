# 工作区和语言服务

本项目采用 pnpm 三包工作区。语言服务桥基于 `C:/code/zui-svelte/scripts/language-services` 的项目化方案改造，新增 Vue 混合模式支持；参考仓库没有被修改。

## 安装与命令

要求 Node 24、pnpm 10.34.5、PowerShell 7。依赖版本由 catalog 和锁文件共同固定。

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm lsp:setup -SkipInstall -Verify
```

PowerShell 也可以直接执行 `./scripts/language-services/setup.ps1 -SkipInstall -Verify`。

`setup.ps1` 默认安装锁文件依赖并构建三包；只更新 `.codex/config.toml` 的带标记配置区，保留其他设置，遇到非管理区同名服务报错。两个 MCP 的入口参数使用相对项目根目录的路径，LSP 的项目根参数为 `.`。仅 Node 可执行文件和 `cwd` 由脚本生成本机绝对路径，避免桌面宿主的 PATH 或启动目录不同导致启动失败。换机或移动目录后重跑脚本，无需手改路径；生成配置不进 Git，不写用户全局 Codex 配置。

`-Verify` 从 `codex mcp get --json` 读取实际解析后的启动配置，分别启动两个 MCP 并发现工具，再执行完整语言诊断验收。配置读取是否成功、独立 MCP 是否工作、当前桌面任务是否已加载工具是不同证据。

项目 MCP 只在受信任项目中加载。已打开的 Codex 任务未必热加载新服务器：配置完成后在 MCP 设置重启服务/重载 Codex，再检查原生工具可用性。[官方项目 MCP 配置说明](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)。

## 三个包

- `@zerodep-css/core`：已实现 css 字符串类名、资源/样式表和 SSR registry；API 见 `core/README.md`。
- `@zerodep-css/vue`：依赖 workspace core，Vue 为 peer，使用 vue-tsc 检查 .vue 脚本及模板。
- `@zerodep-css/svelte`：依赖 workspace core，Svelte 为 peer，使用 svelte-check 和 svelte-package；后续支持 rune 模块的包处理。

三个包当前保持 private。开发检查使用 `zerodep-source` exports condition；正常消费使用 dist 声明和 JS，不用全局 paths 冒充已构建包。build 按 workspace 依赖顺序先构建 core。

`vue/test/LanguageFixture.vue`、`svelte/test/LanguageFixture.svelte` 验证原生框架语义与 workspace 导入，均排除在产品构建之外。原始 Vite 模板 src/public 已归档到 `.research/legacy-starter`，不参与三包构建。

第一阶段新增 `core/test/types.ts`、`vue/test/StyleTypes.vue`、`svelte/test/StyleTypes.svelte`，使用真正的生成类型与纯 Builder。`pnpm test:types` 验证三种语言各四处 CSS 错误、修复清零及补全/悬停/跳转。当前原生 LSP 的补全可显示 `px(value1: Bound<number>): void` 和中文说明；详情在 `test-results/types`。

第二阶段这些类型夹具已切换为正式 `css(factory): string`，Vue/Svelte 模板使用 class 绑定，并加入 keyframes 资源类型。语言服务桥与服务器版本未修改。

属性 API 校正后，`test:types` 改为每种语言五处错误（含不可调用属性对象），并分别检查 token/raw 参数的字面量补全。raw 任意字符串为正例，不允许通过去掉补全或放宽整个 Builder 索引签名来实现。

## MCP 和协议

项目定义两个服务：

- `zerodep_lsp`：diagnostics、hover、definitions、references、completions。
- `zerodep_svelte_docs`：官方 Svelte 文档/autofixer MCP，不代替项目语义检查。

语言服务全部从当前项目 node_modules 解析，不回退到参考仓库、用户目录或全局安装。

| 文件    | 语义实现                                                                               |
| ------- | -------------------------------------------------------------------------------------- |
| TS/JS   | typescript-language-server + 项目 TypeScript                                           |
| .svelte | svelte-language-server 的 pull diagnostics 与 LSP 查询                                 |
| .vue    | TypeScript server + @vue/typescript-plugin，Vue language server 同步文档并转发专属请求 |

Vue 3.3.11 是混合架构：脚本和模板 TS 语义诊断/跳转/引用/补全来自装有 Vue 插件的 tsserver，不能把 Vue language server 不提供 pull diagnostics 当成无错误。桥同时为 Vue 专属服务接入 `tsserver/request` / `tsserver/response`。当前安装版本使用单个元组通知，按已安装源码处理，不照抄旧文档的嵌套元组。

diagnostics 通过完成的 pull 或同步语义/语法请求返回 `complete:true`；请求超时、协议错误、未完成报告都报错。hover/definition/reference 输入输出位置为一基；补全编辑区间保持 LSP 的零基 UTF-16。大成员列表使用 prefix/limit 控制输出。

桥仅读项目内文件，读取磁盘最新内容，单服务串行刷新查询，结束关闭只读文档缓冲。只监听源码、dist、test 和配置目录，不递归监听 node_modules。退出只清理自己创建的服务进程树，不关闭 IDE 或其他任务的 Node 进程。

## 无需桌面重载的即时诊断

```powershell
pnpm lsp:inspect core/src/index.ts vue/test/LanguageFixture.vue svelte/test/LanguageFixture.svelte
```

该命令创建独立短期 MCP 连接，结束自动清理。退出码：0 完成且无错误；2 有语义错误；1 服务或传输失败。

## 固定版本与编辑器

| 工具                                                    | 版本            |
| ------------------------------------------------------- | --------------- |
| TypeScript                                              | 6.0.3           |
| typescript-language-server                              | 6.0.0           |
| Svelte / svelte-check                                   | 5.57.0 / 4.7.6  |
| svelte-language-server / typescript-svelte-plugin       | 0.18.4 / 0.3.52 |
| Vue                                                     | 3.5.43          |
| @vue/language-server / @vue/typescript-plugin / vue-tsc | 3.3.11          |

Svelte language server 的 peer 范围是 `^5.9.2 || ^6.0.2`，因此 TypeScript 使用 6.0.3，没有强行升级到不在此范围的 7.x。后续升级重新运行三种语言的语义验收。

VS Code 已提交工作区 TypeScript 路径和 Vue Official / Svelte / Prettier 扩展推荐；扩展本身仍需编辑器安装。

WebStorm 使用项目软件包的稳定路径，而不是包含版本号的 `.pnpm` 内部目录：

- TypeScript：`node_modules/typescript`。
- Svelte language server：`node_modules/svelte-language-server`。
- Svelte TypeScript plugin：`node_modules/typescript-svelte-plugin`。
- Vue language server（IDE 支持选择该包时）：`node_modules/@vue/language-server`。

WebStorm 与 Codex 的桥分别运行服务，不共用进程。IDE 语言服务器设置属于本机 IDE 会话；不能以 Codex LSP 验收成功声称所有 IDE 设置都已切换。

## 验收

`pnpm lsp:verify` 会创建属于实际包 tsconfig 的临时探针，以独占创建方式拒绝覆盖已有文件，在 finally 中清理所属文件及 MCP 进程。

- TS：赋值类型、未知属性、错误参数三处错误，反复“错误→正确”两轮。
- Vue/Svelte：上述三处脚本错误，额外一处模板成员错误，反复检出和修复清零。
- 三种语言逐一验证 hover 含真实 number 类型、定义跳到共享 TS 文件、引用和 primary 成员补全。
- 检查包入口及两个永久语言夹具无错误。

成功输出 `VERIFIED`，详细结果写入忽略的 `test-results/language-services/verification.json`。这是类型服务和包骨架验收，不是 CSS API 实现验收。

2026-09-22 实测：三个包构建成功；TS 三处、Vue/Svelte 四处预置错误均反复检出和清零，三种语言的其余四项工具均通过。`setup.ps1 -SkipInstall -Verify` 从 Codex 真实配置启动 zerodep_lsp 五个工具、官方 Svelte 四个工具并再次通过语义验收。WebStorm MCP 已能识别 zerodep-css 项目。

同日用户重启后，当前任务已实际加载并调用原生 zerodep_lsp：TS/Vue/Svelte 临时探针各检出一处 2322 类型错误，修复后均 complete=true、errors=0；原生 hover 返回 number→string 函数签名，definitions 返回定义，references 返回两处引用，completions 返回 primary 及其字面量类型。官方 Svelte autofixer 对项目夹具返回 issues=[]、suggestions=[]。三个临时探针已删除；记录见忽略的 `test-results/language-services/native-connection.json`。至此本轮独立连接和重启后的原生接入均已验证；新会话仍需轻量确认。
