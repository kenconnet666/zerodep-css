// 构建插件入口；作者运行时不导入 TypeScript 或源码转换工具。
export { createBindingTransform } from './compiler/transform.js';
export {
  bindingNames,
  applyEdits,
  scriptEdits,
  replacePropsId,
  type Edit,
} from './compiler/source.js';
