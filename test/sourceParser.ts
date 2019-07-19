import { readFileSync } from "fs";
const source = readFileSync('./test/interface.ts', 'UTF8');
import { appendToFile } from "../src/md-to-mock/generator";

import recast from 'recast';
const tsParser = require("recast/parsers/typescript")
const ast = recast.parse(source, {
  parser: tsParser
});

let node;
recast.visit(ast,
  {
    visitExportNamedDeclaration: function (this, nodePath) {
      if (!nodePath.node.declaration) { return this.traverse(nodePath) }
      node = nodePath;
      // node.node.declaration.id.name = 'Guomin';
      // circular Object to JSON
      // console.log(JSON.stringify(nodePath, function(key, value: never) {
      //   if (typeof value === 'object' && value !== null) {
      //       if (cache.indexOf(value) !== -1) {
      //           // Circular reference found, discard key
      //           return;
      //       }
      //       // Store value in our collection
      //       cache.push(value);
      //   }
      // return value;
      // }));
      return this.traverse(nodePath);
    }
  });
// console.log(node.value);
// console.log((ast)); // 枚举的key对应的value

// node.value.declaration.id.name = 'ygm'
// console.log((node.value.declaration.body.body[0]));

appendToFile(ast);
