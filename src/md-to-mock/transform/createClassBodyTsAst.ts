import { objDeepCopy } from "src/utils/objDeepCopy";
import { classBodyTsAstTpl, classMethodTsAstTpl } from "src/template/classBodyTsAstTpl";
import { ClassBodyType, ClassPrototypeAccessibility, prototypeKindType } from "src/constant/TSAnnotationMap";

export const createClassBodyTsAst = (mdAstMockPart) => {
  const classBodyTsAst = objDeepCopy(classBodyTsAstTpl);
  const classMethodTsAst = classMethodTsAstTpl;
  classMethodTsAst.type = ClassBodyType.method;
  classMethodTsAst.accessibility = ClassPrototypeAccessibility.public;
  classMethodTsAst.kind = prototypeKindType.method;
}