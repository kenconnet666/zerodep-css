/** 同步、跨浏览器/Node 一致的非加密内容摘要；注册表仍比较完整内容检测碰撞。 */
export function hashText(value: string): string {
  let a = 0x811c9dc5;
  let b = 0x9e3779b9;
  for (let i = 0; i < value.length; i++) {
    const c = value.charCodeAt(i);
    a = Math.imul(a ^ c, 0x01000193);
    b = Math.imul(b ^ c, 0x85ebca6b);
    b ^= b >>> 13;
  }
  return (a >>> 0).toString(36) + '-' + (b >>> 0).toString(36);
}
