# 运行时优先生产实施记录

决策基线：[runtime-first](runtime-first.md)。分支 codex/runtime-first，用户已授权连续实施；产品包保持 private，不自动发布 npm。

## 阶段与验收

| 阶段 | 范围                                                     | 验收                                                    |
| ---- | -------------------------------------------------------- | ------------------------------------------------------- |
| P1   | 作者层覆盖、简写关系、空值、raw 结构边界、主题 null 继承 | 有针对性的单元/类型/浏览器差分，原生 JS 执行顺序不变    |
| P2   | 薄 core、内部引擎归位、带类型项目入口、useCss 和统一组合 | 两框架类型和真实组件、运行时独立于优化插件、独立包安装  |
| P3   | 局部主题、全局共享/冲突、请求与应用生命周期、宽松诊断    | 并发 SSR、hydration、路由/卸载、宿主、资源失败恢复      |
| P4   | 编译可选快路径、稳定规则预计算、性能诊断                 | 开启/关闭优化语义一致，分路径测量，不用回退掩盖作者错误 |
| P5   | Nuxt 4、SvelteKit 2 适配包                               | 真项目开发/HMR、Node SSR、导航、生产构建和静态预渲染    |
| P6   | API/类型/目录审核、文档示例、完整回归与交付              | 五包消费、三引擎、双平台、LSP、体积/增长证据和远程 CI   |

先修复语义，再以实际热点决定实现优化。完整 runtime 不因编译预算或未知作者代码而被拒绝。保留现有可复用测试，按新合同修订过时断言，不直接删除失败场景。

每阶段完成相关检查后中文提交并推送。性能计时不与其他负载并行；正确性准备和独立检查可并行。调整范围或算法时记录理由，不把待验证候选写成已完成能力。

## 当前进度

