
export const decoratorTsAst = {
  type: 'Decorator',
  callee: {
    type: 'CallExpression',
    callee: {
      type: 'Identifier',
      name: '' // decorator name
    },
    arguments: [
      {
        type: '', // string use 'StringLiteral' ? number? any other else
        value: '' // param value
      }
    ]
  }
}