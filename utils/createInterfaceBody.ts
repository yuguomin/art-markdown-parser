
import { findAllIndex, firstWordUpperCase, objDeepCopy } from './tools';
import ExportInterfaceAst from '../ast/TSExample/interfaceAst';
import { getTypeAnnotation } from './getAnnotation';
import { createChildrenInterface } from './createChild';
import { isRepeatName } from './createName';
import { createEnum } from './createEnum';
import { singleEnumAst } from 'ast/typeAnnotationsMap';

/** 
 * @description 生成interface的body部分
 * @param {Array} explainTable api的explain表格块
 * @param {String} currentParent 当前interface的父级元素
 * @param {String} prefixName 生成子interface时判断有重名时添加的前缀
*/
export const createInterfaceBody = (explainTable: any, currentParent: string, prefixName?: any) => {
  // 获取对应的参数名，类型，说明，parents, 示例的index
  const [
    nameIndex,
    typeIndex,
    parentsIndex,
    enumIndex
  ] = findAllIndex(
    ['参数名', '类型', 'parents', '值选项'],
    explainTable.header
  );
  const result = [];
  explainTable.cells.forEach(value => {
    const bodyTemplate = objDeepCopy(
      ExportInterfaceAst.body.body[0]
      ) as any;
    if (value[parentsIndex] === currentParent) {
      bodyTemplate.key.name = value[nameIndex];
      // bodyTemplate.typeAnnotation.typeAnnotation.type = TypeAnnotations[value[typeIndex]];
      bodyTemplate.typeAnnotation = getTypeAnnotation(value[typeIndex], value[nameIndex]);
      result.push(bodyTemplate as never);
    };
    if (value[parentsIndex] === currentParent && value[enumIndex]) {
      const enumValue: singleEnumAst = {
        currentName: value[nameIndex],
        prefixName: prefixName,
        type: value[typeIndex],
        option: value[enumIndex]
      }
      createEnum(enumValue, prefixName, enumName => {
        (<any>result[result.length - 1]).typeAnnotation.typeAnnotation.type = 'TSTypeReference';
        (<any>result[result.length - 1]).typeAnnotation.typeAnnotation.typeName.name = enumName;
      });
    }
    if (value[parentsIndex] === currentParent && ['array', 'object'].includes(value[typeIndex])) {
      const childrenChunk = {} as any;
      const formatName = firstWordUpperCase(value[nameIndex]);
      let childrenName = `I${formatName}`;
      if (value[typeIndex] === 'array') {
        (<any>result[result.length - 1]).typeAnnotation.typeAnnotation.elementType.typeName.name = childrenName =
        `${isRepeatName(value[nameIndex] as never) ? prefixName : 'I'}${formatName}`;
        childrenChunk.header = explainTable.header;
      }
      if (value[typeIndex] === 'object') {
        (<any>result[result.length - 1]).typeAnnotation.typeAnnotation.typeName.name = childrenName =
        `${isRepeatName(value[nameIndex] as never) ? prefixName : 'I'}${formatName}`;
        childrenChunk.header = explainTable.header;
      }
      // 这里三级嵌套没有生成的原因主要是因为二级的table已经只包含父级为子interface的，再在其中找就没了
      // childrenChunk.cells = explainTable.cells.filter(cell => cell[parentsIndex] === value[nameIndex]);
      let childrenNameGather = [value[nameIndex]];
      childrenChunk.cells = explainTable.cells.filter(cell => {
        // 这里先找到符合该项的每一个子集，如果子集是对象，再把该对象子集找到
        if (['array', 'object'].includes(cell[typeIndex])) {
          childrenNameGather.push(cell[parentsIndex] + '.' + cell[nameIndex]);
        }
        if (childrenNameGather.includes(cell[parentsIndex])) {
          return cell;
        }
      });
      // childrenChunk.cells = explainTable.cells;
      createChildrenInterface(childrenChunk, value[parentsIndex] + '.' +  value[nameIndex], childrenName, prefixName);
    };
  });
  return result;
};