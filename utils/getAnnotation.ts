import { objDeepCopy } from './tools';
import { TypeAnnotations } from '../ast/typeAnnotationsMap';
import ExportInterfaceAst from '../ast/TSExample/interfaceAst';

/** 
 * @description 映射参数的类型和ts的类型
 * @param {Strinng} type 当前参数的类型
 * @param {String} childrenInterfaceName 对应对象类型的interfaceName
 * @returns 每次key对应的typeAnnotation节点
*/
export const getTypeAnnotation = (type: string, childrenInterfaceName: string) => {
  const anntationTpl = objDeepCopy(ExportInterfaceAst.declaration.body.body[0].typeAnnotation) as any;
  anntationTpl.typeAnnotation.type = TypeAnnotations[type];
  if (type === 'array') {
    anntationTpl.typeAnnotation.elementType.typeName.name = childrenInterfaceName;
  }
  if (type === 'object') {
    anntationTpl.typeAnnotation.typeName.name = childrenInterfaceName;
  }
  return anntationTpl;
}