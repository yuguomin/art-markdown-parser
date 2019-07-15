import { transformData } from "../extractor";
import { createImportControllerTsAst } from "./createImportTsAst";

/** 
 * @description 生成最终需要的tsAST数据
 * @param {transformData} transformData 需要转换的已抽离好的mdAST
 * @returns 最终tsAST数据
*/
export const createMockTsAst = (transformData: transformData) => {
  return createImportControllerTsAst(transformData.mdAstMockPart);
}