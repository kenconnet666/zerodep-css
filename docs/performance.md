# 性能对照与未解决项

本页保留历史横向对照与后续同机优化证据，不表示所有性能问题已经解决。不同基准的回调和机器不同，不能直接拼接其数值计算提升倍数。

## 2026-09-23 热路径成本研究（尚未修改生产实现）

研究基线 87807d1。Node 24.12.0，同一进程、每项预热 2,000 次，计时 20,000 次，7 轮交替顺序取中位数；计时前主动 GC，CPU 采样另行执行，不计入下表。普通回调持续执行，命中有限的 16 组结果。本轮只新增研究探针与文档。

| 场景   | 完整 runtime | 单独 Builder | 原键生成＋查询 | 紧凑键原型生成＋查询 |
| ------ | -----------: | -----------: | -------------: | -------------------: |
| 单属性 |    141.08 ms |     71.69 ms |       40.70 ms |             23.39 ms |
| 三属性 |    219.90 ms |    110.35 ms |       68.05 ms |             36.61 ms |
| 嵌套   |    242.68 ms |    138.26 ms |       67.58 ms |             36.16 ms |

这些是独立实验，不能直接相加/相减得到精确占比。Builder 实验仍创建真实 Css 实例和不可变结构；键实验使用预先构建的定义，所以不能把其收益当成完整 runtime 的同比收益。CPU 源码映射采样集中于 builder.ts 的 declarations/style、Css 构造与代理访问，以及 runtime.css；少量解析采样来自采样期间的初始化，而非已命中的计时循环。

研究发现与候选：

1. Builder 在空回调时仍需初始化结构 helper、检查名字冲突、建立 property 容器、真实 Css 实例及多个 Proxy。空 Builder 也花费约 32.04 ms/20,000 次。可研究延迟创建结构 helper、一次验证固定元数据，但不能把这一整段成本全部归给 helpers。
2. 属性读取目前经过 Css Proxy、原型 getter、construction.read、Reflect.get 和 property 容器 Proxy。仅在研究 bundle 中试验直接 reader，保留作者 Css Proxy、私有字段、继承和描述符 Proxy；单属性 141.08→129.95 ms，三属性 219.90→204.32 ms，嵌套 242.68→238.57 ms。收益有限，不支持为此推翻真实类模型。
3. 普通缓存键目前序列化完整 IR 对象，重复携带字段名。紧凑 tuple 编码在独立键实验中减少约 43%–46% 耗时，没有新增缓存；但尚未接入 runtime，也没有证明完整身份等价。后续必须覆盖 literal/raw/cssVar、缺失值与 null、name/debug/source、顺序、动画依赖和缓存预算，不能简单换成短哈希。
4. 固定样式控制中，普通调用 134.55 ms、每次 prepareStyle 包装 79.33 ms、复用同一准备函数 41.89 ms。Vue 现有静态模板转换确实把 prepareStyle 留在 class 表达式内。候选是把安全准备函数移到组件初始化处复用，而继续在使用点调用 css，保留条件求值时机、runtime 所有权检查和 HMR 失效。

不建议直接缓存任意用户回调、池化 Css 实例、删除生命周期检查或自动把所有 css 调用移到模块级。也不能从 Node 静态控制组推断浏览器整体提升 47%；Svelte 无相关依赖时本来就不会反复求值。

直接 reader 原型只存在于 esbuild 的研究 onLoad 转换中，未写回 core；基础对照涵盖继承/私有字段、嵌套、命名/诊断、font-face 与构建结束后的失效检查，但不等于完整消费者/三引擎验收。紧凑键只测了这四类定义（含空定义），不作为可发布实现。

建议下一步先做 Vue 安全准备函数复用和 Builder helper 延迟初始化的真实组件探针，再决定是否实施紧凑结果键；每项单独比较。接入时仍优先使用框架原生 computed/$derived，不增加独立响应式缓存。

复现：node --expose-gc .research/performance/hot-cost.mjs repeat。原始样本与采样摘要见 .research/performance/results/2026-09-23-hot-cost.json；完整 cpuprofile 在忽略的 test-results/hot-cost 下。研究过程不改动生产源码，也未把 Node 原型结果当成浏览器收益。

## 2026-09-23 扩展框架对照与注册事务优化

