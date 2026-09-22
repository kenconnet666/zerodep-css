# zerodep-css 实施研究：生成数据、类型与原生响应式接入

> 历史阶段研究记录：其中“当前”“下一阶段”指各节撰写时点。当前实现见 [architecture.md](architecture.md)，未完成工作见 [roadmap.md](roadmap.md)。

日期：2026-09-22。状态：研究结论与可运行探针；不是生产框架验收。

## 1. 已明确的合同

- pnpm 工作区包含 core、vue、svelte 三个主要包，公开包名尚未确定。
- 以模板内 `css(s => { ... })` 的链式声明为主要作者形态，具体成员命名仍是候选。
- CSS 属性对象不可调用：固定值用 `s.display.flex`，严格字面量用 `s.display.token(value)`，开放值用 `s.width.raw('50%')`，单位值用 `s.width.px(50)`。raw 保留已知值补全并允许任意字符串通过类型检查；根层调用用于 selector/media/hover 等结构方法。
- 最终公开入口固定为 `css(factory): string`：同一写法既能直接用于模板 class，也能在外部先求值为字符串类名。中间结构构建器和 runtime 不作为普通浏览器业务必须手动调用的两层入口；第二阶段已将纯构建函数收为内部实现。
- 普通响应式变量按 Vue/Svelte 原生依赖通知重新执行整段样式回调，运行时生成或复用哈希类名。
- 不隐式把普通值转为 CSS 变量。
- 只有 `ibind(变量)` 由编译辅助生成 CSS 自定义属性引用及对应原生响应式绑定；同一条声明可有多个绑定。
- CSS 回调、条件分支、声明生成、序列化和哈希仍发生在运行时；编译器不自动拆分普通业务表达式。
- core 不实现第二套响应式系统。参考仓库的主题变量、动态提升、包布局与历史业务合同不自动继承。

## 2. 当前探针与数据事实

研究脚本：`.research/css-types/audit.mjs`，固定依赖及锁文件位于同目录。

| 数据或检查                                   | 结果                                               |
| -------------------------------------------- | -------------------------------------------------- |
| csstype 3.2.3 Properties                     | 857 个属性                                         |
| Standard / Vendor / Obsolete / SVG           | 497 / 250 / 107 / 60，集合有重叠                   |
| csstype 简单 / 函数式伪选择器                | 130 / 28                                           |
| Webref CSS 8.7.5 属性 / 函数 / 选择器 / 类型 | 821 / 161 / 158 / 528                              |
| Webref at-rules / 描述符                     | 55 / 102                                           |
| CSSTree 3.2.1 成功解析的 syntax              | 1696                                               |
| 无 syntax 的特征                             | 129，包含以 prose 定义的基础类型等，并非都无法支持 |
| 未直接解析引用候选                           | 4，必须进一步区分作用域引用、基础类型和真正缺口    |
| csstype 无精确 Webref 名称映射 / 反向差异    | 295 / 259，不等于缺陷数量                          |
| 虚拟生成属性 / 关键字成员                    | 857 / 22448                                        |
| 全量属性访问检查 / 代表性负例                | 857 / 8，TypeScript 6.0.3 检查零诊断               |

关键字数是每个属性的成员总数，包含重复的全局关键字和颜色等；报告已经按关键字组去重。生成声明与检查在内存中进行，未把数百 KB 类型探针混入产品源码。单次类型探针约 1 秒，仅用于可行性判断，不是 IDE 或编译性能 SLA。

负例包含未知属性、未知关键字、outlineWidth 的百分比方法、给 px 传入字符串绑定、padding 超过四个参数、时间属性使用 px、绑定对象和把绑定当普通数值运算。

已确认的语义风险：

- `csstype` 的 `Display` 包含 `(string & {})`，直接采用其值类型会接受无效字符串；补全完整不等于字符串值严格。
- `outline-width: 10%`、`border-width: 10%` 无效，`padding: 10%` 和 `opacity: 50%` 有效。
- `animation-duration: 100ms, 200ms` 有效，空格连接这两个值无效。
- 上游长度泛型中出现属性，不意味着该属性可直接接受任意长度声明；不能简单扫描到 `<length>` 就生成 `.px()`。

## 3. 数据来源与更新

使用多源交叉核对，单一规范化 schema 生成类型与运行时表：

1. csstype：TS 属性名称、标准/厂商/废弃/SVG 分类、兼容别名、现有值类型及关键字。
2. @webref/css：标准属性语法、CSSOM 名称映射、函数、选择器、描述符、简写与 longhands、规范链接。
3. CSS Values 规范及可审计的小型单位表：单位和维度。Webref 当前不提供完整单位清单，不能从任意属性的文本中凑单位。
4. 有来源的小型修正表：上游缺口、命名冲突、范围和 API 参数标签等。每项必须记录理由、来源及正反例；升级时查找过期修正。
5. 如要展示浏览器兼容性，再引入固定版本 BCD；有规范语法不代表浏览器已经实现。

MDN data 官方正在转向 Webref，因此不把 mdn-data 作为新项目唯一长期数据源。csstype 仍有兼容实现和类型层面的独立价值。

正式流程分开 `update:css-data` 与 `generate:css`：前者显式升级并输出差异，后者仅消费固定依赖/快照，必须离线、确定、可复现。记录包版本、输入摘要、生成器版本和许可；CI 重生成后比较字节结果，不在普通构建中自动抓最新规范。

## 4. 规范化 schema

每个属性至少记录：canonical CSS name、作者侧成员及别名、分类、来源版本/规范链接、语法 AST、完整值类型覆盖状态、有效独立关键字、数值维度、可生成参数形式、简写关联、状态/弃用信息、未解决事项。

覆盖状态分别统计，不能只有一个总覆盖率：

- 属性存在与别名覆盖。
- 可独立使用的关键字成员覆盖。
- 单位方法和参数形式覆盖。
- 函数/选择器/at-rule 描述符覆盖。
- 普通调用值的类型严格程度。
- 上游引用解析及修正表覆盖。

完整性以锁定的数据全集为分母，每个条目必须归类为支持、别名、废弃但保留、草案或明确排除，并记录理由。不能把未处理项静默删除，也不能用 string 放宽之后声称完成严格类型支持。

## 5. 语法到 API 的生成规则

通过 CSSTree definitionSyntax.parse 建 AST，解析 Property/Type 引用时考虑作用域及循环。运行时包不需要携带整套规范语法 AST。

