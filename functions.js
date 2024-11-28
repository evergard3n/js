function makeMultiplier(multiplier) {
    var myFunc = function(x) {
        return multiplier*x;
    }
    return myFunc
}
// this function return a function
// when you call this
var multiplyBy2 = makeMultiplier(2);
// this returns a function multiplyBy2(x), which is the "myFunc" in line 2
// called js closure    
(function(name) {
    console.log("hello "+ name);
})("arya");
console.log(document.getElementById("header"))