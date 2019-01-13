// https://www.codewars.com/kata/number-of-trailing-zeros-of-n

function zeros (n) {
  let sum = ~~(n / 5)
  
  for (let i = 2; 5 ** i <= n; i++) {
    sum += ~~(n / 5 ** i)
  } 
  
  return sum
}
