import recast from 'recast';
import { objDeepCopy } from '../utils/tools';
import { appendFileSync } from 'fs';
import ExportInterfaceAst from '../ast/TSExample/interfaceAst';
import enumAst from '../ast/TSExample/enumAst';

/** 
 * @description 每个export interface的基本结构
*/
interface interfaceAstReuslt {
  type: string;
  declaration?: any;
}

/** 
 * @description 将最终生成的interface写入到文件
 * @param {String} interfaceName 当前interfaceName
 * @param {Array} interfaceBody 由于重复需要设置上的最终Name
 * @param {Object} interfaceAst 选择是哪一个基本ast结构
 * @param {String} finalName 最终生成的一个interfaceName
*/
export const appendInterfaceToFile = (interfaceName, interfaceBody, interfaceAst?: any, finalName?: string) => {
  const ast = interfaceAst || objDeepCopy(ExportInterfaceAst) as any;
  ast.id.name = finalName || interfaceName;
  ast.body.body = interfaceBody;
  let result:interfaceAstReuslt = {
    type: 'ExportNamedDeclaration'
  }
  result.declaration = ast
  appendFileSync(
    './result/result.ts',
    `\n${recast.print(result).code}`,
    'utf8'
  );
}

export const appendEnumToFile = (enumName: string, enumBody) => {
  const ast = enumAst;
  ast.declaration.id.name = enumName;
  ast.declaration.members = enumBody;
  appendFileSync(
    './result/result.ts',
    `\n${recast.print(ast).code}`,
    'utf8'
  );
}