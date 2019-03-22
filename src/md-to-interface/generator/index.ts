import { appendFileSync } from "fs";
import recast from 'recast';

export const appendToFile = (ast) => {
  // console.log(JSON.stringify(ast));
  appendFileSync('./result/result.ts', `\n${recast.print(ast).code}`,'utf8');
}