import recast from 'recast';
import { objDeepCopy } from '../utils/tools';
import { appendFileSync } from 'fs';
import ExportInterfaceAst from '../ast/TSExample/interfaceAst';

interface interfaceAstReuslt {
  type: string;
  declaration?: any;
}
export const appendInterfaceTofile = (interfaceName, interfaceBody, interfaceAst?: any, finalName?: string) => {
  const ast = interfaceAst || objDeepCopy(ExportInterfaceAst) as any;
  ast.id.name = finalName || interfaceName;
  ast.body.body = interfaceBody;
  let result:interfaceAstReuslt = {
    type: 'ExportNamedDeclaration'
  }
  result.declaration = ast
  appendFileSync(
    './result/result.ts',
    `\n${recast.print(result).code}`,
    'utf8'
  );
}