
import { objDeepCopy } from '../../utils/objDeepCopy';
import { findAllIndex } from '../../utils/findAllIndex';
import { firstWordUpperCase } from '../../utils/firstWordUpperCase';
import ExportInterfaceAst from '../../template/interfaceTsAstTpl';
import { createChildrenInterface } from './createInterfaceChild';
import { createEnum } from './createEnumTsAst';
import { singleEnumAst, TsAstIdentifier, TypeAnnotations } from '../../constant/TSAnnotationMap';
import { getTypeAnnotation } from './getTypeAnnotation';
import { checkRepeatName } from './nameSpaceControl';
import { ExplainTableHeader, ParamType, INTERFACENAMEPREFIX } from '../../constant/MarkDown';
import { toHump } from '../../utils/toHump';

/** 
 * @description 生成interface的body部分
 * @param {Array} explainTable api的explain表格块
 * @param {String} currentParent 当前interface的父级元素
*/
export const createInterfaceBody = (explainTable: any, currentParent: string) => {
  // 获取对应的参数名，类型，说明，parents, 示例的index
  const [
    nameIndex,
    typeIndex,
    parentsIndex,
    enumIndex,
    renameIndex
  ] = findAllIndex(
    [ExplainTableHeader.paramsName, ExplainTableHeader.type, ExplainTableHeader.parents, ExplainTableHeader.valueOptions, ExplainTableHeader.rename],
    explainTable.header
  );
  const result = [];
  let lastTypeAnnotation: any;
  explainTable.cells.forEach(value => {
    const bodyTemplate = objDeepCopy(
      ExportInterfaceAst.declaration.body.body[0]
      ) as any;
    if (value[parentsIndex] === currentParent) {
      bodyTemplate.key.name = value[nameIndex];
      bodyTemplate.typeAnnotation = getTypeAnnotation(value[typeIndex], value[nameIndex]);
      result.push(bodyTemplate as never);
      lastTypeAnnotation = (<any>result[result.length - 1]).typeAnnotation.typeAnnotation;
    };
    if (value[parentsIndex] === currentParent && value[enumIndex]) {
      const enumValue: singleEnumAst = {
        currentName: value[nameIndex],
        rename: value[renameIndex],
        type: value[typeIndex],
        option: value[enumIndex]
      }
      createEnum(enumValue, enumName => {
        lastTypeAnnotation.type = TsAstIdentifier.annotationType;
        lastTypeAnnotation.typeName.name = enumName;
      });
    }
    const finalType = value[typeIndex].split('(')[0];
    if (value[parentsIndex] === currentParent && [ParamType.array, ParamType.object].includes(finalType)) {
      const childrenChunk = {} as any;
      const formatName = toHump((INTERFACENAMEPREFIX + firstWordUpperCase(value[nameIndex])), '_');;
      let childrenName = checkRepeatName(value[renameIndex]) || checkRepeatName(formatName);
      if (finalType === ParamType.array) {
        // const anntationTpl = objDeepCopy(ExportInterfaceAst.declaration.body.body[0].typeAnnotation) as any;
        const arrayChildrenType = value[typeIndex].match(/[^\(\)]+(?=\))/g);
        // 没有匹配项，默认为object类型
        if (!arrayChildrenType) {
          lastTypeAnnotation.elementType.typeName.name = childrenName;
        } else {
          // lastTypeAnnotation.type = TypeAnnotations['array'];
          lastTypeAnnotation.elementType.type = TypeAnnotations[arrayChildrenType[0]];
        }
        // lastTypeAnnotation.elementType.typeName.name = childrenName;
      }
      if (finalType === ParamType.object) {
        lastTypeAnnotation.typeName.name = childrenName;
      }
      childrenChunk.header = explainTable.header;
      // 这里三级嵌套没有生成的原因主要是因为二级的table已经只包含父级为子interface的，再在其中找就没了
      let childrenNameGather = [value[nameIndex]];
      childrenChunk.cells = explainTable.cells.filter(cell => {
        // 这里先找到符合该项的每一个子集，如果子集是对象，再把该对象子集找到
        const typeValue = cell[typeIndex].split('(')[0];
        const childrenType = cell[typeIndex].match(/[^\(\)]+(?=\))/g);
        if ([ParamType.array, ParamType.object].includes(typeValue) && (!childrenType || childrenType === ParamType.object)) {
          childrenNameGather.push(cell[parentsIndex] + '.' + cell[nameIndex]);
        }
        if (childrenNameGather.includes(cell[parentsIndex])) {
          return cell;
        }
      });
      createChildrenInterface(childrenChunk, value[parentsIndex] + '.' +  value[nameIndex], childrenName);
    };
  });
  return result;
};