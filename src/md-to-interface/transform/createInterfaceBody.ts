
import { objDeepCopy } from '../../utils/objDeepCopy';
import { findAllIndex } from '../../utils/findAllIndex';
import { firstWordUpperCase } from '../../utils/firstWordUpperCase';
import ExportInterfaceAst from '../../template/interfaceTsAstTpl';
import { createChildrenInterface } from './createInterfaceChild';
import { createEnum } from './createEnumTsAst';
import { singleEnumAst, TsAstIdentifier } from '../../constant/TSAnnotationMap';
import { getTypeAnnotation } from './getTypeAnnotation';
import { checkRepeatName } from './nameSpaceControl';
import { ExplainTableHeader, ParamType, INTERFACENAMEPREFIX } from '../../constant/MarkDown';

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
    enumIndex
  ] = findAllIndex(
    [ExplainTableHeader.paramsName, ExplainTableHeader.type, ExplainTableHeader.parents, ExplainTableHeader.valueOptions],
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
        type: value[typeIndex],
        option: value[enumIndex]
      }
      createEnum(enumValue, enumName => {
        lastTypeAnnotation.type = TsAstIdentifier.annotationType;
        lastTypeAnnotation.typeName.name = enumName;
      });
    }
    if (value[parentsIndex] === currentParent && [ParamType.array, ParamType.object].includes(value[typeIndex])) {
      const childrenChunk = {} as any;
      const formatName = firstWordUpperCase(value[nameIndex]);
      let childrenName = `${INTERFACENAMEPREFIX}${formatName}`;
      if (value[typeIndex] === ParamType.array) {
        lastTypeAnnotation.elementType.typeName.name = childrenName = checkRepeatName(INTERFACENAMEPREFIX + formatName);
        childrenChunk.header = explainTable.header;
      }
      if (value[typeIndex] === ParamType.object) {
        lastTypeAnnotation.typeName.name = childrenName = checkRepeatName(INTERFACENAMEPREFIX + formatName);
        childrenChunk.header = explainTable.header;
      }
      // 这里三级嵌套没有生成的原因主要是因为二级的table已经只包含父级为子interface的，再在其中找就没了
      let childrenNameGather = [value[nameIndex]];
      childrenChunk.cells = explainTable.cells.filter(cell => {
        // 这里先找到符合该项的每一个子集，如果子集是对象，再把该对象子集找到
        if ([ParamType.array, ParamType.object].includes(cell[typeIndex])) {
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