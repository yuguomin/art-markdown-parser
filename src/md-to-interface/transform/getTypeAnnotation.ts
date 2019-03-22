import { objDeepCopy } from '../../utils/objDeepCopy';
import { TypeAnnotations } from '../../constant/TSAnnotationMap';
import ExportInterfaceAst from '../../template/interfaceTsAstTpl';
import { ParamType } from '../../constant/MarkDown';

/** 
 * @description 映射参数的类型和ts的类型
 * @param {Strinng} type 当前参数的类型
 * @param {String} childrenInterfaceName 对应对象类型的interfaceName
 * @returns 每次key对应的typeAnnotation节点
*/
export const getTypeAnnotation = (type: string, childrenInterfaceName: string) => {
  const anntationTpl = objDeepCopy(ExportInterfaceAst.declaration.body.body[0].typeAnnotation) as any;
  anntationTpl.typeAnnotation.type = TypeAnnotations[type];
  if (type === ParamType.array) {
    anntationTpl.typeAnnotation.elementType.typeName.name = childrenInterfaceName;
  }
  if (type === ParamType.object) {
    anntationTpl.typeAnnotation.typeName.name = childrenInterfaceName;
  }
  return anntationTpl;
}