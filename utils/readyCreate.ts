import { writeFileSync } from "fs";
import recast from 'recast';
import AjaxAst from "../ast/TSExample/ajaxResultAst";

export const readyCreate = () => {
  writeFileSync('./result/result.ts', `\n${recast.print(AjaxAst).code}`, 'utf8');
}