import { extractAllInterfaceChunk } from './extractData';
import { createInterfaceName } from './createInterfaceName';
import { createInterfaceBody } from './createInterfaceBody';
import { HIGHESTPARENT } from '../ast/typeAnnotationsMap';
import { appendInterfaceToFile } from './appendFile';
import { createPromiseTpl } from './createPromiseTpl';
import { readyCreate } from './readyCreate';
import { MarkDown } from '../constant/MarkDown';

/** 
 * @description 生成interface文件的方法
 * @param {Array} tokens md文件转换出来的ast
*/
const createInterface = (tokens: any) => {
  readyCreate();
  createPromiseTpl(extractAllInterfaceChunk(tokens, [MarkDown.DETAIL, MarkDown.PARAMS]));
  const interfaceGather = extractAllInterfaceChunk(tokens, [MarkDown.DETAIL, MarkDown.EXPLAIN]) as any;
  interfaceGather.forEach(value => {
    const interfaceName = createInterfaceName((<any>value).detail);
    const interfaceBody = createInterfaceBody((<any>value).explain, HIGHESTPARENT);
    appendInterfaceToFile(interfaceName, interfaceBody);
  });
};

export default createInterface;