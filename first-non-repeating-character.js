// https://www.codewars.com/kata/first-non-repeating-character

function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i += 1) {
    let isUnique = true
  
    for (let j = 0; j < s.length; j += 1) {
      if (i !== j && s[i].toLowerCase() === s[j].toLowerCase()) isUnique = false
    }
    
    if (isUnique) return s[i]
  }
  
  return ''
}
