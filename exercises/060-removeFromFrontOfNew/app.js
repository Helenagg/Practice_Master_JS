function removeFromFrontOfNew(arr) {
    // your code here
    let result = arr.filter((element, index) => index !== 0);
    return result;
}

let output = removeFromFrontOfNew([1, 2, 3, 4, 5]);
console.log(output);