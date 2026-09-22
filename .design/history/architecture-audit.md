# 目录、命名与基础设施审计

> 历史材料中的 ibind 已在阶段四更名为 bx；当前功能以 architecture.md、roadmap.md 和各包 README 为准。

审计日期：2026-09-22。源码基线：`ea5836e`，分支 `feat/native-reactivity`。本文件为审计结论与下一阶段建议，不代表建议 API 已实施。本轮不重排产品目录、不修改公共 API。

## 结论与保留项

三个产品包保持根目录的 core/vue/svelte，依赖方向为适配器到 core。没有证据表明需要额外的 packages 层或第四个产品包。core 未依赖框架；适配器只使用公开响应式接口；生成器与语言服务属于仓库开发工具，仍放 scripts。测试夹具继续归所属包管理。

当前有价值的基础设施应保留：精确 catalog 与单一 lockfile、Node 24/pnpm 10.34.5、生成一致性检查、真实 TS/Vue/Svelte LSP 诊断、真实组件编译和浏览器验证、SSR 请求隔离、中文注释与中文提交。

对应代码提交的 [GitHub Actions](https://github.com/kenconnet666/zerodep-css/actions/runs/35707485075) 已核对为 success，三个 job 都通过。这证明现有检查通过，不代表已覆盖独立安装消费、Windows CI 或其他浏览器引擎。

## 审计发现

优先级含义：P1 为进入编译阶段前解决；P2 为随目录整理或随后补齐；P3 为发布前处理。以下是架构和基础设施缺口，不等同于全部已复现运行错误。

| 优先级 | 发现与证据                                                                                                    | 影响                                                                                                  | 建议                                                                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1     | vue/src/index.ts 和 svelte/src/index.ts 直接重新导出 core 的 css；useStyleRuntime 返回的 css 才使用注入的实例 | 同一包中同名函数具有不同上下文行为，直接 import 会绕过 nonce、namespace、ShadowRoot 与 SSR 请求上下文 | 适配器去掉这个便捷重导出，组件通过 useStyleRuntime 获得 css；浏览器默认入口明确留在 core。保持 css(factory): string 合同，不承诺字符串会自动响应式变化                          |
| P1     | scripts/test-frameworks.mjs 通过 alias 直接映射三个 dist/index.js                                             | 验证了 dist 代码和框架编译，但未验证 tarball 内容、exports 条件、独立消费者依赖解析                   | 增加 pnpm pack 到临时目录的隔离消费测试，消费者按包名安装/导入，禁用源码条件、仓库别名与根开发依赖兜底                                                                          |
| P1     | 编译插件尚无独立子路径和依赖边界                                                                              | 后续容易把 Node、AST 或 Vite 插件依赖带入浏览器入口                                                   | 编译能力放各适配包的 compiler 子路径，按实际集成提供 vite/svelte-preprocess 入口；保持三个产品包。共享编译代码只在确有重复后提取到私有工具目录                                  |
| P1     | 缺少持久化的最小入口体积基线                                                                                  | 只有全量入口报告不足以判断实际使用成本、tree shaking 与后续编译依赖泄漏                               | 增加浏览器最小入口的 minify/gzip 与 metafile 归因报告；先定位解析器、词法数据和元数据贡献，再决定优化，不直接移除 CSS 语法校验                                                  |
| P2     | 内部纯构建器仍名为 useCss，runtime 又以 buildStyle 别名导入                                                   | 容易误认为框架 hook，也与当前公共 css 合同混淆                                                        | 内部统一为 buildStyleProgram，只修改内部引用和测试，不重新引入公开 useCss                                                                                                       |
| P2     | core/src/types.ts 中局部规则为 containerQuery，全局规则为 container；RootFactory 实际为顶层 stylesheet 回调   | 上下文间名称不一致，Root 容易被理解成 DOM root                                                        | 两处统一 containerQuery；RootBuilder/RootFactory 改为 StylesheetBuilder/StylesheetFactory，保留嵌套 GlobalBuilder/GlobalFactory 的语法限制                                      |
| P2     | vue/src/index.ts 承担实现和导出，Svelte 已分出 context 与 global 模块                                         | 适配器增长后入口难读、职责不对称                                                                      | Vue 分为 context.ts 与 global.ts；两包 index.ts 都只维护公开入口。Svelte global.svelte.ts 的后缀必须保留，以经过 rune 编译                                                      |
| P2     | core 根入口显式导出大量内部 IR 节点和辅助泛型                                                                 | 扩大兼容承诺，未来 ibind 演进更难收敛                                                                 | 保留消费者需要的 Builder/Factory、资源定义和 manifest 类型；去掉无实际消费需求的 IR 节点根重导出。类型声明内部引用可以保留，不把每个内部类型都做公开入口                        |
| P2     | 测试混放在 test 根目录，跨框架执行代码分散到 scripts/frameworks 和脚本根目录                                  | 夹具与执行器归属不明显，新增编译 fixture 容易继续扩散                                                 | 包内 test/unit、test/types、test/browser、test/fixtures；共享执行器归 scripts/testing，组件文件仍属于各包                                                                       |
| P2     | 根 pnpm test 只执行 core/生成器，test:adapters 只执行 Vue；CI 先 build，又在多个测试脚本内重复 build          | 命令名容易造成覆盖范围误解，重复构建增加耗时                                                          | 统一 test:unit、test:browser:core、test:browser:frameworks、test:types、test:consumer；pnpm test 聚合全部快速单元测试。CI 每 job 构建一次再执行测试，独立本地命令仍提供准备步骤 |
| P2     | 所有 job 仅 ubuntu-latest；format:check 不含根 README、AGENTS、.github、.design 文档                          | Windows 开发环境和脚本路径未有持续验收，仓库配置格式有盲区                                            | 增加 Windows 快速 job，完整浏览器/LSP 留 Linux；格式检查显式覆盖维护文件，排除归档和大体积生成报告                                                                              |
| P2     | 浏览器 results.json 只在整套成功后写出，缺少失败截图/trace                                                    | upload-artifact(always) 在失败时可能只有构建产物，排错依赖日志                                        | 在失败分支及 finally 写结构化结果、浏览器版本、失败场景、控制台/请求日志；失败时保留截图或 Playwright trace                                                                     |
| P2     | .design/implementation-research.md 同时保存候选 API 和多阶段历史，例如第 15 节仍记录适配器未实施              | 历史事实容易被读成当前状态                                                                            | 提炼当前 architecture.md 与 roadmap.md，历史文档标记为阶段记录；已有三包 README 继续作为具体用法来源，不要求把全部资料搬到新 docs 目录                                          |
| P3     | 目前包保持 private，但未配置完整发布元数据与项目自身 LICENSE                                                  | 不影响内部研发，但不足以作为发布准备完成的依据                                                        | 发布前补 repository/license/engines 等、检查声明地图源码可达性和 tarball 文件白名单；许可证由项目所有者决定，不能直接沿用第三方数据许可证                                       |

## 建议目录

下面是目标结构，按实际改动迁移，不先创建空文件。core 当前文件数仍可管理，不把每个函数拆成一个模块。

```text
core/
  src/
    index.ts                  # 公开运行时与作者类型入口
    builder.ts                # buildStyleProgram / keyframes / globalCss
    builder-types.ts          # 原 types.ts，作者侧链式合同
    style-program.ts          # 原 program.ts，内部有序 IR
    values.ts                 # 值、cssVar、ibind 类型标记
    metadata-types.ts         # 原 metadata.ts，生成数据的结构类型
    generated/                # 同一 schema 生成，不手工修改
    runtime.ts                # 实例、缓存和资源事务
    context.ts                # 宿主所有权、稳定 key 和恢复映射
    serialize.ts              # CSS 解析、规范化及输出
    sheet.ts                  # Document/ShadowRoot/CSSOM 宿主
    hash.ts
  test/{unit,types,browser,fixtures}/
vue/
  src/
    index.ts
    context.ts
    global.ts
    compiler/                 # 实施 ibind 时再创建
  test/{unit,types,fixtures}/
svelte/
  src/
    index.ts
    context.ts
    global.svelte.ts
    compiler/                 # 实施 ibind 时再创建
  test/{types,fixtures}/
scripts/
  css-data/                   # schema、grammar、policy 与生成工具
  language-services/          # 保持完整工具边界
  testing/                    # 浏览器/组件/独立包消费执行器
.design/
  architecture.md             # 当前结构与约束
  roadmap.md                  # 未完成工作与验收条件
  architecture-audit.md       # 本次审计
  implementation-research.md  # 已有研究与历史记录
.research/                    # 旧探针与模板，不加入产品构建或消费测试
.github/workflows/
```

不重命名 css、token、raw、keyframes、globalCss、useGlobalCss、createStyleContext、useStyleRuntime。globalCss 是定义，useGlobalCss 是带生命周期的挂载，context 管 owner/key，runtime 管规则/缓存，职责不同。injectGlobal 明确为 core 默认浏览器实例便捷函数，暂不再添加同义入口。

## 体积探针

使用当前 dist，esbuild 0.28.2，browser/ESM/es2023/minify，入口为导入一个函数并 console.log 使其保活，gzipSync 默认压缩。没有启用源码 alias，没有修改生成策略。数字是字节，不是实际网络传输承诺，也不能由此推算运行速度。

| 入口               | minified bytes | gzip bytes |
| ------------------ | -------------: | ---------: |
| css                |         491506 |      98516 |
| createRuntime      |         491282 |      98437 |
| createStyleContext |         493129 |      98937 |
| cssVar             |           3610 |       1333 |

下一步用 metafile 归因、分别测试导入/首次生成/缓存命中成本。不要将全量导出报告的数字当作每个消费者的固定成本，也不要在没有消费验证时盲设 sideEffects:false。项目名 zerodep-css 目前不表示零第三方运行时依赖，core 明确依赖 css-tree。

## 下一阶段建议

### 阶段 3.5：基础边界整理

按可单独审查的提交组织：

1. 命名与模块职责：内部 buildStyleProgram、StylesheetBuilder/Factory、统一 containerQuery、Vue 入口拆分、适配器去掉默认 css 重导出；同步文档、补全/负例与公开类型出口。
2. 测试与工具目录：迁移夹具/执行器、梳理脚本命令和构建前置、扩大格式检查、区分当前文档与历史记录。一次迁移同时更新生成器路径、包 tsconfig、LSP 探针与 CI，防止只改目录未改工具。
3. 消费与 CI：临时 tarball 消费（不发布）、普通 Vite Vue/Svelte 官方插件构建、SSR 消费验证、Windows 快速检查、失败证据、最小入口体积报告。保持 private，不借此升级框架或引入发布流程。

退出条件：已有功能回归通过；CSS 输出/顺序/哈希与 SSR 行为不因移动文件而改变；两框架模板保留 token/raw 类型补全；消费者通过包名和正式 exports 使用，不能依赖源码路径或 workspace alias；CI 对应提交通过。命名变更是私有包 API 调整，需要文档明确，不假称完全零行为影响。

### 阶段四：显式 ibind 编译

先做两个官方编译链的最小端到端探针，再扩展表达能力；不要立即把完整 AST 转换塞进 runtime。

固定边界：普通值继续运行时重算并切换哈希 class；ibind 只改变显式绑定变量的更新路径，CSS 主体仍在运行时生成。编译器按真实 import binding 识别宏，支持导入别名且不误处理同名局部函数；维护 source map。Node/AST/插件依赖不可进入默认浏览器入口。

作者表达式候选仍是绑定变量本身，例如：

```ts
s.width.px(ibind(width));
s.transform.raw(`translate(${ibind(x)}px, ${ibind(y)}px)`);
```

第二个例子不能机械替换成 translate(var(--x)px,var(--y)px)。需要把单位放入绑定值（例如 --x: 10px，CSS 主体为 translate(var(--x),var(--y))），或采用语义正确的数值单位转换；绑定对象仍是 x/y，不改成对整个 translate 字符串做 ibind。未知的字符串拼接、引号内插值、标识符片段等应明确诊断，不静默生成无效 CSS。

首批仅支持能明确定位宿主的原生元素 class 中的 css 回调，验证同一声明多个 ibind、普通变量与绑定变量混用、两个实例不同值、单位和空值处理。脚本中定义的 class 被多个元素复用时，字符串本身不携带变量赋值，必须先建立编译期使用点映射；未证明可追踪前明确报错，不能只返回 class 却丢失绑定。

Vue 和 Svelte 分别接官方 style/元素绑定机制；同步生成 SSR 初值，清理绑定生命周期，并正确合并用户已有 style。回调局部变量、条件/循环、组件 class 透传、多根、Teleport、动态 keyframes/global 等分别列入支持矩阵，首版对不支持情形给出可定位诊断，不把它们全部默认为可提升。动态 class/global/keyframes 的普通响应式路径继续有效。

验收必须量化：只修改绑定变量，样式回调不重跑、class 不变、规则数量不增加，元素变量值与计算样式更新；修改普通变量仍重算并正确切换 class。还需双实例隔离、SSR/hydration、解绑清理、生产构建、HMR 标识、source map 和 TS/Vue/Svelte 类型诊断验证。流式 SSR 和专用元框架插件继续独立规划。

## 本轮验证与参考

本轮为源码/配置审计和体积探针，没有重跑未改动的全套测试。核对了 ea5836e 的成功 CI；未读取或修改全局配置，未修改运行时代码。

- [Node package exports](https://nodejs.org/docs/latest-v24.x/api/packages.html#package-entry-points)：消费合同包括条件与子路径，直接指向 dist 不能完整替代包名解析测试。
- [Svelte packaging](https://svelte.dev/docs/kit/packaging)：产物和消费者编译链应同时验证，尤其包含 rune 模块时。
- [GitHub workflow triggers](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow)：未来按变更范围分流时保留可靠的必需检查，不让文档/路径过滤形成无结果的检查等待。
