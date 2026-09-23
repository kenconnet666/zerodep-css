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

- 已完成决策讨论并进入目标模式。
- P1 已完成作者覆盖、raw 原生值、单位空值和主题继承的实施及本地验证。下一阶段进入 P2 的薄 core、项目入口、useCss 和统一组合。
- P1a 本地通过 check/build、generate:check、现有单元回归、TS/Vue/Svelte 独立类型负例、19 个 core 浏览器场景、双框架 SSR/hydration/原生更新/HMR；normalize 的原生 LSP 完整零错误。最终跨平台/三引擎以对应提交 CI 为准。
- 本页仅记录实际进度，尚未宣称新架构完成或最终 CI 通过。
- P1b 提交 6fe37b2 与 SSR manifest 补充修复 0600d3f 均已推送且对应远程 CI 成功；P1c 的本地结果不代表尚未提交代码已通过 CI。
- P1c 提交 574736e 的 CI 三引擎、Windows、语言服务和独立安装通过；Linux 仅因 HMR 测试的一处链式调用格式失败。P2a 同步修正并重新确认该文件格式，不把这次失败记作完整 CI 成功。

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

### raw 数字语义补正

raw(number) 只拒绝 NaN/Infinity，不再用属性元数据提前拒绝有限数字。自动绑定仍需证明数字满足属性语法；不能证明时保留直接声明，不写 inline 变量。否则 z-index:1.5 等原本在解析时失效的声明，变成 var 后会在计算值阶段失效，错误地遮蔽外部层叠值。token 与显式单位方法的参数合同保持各自校验。

本地根 check/build、170 项单元、三语言类型负例与 LSP 通过。真实 Chrome 差分覆盖直接原生声明、运行时声明和编译绑定 helper：z-index:1.5 与 font-weight:1001 保留外部有效值，opacity:2 正常钳制为 1。

独立复核补充发现：宽泛语法表不包含所有规范正文限制，例如负数 stroke-width。因此数字变量优化只覆盖已核实的常用数值属性，其他数字保留直接声明；同样处理单个数字字符串。整数属性还要求序列化后是整数 token，不能把 Number.isInteger(1e21) 当成 CSS 整数证明。定向单元与真实 SVG 层叠回归通过。依据：[Fill and Stroke 的非负宽度要求](https://www.w3.org/TR/fill-stroke-3/#stroke-width)、[CSS Syntax 整数 token](https://www.w3.org/TR/css-syntax-3/#typedef-integer)、[变量的计算值失效行为](https://www.w3.org/TR/css-variables-1/#invalid-variables)。

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

旧版对旧版控制中 runtime 差异约 -6.8%～+2.6%，Builder 约 -10.9%～+2.6%；小差异不作稳定结论。原始 first/fast/control 样本保存在 .research/performance/results/2026-09-24-normalization-*.json，复现命令为 `node --expose-gc .research/performance/builder-paired.mjs 2db10e3 <label>`；控制组额外传 --control。计时与其他测试顺序执行。
