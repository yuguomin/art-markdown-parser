import { transformData } from "../extractor";
import { createPromiseTsAst } from "./createPromiseTsAst";
import { createInterfaceTsAst } from "./createInterfaceTsAst";
import { tsAstBody } from "./integrateTsAst";
import tsFileAst from "../../template/tsFileAst";
import { objDeepCopy } from '../../utils/objDeepCopy';

export const createTsAst = (transformData: transformData) => {
  createPromiseTsAst(transformData.mdAstPromisePart);
  createInterfaceTsAst(transformData.mdAstInterfacePart);
  const tsAst = objDeepCopy(tsFileAst) as any;
  tsAst.program.body = tsAstBody;
  return tsAst;
}