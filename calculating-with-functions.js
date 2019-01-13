// https://www.codewars.com/kata/calculating-with-functions

const [
  zero, one, two, three, four, five, six, seven, eight, nine
] = [...Array(10)].map((_, i) => (f = x => x) => f(i))
  
const plus = r => l => l + r
const minus = r => l => l - r
const times = r => l => l * r
const dividedBy = r => l => ~~(l / r)
