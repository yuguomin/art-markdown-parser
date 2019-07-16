import { objDeepCopy } from "../../utils/objDeepCopy";
import { decoratorTsAstTpl } from "../../template/decoratorTsAstTpl";
import { DEFAULT_IMPORT_VALUE } from "../../constant/MockConstant";

export const createDecoratorTsAst = (controllerRoute: string) => {
  const decoratorTsAst = objDeepCopy(decoratorTsAstTpl);
  decoratorTsAst.callee.callee.name = DEFAULT_IMPORT_VALUE;
  decoratorTsAst.callee.arguments[0].value = `/${controllerRoute}`;
  return decoratorTsAst;
};