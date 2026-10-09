<script setup lang="ts">
import { ref } from 'vue';
import { Css, css, WidthCss } from 'zerodep-css-vue';
const width = ref(24);
const color = ref('#245fc5');
const rows = ref([
  { id: 'a', width: 12 },
  { id: 'b', width: 36 },
]);
const s = new Css();
const box = css(s.width.px(width.value), s.color.raw(color.value));
class MappedWidth extends WidthCss {
  protected override readonly name = 'opacity';
}
class MappedCss extends Css {
  override readonly width = new MappedWidth();
}
const mapped = new MappedCss();
const invalid = ref('auto');
const shared = css(s.height.px(width.value));
const saved = shared;
const combined = css(shared, s.color.red);
function update() {
  width.value += 4;
  color.value = '#663399';
  rows.value = [...rows.value].reverse();
  rows.value[0]!.width += 5;
}
</script>
<template>
  <section>
    <button data-update @click="update">更新尺寸、颜色并重排</button>
    <button data-invalid @click="invalid = '0.8'">更新自定义作者</button>
    <div data-named :class="box" style="padding: 3px">命名样式</div>
    <div data-direct :class="css(s.width.px(width), s.color.raw(color))">直接样式</div>
    <div v-for="row in rows" :key="row.id" :data-row="row.id" :class="css(s.width.px(row.width))">
      列表
    </div>
    <div data-custom :class="css(mapped.width.raw('0.5'), mapped.width.raw(invalid))">
      无效值保留前面的有效声明
    </div>
    <div data-shared :class="shared">普通字符串用途</div>
    <div data-saved :class="saved">普通赋值保留快照</div>
    <div data-combined :class="combined">组合命名样式</div>
  </section>
</template>
