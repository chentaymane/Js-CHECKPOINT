function gridWordsFinder(grid, words) {
    var result =[]
    for (let word of words) {
        for (let row of grid){
            // console.log(row)
            
            var rowWord = row.join("")
            if (rowWord.includes(word.toLowerCase())  && !result.includes(word) ){
                result.push(word)
            }
            var i=0
            while( i <= grid[0].length) {
                var colWord =""
                for (let row of grid){
                    colWord += row[i]
                }
                            // console.log(colWord)
                             // console.log(word)
                 if (colWord.includes(word.toLowerCase()) && !result.includes(word) ){
               result.push(word)
            }
            i++
            }
        }
    }
    return result 
}

const grid = [
  ["c", "a", "t"],
  ["a", "a", "t"],
  ["r", "a", "t"],
  ["d", "o", "g"],
];

console.log(
  gridWordsFinder(grid, ["cat", "dog", "rat", "tar", "car", "rac", "g"]),
);
console.log(gridWordsFinder(grid, [])); //["cat", "dog", "rat", "car", "g"]
console.log(gridWordsFinder(grid, ["cat", "dog", "rat", "tar", "car", "rac", "g"]));
//  ["cat", "dog", "rat", "car", "g"]
//  "tar" → right to left, not supported
//  "rac" → right to left, not supported
console.log(gridWordsFinder(grid, ["a", "o", "z"]));
// ["a", "o"]   ("z" not in grid)

console.log(gridWordsFinder(grid, ["adog"]));  // wait no..
// column 2 is: t,t,t,g  →  "tttg"
// column 1 is: a,a,a,o  →  "aaao"
// column 0 is: c,a,r,d  →  "card"
console.log(gridWordsFinder(grid, ["card", "aaao", "tttg"]));
//  ["card", "aaao", "tttg"]
console.log(gridWordsFinder([], ["cat"]));
//  []  (no rows/columns to check)
