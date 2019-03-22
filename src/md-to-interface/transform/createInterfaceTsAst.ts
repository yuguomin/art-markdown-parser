import { createInterfaceName } from "./createInterfaceName";
import { createInterfaceBody } from "./createInterfaceBody";
import { collateInterfaceAst } from "./integrateTsAst";
import { HIGHESTPARENT } from "../../constant/MarkDown";


/** 
 * @description 生成interface的方法
*/
export const createInterfaceTsAst = (interfaceGather: any) => {
  interfaceGather.forEach(value => {
    const interfaceName = createInterfaceName((<any>value).detail);
    const interfaceBody = createInterfaceBody((<any>value).explain, HIGHESTPARENT);
    collateInterfaceAst(interfaceName, interfaceBody);
  });
};