import exportEnumAst from "../../template/enumTsAstTpl";
import { objDeepCopy } from "../../utils/objDeepCopy";
import exportInterfaceAst from "../../template/interfaceTsAstTpl";

/** 
 * 内存中保存着所有要生成的tsAst的body部分
*/
export let tsAstBody: any[] = [];

/** 
 * @description 将enum添加到文件中
 * @param {String} enum的name
 * @param {Array} enum中的body部分
*/
export const collateEnumAst = (enumName: string, enumBody) => {
  const singleEnumAst = objDeepCopy(exportEnumAst) as any;
  singleEnumAst.declaration.id.name = enumName;
  singleEnumAst.declaration.members = enumBody;
  saveAstToMemory(singleEnumAst);
}

/** 
 * @description 将最终生成的interface写入到文件
 * @param {String} interfaceName 当前interfaceName
 * @param {Array} interfaceBody 由于重复需要设置上的最终Name
 * @param {Object} interfaceAst 选择是哪一个基本ast结构
 * @param {String} finalName 最终生成的一个interfaceName
*/
export const collateInterfaceAst = (interfaceName, interfaceBody, interfaceAst?: any, finalName?: string) => {
  const singleInterfaceAst = interfaceAst || objDeepCopy(exportInterfaceAst) as any;
  singleInterfaceAst.declaration.id.name = finalName || interfaceName;
  singleInterfaceAst.declaration.body.body = interfaceBody;
  saveAstToMemory(singleInterfaceAst);
}

export const saveAstToMemory = (ast) => {
  tsAstBody.push(ast);
}