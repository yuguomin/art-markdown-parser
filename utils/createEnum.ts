import enumAst from '../ast/TSExample/enumAst';
import { singleEnumAst, EnumTypeAnnotations } from '../ast/typeAnnotationsMap';
import { objDeepCopy } from './tools';
import { appendEnumToFile } from './appendFile';

/** 
 * @description 生成一个枚举类型用于标示特定的参数类型
 * @param {singleEnmuAst} 每一个需要枚举的信息
 * @param {string} 当前选项的前置name
*/
export const createEnum = (singleCell: singleEnumAst, prefixName: string) => {
  let enumValues = singleCell.option.replace(/，/ig,',').replace(/\s*/g,"").split(',');
  const members = [];
  enumValues.forEach(value => {
    const singleMember = objDeepCopy(enumAst.declaration.members[0]) as any;
    singleMember.id.name = value.split(':')[0];
    singleMember.initializer.type = EnumTypeAnnotations[singleCell.type];
    singleMember.initializer.value = value.split(':')[1];
    members.push(singleMember as never);
  })
  appendEnumToFile(singleCell.currentName, members);
  // TODO: enum生成出来了 但是enum的name结构需要优化，并且对应interface的值还要作用起来
}