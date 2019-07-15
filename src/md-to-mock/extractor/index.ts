// import AjaxAst from "src/template/ajaxResultAst";
import { MarkDownHeaders } from "../../constant/MarkDown";
import { extractMdAstChunk } from "./extractMdAstChunk";

export interface transformData {
  mdAstMockPart: any;
}

/** 
 * 抽取当前需要转换的信息， 1.基本返回数据结构. 2. promise结构. 3. 每个interface结构.
*/
export const extractNeedTransformData = (mdAST) => {
  const transformData: transformData = {
    mdAstMockPart: extractMdAstChunk(mdAST, [MarkDownHeaders.DETAIL, MarkDownHeaders.EXAMPLE])
  };
  return transformData;
}