// 研究 csstype 驱动的类型形态；仅类型检查，不是公开 API。
import type { Property } from 'csstype';
import type { CssProperty } from '../../src/generated/base.js';

type Literal<T> = T extends string ? (string extends T ? never : T) : never;
type Camel<T extends string> = T extends `${infer Head}-${infer Next}${infer Rest}`
  ? `${Head}${Uppercase<Next>}${Camel<Rest>}`
  : T;
type Keywords<T, Name extends string> = {
  readonly [
    Value in Literal<T> as Value extends `-${string}` ? never : Camel<Value>
  ]: `${Name}:${Value};`;
};
type PlayState = CssProperty<Property.AnimationPlayState> &
  Keywords<Property.AnimationPlayState, 'animation-play-state'>;
declare const PlayStateClass: new () => PlayState;
class AppPlayState extends PlayStateClass {
  readonly _stopped = this.raw('paused');
}
declare const s: AppPlayState;
s.running satisfies 'animation-play-state:running;';
s.revertLayer satisfies 'animation-play-state:revert-layer;';
s._stopped satisfies string;
s.raw('running');
s.raw('arbitrary-css-value');
// @ts-expect-error 开放字符串不能扩张成任意成员名
s.notAKeyword;
// @ts-expect-error 固定关键字保持只读
s.running = 'animation-play-state:running;';
// @ts-expect-error 不加入当前生成器排除的厂商关键字
s['-moz-initial'];