对照覆盖 Emotion/goober 运行时、vanilla-extract 静态提取、UnoCSS generator/preset-mini 的真实构建产物、vanilla-extract 静态 CSS + assignInlineVars 动态 helper，以及本库自动优化/纯运行时路径。UnoCSS 本次使用构建期 generator，不代表它只具备编译期能力。

版本固定在 benchmark catalog：UnoCSS core/preset-mini 66.10.5、vanilla-extract/dynamic 2.1.5，其余对照版本沿用历史基线。依赖只装入独立临时目录，不进入产品依赖。UnoCSS 关闭 preflight，断言匹配 17 个候选，并在浏览器核对全部元素宽度。

下表为修改后的横向结果：Node 24.12.0、Chrome 153.0.8010.52，200 元素，5 批预热、30 批更新、5 轮轮换次序中位数。更新含调度和布局刷新，不测网络、首次 JS 解析、绘制或构建耗时。

| 路径                               | Vue 更新 ms | Svelte 更新 ms |
| ---------------------------------- | ----------: | -------------: |
| 原生有限类名                       |        29.9 |           31.1 |
| UnoCSS 有限类名                    |        27.3 |           31.6 |
| vanilla-extract 有限类名           |        28.0 |           31.6 |
| Emotion 对象调用                   |        35.4 |           42.8 |
| goober 对象调用                    |        36.3 |           39.2 |
| zerodep 普通运行时                 |        63.0 |           75.5 |
| 原生变量                           |        58.9 |           64.0 |
| UnoCSS 变量类 + 原生 style         |        54.6 |           62.5 |
| vanilla-extract + assignInlineVars |        66.9 |           74.1 |
| zerodep 自动变量                   |        66.3 |           67.9 |

静态提取/有限类名路径接近原生；本库自动变量路径更适合与变量更新比较。普通运行时与 Emotion/goober 仍有差距，不能把此次冷态优化说成热路径全面追平。Svelte 的 assignInlineVars 使用 helper 的 toString 交给 style 属性，Vue 使用对象 style，这些属于各框架的实际接入成本。

### 耗时定位与保留的改动

临时插桩只进入探针 bundle，正式计时不带插桩。以 447acd1 为旧源码：500 条新普通规则，Node 路径完整 stylesheet 解析为 1,500 次；修改后 1,000 次。嵌套规则为 2,000→1,500 次。纯命中场景两版都没有重新解析。浏览器普通新记录还消除 sheet.insert 中的一次重复解析，库内完整 stylesheet 解析由每条 4 次降至 2 次；值/声明等解析保持不变。

独立 CPU 采样中，冷态嵌套场景约七成样本经过 CSSTree 调用链。这是 inclusive 采样，不表示整个页面七成时间属于解析器，也不是精确的函数独占耗时比例。

实现只合并事务内部的工作：一次 inspectStylesheet 得到规则列表和 @property 注册信息，资源冲突检查和 CSSOM 插入共享结果。没有新增缓存，没有移除编译/输入验证、宿主检查或失败回滚，也不改 manifest/hash。恢复记录保留专门的只读注册检查，避免为恢复路径生成无用的规则字符串。

同进程 Node 对照（5 轮中位数）为普通新规则 82.81→67.95 ms，嵌套新规则 171.78→146.20 ms。恢复探针为 48.34→51.77 ms，热重复为 26.20→26.61 ms，这两项不宣称收益；最初恢复路径曾有额外生成开销，已撤回该部分。原始样本随报告保留。

真实 SFC 成对对照增加每批 200 个全新值的场景，先分别预热两版模块，再预热 1 批、计时 5 批（不要与上方 30 批横向数据混比），最后共 1,400 条规则：

| 框架   | 旧→新更新 ms |  下降 | 旧→新挂载 ms |
| ------ | -----------: | ----: | -----------: |
| Vue    |  134.1→106.9 | 20.3% |    23.1→17.6 |
| Svelte |  135.3→103.2 | 23.7% |    24.8→19.6 |

相同旧代码对照的更新波动约 -3.6%～+3.9%。已有类名/主题热路径没有稳定收益；未充分预热时曾观察到较大差异，现已增加模块预热，并保留未预热及控制组报告，不据此宣称零回归或通用提速。成对测试比较完整 manifest、class、计算样式、用户回调次数，并检验禁用样式表和卸载清理。

### 复现与后续方向

