// theres no c-like pointers in js
// instead, we can make use of objects - just like in java
var objectA = {x: 5};
var objectB = objectA;
console.log(objectA);
console.log(objectB);
objectB.x = 6;
console.log(objectA);

// other than that, everything is just pass by value
// in short, object = ref, var = value