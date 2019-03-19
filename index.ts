import createInterface from './utils/createInterface';
import { readFileSync } from 'fs';
import marked from 'marked';

const md = readFileSync('./test.md', 'UTF8');
const tokens = marked.lexer(md);

createInterface(tokens);