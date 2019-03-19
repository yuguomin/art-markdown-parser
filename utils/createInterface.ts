import { extractAllInterfaceChunk } from './extractData';
import { createInterfaceName } from './createName';
import { createInterfaceBody } from './createBody';
import { highestParent } from '../ast/typeAnnotationsMap';
import { appendInterfaceTofile } from './appendFile';

const createInterface = (tokens) => {
  const interfaceGather = extractAllInterfaceChunk(tokens);
  interfaceGather.forEach(value => {
    const interfaceName = createInterfaceName((<any>value).detail);
    const interfaceBody = createInterfaceBody((<any>value).explain, highestParent, interfaceName);
    appendInterfaceTofile(interfaceName, interfaceBody);
  });
};

export default createInterface;