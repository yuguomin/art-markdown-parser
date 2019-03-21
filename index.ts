import createInterface from './utils/createInterface';
import { readFileSync } from 'fs';
import marked from 'marked';

const md = readFileSync('./test/test.md', 'UTF8');
// TODO tokens -> mdAST
const tokens = marked.lexer(md);


createInterface(tokens);
