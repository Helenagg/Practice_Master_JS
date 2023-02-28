// Write your function here
const computeAverageLengthOfWords = (word1, word2) => {
    let total = (word1.length + word2.length) / 2;
    return total;
}

let output = computeAverageLengthOfWords('helena', 'gonzalez');
console.log(output);