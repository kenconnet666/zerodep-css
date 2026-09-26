# 属性前缀与关键字分离研究

结论：可以显著减少完整作者入口的传输体积。优先建议“构造时拼接，普通字段读取”，再将五个 CSS 全局关键字放入公共基类；是否正式迁移仍待决定。本轮不改变正式生成器、core 实现、现有导出或生成结果。

后续决策已明确：用户优先要求类型简单易读，体积和极限性能不主导设计。正式实现采用非泛型基类和属性类上的显式方法签名，继续保留完整声明字段；下文的存储方案与数据作为历史研究保留，不再作为当前迁移建议。

## 来源与方案

工作区固定的 csstype 3.2.3 是类型包，package.json 的 main 为空，类型入口为 index.d.ts。AnimationPlayState 是 Globals、paused、running 和开放字符串的联合类型，运行时没有可以直接读取的关键字对象。

当时生成结果有 502 个属性、12,586 个关键字成员，但不同值只有 718 个。类型提示可以从 csstype 联合类型映射得到，[研究类型样板](https://github.com/kenconnet666/zerodep-css/blob/b199f9450b7db1e048a5d395dccb9c4e1ab88fa0/core/test/types/keyword-shape.ts)验证了已知成员、只读约束和继承形态。该复杂样板未被采用，已从正式类型测试目录移除，保留在 Git 历史中。

同一源码生成五个内存研究副本，不手改 generated：

| 标记    | 运行时表示                                                                   |
| ------- | ---------------------------------------------------------------------------- |
| literal | 当前 readonly 字段直接保存完整声明                                           |
| concat  | readonly 字段在实例初始化时用 this.name + ':running;' 拼接                   |
| shared  | concat 加公共基类统一初始化 inherit / initial / revert / revertLayer / unset |
| getter  | 属性访问器每次读取时拼接                                                     |
| proxy   | 删除关键字 JS 字段，保留 declare 类型；Proxy 根据成员名生成并缓存字符串      |

Proxy 不能无条件把 camelCase 转成连字符。例如 `imageRendering.crispEdges` 对应 `image-rendering:crisp-edges;`，而 `shapeRendering.crispEdges` 对应 `shape-rendering:crispEdges;`。研究副本保留共享大小写例外及少量按属性区分的例外，以精确匹配原有声明。

## CI 测量

提交 `b199f94` 的[完整 CI](https://github.com/kenconnet666/zerodep-css/actions/runs/36232583424)通过；耗时构建、压缩、浏览器微基准和框架测量均在 CI 运行。本地只检查了样例语义与类型。

环境：Node 24.21.0、Chromium 153.0.8010.12；固定工作区 esbuild、Vue/Svelte 版本。各副本验证全部 12,586 个关键字输出。微基准五轮轮换顺序；Vue/Svelte 组件各三轮，200 个元素连续更新 20 次。组件用例按变体依次执行，短时差异不能当作稳定的性能提升。

完整 Css 消费入口，单位 KiB（1,024 字节）：

| 方案    | minified JS | gzip 9 | Brotli 11 | gzip 相对当前减少 |
| ------- | ----------: | -----: | --------: | ----------------: |
| literal |       670.7 |   69.6 |      45.5 |                 — |
| concat  |       620.2 |   30.0 |      16.1 |             56.9% |
| shared  |       545.3 |   29.0 |      15.6 |             58.3% |
| getter  |       779.9 |   32.1 |      16.4 |             53.8% |
| proxy   |       213.4 |   11.1 |       8.5 |             84.1% |

这些是保留完整 Css 导出的同构打包结果，不是整个应用或所有场景的包体积。concat 的原始 JS 只减少约 7.5%，但不同属性类中的关键字初始化代码变得相同，压缩可以复用更长的片段，因此压缩收益远大于原始体积变化。

按需只导入一个类时，收益不同：

| 方案    | ColorCss gzip，B | AnimationPlayStateCss gzip，B |
| ------- | ---------------: | ----------------------------: |
| literal |            1,877 |                           469 |
| concat  |            1,916 |                           470 |
| shared  |            1,944 |                           490 |
| getter  |            1,953 |                           477 |
| proxy   |            1,068 |                         1,025 |

不能把完整入口节省 58% 推广到单属性导入；对于很小的属性类，公共 Proxy 基础设施反而更大。

浏览器微基准中位数，单位 ms：

| 方案    | 脚本执行 | new Css | 常见属性首次读取 | 热读取 50 万轮 | css 缓存命中 20 万次 | 主题颜色实例 1,000 个 |
| ------- | -------: | ------: | ---------------: | -------------: | -------------------: | --------------------: |
| literal |     15.3 |     3.5 |              0.4 |           10.2 |                 35.7 |                   2.2 |
| concat  |     16.8 |     3.5 |              0.4 |           10.0 |                 33.1 |                   4.5 |
| shared  |     14.9 |     3.4 |              0.4 |           10.1 |                 33.0 |                   4.6 |
| getter  |     25.5 |     2.5 |              0.2 |           17.8 |                 40.1 |                   0.6 |
| proxy   |      7.1 |     3.2 |              0.2 |           61.4 |                 59.3 |                   0.9 |

热读取每轮读取两个关键字；css 缓存命中用真实登记器但不写 DOM。这不是浏览器页面渲染耗时。concat/shared 的拼接发生在属性实例构造时，随后仍是普通字符串字段读取；系统属性链本来就惰性共享，不会每个组件都重新构造全部属性。用户反复创建主题颜色子类时，构造成本约翻倍，不能忽略这个代价。

真实适配器的 200 元素连续更新 20 次中位数：

| 方案    | Vue ms | Svelte ms |
| ------- | -----: | --------: |
| literal |   44.5 |      41.4 |
| concat  |   47.4 |      43.0 |
| shared  |   43.4 |      38.5 |
| getter  |   44.6 |      43.8 |
| proxy   |   42.9 |      41.9 |

所有变体的计算样式与规则数断言通过。此组件用例中不同表示的更新时间接近，不宣称 shared 更快，也不把 Proxy 的热读取差距直接说成整个页面慢六倍。

## 建议与兼容边界

推荐下一次正式改造采用 shared 或先采用 concat：继续保留 class 和普通 readonly 字段，把重复属性名移到基类，构造时拼好一次。`s.animationPlayState.running`、raw / 单位方法、主题继承和 css 输入形态均可以保持。

示意：

```ts
// inherit 等五个全局字段由 CssProperty 构造时统一初始化。
class AnimationPlayStateCss extends CssProperty<Property.AnimationPlayState> {
  readonly paused = this.name + ':paused;';
  readonly running = this.name + ':running;';
  constructor() {
    super('animation-play-state');
  }
}
```

正式迁移需处理当前字段的精确字面量类型、补全与中文注释，以及静态字段研究探针。必要的 declare 或类型映射会被擦除，不影响 JS 体积。研究没有证明新构造方式节省总堆内存，不从压缩字节推断内存收益。

getter / Proxy 会改变对象枚举：研究中关键字不再是 own 字段。Proxy 即使缓存字符串，每次读取仍经过 get 拦截；其未知成员返回字符串，当前实现返回 undefined。若要保留这些运行时边界，需要更多描述符、has/ownKeys 或关键字数据，不能把最小研究实现的体积当成完整兼容实现的最终体积。

完整泛型化还可以继续削减每属性类的样板，但会牵动构造器导出、继承、单位能力和 IDE 展示。本轮先隔离关键字存储表示的收益，不未经审阅替换正式架构。

原始数据：[keyword-representation-b199f94.json](string-css-probe/results/keyword-representation-b199f94.json)。复跑入口为 `pnpm --dir .research/string-css-probe probe:keywords`，按照项目约定由 CI 执行耗时测量。