可直接生成的规则：

- 属性成员、CSSOM 映射、JSDoc 规范链接和初始值。
- 严格关键字访问器；关键字必须能构成该属性的合法完整值，不能把函数内部词或组合中的强制片段当独立值。
- 具有明确维度和完整声明形式的单位方法。
- `{1,4}` 等重复结构的元组参数形式；`#` 表示逗号列表，空格重复与逗号列表不可混同。
- 简单伪类/伪元素名称；函数式伪类区分 selector、nth 表达式、标识符等参数。

需要保留语法结构的情况：

- `border-radius` 的 `/` 分隔，不能把任意 8 个值都当普通空格列表。
- `background`/`font` 等组合，不递归发现某个维度就暴露会生成不完整声明的方法。
- `&&`、`||`、嵌套可选、递归类型及开放标识符，不穷举成巨型 TypeScript 字符串联合。
- 负值限制、整数、Infinity/NaN 等：普通 number 不能静态保证，保留运行时诊断；不要把数值范围声称为已被 TS 完整证明。
- `@font-face` 等描述符与普通 style 属性不是同一套值规则，使用独立上下文；`@keyframes` 的块结构单独建模。

避免生成完整 CSS 语法的组合笛卡尔积。生成显式属性接口，共享关键字、单位和参数元组类型，并用代表性大文件测量实例化数、内存、补全和悬停延迟。

## 6. 类型合同建议

作者 API：固定关键字 `s.display.flex`；严格字面量 `s.display.token(value)`；单位 `s.width.px(width)`；开放值 `s.width.raw(text)`。CSS 属性没有调用签名，不保留 `s.width(value)`。

需要分开两层承诺：

1. 属性名、点访问关键字、单位方法、参数个数、ibind 的输入类型做到严格。
2. token 参数严格限制为已知字面量；raw 参数包含该属性的值类型和 `(string & {})`，保留字面量补全并允许任意字符串，不扩大不适用属性的数字类型。raw 字符串开放不等于 CSS 语义或浏览器兼容性已被证明。

不能在 Builder 根上增加 `[key: string]: any`，否则拼错属性也会通过。未来扩展属性要同时扩展类型和运行时注册，不接受只有 d.ts 成功、运行时不识别的伪扩展。

不把所有单位统一成 length：length 与 percentage 分开；time、angle、resolution、frequency、flex 等维度分别登记，具体属性是否接受由语法判断。

## 7. ibind 的类型与编译边界

推荐用名义化的编译标记，而不是声明 `ibind<T>(x: T): T`：

```ts
declare const binding: unique symbol;
interface Binding<T> {
  readonly [binding]: T;
}
type Input<T> = T | Binding<T>;
declare function ibind<T extends string | number>(value: T): Binding<T>;
```

这允许 `s.width.px(ibind(width))` 按 number 检查，也能拒绝对标记做普通数值运算。此声明仅是原型；Vue 模板解包、脚本 Ref 值读取、可空值语义需要框架类型夹具确定。

`ibind` 不是让值自动响应式的函数。Svelte 编译必须保留 `$state`/`$derived` 的读取；Vue 按位置生成 ref.value 或保留 reactive 属性读取。不能先读取成非响应式快照再包装。

宏转换需按 import binding 识别，支持别名，尊重同名局部变量；使用 AST 和 source map，不用字符串替换识别调用。

绑定内部记录 variable name、getter、值维度/格式化与所属元素。普通 css 回调内只保留 CSS 变量引用，不提前执行 getter。数值的 `.px(ibind(width))` 需要生成带单位的绑定输出，或保留类型化占位供单位方法构造；不能输出 `var(--x)px`。同一变量用于 px/rem 或不同作用域时不能错误复用同一份格式化槽。

模板字符串可以插入 CSS 变量引用，但 TS 无法因此完整校验任意 CSS 字符串。动态变量本身含单位时可直接用于 `translate(${ibind(x)}, ${ibind(y)})`。

局部变量、条件与循环是词法作用域约束：不能把回调内部变量 getter 无条件提升到外层。组件级变量和模板局部变量可以在原作用域绑定；回调内部临时值需要原地描述符/生命周期协议或明确编译诊断，不能宣称任意提升已经成立。

## 8. core 运行时

Builder 只收集当前调用的有序声明和嵌套结构，不能共享可变的当前样式对象。重复声明、fallback、简写/长属性的顺序必须保留，不能为哈希稳定而按属性名排序。

`compile` 构建纯数据，`ensure` 幂等写入规则。内容哈希包含最终规则结构及必要的序列化配置，ibind 当前值不参与；注册表比较完整内容以检测哈希冲突。

选择器替换、嵌套 at-rule、keyframes、字符串转义必须按 CSS 语法处理，不用全局替换 `&` 或简单切分分号。Emotion 的序列化、缓存、插入分工可参考，不能把其开放对象索引签名照搬成链式严格类型。

运行时元数据与 d.ts 从同一 schema 生成。属性访问器实现可用生成描述符或受限 Proxy，应做实测后选择；类型生成完整不要求每个组件分配几百个属性对象。

CSS 规则缓存与活跃绑定生命周期分开：清理某个组件不能删除其他元素仍使用的共享规则；只有缓存 LRU 不能保证规则安全回收。首版必须明确运行时所有权与上限策略，普通 class 字符串脱离受控绑定后的存活性也要考虑。

## 9. 框架接入与三包布局

建议采用根目录 core/、vue/、svelte/；scripts/ 存生成工具，tests/ 存跨包夹具，.design/ 保存当前合同。这里只是新项目建议，不继承参考仓库目录约束。编译和 server 能力以适配器子路径导出，避免 Node 工具进入浏览器入口。

- core：生成类型/运行时表、Builder、中间结构、序列化、哈希、规则注册及 SSR 收集基础。
- vue：模板原生依赖读取；可稳定定位的绑定使用 computed 缓存纯计算；ibind 使用元素 getter + 原生 watcher，协调 style 更新、卸载、SSR。
- svelte：保留运行时 css 表达式，优先转换 ibind 为原生 style 指令，让官方编译器生成依赖和清理。无需直接依赖 svelte/internal。

Svelte 5.57.0 已验证普通 class 回调与 style 指令组合：初始调用 1 次，仅改绑定变量仍 1 次，改普通颜色变为 2 次；这是简化收集器的 DOM 探针，不是完整 CSS 引擎性能测试。

