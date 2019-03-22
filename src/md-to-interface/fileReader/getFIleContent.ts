import { readFileSync } from "fs";
import marked from 'marked';

export const getFIleContent = () => {
  const md = readFileSync('./test.md', 'UTF8');

  const mdAST = marked.lexer(md);

  return mdAST;
}