import { extractAllInterfaceChunk } from './extractData';
import { createInterfaceName } from './createName';
import { createInterfaceBody } from './createBody';
import { HIGHESTPARENT } from '../ast/typeAnnotationsMap';
import { appendInterfaceToFile } from './appendFile';
import { createPromiseTpl } from './createPromiseTpl';
import { readyCreate } from './readyCreate';

/** 
 * @description 生成interface文件的方法
 * @param {Array} tokens md文件转换出来的ast
*/
const createInterface = (tokens) => {
  readyCreate();
  const interfaceGather = extractAllInterfaceChunk(tokens, ['detail', 'explain']) as any;
  createPromiseTpl(extractAllInterfaceChunk(tokens, ['detail', 'params']));
  interfaceGather.forEach(value => {
    const interfaceName = createInterfaceName((<any>value).detail);
    const interfaceBody = createInterfaceBody((<any>value).explain, HIGHESTPARENT, interfaceName);
    appendInterfaceToFile(interfaceName, interfaceBody);
  });
};

export default createInterface;