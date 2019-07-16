export const classBodyTsAst = {
  type: 'ClassBody',
  body: []
}

export const classMethodTsAst = {
  type: '', // method use 'ClassMethod'
  decorators: [],
  accessibility: '', // 'public' ? 'priavte'
  static: false, // is static
  kind: '', // prototype type, method use 'method'
  generator: false,
  async: false,
  params: [], // method may have
  body: [],
  optional: null,
  abstract: null,
  rest: null,
  returnType: null,
  typeParameters: null,
  defaults: [],
  expression: false
}