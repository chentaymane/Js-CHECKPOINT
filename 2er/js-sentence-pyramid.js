function sentencePyramid(sentence) {
    var result = []
    for (let word of sentence.split(" ")){
        result.push(word) 
        console.log(result.join(" "))
    }

}


sentencePyramid("This is a simple sentence pyramid")