import { objDeepCopy } from "../../utils/objDeepCopy";
import { methodBodyTsAstTpl, methodBodyReturnTsAstTpl } from "../../template/methodBodyTsAstTpl";
import recast from 'recast';
import { DataExpression } from "../../constant/TSAnnotationMap";
const tsParser = require("recast/parsers/typescript")

export const createMethodBodyTsAst = (exampleInfo) => {
  const methodBodyTsAst = objDeepCopy(methodBodyTsAstTpl);
  const jsonBodyAst = recast.parse(`const test = ${exampleInfo.text}`, {
    parser: tsParser
  }).program.body;
  let methodBody = jsonBodyAst[0].declarations[0].init.properties;
  // console.log(JSON.stringify(methodBody));
  methodBody = methodBody.map((property) => {
    property.key.type = 'Identifier';
    property.key.name = property.key.value;
    return property;
  })
  console.log(JSON.stringify(methodBody));
  // methodBody[0].key.type = 'Identifier';
  const methodBodyReturnTsAst = objDeepCopy(methodBodyReturnTsAstTpl);
  methodBodyReturnTsAst.argument.properties = methodBody;
  methodBodyReturnTsAst.argument.type = DataExpression.object;
  // console.log('------------\n', JSON.stringify(methodBodyReturnTsAst));
  methodBodyTsAst.body.push(methodBodyReturnTsAst);
  return methodBodyTsAst;
}