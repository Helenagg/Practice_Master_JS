// Write your function here
const isEvenLength = (word) => {
    if (word.length %2 === 0) return true;
    else return false;
}

let output = isEvenLength('helena');
console.log(output);