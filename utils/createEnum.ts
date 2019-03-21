import enumAst from '../ast/TSExample/enumAst';
import { singleEnumAst, EnumTypeAnnotations } from '../ast/typeAnnotationsMap';
import { objDeepCopy, toHump, firstWordUpperCase } from './tools';
import { appendEnumToFile } from './appendFile';
import { checkRepeatName } from './nameSpaceControl';


export const enumGather = [];

/** 
 * @description 生成一个枚举类型用于标示特定的参数类型
 * @param {singleEnumAst} 每一个需要枚举的信息
 * @param {string} 当前选项的前置name
*/
export const createEnum = (singleCell: singleEnumAst, enumCreated?: (enumName: string) => void) => {
  let enumValues = singleCell.option.replace(/，/ig,',').replace(/\s*/g,"").split(',');
  const members = [];
  let enumName = firstWordUpperCase(toHump(singleCell.currentName, '_'));
  enumName = checkRepeatName(enumName);
  enumValues.forEach(value => {
    const singleMember = objDeepCopy(enumAst.declaration.members[0]) as any;
    singleMember.id.name = value.split(':')[0];
    singleMember.initializer.type = EnumTypeAnnotations[singleCell.type];
    singleMember.initializer.value = value.split(':')[1];
    members.push(singleMember as never);
  })
  enumCreated && enumCreated(enumName);
  appendEnumToFile(enumName, members);
}