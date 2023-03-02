function getAllElementsButFirst(array) {
  // your code here
  array.shift();
  return array;
}

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output);