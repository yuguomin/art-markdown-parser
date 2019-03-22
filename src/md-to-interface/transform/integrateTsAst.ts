

export let tsAstBody: any[] = [];

export const appendTsAstToStorage = (singleTsAstPart) => {
  tsAstBody.push(singleTsAstPart);
}