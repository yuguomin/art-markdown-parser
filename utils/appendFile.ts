import recast from 'recast';
import { objDeepCopy } from '../utils/tools';
import { appendFileSync } from 'fs';
import ExportInterfaceAst from '../ast/TSExample/exportInterfaceAst';

interface interfaceAstReuslt {
  type: string;
  declaration?: any;
}
export const appendInterfaceTofile = (interfaceName, interfaceBody, finalName?: string) => {
  const singleChunk = objDeepCopy(ExportInterfaceAst) as any;
  singleChunk.id.name = finalName || interfaceName;
  singleChunk.body.body = interfaceBody;
  let result:interfaceAstReuslt = {
    type: 'ExportNamedDeclaration'
  }
  result.declaration = singleChunk
  appendFileSync(
    './result/result.ts',
    `\n${recast.print(result).code}`,
    'utf8'
  );
}