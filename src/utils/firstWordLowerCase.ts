/** 
 * @description 字符串首字母小写
 * @param {String} str 需要转换的字符串
 * @example firstWordLowerCase('AsD') return asD
 */
export const firstWordLowerCase = (str: string): string => {
  return str.replace(/(\s|^)[A-Z]/g, function(char){
      return char.toLowerCase();
  });
};