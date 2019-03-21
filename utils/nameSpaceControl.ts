import { nameSpaceGather } from "../ast/typeAnnotationsMap";


/** 
 * @description
 * @param {String} newName
*/
export const checkRepeatName = (newName: string) => {
  const isRepeatName: boolean = Boolean(nameSpaceGather.filter(nameSpace => {
    if (newName in nameSpace) {
      nameSpace[newName]++;
      newName += nameSpace[newName];
      return nameSpace;
    }
  }).length)
  if (!isRepeatName) {
    const newNameSpace = {};
    newNameSpace[newName] = 0;
    nameSpaceGather.push(newNameSpace);
  }
  return newName;
}