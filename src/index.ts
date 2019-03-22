// 入口文件
import { readMdFile } from "./md-to-interface/fileReader";
import { extractNeedTransformData } from "./md-to-interface/extractor";
import { createTsAst } from "./md-to-interface/transform";
import { appendToFile } from "./md-to-interface/generator";

/** 
 * @description 生成需要的interface方法
 * 1- 读取 md
 * 2- 抽离需要的 md 内容
 * 3- 转换为 TS-AST
 * 4- 写入内容
*/
export const startMdToInterface = () => {
  const mdAST = readMdFile();
  const transformData =  extractNeedTransformData(mdAST);
  const interfaceAST = createTsAst(transformData);
  appendToFile(interfaceAST);
}

startMdToInterface();