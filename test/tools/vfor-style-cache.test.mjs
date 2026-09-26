import assert from 'node:assert/strict';
import test from 'node:test';
import * as Vue from 'vue';
import { Css } from '../../core/dist/index.js';
import { compileListStyle } from './vfor-style-compiler.mjs';
import { readRowStyle, rememberRowStyle } from './vfor-style-cache.mjs';

// 小型无 DOM renderer，只验证真实 Vue 编译产物与调度；浏览器计时留在 CI。
function element(type, text = '') {
  return { type, text, children: [], props: {}, parent: null };
}
const renderer = Vue.createRenderer({
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
    const index = anchor ? parent.children.indexOf(anchor) : parent.children.length;
    parent.children.splice(index, 0, node);
    node.parent = parent;
  },
  remove(node) {
    node.parent.children.splice(node.parent.children.indexOf(node), 1);
    node.parent = null;
  },
});

const template = `<section :data-noise="noise"><div v-for="(item, index) in items" :key="item.id" :data-index="index" :class="css(s.display.flex, item.compact ? s.padding.px(4) : s.padding.px(16), s.width.px(base + index))">{{ item.label }}</div></section>`;
function mount(template, cached = true) {
  const code = compileListStyle(template, cached);
  const render = new Function('Vue', '__readRowStyle', '__rememberRowStyle', code)(
    Vue,
    readRowStyle,
    rememberRowStyle,
  );
  const state = Vue.reactive({
    noise: 0,
    base: 20,
    show: true,
    items: [
      { id: 'a', compact: false, label: 'A' },
      { id: 'b', compact: true, label: 'B' },
    ],
    groups: [
      { id: 'p', width: 10, items: [{ id: 'a', label: 'P' }] },
      { id: 'q', width: 30, items: [{ id: 'a', label: 'Q' }] },
    ],
  });
  let calls = 0,
    renders = 0;
  const app = renderer.createApp({
    setup: () => ({
      ...Vue.toRefs(state),
      s: new Css(),
      css: (...parts) => {
        calls++;
        return parts.join('');
      },
    }),
    render(...args) {
      renders++;
      return render.apply(this, args);
    },
  });
  const root = element('root');
  app.mount(root);
  return {
    state,
    root,
    app,
    code,
    calls: () => calls,
    renders: () => renders,
    async update(fn) {
      fn(state);
      await Vue.nextTick();
    },
    rows() {
      const found = [];
      const visit = (node) => {
        if (node.type === 'div') found.push(node);
        node.children.forEach(visit);
      };
      visit(root);
      return found;
    },
  };
}

test('真实 v-for 产物缓存 class，但不冻结文本；同对象字段变化、同 key 替换与重排正确', async () => {
  const probe = mount(template);
  try {
    assert.equal(probe.calls(), 2);
    await probe.update((state) => {
      state.noise++;
    });
    assert.equal(probe.calls(), 2);
    await probe.update((state) => {
      state.items[0].label = 'A2';
    });
    assert.equal(probe.rows()[0].text, 'A2');
    assert.equal(probe.calls(), 2);
    await probe.update((state) => {
      state.items[0].compact = true;
    });
    assert.equal(probe.calls(), 3);
    assert.match(probe.rows()[0].props.class, /padding:4px/);
    await probe.update((state) => {
      state.items[0] = { id: 'a', compact: false, label: 'new A' };
    });
    assert.equal(probe.calls(), 4);
    assert.match(probe.rows()[0].props.class, /padding:16px/);
    await probe.update((state) => {
      state.items.reverse();
    });
    assert.equal(probe.calls(), 6);
    assert.deepEqual(
      probe.rows().map((row) => row.text),
      ['B', 'new A'],
    );
    assert.match(probe.rows()[0].props.class, /width:20px/);
    assert.match(probe.rows()[1].props.class, /width:21px/);
    await probe.update((state) => {
      state.base = 40;
    });
    assert.equal(probe.calls(), 8);
    assert.match(probe.rows()[1].props.class, /width:41px/);
    assert.equal(probe.renders(), 7, '不得因更新缓存引起额外渲染');
  } finally {
    probe.app.unmount();
  }
});

test('删除、新增、旧对象脱离列表及重新挂载不会使用旧闭包', async () => {
  const probe = mount(template);
  try {
    const old = probe.state.items[0];
    await probe.update((state) => {
      state.items = [];
    });
    assert.equal(probe.rows().length, 0);
    const renders = probe.renders();
    await probe.update(() => {
      old.compact = true;
    });
    assert.equal(probe.renders(), renders);
    await probe.update((state) => {
      state.items = [{ id: 'a', compact: true, label: 'replacement' }];
    });
    assert.equal(probe.calls(), 3);
    assert.match(probe.rows()[0].props.class, /padding:4px/);
  } finally {
    probe.app.unmount();
  }
  const fresh = mount(template);
  assert.equal(fresh.calls(), 2);
  fresh.app.unmount();
});

test('嵌套循环中的同名 key 以完整局部变量身份隔离', async () => {
  const probe = mount(
    `<section v-for="group in groups" :key="group.id"><div v-for="item in group.items" :key="item.id" :class="css(s.width.px(group.width))">{{item.label}}</div></section>`,
  );
  try {
    assert.deepEqual(
      probe.rows().map((row) => row.props.class),
      ['width:10px;', 'width:30px;'],
    );
    await probe.update((state) => {
      state.groups[0].width = 15;
    });
    assert.deepEqual(
      probe.rows().map((row) => row.props.class),
      ['width:15px;', 'width:30px;'],
    );
    await probe.update((state) => {
      state.groups.reverse();
    });
    assert.deepEqual(
      probe.rows().map((row) => row.props.class),
      ['width:30px;', 'width:15px;'],
    );
  } finally {
    probe.app.unmount();
  }
});

test('v-memo 仅列出样式依赖会冻结行文本，不能替代 class 缓存', async () => {
  const probe = mount(
    template.replace(':key="item.id"', ':key="item.id" v-memo="[item.compact, base, index]"'),
    false,
  );
  try {
    await probe.update((state) => {
      state.items[0].label = 'A2';
    });
    const text = (node) => node.text + node.children.map(text).join('');
    assert.equal(text(probe.rows()[0]), 'A');
  } finally {
    probe.app.unmount();
  }
});

test('原模板对照：无关渲染会重新执行每行 css', async () => {
  const probe = mount(template, false);
  try {
    await probe.update((state) => {
      state.noise++;
    });
    assert.equal(probe.calls(), 4);
  } finally {
    probe.app.unmount();
  }
});
