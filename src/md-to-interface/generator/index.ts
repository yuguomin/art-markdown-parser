import { writeFileSync } from "fs";
import recast from 'recast';

/** 
 * @description 将最终生成 TsAst 写入进文件
 * @param {Object} ast 最终的 TsAst
*/
export const appendToFile = (ast) => {
  writeFileSync('./src/result/result.ts', `\n${recast.print(ast).code}`,'utf8');
}