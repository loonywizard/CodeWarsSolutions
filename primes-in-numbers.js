// https://www.codewars.com/kata/primes-in-numbers

function primeFactors(n) {
  let i = 2
  let j = 0
  let result = ""
  
  while (n > 1) {
    if (n % i === 0) {
      n = n / i
      j += 1
    } else {
      if (j === 1) result += `(${i})`
      if (j > 1) result += `(${i}**${j})`
    
      i += 1
      j = 0
    }
  }
  
  if (j === 1) result += `(${i})`
  if (j > 1) result += `(${i}**${j})`
  
  return result
}
