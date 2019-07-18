import { objDeepCopy } from "../../utils/objDeepCopy";
import { classBodyTsAstTpl, classMethodTsAstTpl } from "../../template/classBodyTsAstTpl";
import { ClassBodyType, ClassPrototypeAccessibility, PrototypeKindType } from "../../constant/TSAnnotationMap";
import { DetailTableMembers } from "../../constant/MarkDown";
import { flattenArray } from "../../utils/flattenArray";
import { createDecoratorTsAst } from "./createDecoratorTsAst";
import { firstWordUpperCase } from "../../utils/firstWordUpperCase";
import { createMethodBodyTsAst } from "./createMethodBodyTsAst";

export const createClassBodyTsAst = (mdAstMockPart) => {
  const classBodyTsAst = objDeepCopy(classBodyTsAstTpl);
  mdAstMockPart.forEach((apiInfo) => {
    const detailCells = flattenArray(apiInfo.detail.cells);
    let requestMethod = '';
    let requestUrl = '';
    detailCells.forEach((cell, index) => {
      if (cell === DetailTableMembers.requestMethod) {
        requestMethod = detailCells[index + 1];
      }
      if (cell === DetailTableMembers.requestUrl) {
        requestUrl = detailCells[index + 1];
      }
    })
    const classMethodTsAst = objDeepCopy(classMethodTsAstTpl);
    classMethodTsAst.type = ClassBodyType.method;
    classMethodTsAst.accessibility = ClassPrototypeAccessibility.public;
    classMethodTsAst.kind = PrototypeKindType.method;
    classMethodTsAst.decorators.push(createDecoratorTsAst(requestUrl, firstWordUpperCase(requestMethod.toLowerCase())));
    classMethodTsAst.body = createMethodBodyTsAst(apiInfo.example);
    classBodyTsAst.body.push(classMethodTsAst);
  });
  return classBodyTsAst;
}