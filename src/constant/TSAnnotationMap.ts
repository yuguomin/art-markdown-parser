/** 
 * 对应markdown的explain的type映射到interface body的type定义
*/
export enum TypeAnnotations {
  int = "TSNumberKeyword",
  string = "TSStringKeyword",
  boolean = "TSBooleanKeyword",
  array = "TSArrayType",
  object = "TSTypeReference"
}

/** 
 * 定义了enum的value值对应的类型
*/
export enum EnumTypeAnnotations {
  int = "NumericLiteral",
  string = "StringLiteral"
}

/** 
 * enum每条生成所需内容定义
*/
export interface singleEnumAst {
  currentName: string;
  type: string;
  option: string;
}

export namespace TsAstIdentifier {
  export const annotationType = 'TSTypeReference';
}