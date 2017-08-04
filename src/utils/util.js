/**
 * Created by lf on 2017/8/4.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
}

export function isVNode (node) {
    return typeof node === 'object' && hasOwn(node, 'componentOptions')
}
