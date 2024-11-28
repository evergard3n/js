function test() {
    this.myName = "arya";

}
test();
console.log(window.myName);
// so heres the thing, "this" point to the object that the class create (just like java)
// in the example above, no object created, so this points to the outmost object - window
// so here the bullshit begins
// define a Circle class
function Circle(radius) {
    //properties
    this.radius = radius;
    //function of this class
    this.getArea = function() {
        return Math.PI*Math.pow(radius,2);
    }
}
// you can also define a function like this
Circle.prototype.getCircumstance = function() {
    return Math.PI*2*this.radius;
};
// a prototype is like a frame for every constructed object, they all share the same functions, and created
// only frame (if you define it like this) for every object of this type
var myCircle = new Circle(10);
console.log(myCircle.getArea());
var myOtherCircle = new Circle(20);
console.log(myOtherCircle.getCircumstance());