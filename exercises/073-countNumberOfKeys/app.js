let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
   let prop = Object.keys(obj).length;
    return prop;
}
console.log(countNumberOfKeys(obj))
