import { readFileSync } from "fs";
import marked from 'marked';

/** 
 * @description 获取文件内容
 * @returns 返回最终读取到的 mdAst
*/
export const getFIleContent = () => {
  const md = readFileSync('./test.md', 'UTF8');

  const mdAST = marked.lexer(md);

  return mdAST;
}