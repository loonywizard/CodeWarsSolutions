// https://www.codewars.com/kata/extract-the-domain-name-from-a-url

function domainName(url) {
  return url.match(/([a-z]+:\/\/)?(www\.)?(.+)/)[3].split('.')[0]
}
