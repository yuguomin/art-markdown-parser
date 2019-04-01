const exportInterfaceAst = {
  type: "ExportNamedDeclaration",
  declaration: {
    type: "TSInterfaceDeclaration",
    id: {
      type: "Identifier",
      name: "" // interface name
    },
    body: {
      type: "TSInterfaceBody",
      body: [
        {
          type: "TSPropertySignature",
          key: {
            type: "Identifier",
            name: "" // every key name
          },
          typeAnnotation: {
            type: "TSTypeAnnotation",
            typeAnnotation: {
              type: "", // annotation type
              elementType: {
                // type: "TSTypeReference",
                type: "TSTypeReference",
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
  }
};
export default exportInterfaceAst;
