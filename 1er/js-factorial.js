function factorial(n) {
    var result = 1;

    for (let i = n; i > 0; i--) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1