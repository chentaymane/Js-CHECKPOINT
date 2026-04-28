function fibonacci(n) {
  var arr = []
  var trait = []
  let first = true

  for (let i = 0; i <= n; i++) {
    arr.push(i)
  }

  while (trait.length <= n) {
    if (first) {
      trait.push(0, 1) // start correctly
      arr.splice(0, 2)
      first = false
    } else {
      trait.push(trait[trait.length - 1] + trait[trait.length - 2])
      arr.splice(0, 1)
    }
  }

  return trait[n]
}

console.log(fibonacci(6));  // 8
console.log(fibonacci(10)); // 55