数据生成依赖只在开发阶段使用。如果公开 d.ts 仍引用 csstype，需要把它作为消费者可解析的类型依赖，不能只放 devDependencies；若发布时生成自包含声明，保留源许可证并验证离线消费者。是否追求零运行时第三方依赖尚未确定，不能仅凭仓库名假定。

## 10. 实施顺序与验收

本轮工作区和原生 LSP 验收完成后，按以下阶段实施。阶段一至三当前实现记录见第 14 至 17 节；研究探针不计为框架功能完成。每阶段达到退出条件后再进入下一阶段。

### 阶段一：正式数据生成与 core 纯构建基础（已实施，见第 14 节）

目标：让链式声明具有可靠的生成类型，并在运行时产生正确、有序的 CSS 结构；这一阶段不进行 DOM 注入，不建立框架订阅。

1. 以实际用例固定第一批契约：属性关键字/调用/单位、重复声明、普通 if/循环、selector/media、keyframes、全局规则、描述符和 ibind 类型标记。先确定各上下文允许的节点，避免用一个万能 Builder 承载所有规则。具体名称在同一阶段通过样例收敛，不增加审批门槛。
2. 将研究数据审计升级为正式 schema：处理 csstype/Webref 差异、作用域引用、无 syntax 项、厂商/废弃/草案分类和许可来源；每个条目有状态，缺口不静默放宽。
3. 编写离线、确定的 generate:css / generate:check：同源生成属性、关键字、单位/参数、选择器、描述符类型及运行时表。数据升级走独立命令，保留版本和差异报告。
4. 实现纯 Builder 与有序中间结构：声明、选择器、条件、帧、全局描述符和根级语句分开；纯函数执行回调；同一属性重复调用和嵌套交错不得重排。
5. 加入独立规范正反例及三个语言的真实类型夹具。使用原生 zerodep_lsp 验证链式补全、悬停和定义；检查生成声明在模板中的推断与大型成员集合性能。

建议文件职责：scripts/css-data/ 放上游归一与补丁；scripts/generate-css.mjs 做生成入口；core/src/generated/ 保存可重复产物；core/src/ 下分别维护公共类型、中间结构和 Builder。只按实际职责创建文件，不先铺空目录。

阶段退出条件：

- 锁定来源范围内每个特征有归类与覆盖状态；所有拟支持的生成项能追溯来源。已归类的草案/不支持项不能记为完整支持。
- 重复离线生成无差异；类型成员与运行时元数据一致；单位方法由完整值形式决定，不能因扫描到 length 就生成。
- 正确链式用例可生成预期结构；错属性、错关键字、错单位、错参数数目、错描述符上下文、错 ibind 输入有明确诊断。
- TS/Vue/Svelte 模板与脚本中的类型推断通过；LSP 能跳到有说明的声明；记录类型检查/补全基线而非只报总成员数。
- pnpm check、pnpm build 通过；有意义的 core 构建器和生成器测试通过。

### 阶段二：core 样式引擎与资源管理（已实施，见第 15 节）

目标：实现公开的 `css(factory): string`，将当前纯结构变为 CSS 规则和哈希 class，同时建立全局资源及服务端收集基础。当前 useCss 仍是返回 StyleProgram 的过渡实现；下一阶段把纯构建与序列化作为 css 内部步骤，不把 StyleProgram 当作 css 的公开返回值。

1. **固定输出语义。** 以现代浏览器为首个目标，先用实测确定原生 nesting/@scope/@starting-style 的支持范围。保留声明和条件顺序；如果需要展开 nesting，用有语法依据的变换验证 specificity，不做字符串全局替换。是否引入运行时解析依赖依据验证和体积决定，不只按仓库名推断。
2. **实现序列化层。** 分别处理局部样式、全局规则、关键帧、描述符、分页及前导语句；明确 selector/prelude/raw 的校验和转义边界。保留字符串/URL 中的特殊字符、重复声明和简写顺序；输出前检查会导致规则无效的上下文和必需描述符组合。
3. **实现哈希和编译结果。** 使用实际序列化内容和影响输出的配置生成稳定名称，class 与动画采用不同命名空间；相同结果复用，发生哈希冲突时比较完整内容并明确处理。内容排序不能破坏 CSS 语义。
4. **实现 css 入口与实例化 runtime。** 普通作者只调用 `css(factory)`，同步得到字符串 class；内部执行纯构建、序列化、哈希、注册。runtime 实例/工厂用于宿主配置和 SSR 请求隔离，不要求业务写 `runtime.css(useCss(factory))`。runtime 明确所属 Document/ShadowRoot、插入位置、nonce 和层序。插入失败不得标记为成功缓存，也不能返回没有对应规则的成功结果。
5. **接通资源引用和全局挂载。** `animationName` 接受 keyframes 定义并保留引用，由同一 runtime 注册依赖。全局样式使用有固定顺序槽位的挂载，提供更新和释放；字体、@property、计数器等使用同一资源体系。删除一个 owner 不影响其他使用者，重复的全局内容不跨位置盲目去重。普通哈希 class/动画首版保留至 runtime dispose，不用 LRU 删除仍可能被 DOM 使用的规则；记录规则数量供后续优化。
6. **实现 SSR registry 和恢复协议。** 创建独立的服务端 runtime，无需 document；收集 class 以及动画、字体、全局规则和层序，输出结构化 manifest 与安全的 style HTML。浏览器恢复必须核对配置/命名空间，避免重复注入。请求隔离是 core 验收项；Vue/Svelte 渲染器生命周期集成仍在阶段三。
7. **实际浏览器验收。** 建立浏览器夹具验证计算样式和 CSSOM；测试条件嵌套、复杂选择器、动画依赖、全局更新位置、共享资源、SSR 输出/恢复以及失败重试。仅 parser 成功或哈希相等不足以通过。

阶段退出条件：

- `css(factory)` 直接返回字符串类名并驱动真实 DOM 样式，外部赋值和模板内调用采用相同语法；内部纯构建步骤仍无 DOM 副作用。
- 同内容不重复插入，内容变化产生正确规则；class/动画命名在服务端与客户端一致。
- keyframes 引用不会丢规则，全局挂载更新不改变其覆盖位置，资源释放不误伤其他 owner。
- SSR 在无浏览器环境下独立工作，manifest 恢复不重复注入，请求之间不共享可变注册表。
- 原有类型、Builder、LSP 用例继续通过，新增序列化/资源测试和真实浏览器测试通过。

