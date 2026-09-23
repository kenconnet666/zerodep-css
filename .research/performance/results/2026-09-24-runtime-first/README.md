# 运行时主线性能样本

产品基线为 f63ac11。frameworks-baseline/native-baseline 是优化前结果，frameworks-after 是简单 var 结构快路径与内部主题长键复用后的结果；对应产品改动仅 core/src/css-value.ts 与 internal/runtime/runtime.ts。

双框架同行引擎使用相同数据、布局读取和框架调度。bounded 组200元素、5次预热+30次计时更新；fresh组200元素、1次预热+5次计时更新，每帧每元素为全新值。每项取5轮中位数；静态Svelte表达式可由框架跳过，不按相同回调次数解释。产物与网络加载在计时外。

两次横向运行的 benchmark 锁文件完全相同。compiler-paths.json 记录实际编译命中；同SFC属于可分析路径，项目跨模块hook保留运行时。native-baseline是纯DOM下界，prepared项是手工内部准备，主题准备位于计时外，不能冒充编译插件或完整框架耗时。

cache-control 是旧对旧控制，cache-variable-theme/cache-repeat 是两次隔离源码成对测试。每个场景30000次、3000次预热、7轮交替，完整snapshot与工厂调用次数相同才记时。控制组约-13%到+10%的变化说明小差异不可下结论；相关优化场景重复下降约18%—25%和29%—32%，不推导整个页面等比例提速。profile-baseline仅为Node采样定位热点，排除inspector开停开销，不作页面性能结果。

复现入口在上级目录 compare-engines.mjs、browser-native.mjs、cache-paired.mjs 与 profile-runtime.mjs。先根 pnpm build；正式计时串行，勿与构建/测试并行。

## P4c 注册解析复用

registration-* 的产品基线均为 050d075，Node 无 DOM 探针，各场景独立宿主、2000次正式操作、64次不重叠值预热、7轮交替，比较完整 snapshot 与工厂次数。生成/打包资产、宿主创建、预热与显式 GC 均在计时外。它们不更新上面的双框架浏览器对照数字。

- registration-control：旧对旧控制，范围约-7%至+14%，不能将很小差异当成收益或回归。
- registration-eager：未采用的候选，所有 compileProgram 都生成检查结果，重复动画约增加10%。
- registration-lazy / registration-lazy-repeat：未采用的闭包候选，保留已验证 AST 至事务；仍有不必要的对象逃逸。
- registration-pending / registration-pending-repeat：最终实现，每宿主复用一个记录存在性判定，仅新 class ID 在当前解析中生成 inspection；缓存不保留它。两轮新单属性约下降15%—31%、新嵌套约下降16%，重复路径的小差异不作结论。

这些数据只评估注册准备成本；源代码构建在计时前进行，不是页面总时间。候选改动只涉及 internal/runtime/runtime.ts 与 serialize.ts，可从 P4c 提交查阅；未采用的 eager/lazy 数据用于保留决策依据，不代表产品行为。
