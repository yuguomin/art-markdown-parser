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
  console.log(type);
  const anntationTpl = objDeepCopy(ExportInterfaceAst.declaration.body.body[0].typeAnnotation) as any;
  // TODO: 这里针对array有多种情况可能
  anntationTpl.typeAnnotation.type = TypeAnnotations[type.split('(')[0]];
  if (type === ParamType.array) {
    const arrayChildrenType = type.match(/[^\(\)]+(?=\))/g);
    // 没有匹配项，默认为object类型
    if (!arrayChildrenType) {
      anntationTpl.typeAnnotation.type = TypeAnnotations[type];
      anntationTpl.typeAnnotation.elementType.typeName.name = childrenInterfaceName;
    } else {
      anntationTpl.typeAnnotation.elementType.type = TypeAnnotations[arrayChildrenType[0]];
    }
  }
  if (type === ParamType.object) {
    anntationTpl.typeAnnotation.typeName.name = childrenInterfaceName;
  }
  console.log(anntationTpl);
  return anntationTpl;
}