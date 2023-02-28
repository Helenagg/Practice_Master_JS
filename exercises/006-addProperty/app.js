function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}

let obj = {};
addProperty(obj, 'myProperty');
console.log(obj.myProperty);