本阶段完成 css 的字符串返回与运行时行为；Vue/Svelte 对该入口的原生响应式/生命周期接入在阶段三完成。ibind 编译、主题预设或 reset 默认行为仍按后续阶段执行。不能因阶段拆分而改变最终 `css(factory): string` 合同。

### 阶段三：Vue/Svelte 普通响应式与 SSR 接入（实现见第 17 节）

仅接普通变量触发重算与 class 切换。Vue 使用原生 render effect/稳定 computed；Svelte 使用原生模板编译。复用 core，禁止第二套 signal/store。

退出条件：两端普通值更新、分支变化、多实例、列表重排、组件卸载与全局样式生命周期正确；不同内容换 class，旧内容复用已有规则。测量 CSS 回调执行次数，明确两框架的调度差异。SSR 首屏收集、请求隔离与 hydration 在本阶段一并验收。

### 阶段四：显式 ibind 编译

按 import binding 识别宏，保留作用域和 source map；普通变量流程不变。ibind 只生成变量引用及元素绑定，当前值不进入 class 哈希。

重点验证同一声明多个变量、数值单位与同变量不同单位、模板局部变量、条件分支、style 合并、组件转发、卸载和 SSR 初值。动画中的实例绑定必须有明确消费元素；全局资源不能默认把绑定写入 :root。

退出条件：仅修改绑定值不会重新生成 CSS 规则，样式主体没有普通读取时不因该变量重算；不存在 var(--x)px 等无效输出；无法合法转换的作用域给出精确诊断。Svelte 原生 style 绑定、Vue 元素 watcher 均经实际模板验证。

### 阶段五：消费验证与性能收敛

使用真实包产物建立 Vue/Svelte 消费项目，验证导出、类型解析、SSR、CSP 配置及开发更新。按测量结果优化 Builder 分配、哈希/插入缓存和类型体积。

退出条件：脱离 workspace 源码条件也能安装、构建和运行；浏览器/SSR 回归通过。明确与参考方案的测试条件，不将类型探针或合成微基准写成全面性能优势。主题/reset/自定义变体只基于已完成基础增量加入，不默认改变全局样式。

跨阶段规则：测试不能全由同一个生成逻辑镜像产生；保留规范导出的独立正反例和真实浏览器/框架夹具。新增验证工具依赖按需加入 catalog，不为尚未实施的阶段预装整套工具。

## 11. 来源

- https://github.com/frenic/csstype ：类型分类、泛型及开放字符串边界。
- https://github.com/w3c/webref/tree/main/packages/css ：规范特征、语法、CSSOM 映射及数据保证。
- https://github.com/mdn/data ：转向 Webref 的维护说明。
- https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md ：值定义语法 AST。
- C:/code/zui-svelte/scripts/generate-css.mjs ：Compiler API 枚举与关键字分组参考，不继承单位推断错误。
- C:/code/zui-svelte/core/src/css/schema.ts ：旧单位分组与手工覆盖范围。
- C:/code/emotion/packages/serialize/src/index.ts ：csstype 接入、序列化与开放对象类型参考。
- C:/code/vue-core/packages/reactivity/src/effect.ts、runtime-core/src/renderer.ts、runtime-dom/src/helpers/useCssVars.ts。
- C:/code/svelte/packages/svelte/src/compiler/phases/3-transform/client/visitors/shared/element.js、src/internal/client/reactivity/async.js。

## 12. Emotion / Tailwind / UnoCSS 对照与表达能力补充

本节于 2026-09-22 补充。API 均为候选；保留已确认的运行时哈希与显式 ibind 合同。

### 12.1 对照结论

| 参考                             | 已核对机制                                                                                           | 建议吸收                                             | 不直接继承                                               |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------- |
| Emotion @emotion/css             | css / keyframes / injectGlobal 共用序列化与 cache；keyframes 返回名称并插入；cx 读取已注册样式并合成 | 共用序列化/注册表、资源去重、样式内容组合            | 默认全局单例及只追加的动态全局规则                       |
| Emotion @emotion/react           | keyframes 返回带样式定义的资源；Global 维护专用 sheet、更新和卸载                                    | 资源定义与挂载分开，动态全局规则有生命周期和固定位置 | React 生命周期 API 和伪装成 string 的资源对象            |
| Tailwind 当前 v4 文档及源码      | 原子规则、variants、任意值/属性/变体、原生层、theme、preflight；内部区分 rule/at-rule/declaration    | 条件组合、层序、值/规则扩展和 AST 分层               | token 类名语言、静态扫描约束、默认主题变量和默认 reset   |
| UnoCSS 当前文档及 generator 源码 | 静态/动态规则、variant handlers、shortcuts、preflights、层、规则排序、原始 CSS 扩展                  | 通用规则变换、组合、显式预设、保留 fallback 顺序     | 必須经过原子类名解析的作者 API、隐式处理普通 JS 响应式值 |

UnoCSS 也有观察 DOM 并生成样式的 browser runtime，不能把它一概称为仅构建期工具。我们的更新源仍直接使用 Vue/Svelte 响应式机制，不再观察 DOM class 来反推样式变化。

UnoCSS 内部分组 layer 与原生 CSS @layer 不是同一回事；原生 CSS layers 是单独的输出选项。不能照搬其数字排序就声称实现了 CSS 层叠语义。

### 12.2 当前表达能力判断

仅有属性接口、hover/media 与类名生成，还不能称为完整 CSS 工具。应同时覆盖下面这些结构：

| 能力                                    | 必需的表示与入口                    | 类型边界                                     |
| --------------------------------------- | ----------------------------------- | -------------------------------------------- |
| 普通声明                                | property/value/important，有序数组  | 按属性生成                                   |
| 重复声明与 fallback                     | 重复节点保留，不用对象覆盖          | 允许多次设置同一属性                         |
| selector lists / 组合器 / 伪类 / 伪元素 | 相对选择器 AST 和任意 selector 入口 | 常用类型化，任意合法选择器可表达             |
| 媒体、supports、container 条件          | 可嵌套的条件规则                    | 条件字符串与可选构建器                       |
| @scope / @starting-style                | 明确的分组或嵌套声明上下文          | 不能只当媒体查询别名                         |
| @layer 声明与块                         | 根级层序语句 + 分组节点             | 固定层序、允许命名子层                       |
| @keyframes                              | 有序 frame 列表 + 声明块            | 不提供普通 selector/media/important 快捷成员 |
| @font-face / @property / @counter-style | 专属描述符上下文                    | 不复用普通 Properties 值类型                 |
| @page 与页边框                          | 描述符/声明与嵌套 margin rules      | 独立上下文                                   |
| @import / @namespace                    | 根级前导语句与位置规则              | 不允许出现在 class 回调内                    |
| CSS 函数、列表、数学值                  | 值结构和明确 raw 值出口             | 不把所有合法 CSS 字符串穷举为 TS 联合        |
| 自定义属性、显式 var 引用               | 普通声明和值工具                    | 不等同于自动 ibind                           |
| 新属性与新 at-rule                      | 可保留的通用 AST / raw 入口         | 标明未类型化，不伪装成强类型已覆盖           |

