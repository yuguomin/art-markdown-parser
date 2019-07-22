// 入口文件
import { readMdFile } from './md-to-mock/fileReader';
import { extractNeedTransformData } from './md-to-mock/extractor';
import { createMockTsAst } from './md-to-mock/transform';
import { appendToFile } from './md-to-mock/generator';

/** 
 * @description 生成需要的interface方法
 * 1- 读取 md
 * 2- 抽离需要的 md 内容
 * 3- 转换为 TS-AST
 * 4- 写入内容
 */
export const parseMdToInterface = (output) => {
  try {
    const mdAST = readMdFile();
    const transformData = extractNeedTransformData(mdAST);
    const mockAST = createMockTsAst(transformData, output);
    appendToFile(mockAST);
  } catch (err) { console.log('mock err', err); }
};

parseMdToInterface('mock/home/xxx/xx/MineController.ts');