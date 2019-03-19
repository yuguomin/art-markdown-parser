const interfaceAst = {
  type: "TSInterfaceDeclaration",
  id: {
    type: "Identifier",
    name: "" // interface name
  },
  body: {
    type: "TSInterfaceBody",
    body: [
      {
        type: "TSMethodSignature", // is a method
        key: {
          type: "Identifier",
          name: "" // every key name, nearly same as every interface name
        },
        parameters: [ // methods params array
          {
            type: "Identifier",
            name: '', // every params key
            typeAnnotation: {
              type: 'TSTypeAnnotation',
              typeAnnotation: {
                type: '' // every params annotation
              }
            }
          }
        ],
        typeAnnotation: {
          type: "TSTypeAnnotation",
          typeAnnotation: {
            type: "", // annotation type
            elementType: {
              type: 'TSTypeReference',
              typeName: {
                type: "Identifier",
                name: "" // array interface anntation name
              }
            },
            typeName: {
              type: "Identifier",
              name: "" // obj interface anntation name
            }
          }
        }
      }
    ]
  }
};
export default interfaceAst;