建议使用“公共基础结构可表达 CSS、常用语法有强类型辅助、未知语法有明确出口”的承诺。能输出 CSS、TS 能证明语法合法、浏览器支持是三个独立指标。

### 12.3 候选工具族

所有工具落在 core 的同一数据结构和注册体系，不增加第四个核心包。

- `css(factory)`：局部样式，运行时生成 class。
- `keyframes(factory)`：创建可复用动画定义，按内容生成名称，消费时注册。
- `globalCss(factory)`：创建全局样式定义，使用绝对选择器和根级规则。
- `useGlobalCss(factory)`：Vue/Svelte 适配器接管响应式重算、SSR 收集和卸载；业务初始化调用一次。
- `fontFace`、`property`、`counterStyle` 等：全局 Builder 的专用方法或可组合定义工厂，命名不定死。
- `style(factory)` / `compose(...)`：复用有序样式定义；是否需要额外命名工厂由实际用例决定，普通 TS 函数应首先可用。
- `cx(...)`：若提供则只负责 class 拼接，或者显式声明只合并本 runtime 可识别的样式；不能同时承诺任意外部类名覆盖。
- `selector`、`media`、`supports`、`container`、`layer`、`scope` 等在对应 Builder 上表达结构。
- `raw` 分清原始值、原始声明/规则、原始样式表三个上下文；不能一个字符串入口同时猜测作用域。

### 12.4 keyframes 的作者形态和资源依赖

候选：

```ts
const fade = keyframes((k) => {
  k.from((s) => {
    s.opacity.raw(0);
  });
  k.at(50, (s) => {
    s.opacity.raw(0.5);
  });
  k.to((s) => {
    s.opacity.raw(1);
  });
});

css((s) => {
  s.animationName.raw(fade);
  s.animationDuration.ms(180);
  s.animationTimingFunction.easeOut;
});
```

帧 Builder 按调用顺序追加，支持多个偏移、重复偏移和明确的时间线范围选择器。不要用 Record<number, ...> 存储帧：JS 整数键顺序与重复键覆盖会丢失作者信息。普通 0–100 范围检查放在运行时；命名时间线范围不是普通百分比，不用旧实现的百分比正则挡住所有扩展。

动画定义优先是无 DOM 副作用的不可变资源，`s.animationName.raw(fade)` 保留对资源的引用；类名注册/SSR 收集时同时处理依赖。同内容同配置复用名称，资源名称使用区别于 class 的命名空间。

任意 `${fade}` 或仅取 `.name` 都可能丢失资源依赖信息。需要提供能保留引用的 animation 值构建方式，或明确实现并验证字符串插值协议，不能假设拿到名字就等于 CSS 已插入。Emotion React 的 keyframes 插值有专门序列化标记；这不是普通对象自动字符串化就能替代的。

普通响应式值出现在响应式执行的 keyframes 定义中，会产生新资源名，动画可能重新启动；频繁参数变化应显式绑定到使用动画的元素。ibind 不能因位于全局 @keyframes 中就自动写到 :root。需要从消费的 css 元素取得绑定所有权；无明确元素的模块级 keyframes/global 定义中不自动建立实例绑定。资源参数/显式 custom property 如何对接仍需专门夹具，不能把该问题藏在序列化器中。

### 12.5 全局样式必须区分定义和挂载

候选：

```ts
useGlobalCss((g) => {
  g.layer('base', (g) => {
    g.rule('html, body', (s) => {
      s.margin.px(0);
    });
    g.rule('body', (s) => {
      s.backgroundColor.raw(theme.background);
      s.color.raw(theme.text);
    });
  });
});
```

`useGlobalCss` 是一次初始化的生命周期入口，内部回调由各框架追踪；Vue 的 theme 可以是 reactive 对象，Svelte 使用自己的原生状态。普通主题变量直接重算替换全局规则，不自动提升变量。

core 提供定义、挂载、替换和释放的显式原语；框架适配器隐藏常规业务 cleanup。应用级 reset 挂到应用 owner，组件/路由临时规则挂到对应 owner。禁止在模板每次求值时创建新的全局挂载。

更新必须保留所属槽位在样式表中的顺序，不能每次 append 到末尾。全局资源不能无条件按内容跨位置去重：`A:body红 → B:body蓝 → C:body红` 如果删除与 A 相同的 C，会把最终结果改成蓝。缓存编译结果和省略规则发射是两件事，去重必须考虑所有权、槽位和层叠语义。

SSR 不能只扫描 HTML class 提取规则：全局样式、动画、字体和层序也需要记录。请求独立 registry，输出需要保留顺序，hydration 恢复归属后再更新。共享动画不能被单个组件卸载误删。

`@property` 是全局名称注册，不按元素或 class 私有；显式注册、相同名称冲突、初值/继承语义应独立管理。普通 ibind 不默认生成 @property，以免改变继承和动画行为。

### 12.6 条件变体与复用

优先让所有语法降低到同一 selector / condition / layer 树。`hover` 等只是带类型的便捷入口；原始 selector 保持可用：

```ts
css((s) => {
  s.selector('.group:hover &', (s) => {
    s.color.raw('red');
  });
  s.selector('.peer:checked ~ &', (s) => {
    s.display.flex;
  });
  s.selector('&[data-state="open"] > .icon', (s) => {
    s.opacity.raw(1);
  });
  s.media('(width >= 48rem)', (s) => {
    s.hover((s) => {
      s.color.raw('blue');
    });
  });
});
```

CSS hover/media/container 本身不增加 JS watcher。自定义变体首先是可复用的 TS 样式函数或规则变换，不引入另一套字符串前缀解析语言。伪类、外部祖先、兄弟状态、RTL、数据属性、减少动画等可经相同结构表达。

