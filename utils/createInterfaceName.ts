import { flattenArray, toHump } from './tools';
import isCutOut from '../art.config.js';

/** 
 * @description 生成最终的一个interface名字
 * @param detailTable api的detail表格块
*/
export const createInterfaceName = (detailTable: any) => {
  let resultStr: string = '';
  let urlStr: string = '';
  const tableCells = flattenArray(detailTable.cells);
  tableCells.find((value, index) => {
    if (value === 'request-url') {
      urlStr = tableCells[index + 1];
    }
  });
  urlStr = isCutOut ? urlStr.replace(/\/\w+/, '') : urlStr;
  resultStr = 'I' + toHump(urlStr, '/');
  return resultStr;
};