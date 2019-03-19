/** 
 * @description 以某元素转驼峰
 * @param {String} str 需要转换的字符串
 * @param {String} symbol 转换的元素
 * @example toHump('/asd/asd', '/') return AsdAsd
*/
export const toHump = (str: string, symbol: string = '/'): string => {
  const reg = new RegExp(`\\${symbol}(\\w)`, 'g')
  return str.replace(reg, function(all, letter){
      return letter.toUpperCase();
  });
}

/** 
 * @description 字符串首字母大写
 * @param {String} str 需要转换的字符串
 * @example firstWordUpperCase('asd') return Asd
*/
export const firstWordUpperCase = (str: string): string => {
  return str.replace(/(\s|^)[a-z]/g, function(char){
      return char.toUpperCase();
  });
}

/** 
 * @description 字符串首字母小写
 * @param {String} str 需要转换的字符串
 * @example firstWordLowerCase('AsD') return asD
*/
export const firstWordLowerCase = (str: string): string => {
  return str.replace(/(\s|^)[A-Z]/g, function(char){
      return char.toLowerCase();
  });
}

/** 
 * @description 找到数组与目标数组相对的index值
 * @param {Array} findArr 查找的数组
 * @param {Array} TargetArr 目标母数组
 * @example findAllIndex(['a', 'c'], ['a', 'd', 'c']) return [0, 2]
*/
export const findAllIndex = (findArr, targetArr): number[] => {
  const indexGather = [];
  findArr.forEach(value => {
    indexGather.push(targetArr.indexOf(value) as never);
  });
  return indexGather;
};

/** 
 * @description 数组扁平化
 * @param {Array} arr 需要扁平的数组
 * @example findAllIndex(['a', 'c'], ['a', 'd', 'c']) return [0, 2]
*/
export const flattenArray = arr => {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flattenArray(next) : next);
  }, []);
};

/** 
 * @description 深拷贝
 * @param {Object|Array} source 需要拷贝的对象
 * @example objDeepCopy({age: 18})
*/
export const objDeepCopy = source => {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] =
      typeof source[item] === "object"
        ? objDeepCopy(source[item])
        : source[item];
  }
  return sourceCopy;
};
