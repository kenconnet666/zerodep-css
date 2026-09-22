// Node 端计算探针，不包含浏览器样式计算、布局或组件调度。
import { performance } from 'node:perf_hooks';
import { createRuntime } from '../../core/dist/index.js';
import { prepareStyle } from '../../core/dist/compiler-runtime.js';

const factory = (s) => {
  s.display.flex;
  s.padding.px(8, 16);
  s.hover((h) => {
    h.color.red;
  });
};
const iterations = 10000;
const key = '1'.repeat(64);
function sample(prepared) {
  const runtime = createRuntime({ target: null });
  try {
    for (let i = 0; i < 100; i++) runtime.css(prepared ? prepareStyle(factory, key) : factory);
    const start = performance.now();
    for (let i = 0; i < iterations; i++)
      runtime.css(prepared ? prepareStyle(factory, key) : factory);
    return { milliseconds: performance.now() - start, records: runtime.stats().records };
  } finally {
    runtime.dispose();
  }
}
const results = { node: process.version, iterations, runtime: [], prepared: [] };
for (let index = 0; index < 5; index++) {
  // 轮换先后顺序，避免只给一条路径额外预热。
  for (const prepared of index % 2 ? [true, false] : [false, true])
    results[prepared ? 'prepared' : 'runtime'].push(sample(prepared));
}
console.log(JSON.stringify(results, null, 2));
