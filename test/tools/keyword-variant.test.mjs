import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { keywordVariant, summary } from './keyword-variant.mjs';

test('研究变体保持样例值、大小写、单位与继承，不修改正式文件', async () => {
  assert.equal(summary.keywords, 12586);
  for (const variant of ['literal', 'concat', 'shared', 'getter', 'proxy']) {
    const output = await build({
      stdin: {
        contents:
          "export {AnimationPlayStateCss,ColorInterpolationCss,WidthCss,ImageRenderingCss,ShapeRenderingCss} from '@zerodep-css/core';",
        resolveDir: fileURLToPath(new URL('../../core', import.meta.url)),
      },
      bundle: true,
      write: false,
      format: 'esm',
      plugins: [keywordVariant(variant)],
    });
    const api = await import(
      'data:text/javascript;base64,' + Buffer.from(output.outputFiles[0].text).toString('base64')
    );
    const play = Object.freeze(new api.AnimationPlayStateCss());
    assert.equal(play.running, 'animation-play-state:running;');
    assert.equal(play.revertLayer, 'animation-play-state:revert-layer;');
    assert.equal(new api.ColorInterpolationCss().sRGB, 'color-interpolation:sRGB;');
    assert.equal(new api.WidthCss().px(12), 'width:12px;');
    assert.equal(new api.ImageRenderingCss().crispEdges, 'image-rendering:crisp-edges;');
    assert.equal(new api.ShapeRenderingCss().crispEdges, 'shape-rendering:crispEdges;');
    class Custom extends api.AnimationPlayStateCss {
      _hold = this.raw('paused');
    }
    assert.equal(new Custom()._hold, 'animation-play-state:paused;');
  }
});
