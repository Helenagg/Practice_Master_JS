function removeFromBackOfNew(arr) {
  // your code here
  let result = arr.filter((element, index) => index != arr.length-1);
  return result; 
}

let output = removeFromBackOfNew([1, 2, 3, 4, 5]);
console.log(output);