Tailwind 的 hover variant 还涉及 hover 能力媒体条件，不能未经说明把它等同于裸 `:hover`；我们的默认 `.hover` 宜保留原生伪类语义，组合策略通过显式 helper/preset 表达。

UnoCSS shortcuts 对应我们有序组合的样式定义/函数。属性及嵌套分支保持顺序，不深合并成普通对象；在同等层级、优先级和 important 条件下，后面的声明按原生规则覆盖。`class="a b"` 的字符串顺序不建立 CSS 优先级。外部 Tailwind/UnoCSS 类名与本库共存时，通过原生层或明确选择器策略控制，不能推断外部规则内容。

Reset/preflight 作为显式可选预设，core 默认不改 body、box-sizing 或控件外观。主题预设可提供原生响应式数据，保持“普通值换 class、只有 ibind 才提升”的合同。

### 12.7 核心中间结构需要扩展

仅有 `{kind:'declaration'}` 和 `{kind:'rule',query}` 无法可靠区分描述符、keyframe、前导语句及不同嵌套上下文。建议至少区分：

```text
Stylesheet
  Statement(@layer order / @import / @namespace)
  StyleRule(selector, ordered children)
  GroupRule(@media / @supports / @container / @scope / @layer, body context)
  DeclarationRule(@font-face / @property / @counter-style, descriptors)
  Keyframes(name, ordered frames)
  PageRule(selector, declarations + margin rules)
  RawRule(explicit context)

StyleRule children
  Declaration(property, value, important)
  nested StyleRule / valid GroupRule / @starting-style
```

条件组的 body context 要跟随所在位置；不能把所有 at-rule 当作相同的容器。交错的声明与嵌套规则不能重排；选择器的 `&` 只替换 AST 的 nesting selector，不能替换字符串、属性选择器值或 URL 中的字符。层中的 important 有反向优先级，不能用“最后一层总是最高”概括。

是否输出原生嵌套、或转换成展开规则，需要锁定浏览器目标与嵌套特异性语义后选型；Stylis、CSSTree 或其他处理器是否覆盖 @scope 等语法需实际验证，不能因为 Emotion 使用 Stylis 就承诺自动等价。

@import/@namespace 属于根级有序前导规则。已开始注入普通规则后不能随意 append；需要独立 sheet/预声明策略或明确拒绝，不能为了表达完整允许浏览器无效输出。

### 12.8 本轮验证和下一步

新增 `.research/css-types/expressiveness.mjs`，使用固定的 CSSTree 3.2.1 运行 18 个结构用例。全部通过解析、再序列化稳定性检查；额外检查 fallback、简写、嵌套交错和重复关键帧偏移顺序，以及字符串中的 & 保留。自定义属性值启用了 parseCustomProperty，避免默认原文保留掩盖解析情况。

这证明这些结构能用现成 CSS AST 工具承载，不证明我们的 API、序列化器或浏览器支持已经完成。未知 at-rule 能被解析，也不等于它具有合法语义。

正式实施需补的独立验证：完整值类型与描述符类型负例；同名资源/多 owner 引用；全局规则替换保持层叠；资源依赖 SSR 提取；动画名称变化与绑定更新；原生与展开 nesting 的特异性；现代规则的真实浏览器 CSSOM/计算样式测试。

### 12.9 本轮来源

- 本地 Emotion @emotion/css 11.13.5：`C:/code/emotion/packages/css/src/create-instance.ts`。
- 本地 Emotion React：`packages/react/src/keyframes.ts`、`global.tsx`；SSR：`packages/server/src/create-instance/extract-critical.js`。
- https://emotion.sh/docs/keyframes
- https://emotion.sh/docs/globals
- https://emotion.sh/docs/composition
- https://tailwindcss.com/docs/adding-custom-styles
- https://tailwindcss.com/docs/functions-and-directives
- https://tailwindcss.com/docs/hover-focus-and-other-states
- https://tailwindcss.com/docs/detecting-classes-in-source-files
- https://tailwindcss.com/docs/preflight
- https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/ast.ts
- https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/variants.ts
- https://unocss.dev/config/rules
- https://unocss.dev/config/variants
- https://unocss.dev/config/shortcuts
- https://unocss.dev/config/preflights
- https://unocss.dev/config/layers
- https://unocss.dev/integrations/runtime
- https://github.com/unocss/unocss/blob/main/packages-engine/core/src/generator.ts

远程文档和源码为本轮读取的当前内容，尚未把这些框架作为产品依赖；正式借用实现前固定对应版本与许可。

## 13. 基础工作区落地状态

