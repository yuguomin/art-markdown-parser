import enumAst from '../ast/TSExample/enumAst';
import { singleEnumAst, EnumTypeAnnotations, HIGHESTPARENT } from '../ast/typeAnnotationsMap';
import { objDeepCopy, toHump, firstWordUpperCase } from './tools';
import { appendEnumToFile } from './appendFile';


export const enumGather = [];

/** 
 * @description 生成一个枚举类型用于标示特定的参数类型
 * @param {singleEnumAst} 每一个需要枚举的信息
 * @param {string} 当前选项的前置name
*/
export const createEnum = (singleCell: singleEnumAst, prefixName?: string) => {
  let enumValues = singleCell.option.replace(/，/ig,',').replace(/\s*/g,"").split(',');
  const members = [];
  let enumName = firstWordUpperCase(toHump(singleCell.currentName, '_'));
  if (enumGather.includes(enumName as never)) {
    enumName = (prefixName + enumName).split(firstWordUpperCase(HIGHESTPARENT))[1];
  } else {
    enumGather.push(enumName as never);
  }
  enumValues.forEach(value => {
    const singleMember = objDeepCopy(enumAst.declaration.members[0]) as any;
    singleMember.id.name = value.split(':')[0];
    singleMember.initializer.type = EnumTypeAnnotations[singleCell.type];
    singleMember.initializer.value = value.split(':')[1];
    members.push(singleMember as never);
  })
  appendEnumToFile(enumName, members);
  // TODO: enum生成出来了 但是enum的name结构需要优化，并且对应interface的值还要作用起来
}