依次执行 pnpm build、pnpm research:compare；成对探针命令如下：

    node --expose-gc .research/performance/pipeline-paired.mjs 447acd1 repeat
    node .research/performance/framework-paired.mjs 447acd1 repeat
    node .research/performance/framework-paired.mjs 447acd1 control --control

计时顺序运行，不并发构建/其他基准。framework-paired 现增加模块预热和 runtime-new 场景；旧报告按对应提交时的脚本理解。证据位于 .research/performance/results/2026-09-23-registration-*：横向数据、版本/依赖锁、修改前数据、解析计数与采样摘要、成对/控制组及未预热结果。完整 cpuprofile 位于忽略的 test-results，可由脚本重新生成。

本轮保持作者写法、运行时复杂回退和原生响应式缓存不变。后续优先研究普通运行时 Builder/结果键成本和 Vue 静态表达式的重复调用；CSSOM 合并段与全面静态提取不在本轮实施范围。体积门禁仍通过，完整运行时约 101 KB gzip，体积差距仍未解决。

官方接入依据：[UnoCSS guide](https://unocss.dev/guide/)、[vanilla-extract dynamic](https://vanilla-extract.style/documentation/packages/dynamic/)。

## 2026-09-23 原生主题缓存优化

基线为 `9cd39b9`，使用 Git 中的基线源码与当前源码，在相同依赖、同一进程/浏览器中交替运行。作者 API 不变，运行时能力不缩减。

- Vue 用 computed、Svelte 用 $derived 保存纯主题声明准备结果，只在有效主题变化时重算；没有新增 watcher/effect root 或自有主题结果缓存。
- core 复用已有 256 项 runtime 结果缓存，并仍在每次使用时检查注册与宿主。准备键使用完整声明内容，最大键长度仍为 64 KiB；超大内容继续正常求值。
- 只有验证过并深冻结的主题快照可以免于重复验证。内部 WeakMap 仅记录 snapshot 对应的 schema 身份，弱引用不持有请求对象，也不保存 CSS/主题计算结果；外部对象和不同 schema 仍验证。
- Builder 仅保留固定关键字集合的按需索引。单位索引没有稳定收益，已撤回；没有实例池化、用户 getter 缓存或按函数引用跳过回调。

真实 Vue/Svelte SFC 的同机对照：Node 24.12.0、Chrome 153.0.8010.52，200 元素，预热 5 批，测量 30 批，交替 5 轮中位数。包含原生调度与布局刷新；不含网络下载、初次 JS 加载或真实绘制。主题场景使用 ThemeCss，并写入动态宽度、主题颜色和间距；切换场景每批同时切换亮暗主题。它与下方旧的横向基准不是同一份回调。

| 场景         | Vue 旧→新（ms） | Svelte 旧→新（ms） |
| ------------ | --------------: | -----------------: |
| 普通运行时   |     67.7 → 73.3 |        74.8 → 70.4 |
| 固定主题     |   474.2 → 137.9 |      481.5 → 156.0 |
| 每批切换主题 |   487.4 → 145.1 |      489.2 → 154.1 |

主题更新耗时下降约 68%–71%；普通运行时变化不一致，视为波动，不宣称整体运行时普遍提速。固定主题挂载中位数 Vue 21.0→10.8 ms，Svelte 21.4→11.5 ms。每轮都比较完整 manifest、class、计算样式和用户回调次数；计时区外还检查主题缓存命中后禁用样式表仍会被拒绝、卸载没有残留规则。

Node 对照每项 2,000 次、5 轮：token 路径 30.54→21.23 ms；原生 computed 固定主题 196.38→39.39 ms，逐次切换主题 438.77→305.98 ms。不经原生准备的 core 作用域保持逐次求值，其变化在波动范围内。最初的无改动控制组有约 10%–18% 波动，因此小幅变化未计为收益。

最初方案在逐次切换探针中出现退步，随后修正了重复快照验证，并让基线/当前都承担同样的原生主题解析；上述数字仅来自最终方案。普通回调执行次数与旧版本相同，输出/哈希/注册顺序均有断言。

复现（脚本自行构建两版源码，不使用可能过期的 dist）：

```powershell
node --expose-gc .research/performance/runtime-paired.mjs 9cd39b9 repeat
node .research/performance/framework-paired.mjs 9cd39b9 repeat
```

两条计时命令应顺序执行，期间不要并发构建或跑其他基准。原始样本已归档到 `.research/performance/results/2026-09-23-native-cache-node.json` 和 `2026-09-23-native-cache-frameworks.json`。后者记录生产源码 diff hash；相关脚本和测试随代码提交。

createRuntime 单入口体积为 498683 / 100868 字节（minify/gzip），仍约 100 KB gzip；没有以删减能力换取速度，本轮未解决首包体积问题。

## 历史横向对照：方法与环境

- 环境：win32，Node v24.18.0，Chrome 153.0.8010.53；Vue 3.5.43、Svelte 5.57.0。
- 对照：Emotion CSS 11.13.5、goober 2.1.19、vanilla-extract 1.21.2，官方 esbuild 插件 2.3.22。
- 两套真实 SFC 分别经过官方 Vue/Svelte 编译器；我们的自动路径额外验证确实生成绑定/准备代码，vanilla-extract 使用实际提取的 CSS。
- 每套 200 个元素，5 批预热后执行 30 批状态更新，5 轮轮换次序取中位数。Vue 等待 nextTick，Svelte 等待 tick，每批强制布局刷新。
- 挂载数值表示库已加载、JS 已预热后的新实例挂载；没有测网络下载、JS 首次解析、FCP、真实绘制和复杂业务页面。计时不并行竞争 CPU，依赖准备和构建并行。
- 有限值场景循环 16 个宽度；growing 场景各元素取不同整数值且逐批增长，运行时类名方案最终累计 235 条规则。它不是无限唯一值的长期压力测试。
- 主题对照使用同一份固定主题变量，主题本身不切换。native/emotion/goober 的主题类预先声明；我们的 scoped-auto 使用标准 Css，theme-class 使用 ThemeCss 并保留运行时回退。

## 本机结果

单位均为毫秒；更新是 30 批总时间，原生/编译产物的规则数 0 表示测量时没有新增规则，并非没有预加载 CSS。

| 场景                    | Vue 挂载 | Vue 更新 | Svelte 挂载 | Svelte 更新 | 运行时规则数 |
| ----------------------- | -------: | -------: | ----------: | ----------: | -----------: |
| native-static           |      1.5 |      2.1 |         1.8 |         0.2 |            0 |
| vanilla-static          |      1.4 |      1.9 |         1.7 |         0.2 |            0 |
| zerodep-auto-static     |      2.3 |      9.3 |         2.8 |         0.3 |            1 |
| zerodep-runtime-static  |      3.9 |     38.8 |         4.5 |         0.3 |            1 |
| emotion-static          |      1.9 |      7.3 |         2.3 |         0.3 |            1 |
| goober-static           |      1.7 |      6.8 |         2.2 |         0.3 |            1 |
| zerodep-once-static     |      2.2 |      1.9 |         2.1 |         0.3 |            1 |
| emotion-once-static     |      1.6 |      1.9 |         1.8 |         0.2 |            1 |
| goober-once-static      |      1.4 |      1.9 |         1.9 |         0.3 |            1 |
| native-vars             |      1.9 |     71.5 |         2.5 |        72.5 |            0 |
| vanilla-vars            |      1.9 |     71.0 |         2.6 |        73.9 |            0 |
| emotion-vars            |      2.1 |     75.2 |         2.7 |        76.1 |            1 |
| goober-vars             |      2.2 |     72.3 |         2.7 |        72.4 |            1 |
| zerodep-auto            |      3.5 |     80.5 |         4.8 |        81.3 |            1 |
| native-classes          |      1.5 |     32.3 |         1.8 |        32.4 |            0 |
| vanilla-classes         |      1.5 |     31.5 |         1.7 |        32.8 |            0 |
| emotion-object          |      2.2 |     38.0 |         2.9 |        42.8 |           16 |
| goober-object           |      2.1 |     38.2 |         2.8 |        43.0 |           16 |
| zerodep-runtime         |      7.2 |     70.0 |         8.9 |        88.7 |           16 |
| native-growing-vars     |      2.8 |     72.0 |         3.5 |        73.8 |            0 |
| vanilla-growing-vars    |      2.8 |     72.0 |         3.6 |        77.1 |            0 |
| emotion-growing         |      4.1 |     78.7 |         6.0 |        82.2 |          235 |
| goober-growing          |     16.8 |     57.8 |        18.6 |        64.1 |          235 |
| zerodep-growing-auto    |      4.5 |     80.1 |         5.5 |        79.3 |            1 |
| zerodep-growing-runtime |     33.8 |    133.4 |        34.9 |       147.1 |          235 |
| native-themed-vars      |      2.2 |    135.8 |         2.7 |       133.4 |            0 |
| native-themed-classes   |      1.8 |     35.0 |         2.1 |        35.9 |            0 |
| emotion-themed          |      2.4 |     40.7 |         3.1 |        45.5 |           16 |
| goober-themed           |      2.2 |     41.7 |         3.1 |        48.6 |           16 |
| zerodep-scoped-auto     |     21.3 |    136.9 |        24.5 |       140.0 |            2 |
| zerodep-theme-class     |     23.7 |    483.0 |        25.6 |       525.6 |           17 |

场景说明：auto 为实际自动编译路径；runtime 为不启用 CSS 插件的回退；vars 为已创建类名加原生 CSS 变量；object 为每次调用 CSS 对象 API；once-static 为初始化生成一次静态类名后复用。

## 结论与剩余差距

- vue：自动变量路径比原生变量基线多 12.6%；普通运行时类名更新耗时为原生有限类名切换的 2.17 倍、Emotion 对象路径的 1.84 倍。
- vue：ThemeCss 回退耗时为对应原生主题类名路径的 13.80 倍，仍是明显瓶颈；scoped-auto 的热更新接近原生主题变量，但挂载仍有额外成本。
- svelte：自动变量路径比原生变量基线多 12.1%；普通运行时类名更新耗时为原生有限类名切换的 2.74 倍、Emotion 对象路径的 2.07 倍。
- svelte：ThemeCss 回退耗时为对应原生主题类名路径的 14.64 倍，仍是明显瓶颈；scoped-auto 的热更新接近原生主题变量，但挂载仍有额外成本。
- 静态类名初始化一次后复用，各方案可以接近原生。Vue 模板中重复调用 css 仍有成本；Svelte 在静态表达式无相关依赖变化时不重新计算，不能套用同一个倍数。
- vanilla-extract 在本场景生成静态 CSS，运行时接近原生。CSS 变量与有限类名切换的浏览器成本本身不同，不能跨策略把全部差异都算给样式库。
- 当前准备缓存仍保留 CSS 运行时，不是零运行时静态提取。已有功能与正确性验证不等于性能已经追平原生或 Emotion。

## 体积

| 产物                         | minify 字节 | gzip 字节 |
| ---------------------------- | ----------: | --------: |
| zerodep createRuntime 单入口 |      498586 |    100825 |
| emotion.js                   |       15589 |      6436 |
| goober.js                    |        2329 |      1324 |
| vanilla.js                   |         785 |       433 |
| vanilla.css                  |         416 |       147 |

Emotion/goober 是本次保活入口；vanilla 的 JS/CSS 是本次 18 个样式的提取结果，不能把它当成任意应用的固定总大小。zerodep 的完整运行时包含 CSS 元数据和语法处理，首包体积差距仍显著；这里没有测首屏耗时。

## 复现与证据

- 执行 `pnpm build` 后运行 `pnpm research:compare`。版本集中在 pnpm-workspace.yaml 的 benchmark catalog；依赖装入独占临时目录，成功后自动清理。
- 本机默认 Chrome。没有 Chrome 时可安装 Playwright Chromium 并设置 ZERODEP_BROWSER_CHANNEL=chromium；换机结果受硬件和浏览器版本影响。
- 原始样本、版本、编译路径与对照依赖锁已提交到 `.research/performance/results/2026-09-23-*`，新机器不依赖本机忽略目录。
- `browser-native.mjs` 是隔离 core 的低层探针，不能代替此页的 Vue/Svelte 结果；其他 Node 探针见 validation。
- 官方接入依据：[Emotion create-instance](https://github.com/emotion-js/emotion/blob/main/packages/css/README.md)、[goober targets](https://github.com/cristianbote/goober/blob/master/docs/docs/api/targets.md)、[vanilla-extract esbuild 插件](https://github.com/vanilla-extract-css/vanilla-extract/blob/master/site/docs/integrations/esbuild.md)。

后续可研究普通运行时的重复解析、已有编译路径的准备成本及元数据/解析器体积。任何优化继续保留两重继承、运行时回退、宿主校验和 SSR 隔离；这些不属于本轮已经实现的收益。
