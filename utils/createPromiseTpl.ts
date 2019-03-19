import { firstWordUpperCase, findAllIndex, objDeepCopy, firstWordLowerCase } from "./tools";
import tplAst from '../ast/TSExample/interfacePromiseAst';
import isCutOut from '../art.config.js';
import { createInterfaceName } from "./createName";
import { TypeAnnotations } from "../ast/typeAnnotationsMap";

const moduleName = 'home';

/** 
 * @description 生成一个promise的interface结构
*/
export const createPromiseTpl = (interfaceGather) => {
  const tplName = `I${firstWordUpperCase(moduleName)}Template`;
  const tplBody = []
  interfaceGather.forEach(value => {
    const singleBody = objDeepCopy(tplAst.body.body[0]) as any;
    const everyInterfaceName = createInterfaceName((<any>value).detail);
    singleBody.key.name = firstWordLowerCase(everyInterfaceName.slice(1)); // every key name
    singleBody.parameters = createParameters(value.params) // every key params
    // singleBody.body.body.push(createPromiseSingleBody(value));
    tplBody.push(singleBody as never); // 相当于添加每一个接口的promise
  });
}

/** 
 * @description 生成每一个promise的key参数部分
*/
export const createParameters = (paramsTable) => {
  const parameters = [];
  const [nameIndex, typeIndex] = findAllIndex(['参数名', '类型'], paramsTable.header);
  paramsTable.cells.forEach(value => {
    const singleParam = objDeepCopy(tplAst.body.body[0].parameters[0]) as any;
    singleParam.name = value[nameIndex];
    singleParam.typeAnnotation.typeAnnotation.type = TypeAnnotations[value[typeIndex]];
    parameters.push(singleParam as never);
  })
  return parameters;
}