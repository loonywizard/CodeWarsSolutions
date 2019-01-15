// https://www.codewars.com/kata/strip-comments

function solution(input, markers) {
  return input.split('\n').map(s => {
    markers.forEach(m => {
       const i = s.indexOf(m)
      
       if (i !== -1) {
         s = s.slice(0, i)
       }
    })
    
    return s.trim()
  }).join('\n')
}