P1—P6 已完成约定范围的实施和验收，[2c51b0f 的完整远程 CI](https://github.com/kenconnet666/zerodep-css/actions/runs/35946894347)九个 job 全部成功：双平台基础检查、三语言/LSP、三浏览器、独立消费、Nuxt 和 SvelteKit 部署。产品修复提交 05da194，清理与交接 97d79a6，CI 测试兼容性修正 e6f9508 / 2c51b0f。最终记录提交仅更新文档，未改变已验收代码；五包保持 private，未发布 npm。旧 7756c6e 的 CI 曾为 8/9 成功，不追溯改记为全绿。

### P6 最终审核与修复

- Nuxt 的上下文可被缓存代理共享或浅拷贝。宿主/输出改按真正的 event 持有，以 context 中的 WeakMap 维持跨打包模块身份；nonce 单独继承且已有宿主保持快照。新增 context 别名负例、实际内部请求与缓存 HTML 命中验收。
- 开发来源包装只用于可证明的内联函数或顶层 const 函数引用；第三方 class、数组、条件表达式与空值保持原语义。不能把可变函数声明当成恒定回调。
- 显式 debug 补齐相对文件/行列与粗粒度优化未命中原因。默认开发只保留来源，避免日志刷屏；诊断不改变原程序，也不新增业务 API。
- Nuxt 开发测试分别验证无路由规则干扰的真实同 Document HMR，以及保留缓存规则时框架原生 route-rules 全页刷新后的恢复；不拦截刷新或把 reload 伪装成 HMR。新完整流程 runId 为 3e622a82-deaa-48b3-8cb4-a3edd0225236，cleanFullPass=true。
- 删除 24 个不再适用的旧探针/示例文件，研究索引保留不可变 Git 源码链接，当前性能原始样本不删除。五包 README 加入文档链接验收，澄清适配器入口范围并更新交接、迁移与 changelog。

本轮本地通过 check/build、218 项单元、TS/Vue/Svelte 类型正负例、双框架真实 SSR/hydration/HMR、Nuxt 独立安装/审计/类型/Node/静态/开发全流程及关键文件 complete=true 的零错误 LSP。Kit 的 P5 独立部署本地与远程已通过，本轮没有改其运行时。最终远程验收见上方 2c51b0f 链接，包含本轮代码的全部九个 job。

远程补充：97d79a6 的八个 job 成功，Nuxt 路由刷新日志匹配因 Linux ANSI 颜色码误判，e6f9508 改用 Node 标准控制字符清理。后续同文件脚本/模板连续保存约 54ms，接近上游 chokidar 的 50ms change 节流窗口，证据指向第二次通知被节流；测试保存需留出同路径间隔，不用失败重试或删除 HMR 断言来掩盖问题。2c51b0f 在测试中保证同文件编辑至少间隔 120ms，保留所有 HMR 强断言，随后完整远程 CI 通过。

以下为各阶段当时的实现和验证记录；“待提交/待 CI”等描述属于该段历史时点，当前状态以本节与交接文档为准。

### P1b raw 结构边界

raw 的结构验证与属性值有效性分离：先用 tokenizer 校验完整括号、字符串、URL、注释及声明分隔边界，再保留值 token 流，不依赖属性语法表接受未知函数/值。CSS 空字符串同样交给浏览器决定有效性；null/undefined 的省略是另一个合同。

CSSTree 默认声明解析还会将 !foo 等旧 hack 当成优先级，因此使用其公开 fork 扩展声明的值读取，仅拆出标准 important，其他结构复用原解析器。已知数值/关键字不重复做 raw 扫描。raw/token 的自动变量化仍需额外证明，未知语法走原声明，不因优化失败而报作者错误。

即使声明随后被覆盖，非法 raw 值和非法属性名也立即报错，避免错误被整理阶段吞掉。CSS 输入预处理统一 CR/CRLF/FF、NUL 和孤立代理码点，使记录、hash、HTML 样式与 hydration 使用相同文本；正常 Unicode 保留。

新增用例覆盖未知函数、空值文本、自定义 token/块、!foo、转义、注释、未闭合 URL/字符串、被覆盖的坏输入、浏览器原生差分及 SSR 字符恢复。独立解析器入口经函数封装保持 tree shaking，cssVar/readTheme 小入口不应因结构解析器而膨胀。

SSR 结束标签改为转义标签名首字母，保留自定义 token 流中的 `<` delimiter 类型，大小写和字符串内容不变。P1b 本地通过 check/build、类型负例、核心浏览器与双框架 SSR/hydration/HMR；体积检查仍保留小入口 tree shaking。

### P1c 空值与动态绑定一致性

单位参数的类型统一允许 null/undefined；任一参数为空就省略整条声明，所有参数仍按 JS 原顺序求值，0 有效且 false 不作为通用省略标记。主题整体、分组、叶值的 null/undefined 都继承父值，显式 defaults 才恢复预设。

交叉复核发现旧编译路径会重复读取 raw/token 输入，并可能通过 computed/prepare 跳过动态 getter。现改为在原回调位置格式化值，用一个快照同时产生 class 与元素 style。动态绑定暂不使用静态准备缓存；复杂 style 保留运行时。先保证语义一致，后续再测量安全的优化方向。

P1c 本地通过根 check/build、153 项单元、TS/Vue/Svelte 类型负例、generate:check、体积检查、格式检查；两个框架通过 SSR/hydration、空值与有值往返、原生响应式、主题空值继承/显式 defaults、CSP、卸载和 HMR。HMR 同时检查变量优化与已有 style 时的运行时路径。绑定与编译分析文件的原生 LSP 诊断均 complete=true、零错误。完整跨平台/三引擎以本阶段提交 CI 为准。

### P2a 作者入口去除无关依赖

Css 的真实原型 getter 由引擎传入属性目录安装，不再导入完整值校验元数据。目录按数组身份弱引用去重，多个适配器目录可补齐缺少的 getter，不持有请求实例。单独生成名称表的探针会使完整引擎重复携带名称，已撤回，未保留第二份目录。

主题定义使用独立的无缓存叶值校验，接受边界与旧绑定校验差分一致；CSSTree 根入口的 tokenize 会保留完整 syntax 初始化，改用官方 tokenizer/utils 子路径，并复用现有根类型声明。伪选择器静态集合标记为纯初始化，未使用时不再残留于小入口。

同一 esbuild 浏览器入口、ES2023、minify 与 gzip 实测如下，比较基线为 P1c；这是打包体积，不能换算为执行速度或原生 CSS 差距：

| 导入        | 改前 min/gzip 字节 | 改后 min/gzip 字节 |
| ----------- | -----------------: | -----------------: |
| Css         |     103816 / 15663 |         2163 / 829 |
| defineTheme |     213316 / 61167 |       10459 / 4317 |
| css         |    506959 / 103253 |    507117 / 103326 |
| cssVar      |        3610 / 1334 |          431 / 321 |
| readTheme   |        3395 / 1172 |          216 / 175 |

大小入口分别检查模块图，避免仅用总包体积掩盖无关依赖。后续目录迁移仍须共享浏览器宿主与 @property 所有权仲裁；分别打包 Vue/Svelte 引擎不能复制这些注册表。SSR 继续按请求持有所有可变运行数据。

本地 check/build、154 项单元、三语言类型负例、双框架主题/绑定/CSP/SSR/hydration/释放、体积门禁均通过；Css 与 tokenizer 类型桥的 LSP 完整零错误。独立 tarball 消费通过两框架依赖审计、类型、客户端/SSR 生产构建及 hydration。此阶段尚未迁移公开入口，core 根入口的旧运行 API 将在 P2 后续统一移除。

### P2b 共享浏览器宿主边界

宿主 namespace 与文档级 @property 的所有权抽至轻量 host 模块，无运行引擎/解析器依赖。没有 DOM 目标的请求仍创建独立局部注册表；释放 namespace 时校验原 owner，避免旧实例删除后来接管的目标。主题定义声明只依赖一个窄 css 方法，去除对完整引擎类型的反向依赖。

真实浏览器以两个 ESM URL 实例化独立引擎，仅共享 host 模块：验证首次尚无 style 时的同 namespace 冲突、不同 namespace 的 @property 冲突、Document/ShadowRoot 交叉冲突、失败后释放重试及全部节点清理。该用例进入 browser:core，因此后续 CI 三引擎都会执行。本地根 check/build、19 项运行时/事务/上下文用例、21 项既有 core 浏览器场景、新双引擎用例、体积检查与 host LSP 完整零错误均通过。

后续公开外形收敛为模块级 createStyles 配置、每应用/请求 createHost、组件 const css=useCss()。Vue host.install 与 Svelte 根 host.provide 对接原生上下文；host 统一拥有 SSR 收集、恢复和释放，不在模块顶层创建 runtime。此段为后续实施方案，尚非已导出 API。

### P2c 项目入口与样式组合

Vue/Svelte 已新增 createStyles({cssType?,theme?})，返回绑定类型的 useCss、useGlobalCss、useTheme、provideTheme 和 createHost。默认主题可省略重复定义；显式传入其他主题仍可用。没有默认主题时类型层要求传入定义，普通对象与 getter 都由原生响应式读取，null 继承父值。全局规则和嵌套条件也继承 AppCss，无需每条 rule 重复传构造器。

host 每应用/请求创建一次，只暴露收集、恢复和释放等宿主操作。Vue app.use(host) 通过应用卸载钩子清理；Svelte 根 host.provide() 只认领根，根组件卸载/HMR 释放认领，应用入口在最终 unmount 后显式 host.dispose()。SSR 都在序列化后 finally 释放，不能在组件 SSR onDestroy 提前删规则。

css 接受多个字符串/回调，以及数组、false/null/undefined 空项，按输入顺序组合。已知类只在当前 host 内识别，canonical body 按需严格反解，回写必须相同；解析缓存最多 128 条/262144 个原文字符，单条超过 32768 字符仍可组合但不驻留。恢复的 manifest 同样可组合，动画依赖与来源保留，不重跑旧回调，不永久保存第二份完整 IR。后写 name/明确 debug 配置生效，外部类只作为 HTML class token 透传。

类名字符串代表调用时的样式快照；复制编译生成的 class 字符串不会自动复制原元素上的 inline 变量。组合优先使用普通函数和 if/else/switch，数组/空项只是便利能力。单回调仍使用原有 prepared/结果缓存，不因绑定视图而退回完整组合路径。

本地根 check/build、三语言类型负例、163 项单元、既有双框架 SSR/hydration/HMR、新项目入口的 SSR/真实浏览器生命周期测试、恢复类组合的 core 浏览器场景及体积检查通过。新入口已导出；旧 useStyleRuntime/显式 context 入口和既有样例尚在过渡，下一步统一迁移删除，不能把当前兼容过渡当成最终 API。项目跨模块 useCss 的编译优化也尚待后续保守分析，未识别时运行时仍可完整工作。

独立 tarball 消费也通过，包含新 createStyles 的 NodeNext 类型验证、默认主题/派生类负例，以及两框架客户端和 SSR 构建、hydration。此前 P2a/P2b 提交 02bd575/585382a 的完整远程 CI 均已成功；本阶段 CI 仍以新提交运行结果为准。

### P2d 移除旧适配器 API

两个框架根入口统一为 createStyles 与作者定义能力；旧 useStyleRuntime、standalone 主题/global/context 操作和 globalCss 不再公开。组件、SSR/hydration/HMR 驱动、独立包消费与负例均已迁移，不依赖旧入口兼容。删除不再生成的 Vue useStyleMemo 辅助模块及其包导出；core 的独立引擎入口仍待 P2e 处理。

createStyles 四个明确重载要求作者类、默认主题的泛型必须由实际构造器/定义支撑。host.stats 提供轻量统计；dispose 清理对应用/根 context 的额外引用。无同名 provider 时项目预设同样参与 useCss，已有 provider 优先。

编译器只认同 SFC 的直接 createStyles 来源，支持对象方法、解构 hook 与直接链三种形态；未知配置和跨模块导入保守运行时。raw 引用对象交给原 Builder 校验，修复 Proxy 描述符被优化器额外读取而改变后续声明的问题。

本地根 check/build、167 项完整单元、后续新增 Proxy 回归的定向单元、三语言负例、双框架 SSR/hydration/HMR/项目宿主、独立 tarball 与体积门禁通过。迁移文档与换机入口已重写。P2c/P2d 提交 cfd6b17/82bcec3 的远程 CI 均已通过。

### P2e 内部引擎与独立消费

完整引擎与测试迁至 internal/runtime，core 只保留共享作者模型、主题定义、轻量值边界和宿主身份。构建先产出 core，再按模块生成引擎并复制到 Vue/Svelte 的 dist/runtime；适配器通过包内 #runtime 映射读取，Node 编译器和编译产物 helper 分属各框架独立子路径。两份引擎共用 core 的 Css、变量/主题标记和 DOM 所有权，避免跨适配器身份冲突。

源码检查使用 zerodep-source，发布构建解析包内声明；移开全部 dist 后的根 check 已通过，避免用陈旧产物遮蔽干净 CI 问题。引擎类型/单元/浏览器夹具归属 internal/runtime/test，命令改为 test:browser:runtime，不保留旧命令别名。新 LSP watcher 递归覆盖内部运行时，完整三语言语义验收通过。

独立消费者暴露两项包边界问题并驱动修正：内部共享桥不再多导出 tokenizer 的第三方类型；完整解析器统一从官方 css-tree/dist/csstree.esm 读取，避免 Svelte SSR 二次打包后 createRequire 相对 JSON 路径失效。保留原类型声明，未要求应用配置额外 external。模块图断言禁止同时保留完整源码解析器与便携解析器。

便携解析器与 core 轻量 tokenizer 在完整引擎中有少量重复代码；完整 css 入口从迁移后的 510960 B / 104874 B gzip 变为 516136 B / 106805 B gzip，增加约 1.8% gzip，换取无额外配置的 SSR 打包兼容。原始体积预算保持不变，三个完整引擎入口的 gzip 预算各增加 3000 B；Css/defineTheme/cssVar 等小入口预算不变。这不是运行速度测量，P4 仍需单独诊断。

本地根 check/build、无 dist 检查、生成一致性、172 项单元、三语言类型负例与 LSP、25 个运行时浏览器场景、独立引擎共享宿主、双框架 SSR/hydration/HMR/项目宿主、独立 tarball 的 NodeNext 类型与生产构建均通过。最后统一解析器导入后另通过组合/事务/跨引擎身份定向回归、模块图和体积检查，再次完整通过两框架独立消费者。生产依赖审计无已知漏洞；成功消费者自行清理。本次失败消费者临时目录 zerodep-consumer-tBeOVK、zerodep-consumer-LsYPcY、zerodep-consumer-9E6gze 的定点清理被自动审批策略拒绝，保留在系统临时目录，不绕过拒绝。P2e 提交 5d46762 的远程 CI 已通过（Windows/Linux、三引擎、LSP 与独立消费者）；此前 558a27a/8f882d1 两次 raw 修复的远程 CI 也已通过。

### P3a 全局共享与宿主释放

同业务 key、同序列化正文及动画依赖共享一个固定槽位，组件各持独立租约；最后一个租约释放才删除规则，旧租约重复释放不会影响同 key 后来重建的槽位。SSR 只记录 key→slot，hydration 可重新建立不同数量的 owner。共享验证直接复用 runtime 的单次编译与完整宿主检查，冲突、无效 CSS 和外部 DOM 删除失败均不增加 owner。

多 owner 期间只接受同内容更新，剩单 owner 后可以更新。动态全局由根组件一次声明，不为同步批量改写引入第二套调度；冲突信息包含业务 key 与槽位。raw 声明值的空白 token 保持原样，仅结构规范化一致的正文才共享。

生命周期审计发现提前 host.dispose 会留下全局 watcher/effect，后续状态变化先求值工厂再报失效。现由 context 提供内部释放订阅，框架 hook 随组件或 host 的较早释放停止；正常组件卸载会退订。清理失败仍执行其它 cleanup 并释放 runtime，最终汇总错误。创建新 hook 时先检查 host 活性，失效时不执行业务工厂。

本地根 check/build、177 项单元、双框架完整 SSR/hydration/HMR 与项目宿主、共享样式外部删除失败回归、体积检查和原生 LSP 通过。真实组件验证 SSR 两个声明者共享一个槽位、移除首个保留样式、移除最后一个删除、重新挂载可恢复；提前 host.dispose 后改变仅由全局工厂读取的响应式值，不再增加工厂调用次数。

P3a 提交 4cbcdba 的完整远程 CI 已通过。

### P3b 宽松增长诊断

使用 esm-env 判定正常开发/生产条件，不依赖可选编译插件；根开发依赖与两个适配包的直接依赖均固定版本。默认开发浏览器从 10000 条逻辑记录开始翻倍提示，warnAt 可调整或以 false 关闭；maxRecords 仍是显式硬上限，默认无限。普通 SSR、生产及未知环境静默，host debug:true 可显式开启，包括服务端诊断。

只保存每 host 的下次提示阈值，不持有逐条诊断表或跨请求去重状态。成功事务且新增记录后才提示，恢复时跳过已有数量；命中、同槽更新、失败注册和计数回落均不重复刷屏。console.warn 异常被隔离，不能把已注册样式变成失败调用。默认提示不自动收集源码。

本地根 check/build、184 项单元、26 个运行时浏览器场景、跨引擎共享宿主、真实 development/production 包条件、LSP、格式及体积检查通过；两框架独立 tarball 的生产依赖审计、NodeNext 类型、构建、SSR 与 hydration 通过。当前完整 css 入口为 517491 B / 107490 B gzip，仍不代表页面性能；本阶段 CI 待对应提交验证。

P3b 提交 f63ac11 的完整远程 CI 已通过。

### P4a 测量迁移与两处热路径优化

横向探针已迁到真实 createStyles/host，Vue/Svelte 分别测量，并记录实际静态准备、变量绑定或运行时回退。全新值场景现在每行每帧都不重复，使用较小但同行一致的批数；不再把每批仅新增一个值的滚动集合称为全新负载。原生主题由共同 defaults/tokens 独立序列化成 CSS，不调用引擎，所有主题对照有相同叶数。

Node 采样显示重复值扫描和缓存处理有成本。实现精确 ASCII var(--name) 结构快路径，以及无来源内部主题键的原字符串复用；不引入新缓存层、不跳过业务工厂/可观察元数据读取。隔离源码成对测量两次，完整 snapshot 与回调次数一致；相关场景下降约 18%—25% / 29%—32%，其它小差异不作结论。两次横向 benchmark 的依赖锁完全一致，当前结果见 performance.md 与提交的原始样本。

测量也证实自动变量不保证每次更快：16 个循环值时 class 缓存更快；持续全新值时自动变量保持一条规则，避免运行时规则不断增加。框架调度、CSS 变量更新和新规则注册分开解释，不承诺等于原生 CSS。P4 仍有编译写法和后续审核工作，尚未宣布全部目标完成。

本地根 check/build、186 项单元、双框架 SSR/hydration/HMR、26 个运行时浏览器场景及宿主/诊断场景、体积与文档链接检查通过。两项产品变更的净实现很小，不为性能新增状态管理。完整 css 入口 517610 B / 107549 B gzip；新性能文档替换了过时结论，旧内容可从 Git 历史查询。

### P4b 简短回调与单位计划复用

根部及已支持嵌套结构的单表达式箭头复用块式回调验证，支持静态准备或动态单位/值绑定；异步、参数默认值、未知调用和动态结构继续运行时。生成的单位约束数组提升至组件初始化，用户值表达式与值数组仍在原声明位置求值，不跨条件或改变失败顺序。

本地根 check/build、59 项编译定向测试及 194 项完整单元、双框架真实 SSR/hydration/HMR/项目宿主通过。测试覆盖短箭头静态/嵌套、getter 单次读取、守卫分支、源映射与近似写法回退。没有新增业务 API，也未把常量分配减少直接宣传为整体页面提速。

P4a 提交 94a7386 与 P4b 提交 050d075 的完整远程 CI 均已通过。

### P4c 新 class 注册复用解析结果

compileProgram 在同一次 AST 解析中完成结构验证；宿主判定该 ID 尚不存在时，顺便生成本次事务的规则文本及注册声明。commit 只在主记录引用未变化时复用，依赖、组合、global 与 hydration 保持原路径。已有 ID 仍验证内容合并及 DOM 宿主，缓存剥离一次性检查结果，不增加持久 AST 或额外规则字符串缓存。

探针比较无条件生成、闭包延迟和仅新 ID 生成三个候选，选择最后一个。两轮最终 Node 注册探针中新单属性耗时下降约 15%—31%、新嵌套约 16%；旧对旧有约 -7% 至 +14% 波动，重复动画/组合的小差异不作结论。详见 performance.md，不将 Node 注册数字换算为页面提速。

本地根 check/build、195 项单元、26 个运行时浏览器场景及独立宿主/诊断场景、双框架 SSR/hydration/HMR/项目宿主通过；runtime 与 serialize 原生 LSP 均 complete=true、零错误。未改变公开 API 或 manifest 格式，当前阶段远程 CI 待提交后运行。

本轮六个隔离探针目录（test-results/cache-paired 下的 p4c-*-registration）的清理被自动审批审查以 blocked by policy 拒绝，保留本地，不绕过；原始 JSON 已独立收录到研究记录，临时打包文件不提交。

P4c 提交 57f3615 的完整远程 CI 已通过。

### P5 元框架与独立部署

新增 private 的 @zerodep-css/nuxt 与 @zerodep-css/sveltekit；它们以 peer 复用现有 Vue/Svelte 适配器，不复制另一份引擎，也不重复导出业务 CSS API。依赖精确版本由 workspace catalog 管理，根构建在 Vue/Svelte 及 compiler 之后生成元框架产物。

Nuxt 4.5.2 模块注册早期 app 插件和 Nitro hook；每请求持有独立宿主，render:html 在所有 app:rendered 钩子后收集，随后释放，重定向/错误/关闭路径有清理兜底。浏览器在挂载前恢复，首次 Suspense resolve 检查认领，路由导航复用应用宿主。nonce 通过显式 setStyleNonce 中间件接入；compiler 默认关闭，开启时复用既有可选优化器。

Nuxt 根 App 的 Suspense 在 HMR 时先 setup 新实例、再卸载旧实例，公开卸载钩子无法抢在新全局声明前释放。采用 README 中的客户端 hot.data 显式单根租约交接，不修改真实多 owner 冲突规则；脚本更新按卸载再挂载处理，ID/相对顺序和失败后的旧样式不承诺热替换等价。纯模板更新不进 setup，不清理；不能用无条件 hot.dispose 代替。实际脚本/模板 HMR、同 Document、CSSOM 与可选编译命中均已验证。

Kit 2.70.3 使用 Node AsyncLocalStorage 和根 provideStyles。普通错误与 error(400) 都可能重渲染根布局，而后者绕过 handleError；每次新根创建新收集宿主，失败树全局样式不进入错误页。app.html 的显式 head 标记避免猜测 HTML 关闭标签。Kit 已 await 完整组件 render 后才 transform；后续 deferred chunks 仅序列化数据，因此直接返回原 Response、在收集结束后释放，不额外缓冲 body 或接管数据流。

独立 tarball 应用暴露并修正了 Nuxt exports 中 null 条件不被其解析器接受、Windows 临时目录长短路径分裂、测试 Node 路由被预渲染文件遮蔽和错误响应内容协商等接入问题。Kit 的真实生产审计发现 cookie 0.6 低危参数校验漏洞，使用仅针对 Kit 的 0.7.2 override，并验证合法序列化及非法 name/path/domain 拒绝；该 override 必须由使用对应 Kit 版本的应用配置，不能宣称库会自动传播它。

本地五包根 check/build、202 项单元、新包 LSP 与格式检查通过。Nuxt 的默认完整流程报告 cleanFullPass=true，覆盖独立生产审计/类型/单框架身份、并发 SSR、nonce、错误/重定向、hydration/SPA、开发 HMR 与 compiler、generate 后静态 hydration。Kit 覆盖同类独立身份/审计/类型、并发 SSR、HTTP 与普通异常隔离、异步子组件、deferred body 中止后恢复、CSR、根/页面 HMR、Node-free 浏览器产物及 adapter-static hydration。成功夹具自行清理；早期失败夹具仍保留用于本阶段诊断，不提交生成产物。

### raw 数字语义补正

raw(number) 只拒绝 NaN/Infinity，不再用属性元数据提前拒绝有限数字。自动绑定仍需证明数字满足属性语法；不能证明时保留直接声明，不写 inline 变量。否则 z-index:1.5 等原本在解析时失效的声明，变成 var 后会在计算值阶段失效，错误地遮蔽外部层叠值。token 与显式单位方法的参数合同保持各自校验。

本地根 check/build、170 项单元、三语言类型负例与 LSP 通过。真实 Chrome 差分覆盖直接原生声明、运行时声明和编译绑定 helper：z-index:1.5 与 font-weight:1001 保留外部有效值，opacity:2 正常钳制为 1。

独立复核补充发现：宽泛语法表不包含所有规范正文限制，例如负数 stroke-width。因此数字变量优化只覆盖已核实的常用数值属性，其他数字保留直接声明；同样处理单个数字字符串。整数属性还要求序列化后是整数 token，不能把 Number.isInteger(1e21) 当成 CSS 整数证明。定向单元与真实 SVG 层叠回归通过。依据：[Fill and Stroke 的非负宽度要求](https://www.w3.org/TR/fill-stroke-3/#stroke-width)、[CSS Syntax 整数 token](https://www.w3.org/TR/css-syntax-3/#typedef-integer)、[变量的计算值失效行为](https://www.w3.org/TR/css-variables-1/#invalid-variables)。

raw 字符串变量化也对负的 number、dimension 和 percentage token 保守回退；属性语法表能匹配 `<length>` 等基础类型，却未必表达 `stroke-width`、`border-width` 或 `line-height` 对负值的正文限制。负值合法的属性同样保留直接声明，只减少优化；有限数值 opacity 仍可走钳制快速路径。真实浏览器直接声明与 var 替换差分覆盖这些负维度边界。

### P1 覆盖边界调整

交叉复核发现：把所有后写长属性收齐后删除早期简写，会让 important 简写在“补齐第四边”时突然消失，从而改变另外三边；任意 raw/var 简写也不能可靠拆开。因此采用明确、可维护的边界：**标准化同名属性（含规范明确的 legacyAliasOf）直接后写替换，不考虑前 important；不同属性的简写/长属性及 all 保留原始声明顺序，交给浏览器处理原生层叠。**

例如前 margin-left:2px、后 margin:red，会保留两条，浏览器忽略无效的简写；前 margin:4px !important、后普通 margin-left:1px，仍遵循不同属性间的原生优先级。同名 width:50px、后 width:red 则删除前者，不恢复已删声明。此调整避免猜解新 CSS 语法和不连续结果，不影响普通简写/长属性的先后效果。

上下文采用规范化语法结构：统一可证明的空白形式及条件与选择器的嵌套位置，layer/scope 等有序边界保留。不交换 selector 链顺序，不做任意逻辑等价推断，如 min-width 与 width>=、不同伪类等价表达式。伪元素列表中的内部 & 也不能一概折叠为父上下文。

### P1 初步性能诊断

使用既有 builder-paired 探针，基线 2db10e3，Node 24.18.0，同进程预热后 20,000 次、7 轮交替取中位数，输出结构/完整 snapshot 等价才计入结果。此探针只含无冲突静态结构与有限值，不是页面性能或全部新覆盖语义的 benchmark。

| 完整 runtime 场景 |      基线 | 加入快速排除后的实现 |
| ----------------- | --------: | -------------------: |
| 单属性            | 153.92 ms |            160.96 ms |
| 三属性            | 245.35 ms |            269.86 ms |
| 嵌套              | 274.23 ms |            308.55 ms |

初版对每个子树重复整理，单属性/三属性/嵌套 runtime 相对基线约增加 35%/21%/36%。现改为完整构建仅整理一次、无重复属性跳过上下文处理、无覆盖复用原树、语法缓存属于各 runtime 并在 dispose 清理。新功能仍有开销，不能宣称运行时性能优化已完成；后续继续分析 Builder/键/序列化的整条路径。

旧版对旧版控制中 runtime 差异约 -6.8%～+2.6%，Builder 约 -10.9%～+2.6%；小差异不作稳定结论。原始 first/fast/control 样本保存在 .research/performance/results/2026-09-24-normalization-*.json。旧 builder-paired 脚本只适用于对应历史 API，已从当前工作树清理，[清理前源码](https://github.com/kenconnet666/zerodep-css/blob/7756c6e/.research/performance/builder-paired.mjs)保留供追溯；现行复测入口见 performance.md。
