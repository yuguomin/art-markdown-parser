/** 
 * @description 深拷贝
 * @param {Object|Array} source 需要拷贝的对象
 * @example objDeepCopy({age: 18})
*/
export const objDeepCopy = source => {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] =
      typeof source[item] === "object" && source[item] !== null
        ? objDeepCopy(source[item])
        : source[item];
  }
  return sourceCopy as any;
};
