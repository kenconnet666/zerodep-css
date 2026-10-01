import { Css, SystemKeywords, systemKeywords } from 'zerodep-css';
import type { Property } from 'csstype';

/** 所有可切换主题遵守同一契约，组件只依赖这些名字。 */
export interface AppKeywords extends SystemKeywords {
  readonly color: SystemKeywords['color'] & {
    /** 主操作颜色；亮暗主题分别提供适合当前背景的实际色值。 */
    readonly _primary: Property.Color;
  };
  readonly fontSize: SystemKeywords['fontSize'] & {
    /** 正文的标准字号，使用相对根字号的长度。 */
    readonly _md: Property.FontSize;
  };
}

export class LightKeywords extends SystemKeywords implements AppKeywords {
  override readonly color: AppKeywords['color'] = { ...systemKeywords.color, _primary: '#1d4ed8' };
  override readonly fontSize: AppKeywords['fontSize'] = { ...systemKeywords.fontSize, _md: '1rem' };
}
export class DarkKeywords extends SystemKeywords implements AppKeywords {
  override readonly color: AppKeywords['color'] = { ...systemKeywords.color, _primary: '#93c5fd' };
  override readonly fontSize: AppKeywords['fontSize'] = { ...systemKeywords.fontSize, _md: '1rem' };
}

/** 在组件或请求内创建；框架可传读取函数以跟踪整个主题对象替换。 */
export function createAppCss(read: () => AppKeywords): Css<AppKeywords> {
  return new Css(read);
}
