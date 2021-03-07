/**
 * @param  {string} url
 * @param  {string} baseUrl
 */
export function imgParse(url, baseUrl) {
  if (url.match(/https?:\/\//)) return url;
  return baseUrl + url;
}
