var user = new Object();
var username = window.prompt("Enter your username: ");
user.username = username;
console.log(user.username);
user.address = new Object();
user.address.city = window.prompt("Enter your city: ");
console.log(user.address.city);


var user =  {
    username: "",
    password: "",
    address: {
        city: "",
        postal_code: ""
    }
};
user.username = window.prompt("Enter your username: ");
user.password = window.prompt("Enter your password: ");
console.log(user)