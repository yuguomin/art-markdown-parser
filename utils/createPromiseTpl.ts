import { firstWordUpperCase, findAllIndex, objDeepCopy, firstWordLowerCase } from "./tools";
import tplAst from '../ast/TSExample/interfacePromiseAst';
import { createInterfaceName } from "./createInterfaceName";
import { TypeAnnotations, singleEnumAst } from "../ast/typeAnnotationsMap";
import { appendInterfaceToFile } from "./appendFile";
import { createEnum } from "./createEnum";

const moduleName = 'home';

/** 
 * @description 生成一个promise的interface结构
 * @param {Array} interfaceGather 抽取出每一个api的'detail', 'params'组成的数组
*/
export const createPromiseTpl = (interfaceGather) => {
  const tplName = `I${firstWordUpperCase(moduleName)}Service`;
  const tplBody = [];
  interfaceGather.forEach(value => {
    const singleBody = objDeepCopy(tplAst.declaration.body.body[0]) as any;
    const everyInterfaceName = createInterfaceName((<any>value).detail);
    singleBody.key.name = firstWordLowerCase(everyInterfaceName.slice(1)); // every key name
    singleBody.parameters = createParameters(value.params); // every key params
    singleBody.typeAnnotation.typeAnnotation.typeParameters.params[0].typeParameters.params[0].typeName.name = everyInterfaceName;
    tplBody.push(singleBody as never); // 相当于添加每一个接口的promise
  });
  appendInterfaceToFile(tplName, tplBody, tplAst);
}

/** 
 * @description 生成每一个promise的key参数部分
 * @param {Array} paramsTable 每一个api的params表格块
 * @returns {Array} key部分的参数数组ast
*/
export const createParameters = (paramsTable) => {
  const parameters = [];
  const [nameIndex, typeIndex, enumIndex] = findAllIndex(['参数名', '类型', '值选项'], paramsTable.header);
  paramsTable.cells.forEach(value => {
    const singleParam = objDeepCopy(tplAst.declaration.body.body[0].parameters[0]) as any;
    singleParam.name = value[nameIndex];
    singleParam.typeAnnotation.typeAnnotation.type = TypeAnnotations[value[typeIndex]];
    if (value[enumIndex]) {
      const enumValue: singleEnumAst = {
        currentName: value[nameIndex],
        type: value[typeIndex],
        option: value[enumIndex]
      }
      createEnum(enumValue, enumName => {
        singleParam.typeAnnotation.typeAnnotation.type = 'TSTypeReference';
        singleParam.typeAnnotation.typeAnnotation.typeName.name = enumName;
      });
    }
    parameters.push(singleParam as never);
  })
  return parameters;
}