import { firstWordUpperCase, toHump, objDeepCopy } from './tools';
import { appendInterfaceToFile } from './appendFile';
import { createInterfaceBody } from './createInterfaceBody';
import ExportInterfaceAst from '../ast/TSExample/interfaceAst';

/** 
 * @description 生成子interface的方法, 当父节点不为data && 其类型为array或者object时需要创建一个interface
 * @param {Array} childrenBody 子interface的body部分数组
 * @param {String} parentName 当前子interface的父级节点path
 * @param {String} finalName 最终生成interface的name
*/
export const createChildrenInterface = (childrenBody, parentName, finalName) => {
  const ast = objDeepCopy(ExportInterfaceAst) as any;
  appendInterfaceToFile(parentName, createInterfaceBody(childrenBody, parentName), ast, finalName);
}