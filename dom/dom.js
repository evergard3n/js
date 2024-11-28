// window.onload = function() {
//     const headerElement = document.getElementById('header');
//     console.log(headerElement.textContent); // Output: "hello"
//   }
  // const headerElement = document.getElementById('header');
  //   console.log(headerElement.textContent); // Output: "hello"
// function onClick (event) {
//   this.textContent = "ily";
//   console.log(document.getElementById("input"));
//   var name = document.getElementById("input").value;
//   var msg = document.getElementById('p2');
//   msg.textContent = name;
//   document.getElementById("header").textContent="hello my pookie";
//   var divContent = "<h2>"+name+" is my pookie"+"</h2>";
//   document.getElementById("content").innerHTML=divContent;
// }
// // document.querySelector("button").addEventListener("click",onClick)
// document.querySelector("button").onclick =onClick;
// how to do functions only after everything loaded?
document.addEventListener("DOMContentLoaded", function (event) {
  function onClick (event) {
    this.textContent = "ily";
    console.log(document.getElementById("input"));
    var name = document.getElementById("input").value;
    var msg = document.getElementById('p2');
    msg.textContent = name;
    document.getElementById("header").textContent="hello my pookie";
    var divContent = "<h2>"+name+" is my pookie"+"</h2>";
    document.getElementById("content").innerHTML=divContent;
  }
  // document.querySelector("button").addEventListener("click",onClick)
  document.querySelector("button").onclick =onClick;
  document.querySelector("body").addEventListener("mouseover", function (event) {
    if(event.shiftKey === true) {
      console.log(event.clientX +" "+event.clientY);
    }
  }) ;
});