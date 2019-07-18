import { transformData } from "../extractor";
import { createImportControllerTsAst } from "./createImportTsAst";
import { createClassTsAst } from "./createClassTsAst";
import recast from 'recast';
import { readFileSync } from "fs";
import { objDeepCopy } from "../../utils/objDeepCopy";
const tsParser = require("recast/parsers/typescript");
const source = readFileSync('./test/interface.ts', 'UTF8');

/** 
 * @description 生成最终需要的tsAST数据
 * @param {transformData} transformData 需要转换的已抽离好的mdAST
 * @returns 最终tsAST数据
*/
export const createMockTsAst = (transformData: transformData, output: string) => {
  return replaceClassAst(createImportControllerTsAst(transformData.mdAstMockPart),
  createClassTsAst(transformData.mdAstMockPart, output));
}

export const replaceClassAst = (importAst, classAst) => {
  const baseAst = recast.parse(source, {
    parser: tsParser
  });
  const bodyAst = [importAst, classAst];
  // console.log(JSON.stringify(baseAst));
  const test = objDeepCopy(baseAst.program.body[0].declaration.decorators[0]);
  test.callee.callee.name = 'ygm';
  test.callee.arguments[0].value = '/ssss';
  baseAst.program.body[0].declaration.decorators[0] = test;
  baseAst.program.body[0].declaration.body.body[0].decorators[0] = objDeepCopy(test);
  baseAst.program.body[0].declaration.decorators[0] = test;
  baseAst.program.body[0].declaration.body.body[0].decorators[0].callee.callee.name = 'pppp';
  baseAst.program.body[0].declaration.body.body[0].decorators[0].callee.callee.name = 'pppp';
  baseAst.program.body[0].declaration.body.body[0].decorators[0].expression = `pppp('/home')`;
  // baseAst.program.body.unshift(importAst);
  // baseAst.program.body = bodyAst;
  // console.log(JSON.stringify(baseAst));
  return baseAst;
}