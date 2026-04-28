function isPalindromic(n ) {
    var str1 = n.toString()
    var str = n.toString().split("").reverse().join('')
    return str === str1

}

function palindromicChain(numbers) {
    var result = []
    var push = true
    for (let i of numbers){
        n = parseInt(i,10)
        if (isPalindromic(n)){
            result.push(n)
        }else{
           //console.log("t")
            for (let j=0 ; j<= 100 ; j++){
                var rev = n.toString().split("").reverse().join('')
               var somme = n+parseInt(rev,10)
                if (isPalindromic(somme)){
                    result.push(somme)
                    push = true
                    break
                }else{
                    n = somme
                    push = false
                }

            }
            if (!push) {

                result.push(0)
            }
        }
    }
    return result
}



console.log(palindromicChain([87, 33, 123, 196])); //[4884, 33, 444, 0]
//console.log(isPalindromic(1))