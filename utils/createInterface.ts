import { extractAllInterfaceChunk } from './extractData';
import { createInterfaceName } from './createInterfaceName';
import { createInterfaceBody } from './createInterfaceBody';
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
  createPromiseTpl(extractAllInterfaceChunk(tokens, ['detail', 'params']));
  const interfaceGather = extractAllInterfaceChunk(tokens, ['detail', 'explain']) as any;
  interfaceGather.forEach(value => {
    const interfaceName = createInterfaceName((<any>value).detail);
    const interfaceBody = createInterfaceBody((<any>value).explain, HIGHESTPARENT, interfaceName);
    appendInterfaceToFile(interfaceName, interfaceBody);
  });
};

export default createInterface;