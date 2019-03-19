import { extractAllInterfaceChunk } from './extractData';
import { createInterfaceName } from './createName';
import { createInterfaceBody } from './createBody';
import { highestParent } from '../ast/typeAnnotationsMap';
import { appendInterfaceTofile } from './appendFile';
import { createPromiseTpl } from './createPromiseTpl';

const createInterface = (tokens) => {
  const interfaceGather = extractAllInterfaceChunk(tokens, ['detail', 'explain']) as any;
  createPromiseTpl(extractAllInterfaceChunk(tokens, ['detail', 'params']));
  interfaceGather.forEach(value => {
    const interfaceName = createInterfaceName((<any>value).detail);
    const interfaceBody = createInterfaceBody((<any>value).explain, highestParent, interfaceName);
    appendInterfaceTofile(interfaceName, interfaceBody);
  });
};

export default createInterface;