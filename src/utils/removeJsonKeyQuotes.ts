export const removeJsonKeyQuotes: (transformBbj: string) => string = (transformBbj) => {
  if (typeof transformBbj !== "object" || Array.isArray(transformBbj)) {
    // not an object, stringify using native function
    return JSON.stringify(transformBbj);
  }
  // Implements recursive object serialization according to JSON spec
  // but without quotes around the keys.
  let props = Object
    .keys(transformBbj)
    .map(key => `${key}: ${removeJsonKeyQuotes(transformBbj[key])}`)
    .join(`, `);
    // console.log(props);
  return `{ ${props} }`;
}