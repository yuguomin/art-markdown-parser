import { writeFileSync } from "fs";
import recast from 'recast';

export const appendToFile = (ast) => {
  // console.log(JSON.stringify(ast));
  writeFileSync('./result/result.ts', `\n${recast.print(ast).code}`,'utf8');
}