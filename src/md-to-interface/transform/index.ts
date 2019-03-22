import { transformData } from "../extractor";
import { createPromiseTsAst } from "./createPromiseTsAst";
import { createInterfaceTsAst } from "./createInterfaceTsAst";
import { tsAstBody } from "./integrateTsAst";

export const createTsAst = (transformData: transformData) => {
  createPromiseTsAst(transformData.mdAstPromisePart);
  createInterfaceTsAst(transformData.mdAstInterfacePart);
  return tsAstBody;
}