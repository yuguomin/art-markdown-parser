import { firstWordUpperCase } from '../../utils/firstWordUpperCase';
import { findAllIndex } from '../../utils/findAllIndex';
import { objDeepCopy } from '../../utils/objDeepCopy';
import { firstWordLowerCase } from '../../utils/firstWordLowerCase';
import tplAst from '../../template/interfacePromiseTsAsTpl';
import { TypeAnnotations, singleEnumAst, TsAstIdentifier } from "../../constant/TSAnnotationMap";
import { createEnum } from "./createEnumTsAst";
import { createInterfaceName } from "./createInterfaceName";
import { ParamsTableHeader, RESPONSENAMESUFFIX, INTERFACENAMEPREFIX } from '../../constant/MarkDown';
import { collateInterfaceAst } from './integrateTsAst';

const MODULENAME = 'home';

/** 
 * @description 生成一个promise的interface结构
 * @param {Array} interfaceGather 抽取出每一个api的'detail', 'params'组成的数组
*/
export const createPromiseTsAst = (interfaceGather) => {
  const tplName = `${INTERFACENAMEPREFIX}${firstWordUpperCase(MODULENAME)}${RESPONSENAMESUFFIX}`;
  const tplBody = [];
  interfaceGather.forEach(value => {
    const singleBody = objDeepCopy(tplAst.declaration.body.body[0]) as any;
    const everyInterfaceName = createInterfaceName((<any>value).detail);
    singleBody.key.name = firstWordLowerCase(everyInterfaceName.slice(1)); // every key name
    singleBody.parameters = createPromiseParameters(value.params); // every key params
    singleBody.typeAnnotation.typeAnnotation.typeParameters.params[0].typeParameters.params[0].typeName.name = everyInterfaceName;
    tplBody.push(singleBody as never); // 相当于添加每一个接口的promise
  });
  // appendInterfaceToFile(tplName, tplBody, tplAst);
  collateInterfaceAst(tplName, tplBody, tplAst);
}

/** 
 * @description 生成每一个promise的key参数部分
 * @param {Array} paramsTable 每一个api的params表格块
 * @returns {Array} key部分的参数数组ast
*/
export const createPromiseParameters = (paramsTable) => {
  const parameters = [];
  const [nameIndex, typeIndex, enumIndex] = 
  findAllIndex([ParamsTableHeader.paramsName, ParamsTableHeader.type, ParamsTableHeader.valueOptions], paramsTable.header);
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
        singleParam.typeAnnotation.typeAnnotation.type = TsAstIdentifier.annotationType;
        singleParam.typeAnnotation.typeAnnotation.typeName.name = enumName;
      });
    }
    parameters.push(singleParam as never);
  })
  return parameters;
}