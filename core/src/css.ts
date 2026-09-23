import type { StyleProperties, SimplePseudo, FunctionalPseudo } from './generated/properties.js';
import type { DeclarationHelpers, StyleFactory } from './builder-types.js';
import type { CssVariable } from './values.js';
import type { StyleConfig } from './style-metadata.js';

/** Css 的构建能力由一次同步样式求值提供，实例不能脱离该求值继续写样式。 */
export interface CssConstruction {
  /** 由引擎提供完整标准属性目录；作者基类不加载值校验元数据。 */
  readonly properties: readonly string[];
  readonly read: (key: PropertyKey) => unknown;
  readonly assertActive: () => void;
}
export type CssConstructor<T extends Css = Css> = new (construction: CssConstruction) => T;
const constructionKey: unique symbol = Symbol('zerodep.css-construction');
const installedCatalogs = new WeakSet<readonly string[]>();

export interface Css extends StyleProperties, DeclarationHelpers {}

/** 标准 CSS 作者基类。派生 getter、方法、super 和私有字段使用真实的类语义。 */
export class Css {
  declare private readonly [constructionKey]: CssConstruction;

  constructor(construction: CssConstruction) {
    if (
      !construction ||
      !Array.isArray(construction.properties) ||
      typeof construction.read !== 'function' ||
      typeof construction.assertActive !== 'function'
    )
      throw new TypeError('Css instances must be created by a style runtime.');
    // 目录来自引擎，稳定数组只检查一次；多个适配器共用基类时允许补齐新属性。
    if (!installedCatalogs.has(construction.properties)) {
      for (const key of [...construction.properties, 'custom', 'property']) {
        if (Object.hasOwn(Css.prototype, key)) continue;
        Object.defineProperty(Css.prototype, key, {
          get(this: Css) {
            return this[constructionKey].read(key);
          },
        });
      }
      installedCatalogs.add(construction.properties);
    }
    Object.defineProperty(this, constructionKey, { value: construction });
    return new Proxy(this, {
      get(target, key, receiver) {
        if (key === 'then') return undefined;
        construction.assertActive();
        return Reflect.has(target, key)
          ? Reflect.get(target, key, receiver)
          : construction.read(key);
      },
    });
  }

  private structure(name: string, ...args: unknown[]): void {
    this[constructionKey].assertActive();
    const operation = this[constructionKey].read(name);
    if (typeof operation !== 'function') throw new TypeError('Invalid CSS structure operation.');
    operation(...args);
  }

  /** 命名整个本次根样式；不会创建没有内容摘要的全局 class。 */
  name(value: string): this {
    this.structure('name', value);
    return this;
  }
  /** 当前构建的局部诊断配置，不修改共享 runtime 或其他样式。 */
  config(value: StyleConfig): this {
    this.structure('config', value);
    return this;
  }

  selector(selector: string, factory: StyleFactory<this>): void {
    this.structure('selector', selector, factory);
  }
  pseudo(name: SimplePseudo, factory: StyleFactory<this>): void {
    this.structure('pseudo', name, factory);
  }
  pseudoFunction(name: FunctionalPseudo, arguments_: string, factory: StyleFactory<this>): void {
    this.structure('pseudoFunction', name, arguments_, factory);
  }
  hover(factory: StyleFactory<this>): void {
    this.structure('hover', factory);
  }
  focusVisible(factory: StyleFactory<this>): void {
    this.structure('focusVisible', factory);
  }
  focus(factory: StyleFactory<this>): void {
    this.structure('focus', factory);
  }
  focusWithin(factory: StyleFactory<this>): void {
    this.structure('focusWithin', factory);
  }
  active(factory: StyleFactory<this>): void {
    this.structure('active', factory);
  }
  disabled(factory: StyleFactory<this>): void {
    this.structure('disabled', factory);
  }
  before(factory: StyleFactory<this>): void {
    this.structure('before', factory);
  }
  after(factory: StyleFactory<this>): void {
    this.structure('after', factory);
  }
  media(query: string, factory: StyleFactory<this>): void {
    this.structure('media', query, factory);
  }
  supports(query: string, factory: StyleFactory<this>): void {
    this.structure('supports', query, factory);
  }
  containerQuery(query: string, factory: StyleFactory<this>): void {
    this.structure('containerQuery', query, factory);
  }
  layer(name: string, factory: StyleFactory<this>): void {
    this.structure('layer', name, factory);
  }
  scope(prelude: string, factory: StyleFactory<this>): void {
    this.structure('scope', prelude, factory);
  }
  startingStyle(factory: StyleFactory<this>): void {
    this.structure('startingStyle', factory);
  }
  important(factory: StyleFactory<this>): void {
    this.structure('important', factory);
  }

  /** 为属性添加类型化关键字；访问新关键字仍经过原属性 raw 的值校验。 */
  protected extendProperty<
    Base extends object,
    Values extends Record<string, string | number | CssVariable>,
  >(
    property: Base,
    values: Values & { [Key in keyof Base]?: never },
  ): Base & { readonly [Key in keyof Values]: void } {
    const construction = this[constructionKey];
    construction.assertActive();
    for (const key of Reflect.ownKeys(values))
      if (typeof key !== 'string' || key === 'then' || Reflect.has(property, key))
        throw new TypeError(
          'CSS extensions cannot replace existing property members: ' + String(key),
        );
    return new Proxy(property, {
      has(target, key) {
        return Object.hasOwn(values, key) || Reflect.has(target, key);
      },
      get(target, key, receiver) {
        construction.assertActive();
        if (Object.hasOwn(values, key)) {
          const write = Reflect.get(target, 'raw');
          if (typeof write !== 'function')
            throw new TypeError('Only CSS properties can be extended.');
          write(Reflect.get(values, key));
          return undefined;
        }
        return Reflect.get(target, key, receiver);
      },
    }) as Base & { readonly [Key in keyof Values]: void };
  }
}
