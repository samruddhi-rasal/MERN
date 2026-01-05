// this always gets executed at client side and not on server side


var count = 23;
count++;

console.log("Count = "+count);
console.log("This code is from app.js")

var result = 76;
if(result <= 100){
    console.log("Value is less than 100");
}
else{               
    console.log("Value is greater than 100");
}
console.log("Internal JavaScript code");

var onButtonClick = function(){
    alert("here Button is clicked.....");
};
var onWelcomeClick = function(){
    alert("Welcome to client side event handling.....");
};