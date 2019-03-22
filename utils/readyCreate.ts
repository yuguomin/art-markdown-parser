import { writeFileSync } from "fs";
import recast from 'recast';
import AjaxAst from "../ast/TSExample/ajaxResultAst";

/** 
 * @description 准备创建时做的清空并添加基本ajax结构interface
*/
export const readyCreate = () => {
  writeFileSync('./result/result.ts', `\n${recast.print(AjaxAst).code}`, 'utf8');
}
