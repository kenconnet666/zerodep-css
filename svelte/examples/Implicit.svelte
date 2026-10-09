<script lang="ts">
  import { Css, css, WidthCss } from 'zerodep-css-svelte';
  let width = $state(24);
  let color = $state('#245fc5');
  let rows = $state([
    { id: 'a', width: 12 },
    { id: 'b', width: 36 },
  ]);
  const s = new Css();
  // svelte-ignore state_referenced_locally (css 调用由插件转换为派生表达式)
  const box = css(s.width.px(width), s.color.raw(color));
  class MappedWidth extends WidthCss {
    protected override readonly name = 'opacity';
  }
  class MappedCss extends Css {
    override readonly width = new MappedWidth();
  }
  const mapped = new MappedCss();
  let invalid = $state('auto');
  // svelte-ignore state_referenced_locally (css 调用由插件转换为派生表达式)
  const shared = css(s.height.px(width));
  const saved = shared;
  const combined = css(shared, s.color.red);
  function update() {
    width += 4;
    color = '#663399';
    rows = [...rows].reverse();
    rows[0]!.width += 5;
  }
</script>

<section>
  <button data-update onclick={update}>更新尺寸、颜色并重排</button>
  <button data-invalid onclick={() => (invalid = '0.8')}>更新自定义作者</button>
  <div data-named class={box} style="padding:3px">命名样式</div>
  <div data-direct class={css(s.width.px(width), s.color.raw(color))}>直接样式</div>
  {#each rows as row (row.id)}<div data-row={row.id} class={css(s.width.px(row.width))}>
      列表
    </div>{/each}
  <div data-custom class={css(mapped.width.raw('0.5'), mapped.width.raw(invalid))}>
    无效值保留前面的有效声明
  </div>
  <div data-shared class={shared}>普通字符串用途</div>
  <div data-saved class={saved}>普通赋值保留快照</div>
  <div data-combined class={combined}>组合命名样式</div>
</section>
