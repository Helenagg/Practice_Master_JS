let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (var key in obj2) {             // Since we want to add properties to obj1, we start looping through obj2
        if (obj1[key]) {                // Check if obj1 key matches obj2 keys
            obj1[key]                   // If match we do nothing...
        } else {
            obj1[key] = obj2[key]       // If no match, we add obj2 key to obj1 key
        }
    }
    return obj1;
}

console.log(extend(obj1, obj2))
