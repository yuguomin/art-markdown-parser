import { firstWordUpperCase, findAllIndex, objDeepCopy, firstWordLowerCase } from "./tools";
import tplAst from '../ast/TSExample/interfacePromiseAst';
import { createInterfaceName } from "./createName";
import { TypeAnnotations } from "../ast/typeAnnotationsMap";
import { appendInterfaceTofile } from "./appendFile";

const moduleName = 'home';

/** 
 * @description 生成一个promise的interface结构
 * @param {Array} interfaceGather 抽取出每一个api的'detail', 'params'组成的数组
*/
export const createPromiseTpl = (interfaceGather) => {
  const tplName = `I${firstWordUpperCase(moduleName)}Service`;
  const tplBody = [];
  interfaceGather.forEach(value => {
    const singleBody = objDeepCopy(tplAst.body.body[0]) as any;
    const everyInterfaceName = createInterfaceName((<any>value).detail);
    singleBody.key.name = firstWordLowerCase(everyInterfaceName.slice(1)); // every key name
    singleBody.parameters = createParameters(value.params) // every key params
    singleBody.typeAnnotation.typeAnnotation.typeParameters.params[0].typeParameters.params[0].typeName.name = everyInterfaceName;
    tplBody.push(singleBody as never); // 相当于添加每一个接口的promise
  });
  appendInterfaceTofile(tplName, tplBody, tplAst);
}

/** 
 * @description 生成每一个promise的key参数部分
 * @param {Array} paramsTable 每一个api的params表格块
 * @returns {Array} key部分的参数数组ast
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