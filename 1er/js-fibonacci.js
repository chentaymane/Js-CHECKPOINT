function fibonacci(n) {
var arr = []
var count = 0
    for (let i=0 ; i<=n ; i++) {
       arr.push(i)
    }

    while (arr.length > 0) {
        arr.remove(arr[0])
        count++
        arr.indexOf
    }   
    return count
}


console.log(fibonacci(6));
console.log(fibonacci(10));