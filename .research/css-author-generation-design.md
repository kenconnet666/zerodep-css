# CSS 作者链代码生成设计（按新写法调整，待审核）

本文件只提出生成方案，不实现生成器。已确定的范围是 **502 个标准与独有 SVG 属性**；包体积不是筛选关键字的理由，优先保证写法自然。每个属性是一条链，常见用法直接产出声明字符串：

```ts
s.display.flex; // 'display:flex;'
s.width.auto; // 'width:auto;'
s.width.px(24); // 'width:24px;'
s.width.raw('calc(100% - 2rem)'); // 'width:calc(100% - 2rem);'
```

系统关键字、`px(number)` 和 `raw(value)` 是同一属性链上的三种输入。`raw('xx')` 是逃生舱：直接拼成 `width:xx;`，不解析、不校验、不补单位，浏览器决定该声明是否生效。它的类型仍提示本属性已知值，同时允许任意普通字符串。主题关键字通过继承属性链添加，例如 `s.width._md`，不需要另一套关键字 API。当前手写的三条属性链只是原型，实现生成器时再替换。

## 先看用户实际怎么写

| 用户写法             | 得到的字符串        | 何时使用                                    |
| -------------------- | ------------------- | ------------------------------------------- |
| `s.display.flex`     | `display:flex;`     | 固定 CSS 关键字，无函数调用                 |
| `s.width.px(24)`     | `width:24px;`       | 数字明确表示像素                            |
| `s.width.raw('50%')` | `width:50%;`        | 百分比、`calc()`、`var()` 或任何自写 CSS 值 |
| `s.opacity.raw(0.5)` | `opacity:0.5;`      | CSS 本来就接受无单位数字的属性              |
| `s.width._md`        | 例如 `width:48rem;` | 项目通过继承加的主题关键字                  |

这些都是普通字符串片段，可传给 `css(s.display.flex, s.width.px(24))`。`css(s.color.red, s.color.blue)` 会保留两条声明，由浏览器按原生层叠得到蓝色，不做属性去重。生成 1.25 万个关键字字符串**不意味着向页面插入 1.25 万条 CSS 规则**；只有调用外层 `css(...)` 组合并注册时，宿主才写入用到的规则。

## 请审阅的四个具体选择

