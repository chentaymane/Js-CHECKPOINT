function reverseChunks(arr, chunkSize) {
    var newArr = []
    var result = []
  for (let i = 0 ; i< arr.length ; i++) {
      if (i < chunkSize){
          newArr.push(arr[i])

      }else{
            result.push(...newArr.reverse())
            newArr = []
            chunkSize += chunkSize
            i--
      }
  }
      if (newArr.length> 0 ){
          result.push(...newArr.reverse())

      }
    return result
}


console.log(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3));

console.log(reverseChunks([10, 20, 30, 40, 50], 2));
console.log(reverseChunks([1, 2, 3, 4, 5], 4));