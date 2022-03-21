/**
 * @param  {string} url
 * @param  {string} baseUrl
 */
export function imgParse(url, baseUrl) {
  if (url?.match(/https?:\/\//)) return url;
  return baseUrl + url;
}

export function deepClone(original) {

  // Simple types
  if ( (typeof original !== "object") || (original === null) ) return original;

  // Arrays
  if ( original instanceof Array ) return original.map(deepClone);

  // Dates
  if ( original instanceof Date ) return new Date(original);

  // Unsupported advanced objects
  if ( original.constructor !== Object ) return original;

  // Other objects
  const clone = {};
  for ( let k of Object.keys(original) ) {
    clone[k] = deepClone(original[k]);
  }
  return clone;
}