**1．哪些属性应出现 `px()`？** 推荐只在属性类型表明可接收长度时提供。例如 `s.width.px(24)`、`s.marginTop.px(8)` 可用；`s.opacity.px(0.5)` 没有意义，编辑器就不提示它。当前 `csstype` 给出 177 个候选，生成器还会列出最终清单与例外供检查。`px()` 只拼 `${number}px`；即使传入浏览器不接受的数字，也不在框架里加运行时校验。[CSSType 对长度参数及零值的解释](https://github.com/frenic/csstype#generics)说明了为什么普通数字不能自动当作长度。

**2．简写属性的 `px()` 能接几个数字？** 单值容易理解：`s.padding.px(8)` 得到 `padding:8px;`。旧项目里 `s.padding.px(8, 16)` 很顺手，在新字符串 API 中也可以得到 `padding:8px 16px;`；CSS 的 [padding 规则](https://drafts.csswg.org/css-box/#padding)规定了 1～4 个值的位置。`s.gap.px(8, 12)` 可得到 `gap:8px 12px;`，前后分别是行间距和列间距，[gap 规则](https://drafts.csswg.org/css-gaps-1/#gap-shorthand)允许两个值。推荐只给 `padding`、`margin`、`gap` 等**每个位置都是长度**的简写添加相应参数个数，不把 `border.px(1, 2)` 这样的混合值简写也做成通用多参数函数。未覆盖的组合一直可用 `raw('8px 16px')`。

**3．`raw()` 遇到数字怎么提示？** 推荐按属性区别对待：`s.opacity.raw(0.5)` 合理，写出 `opacity:0.5;`；`s.width.raw(24)` 会写出没有单位的 `width:24;`，所以在生成版中给出类型错误，引导写 `s.width.px(24)`。`s.width.raw('24')` 仍完全允许，而且运行时仍原样拼成 `width:24;`，框架不阻止它。这里的“类型错误”只帮助作者避免无意漏掉单位，不改变 `raw()` 对任意字符串的逃生能力。当前三属性原型允许 `width.raw(24)`，因此这是一个明确的类型调整。

**4．`useCss()` 是否还需要空 `Proxy`？** 目前它的处理器是 `{}`，没有拦截行为。做了一个只为比较结构的 Chrome 153 探针：模拟 502 条属性链、每条 25 个关键字；每种方式创建 2,000 个对象，再连续读取 900 万次。三轮中位数如下，单位毫秒：

| 属性链存放方式                    | 创建 2,000 个对象 | 900 万次读取 |
| --------------------------------- | ----------------: | -----------: |
| 每实例有 502 个自有引用，直接对象 |              69.4 |        152.6 |
| 共享原型上的属性链，直接对象      |               0.1 |        138.5 |
| 每实例有自有引用，外包空 `Proxy`  |              72.8 |        291.8 |
| 共享原型，外包空 `Proxy`          |               0.1 |        549.5 |

可在 `.research/string-css-probe` 运行 `pnpm probe:author-storage` 重测。这是合成微基准，不含真实组件渲染、CSS 注册、浏览器布局或最终生成代码中的冻结操作；900 万次读取也远高于正常页面的一次更新。数字只说明**当前空 Proxy 与存放位置会改变成本**。已确定的字段字符串、主题继承、`raw()`、`px()` 和后续编译器变量绑定都不需要当前这个空 `get` 拦截；因此推荐首版让 `useCss()` 返回普通类实例，系统关键字链共享在原型上。主题仍可用子类实例字段覆盖 `width`。如果后续确有需要拦截的行为，再针对那个行为重新测 Proxy。

## 另外两条性能边界

**动态值不等于生成器的问题。** `css(s.width.px(width))` 在纯运行时模式下，宽度出现新值时可能生成新的规则；缓存只避免重复值再次插入。可选组件编译器可仿照 Vue `v-bind()`，把它变成一次注册的 `width:var(--w);`，在目标元素上响应式绑定 `--w:24px`。嵌套在 `ic('&:hover', s.width.px(width))` 时也一样：hover 由浏览器匹配，变量值变化才更新绑定。生成器负责属性与方法，编译器负责这一优化，不能把两者混成同一个脚本。

**共享对象需要防止意外写坏所有实例。** TypeScript 的 `readonly` 不会在运行时冻结对象。如果系统关键字原型和默认属性链被共享，生成器应在初始化时冻结这些系统对象；主题子类另建实例，仍能增加 `_md` 或覆盖整条 `width` 链。模块加载时解析约 1.25 万个常量、IDE 补全 502 个属性的代价也要在真实生成后量测；包体积不设硬门槛，启动与编辑体验仍需检查。

## 数据来源与实测规模

1. **主数据：已固定的 [`csstype` 3.2.3](https://github.com/frenic/csstype)。** 它由 MDN 数据生成，提供标准长属性、简写、SVG、厂商前缀和过时属性的分类、`Property.*` 值类型，以及语法、初始值和 MDN 链接注释。生成脚本用 TypeScript 编译器 API 读取类型声明的 AST 和字面量联合类型；不从排版后的类型文本做正则解析。
2. **注释元数据：固定版本的 [MDN CSS 数据](https://github.com/mdn/data/blob/main/css/properties.json)。** `properties.json` 提供属性语法、初始值、继承性、状态和文档链接；[维护说明](https://github.com/mdn/data/blob/main/docs/updating_css_json.md)说明这些字段来自规范。它用于生成注释与交叉检查，不另行决定有哪些快捷关键字。
3. **可选审计：[W3C Webref CSS](https://github.com/w3c/webref)。** 它是规范提取数据，可报告 `csstype` 暂缺的新属性；不直接加入首版生成输入，因为规范里的新特性不等同于目标浏览器已支持。

对本机版本用 TypeScript 类型检查器统计：标准长属性 421 个、简写 76 个；SVG 属性 60 个，其中 55 个与标准属性重合，因此本轮生成 **502 个不同属性**。标准属性的字面量值在各属性下出现约 13,139 次；过滤厂商私有关键字和不能作为 JS 成员名的值后，约有 12,544 个快捷成员。按 `readonly x = 'property:value;'` 粗算，单是这些字段的源码文本约 619 KB，**这不是构建后的包体积或运行时内存测量**。

厂商前缀、过时属性和 `--custom-property` 暂不生成直接成员；用户仍可通过原生字符串片段表达。数据快照的 502 个属性不意味着每个目标浏览器均支持它们。

## 生成规则

- 从 `StandardLonghandProperties`、`StandardShorthandProperties` 与 SVG 接口取得属性及 `Property.*` 类型；与对应的 `*PropertiesHyphen` 接口对齐以获取准确的 CSS 属性名。当前版本的三组接口分别是 421/421、76/76、60/60，逐项类型一致。以后若数量、顺序或类型不符，生成失败并报告，不猜测名称。
- 用 TypeScript 类型检查器展开每个属性类型，收集字符串字面量作为候选快捷值。`(string & {})`、数值、函数语法、任意长度和时间值不是固定关键字。每条链的 `raw()` 使用对应的 `Property.* | (string & {})`：有字面量补全，也接纳普通字符串。数字仅按该属性类型允许的情况接纳；例如 `opacity.raw(0.5)` 可直接输出 `opacity:0.5;`，长度值优先使用 `width.px(24)`，`width.raw('24px')` 仍可用。这会把当前试验版允许的 `width.raw(24)` 收紧为类型错误；应改用 `width.px(24)`，运行时 `raw()` 仍只是原样拼接。
- 对允许 CSS 长度的属性生成 `px(value: number)`，只执行 `property:${value}px;` 的字符串拼接。当前 `csstype` 中标准属性有 177 个引用 `TLength` 泛型，可作为候选清单；生成器将清单和例外输出供审核，不由字段名猜测。首轮只提供 `px` 这一种单位方法，其他单位和 `calc()` 等组合值可用 `raw()`。
- CSS 值名转成 JS 成员名，例如 `space-between → spaceBetween`、`revert-layer → revertLayer`。跳过厂商私有关键字和不能无歧义映射的值；遇到 `raw`、`constructor`、`then` 等成员冲突，或两种值映射成同一名称，生成失败并在报告中列出，供人决定是否只经 `raw()` 提供。
- 每个系统关键字成员的值是**预先生成的完整声明字符串**，不会在 `s.width.auto` 读取时解析、验证或拼接 CSS。`px()` 和 `raw()` 是薄字符串函数，不共享旧版回调式写入状态。浏览器仍负责值语义；数据更新后由生成差异供人审查。
- 保留现有公开名称 `ColorCss`、`WidthCss`、`OpacityCss`、`Css` 与 `useCss`；新增属性链按同一命名规则生成，不同时保留另一套同义 API。主题或应用成员写在手工代码里，不进入生成文件。

## 输出形态与实例化

不能照当前试验代码为每个 `new Css()` 执行约 502 次 `new PropertyCss()`，更不能为每次调用重建约 1.25 万个关键字字符串。建议让生成的关键字对象只在模块装载时创建一次，并挂到属性链类的原型；系统 `Css` 的属性链引用也挂在原型上。TypeScript 使用 `declare readonly` 声明公开成员，实例不产生对应字段，子类仍可覆盖属性链。已用当前 TypeScript 6 验证这种声明允许 `override readonly width = new ThemeWidthCss()`。

下面只是输出结构示意，不是准备手写的最终文件：

```ts
const widthKeywords = {
  auto: 'width:auto;',
  minContent: 'width:min-content;',
} as const;

type WidthKeywords = Readonly<typeof widthKeywords>;
export interface WidthCss extends WidthKeywords {}
/** 元素宽度；初始值 auto。@see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width */
export class WidthCss extends LengthPropertyCss<Property.Width> {
  constructor() {
    super('width');
  }
}
Object.assign(WidthCss.prototype, widthKeywords);
Object.freeze(WidthCss.prototype);

export class Css {
  declare readonly width: WidthCss;
}
Object.assign(Css.prototype, { width: Object.freeze(new WidthCss()) });
Object.freeze(Css.prototype);
```

`CssProperty<T>.raw(value: T | (string & {}))` 只拼接原始值；`LengthPropertyCss<T>.px(value: number)` 只拼接 `px`。已用当前 TypeScript 6 的语言服务验证：这种泛型 `raw()` 仍提示 `auto`、`min-content`，而任意普通字符串没有诊断。属性快捷字符串共享，主题仍可继承 `WidthCss` 增加 `_md`，再继承 `Css` 覆盖 `width`。生成前先拿 10 个高频属性做小探针，比较模块加载、`useCss()` 实例化、`s.color.red` 读取和构建体积；性能只帮助选择内部存储结构，不用于砍掉已确定的属性和关键字。

## 归档使用例子的借鉴范围

只读查看了旧项目的 README、Vue 类型示例和组件夹具。`s.display.flex`、`s.width.px(width)`、`s.width.raw('fit-content')` 的调用形式验证了关键字、单位和开放值在一条链上比较顺手；`s.padding.px(8, 16)` 说明常见简写的多参数单位写法值得单独考虑。旧项目的 `css((s) => { ... })` 是有状态作者回调，当前方案要求这些表达式直接返回字符串，**不迁移旧回调、`token()` 或内部解析/覆盖机制**。

## 注释与目录

生成文件放在 `core/src/generated/`，按属性名首字母分组，配一个生成入口；不把数万行内容堆在手写的 `author.ts`。每个属性链至少有简短 JSDoc：CSS 原名、语法或初始值、MDN 链接。约 30～50 个高频属性在独立的手工映射文件里补一句经过审核的中文用途说明；其余统一生成“CSS 属性 `…`；初始值 `…`”这样的中文提示。不自动翻译 MDN 文本，也不复制兼容性表格。关键字本身通常不逐个注释，以免生成文件膨胀；含义容易混淆的值可在手工映射中添加短注释。

建议的职责边界：`scripts/generate-css-author.mjs` 读取固定依赖并生成文件，`scripts/css-author-notes.json` 保存少量中文说明与命名例外，`core/src/generated/` 只放生成结果。输出头部标明来源版本和“请运行生成脚本，勿手改”。

## 生成与审核流程

提供 `pnpm css:generate` 更新生成结果，以及 `pnpm css:generate:check` 在内存中生成并与仓库文件比较。生成顺序固定，换机安装固定 lockfile 后应得到相同字节。升级来源数据时先看属性增删、关键字增删、跳过和冲突清单，再更新生成文件。

验证分三层：类型检查所有属性链并保留两层主题继承例子；抽样检查长属性、简写、SVG、普通字符串、关键字补全及 `px(number)` 是否只出现在长度属性上；浏览器抽样验证声明、`ic()` 嵌套与样式层叠。继续沿用性能探针观察启动、规则注册和访问成本，但不以“等同原生 CSS”为门槛。生成器不承担浏览器值合法性检查，也不实现响应式变量绑定编译。

请先审阅前面的四个选择。本轮仍只改设计文档；收到意见后先做 10 属性样例与实际编译产物测量，再展开 502 属性生成。
