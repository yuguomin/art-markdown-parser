import { objDeepCopy } from './tools';
import { TypeAnnotations } from '../ast/typeAnnotationsMap';
import ExportInterfaceAst from '../ast/TSExample/exportInterfaceAst';

export const getTypeAnnotation = (type, name) => {
  const anntationTpl = objDeepCopy(ExportInterfaceAst.body.body[0].typeAnnotation) as any;
  anntationTpl.typeAnnotation.type = TypeAnnotations[type];
  if (type === 'array') {
    anntationTpl.typeAnnotation.elementType.typeName.name = name;
  }
  if (type === 'object') {
    anntationTpl.typeAnnotation.typeName.name = name;
  }
  return anntationTpl;
}