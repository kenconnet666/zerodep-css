// 编译产物的稳定内部入口；不作为业务作者的样式 API。
export { withStyleSource, prepareStyle } from './style-metadata.js';
export {
  createValueFormatter,
  createDeclarationBinding,
  bxValue,
  bxTuple,
  formatUnitValues,
} from './binding.js';
