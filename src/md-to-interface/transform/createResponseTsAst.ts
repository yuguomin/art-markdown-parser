import { saveAstToMemory } from "./integrateTsAst";
import responseTsAstTpl from "../../template/responseTsAstTpl";

export const createResponseTsAst = () => {
  const responseTsAst = responseTsAstTpl;
  saveAstToMemory(responseTsAst);
}