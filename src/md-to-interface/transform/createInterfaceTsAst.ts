import { createInterfaceName } from "utils/createInterfaceName";
import { createInterfaceBody } from "utils/createInterfaceBody";


/** 
 * @description 生成interface的方法
*/
export const createInterfaceTsAst = (interfaceGather: any) => {
  interfaceGather.forEach(value => {
    const interfaceName = createInterfaceName((<any>value).detail);
    const interfaceBody = createInterfaceBody((<any>value).explain, 'data');
    // appendInterfaceToFile(interfaceName, interfaceBody);
  });
};