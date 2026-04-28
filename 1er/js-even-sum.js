function isEven(n){
    if (n%2 === 0){
        return true
    }
    return false
}

function evenSum(nums) {
    var result = 0
    for (let i = nums ; i>0 ; i-- ){
        if (isEven(i)) {
            result += i
        }
    }
    return result
}

console.log(evenSum(5));
console.log(evenSum(1));
