import { createRenderer } from 'vue';

export function element(type, text = '') {
  return { type, text, children: [], props: {}, parent: null };
}
/** 焦点测试只使用 Vue 的真实调度，不依赖浏览器布局或计时。 */
export const renderer = createRenderer({
  createElement: element,
  createText: (text) => element('#text', text),
  createComment: (text) => element('#comment', text),
  setText(node, text) {
    node.text = text;
  },
  setElementText(node, text) {
    node.text = text;
    node.children = [];
  },
  parentNode: (node) => node.parent,
  nextSibling: (node) => node.parent?.children[node.parent.children.indexOf(node) + 1] ?? null,
  patchProp(node, key, previous, next) {
    node.props[key] = next;
  },
  insert(node, parent, anchor = null) {
    if (node.parent) node.parent.children.splice(node.parent.children.indexOf(node), 1);
    parent.children.splice(
      anchor ? parent.children.indexOf(anchor) : parent.children.length,
      0,
      node,
    );
    node.parent = parent;
  },
  remove(node) {
    node.parent.children.splice(node.parent.children.indexOf(node), 1);
    node.parent = null;
  },
});
export function find(root, prop) {
  const result = [];
  function visit(node) {
    if (prop in node.props) result.push(node);
    node.children.forEach(visit);
  }
  visit(root);
  return result;
}
