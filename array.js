var vap = ["nkc","fb","ncc"];
var vap1 = {
    1: "nkc",
    2: 'fb',
    sucvat: true
}
//shittiest way to traverse an array ive ever seen in my entire life
for (const i of vap) {
    console.log(i);
}
var object = {
    name: "arya",
    role: "my wife"
}
// //or
// for (var i in vap) {
//     console.log(vap[i]);
// }
// ok so heres come the fucked up part
// arrays are actually objects, yes, so they have properties
// if you define something like this
vap.sucvat = "true";
// it adds another property to vap, other than 1 2 3 4 5
// so when you run this
for (const i in vap) {
    console.log(vap[i]);
}
// whaaat

// traverse properties of an object
var myObj = {
    name : "arya",
    spouse : "me",
    address : "our house"
};
for (var props in myObj) {
    console.log(props + ": "+ myObj[[props]]);
}
// you cant use myObj.props because: 
// props is actually a string, that holds the key of the value pair
// for example, props = 'name'
// and btw, myObj.name = myObj['name']

// in conclusion
var minhle = ["deptrai", "pro", "bkc"];
// this loops thru "properties" of an object, which is the "key"
[a(0), b, c, d]
for (var props in minhle ) {
    console.log(minhle[props]);
}
// while this loops thru "value"
for (var props of minhle) {
    console.log("2 " + props);
}