2026-09-22 按用户要求完成 core/vue/svelte 根目录工作区、catalog/锁文件、三包 build/check、项目 Codex MCP 与 TypeScript/Vue/Svelte 语言服务验收。操作说明见 `.design/language-services.md`。包名暂用 @zerodep-css/*，保持 private；基础搭建时入口为空，后续第一阶段实现见第 14 节。原始 src/public 示例归档到 `.research/legacy-starter`，已有研究资料保留。数据探针可直接用根工作区固定依赖执行。

## 14. 第一阶段实现与验收

本节记录第一阶段交付；当前第二阶段的公开入口及运行时状态见第 15 节。

纯构建入口此前更名为 `useCss`，当前源码仍返回 StyleProgram。用户随后明确最终公开入口必须是 `css(factory): string`，因此 useCss 只作为过渡实现，不是最终作者 API；后续将纯构建器收为内部实现。不能仅将当前函数改叫 css 却仍返回结构。

当前正式代码已经提供：

- `scripts/css-data`：固定来源、语法快捷形式匹配、csstype/Webref/CSSTree 兼容目录归一、上下文与差异分类。
- `scripts/generate-css.mjs`：离线生成类型和运行时元数据；`generate:check` 比较确定产物，`data:diff` 仅读差异。
- `core/src/generated`：显式属性、共享关键字/单位方法、独立描述符类型和伪选择器名称；公开声明不引用 csstype 等外部类型包。
- `useCss`：纯局部样式构建，支持普通同步控制流、重复声明、选择器、条件和 important。
- `keyframes`：纯动画定义，有序帧、多偏移和命名时间线范围；无自动名称/注册。
- `globalCss`：纯全局样式表定义，包含不同层级的规则、描述符、分页和前导语句。
- `cssVar`：显式 CSS 变量引用；`ibind` 提供类型标记及未编译时的明确错误，不模拟响应式绑定。

### 数据覆盖

完整逐项数据在 `css-coverage.json`，当前汇总：1116 个属性成员，417 组关键字、48 组单位/参数形式、48 个声明描述符；另外 54 个媒体/容器查询特征独立归类，不作为声明块生成。

属性快捷语法来源：816 个使用 Webref，114 个使用 CSSTree 兼容语法，186 个只有上游关键字目录。最后一类没有静默推断单位，其他值显式 raw；spec-only 条目明确不代表浏览器实现。来源语法的两个真正缺口和作用域引用均在报告中标记，自定义属性模式通过 custom(name,value) 表达。

这不是“1116 个标准 CSS 属性全部被静态证明合法”：目录包含兼容和规范条目。复杂字符串、CSS 函数、超过四个参数的列表等保留显式 raw 出口。范围、有限数、整数和单位参数个数由类型及运行时共同约束；raw 不承诺完整语义校验。

### 第一阶段收敛的使用规则

- 第一阶段曾尝试可调用属性；当前已按第 16 节更正为不可调用对象，token/raw 分离，不再暴露 call/bind/prototype 等函数成员。
- 局部容器查询命名 `containerQuery`，因为 `container` 必须保留为真正的 CSS 属性。
- `.raw(value)` 与 `s.property.raw(property,value)` 明确表达开放值和新属性，`s.custom.raw(name,value)` 写自定义属性；不在 Builder 上添加任意字符串索引签名。
- 单位参数不接受 null/undefined；属性直接调用的 null/undefined 省略声明。
- 返回有序、冻结的结构，回调外使用 Builder 报错；回调必须同步返回 void。
- 类型化选择器入口验证名称目录；任意选择器、prelude 和 raw 的完整 CSS 解析、specificity 处理属于下一阶段。
- 当前没有 `css()` 返回 class 的假实现，也没有 DOM 注入或框架订阅。

### 验证结果

1. `pnpm generate:check` 通过；`pnpm data:diff` 的 added/removed/changed 均为空，固定输入摘要一致。
2. `pnpm build` 三包通过；`pnpm check` 通过，Svelte 0 errors / 0 warnings。
3. `pnpm test` 共 17 项通过，包含全部生成属性的运行时识别及独立的顺序、单位、范围、描述符、帧和生命周期负例。
4. `core/test/types.ts` 的 18 处预期类型错误均被 tsc 正确验证。
5. `pnpm test:types` 在 TS、Vue 模板、Svelte 模板各检出四处 CSS 错误，修复后清零；单位补全不含错误维度，定义跳转到 generated/properties。临时文件已清理。
6. 当前任务原生 zerodep_lsp 对三个永久类型用例完成诊断、悬停和补全。报告见 `test-results/types/native-generated-types.json`。Svelte 官方 autofixer 返回无问题、无建议。
7. `pnpm format:check` 通过。

类型基线：本机一次 tsc 检查用时 2.70 秒，35225 次类型实例化，内存约 248 MiB；该次同时存在其他本地检查，不是性能承诺。LSP 暖服务完成补全/悬停/跳转约 39–235 ms，三种语言冷诊断约 2.3–2.8 秒，具体见 `test-results/types/style-types.json`。

下一阶段按第 10 节阶段二执行：固定浏览器目标和 nesting 语义，实现序列化、哈希、资源依赖、样式表/SSR 注册；本轮不扩展到这部分。

## 15. 第二阶段实现与验收

第二阶段已完成 core 运行时。公开 `css(factory): string` 在浏览器中保证规则注册后返回类名；纯构建器不再从包入口导出。`keyframes`/`globalCss` 仍可创建可复用定义，资源消费由 runtime 管理。

### 已实现

- `serialize.ts`：CSSTree 3.2.1 解析值、selector、at-rule 和 stylesheet 边界，按实际上下文处理嵌套声明，保留原生 nesting；检查部分资源必需描述符、注册初值、前导位置和命名规则边界。
- `hash.ts`：确定的同步内容摘要，注册时仍比较完整内容；class、动画、全局槽位采用分离前缀，配置参与命名。
- `runtime.ts`：默认浏览器 css、独立实例、资源去重、全局固定槽位、更新与释放、记录上限、实例销毁、SSR snapshot/恢复。
- `sheet.ts`：Document/ShadowRoot 输出、插入位置、nonce、CSSOM 插入、事务失败清理；恢复时核对原有标签及 CSSOM 根规则数量。
- `animationName` 的 keyframes 定义/数组支持由同一份生成策略同时生成到声明和元数据，保持类型与 runtime 一致。空数组表示 none。
- `injectGlobal` 挂载浏览器全局样式，`runtime.mountGlobal` 支持显式实例；内容相同的不同全局位置不合并。更新失败保持旧规则和缓存。
- `renderStyles` 输出独立 style 块，保护 HTML style 结束标签和 nonce 属性；`renderManifest` 输出可嵌入 application/json 的 JSON。不把所有样式表拼成会破坏 @import/@namespace 边界的单个字符串。

SSR 必须每个请求使用独立 createRuntime 及其 css 函数。顶层 css 不在 Node 中建立全局可变缓存。恢复使用相同 namespace/层配置，认领全局 slot 的接口为 claimGlobal(id)；框架如何自动提供请求上下文和认领生命周期留在阶段三。

### 验证

- `pnpm build` / `pnpm check`：三包通过，Svelte 0 errors / 0 warnings。
- `pnpm test`：29 项通过，包含原有 Builder/语法测试和新增序列化、资源、SSR、配置、篡改及上限测试。
- `pnpm test:types`：TS、Vue 模板、Svelte 模板各四处错误检出后清零；公开 css 返回 string，animationName 保留资源类型。
- `pnpm generate:check`：确定产物一致，源策略摘要同步变化。
- `pnpm test:browser`：15 项通过，实际 Chrome 153.0.8010.52。覆盖类名复用/更新、嵌套优先级与交错顺序、条件规则、动画播放、全局位置、CSSOM 失败回滚/重试、ShadowRoot、字体加载、计数器/分页、@property 冲突、CSP、SSR 首屏和无重复恢复；浏览器不支持的根规则及失败恢复也验证了缓存/DOM 保持。
- Svelte 官方 autofixer：无问题、无建议。

报告：`test-results/browser/results.json`、`test-results/types/style-types.json`。浏览器测试完整入口的 minified bundle 为 492102 字节，这是包含完整导出和解析器的测试包，不是 gzip/Brotli 传输量或最终业务 tree-shaking 结果。

### 明确边界

- 当前采用原生 nesting，运行时检查交错嵌套声明能力；只记录了上述 Chrome 的实际验证，不声称旧浏览器或所有引擎已验收。
- CSSTree 现在是 core 的固定运行时依赖，用于语法处理和所需校验；生成数据的工具依赖仍在开发层。
- 每个逻辑记录使用一个可定位 style 节点；class/自动动画依赖驻留至 runtime.dispose。后续基于测量优化分组和体积，不在本阶段用不安全 LRU 回收。
- 语法解析不是所有新属性/值的浏览器兼容性证明；源目录中的 spec-only 项仍保留该标记。raw 不被描述为安全过滤器或完整语义证明。
- Vue/Svelte 专用订阅、SSR 上下文及生命周期自动接入未实施；ibind 编译、主题/reset 预设也未实施。

后续进入第 10 节阶段三，保持作者侧 css(factory): string 形态，接入各框架的原生机制。

## 16. 属性 API 校正（当前合同）

按用户最新要求，参照 Modal.svelte 的使用形态，把属性可调用方案收回。当前实现、生成声明、测试和示例均统一为：

```ts
css((s) => {
  s.display.flex;
  s.display.token(visible ? 'flex' : 'none');
  s.width.raw('50%');
  s.flexShrink.raw(0);
  s.padding.px(8, 16);
  s.hover((h) => {
    h.color.red;
  });
});
```

- CSS 属性是不可调用对象，没有函数原型上的 call/bind/prototype 等成员；直接 s.width(...) 在 TS/Vue/Svelte 中报错，在 JS 运行时也不能调用。
- token 只接收该属性已知的字面量关键字并提供补全；raw 包含已知值、属性适用的数字类型及 `(string & {})`，保留字面量补全，同时允许任意字符串。任意字符串通过类型检查不代表能绕过输出语法边界或保证浏览器语义有效。
- 单位方法仍按属性语法约束数值、范围和参数个数。自定义/未知属性的出口也采用第二层方法：s.custom.raw(name,value)、s.property.raw(property,value)。
- selector、media、supports、hover 和其他结构规则继续使用根层回调；GlobalBuilder 的 rule/animation/property 等仍是构造规则的结构入口，与 StyleBuilder 的 CSS 属性上下文区分。
- animationName.raw 接收动画定义/数组并保留资源依赖。相同 CSS 从原始动画名称或资源定义两种路径到达时，缓存合并依赖，不重插同一规则，也不把依赖列表不同当作内容哈希碰撞。

当前验证：31 项 Node 测试通过；17 项 Chrome 153 浏览器测试通过；22 处静态预期类型错误通过。独立 LSP 验证三种语言各五处错误，修正后清零，并分别确认 token/raw 的字面量参数补全包含 flex、inline-grid 等候选，属性成员补全没有函数原生成员。

已初始化本地 Git 仓库，提交说明使用中文。正式源码、生成产物、覆盖清单和可复现测试进入版本管理；本机 .codex/config.toml、node_modules、dist、语言服务/浏览器报告不提交。文本通过 .gitattributes 固定 LF，避免换机后破坏生成一致性检查。

## 17. 原生框架适配与 CI（2026-09-22）

本阶段保持 css(factory): string 以及第 16 节属性合同。Vue/Svelte 的 useStyleRuntime 在初始化时取得绑定到应用/请求的 runtime；模板调用由框架原生依赖跟踪，脚本中分别使用 computed/$derived。普通 const 字符串不自动变化。模板更新不等于逐样式缓存，Vue 无关重渲染可能再次调用 inline css；派生缓存和 core 规则去重分别验证。

新增框架无关的 createStyleContext：持有独立 runtime、稳定全局 key 到 slot 的映射、上下文 manifest、安全 JSON 输出、恢复遗漏检查和整实例清理。useGlobalCss(key, factory) 的 key 必须在同一上下文活跃 owner 中唯一。认领顺序不依赖组件调用顺序；core claimGlobal 支持事务更新成功后才认领，失败保留旧记录供重试。绕过 context 直接管理全局槽位会使映射不完整，snapshot 明确拒绝。

Vue 使用 provide/inject、computed + watch(pre)、onScopeDispose。Svelte 使用初始化 context、纯定义 $derived、首次同步挂载、$effect.pre 更新、onDestroy 清理 effect root。两者 SSR 都同步收集且不建立客户端 watcher，不在服务端组件清理时删除尚未输出的规则。宿主必须按请求创建上下文并 finally dispose；客户端先恢复 context，再 hydration，等待相关组件完成后 completeHydration，应用卸载后再 dispose。

没有引入私有框架响应式 API、自建 signal、普通变量隐式提升或 ibind 编译。css 在 render/derived 求值时同步确保规则注册，具有幂等副作用；废弃渲染产生的 class 留到 context 释放，不声称纯计算或中止渲染自动回收。完整字符串 SSR 为本阶段范围，流式 SSR、异步 Suspense/boundary 全流程、Nuxt/SvelteKit 专用插件后续单独验收。

验证入口：

- pnpm test：34 项 core/生成器测试，含 key 映射、失败认领重试、跨请求隔离及 manifest 校验。
- pnpm test:adapters：Vue 应用注入/缺失上下文诊断、服务端 scope 结束后保留输出且不建立订阅。
- pnpm test:frameworks：官方 Vue/Svelte 编译器处理实际 SFC/rune 模块，消费 dist；验证双请求不同状态隔离、SSR 首屏样式、恢复复用 style 节点、原生更新、派生缓存、条件依赖、回到旧内容复用 class、全局提前停止、卸载/重挂、共享类存活和普通客户端挂载。
- 本地 Chrome 153 首轮组件验收通过，记录回调次数、规则数量及包含模块加载的 hydration 耗时；这些是机器基线，不是性能承诺。真实模板由 zerodep_lsp 诊断 complete=true、errors=0。
- test:types 的 Vue/Svelte 负例与补全入口改为从适配器 useStyleRuntime 获取 css，以覆盖实际包边界。
- GitHub Actions 分别运行基础检查、完整语言服务验收、Chromium 回归，并上传报告。CI 成功需以实际对应提交的 run 为准；不发布、不部署。

API 用法和 SSR 宿主职责详见 vue/README.md、svelte/README.md、core/README.md。
