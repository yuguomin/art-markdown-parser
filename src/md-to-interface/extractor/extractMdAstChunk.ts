
/** 
 * @description 按照一个api取抽取每一个数据
 * @param {Array} mdAst 一个解析后的md语法树
 * @returns {Array} 返回一个由每个api的解析结果组成的数组
*/
export const extractMdAstChunk = (mdAst, findTableNames: string[]): never[] => {
  // extract every interface detail and explain add to an Object and push an Array
  const interfaceGather = [];
  let chunkStart = 0;
  mdAst.forEach((value, index) => {
    // TODO add to constant
    if (value.type === 'list_start' && index) {
      const chunkData = mdAst.slice(chunkStart, index);
      interfaceGather.push(extractUseTables(
        findTableNames,
        chunkData
      ) as never);
    }
    if (value.type === 'list_start') {
      chunkStart = index;
    }
    if (index === mdAst.length - 1) {
      const chunkData = mdAst.slice(chunkStart, index);
      interfaceGather.push(extractUseTables(
        findTableNames,
        chunkData
      ) as never);
    }
  });
  return interfaceGather;
};

/** 
 * @description 抽取一个api数据中需要用 多个 table数据
 * @param {Array} findTableNames 需要查找的table的header名称集合
 * @param {array} chunkData 一个api的数据
 * @returns {Object} 对应获取的table数据
*/
export const extractUseTables = (findTableNames: string[], chunkData: any[]) => {
  const userTables = {};
  findTableNames.forEach(value => {
    userTables[value] = extractChooseTable(value, chunkData);
  });
  return userTables;
};

/** 
 * @description 抽取一个api数据中 单个 table的详细过程
 * @param {Array} tableText 需要查找的table的header名称
 * @param {array} chunkData 一个api的数据
*/
export const extractChooseTable = (tableText: string, chunkData: any[]) => {
  let result = {};
  chunkData.forEach((value, index) => {
    // confirm right table chunk
    if (
      value.type === 'heading' &&
      value.depth === 4 &&
      value.text === tableText
    ) {
      result =
        chunkData.find((tableValue, tableIndex) => {
          if (tableIndex > index && tableValue.type === 'table') {
            return tableValue;
          }
        }) || {};
    }
  });
  return result;
};