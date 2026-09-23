# 运行时主线性能样本

产品基线为 f63ac11。frameworks-baseline/native-baseline 是优化前结果，frameworks-after 是简单 var 结构快路径与内部主题长键复用后的结果；对应产品改动仅 core/src/css-value.ts 与 internal/runtime/runtime.ts。

双框架同行引擎使用相同数据、布局读取和框架调度。bounded 组200元素、5次预热+30次计时更新；fresh组200元素、1次预热+5次计时更新，每帧每元素为全新值。每项取5轮中位数；静态Svelte表达式可由框架跳过，不按相同回调次数解释。产物与网络加载在计时外。

两次横向运行的 benchmark 锁文件完全相同。compiler-paths.json 记录实际编译命中；同SFC属于可分析路径，项目跨模块hook保留运行时。native-baseline是纯DOM下界，prepared项是手工内部准备，主题准备位于计时外，不能冒充编译插件或完整框架耗时。

cache-control 是旧对旧控制，cache-variable-theme/cache-repeat 是两次隔离源码成对测试。每个场景30000次、3000次预热、7轮交替，完整snapshot与工厂调用次数相同才记时。控制组约-13%到+10%的变化说明小差异不可下结论；相关优化场景重复下降约18%—25%和29%—32%，不推导整个页面等比例提速。profile-baseline仅为Node采样定位热点，排除inspector开停开销，不作页面性能结果。

复现入口在上级目录 compare-engines.mjs、browser-native.mjs、cache-paired.mjs 与 profile-runtime.mjs。先根 pnpm build；正式计时串行，勿与构建/测试并行。
