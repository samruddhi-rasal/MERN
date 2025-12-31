//Domain : Banking Application
//Operations : Credit Debit 
//Bussiness Entity : Account
//Rule: Constraints Policy 
//Events against Account
//Account:
            //State: Balance
            //Operations: Withdraw, Deposit
            //Events: underBalance, overBalance
//classical JavaScript Syntax
//SOC : Separation of Concerns
//loosely coupled , highly cohesive
var handlers=require("./handler.js");// Import the handler module from handler.js file
var event=require("events");// Import the events module to handle events

var emitter=new event.EventEmitter();// Create an event emitter instance
// Account constructor function that accepts initial amount
var Account=function(amount){
    var balance=amount;// Private variable to store balance (cannot be accessed directly outside)
    //Inner function
    var getBalance=function(){ // Inner function to return the current balance
        return balance;
    };
// Function to monitor account balance conditions
var monitor=function(){
    if (balance < 5000) {

        //handlers.blockAccount();
        //console.log("Insufficient funds! Balance is below minimum required.");
        emitter.emit("underBalance");// Emit underBalance event
    }
    else if(balance > 250000){
        //handlers.payIncomeTAx();
        //console.log("Crossing the income tax limit! Taxation will be applied.");
        emitter.emit("overBalance");// Emit overBalance event
    }


};

var withdraw=function(amount){
    balance=balance-amount;
    monitor();// Check balance conditions after withdrawal
};

var deposit=function(amount){
    balance=balance+amount;
    monitor();// Check balance conditions after deposit
};

//publish inner functions to outside world

return{
    recieveBalance:getBalance,
    debit:withdraw,
    credit:deposit
    }
}
//events are associated with instancess(objects)
//Step 1 : Configuration, Initialization
//register eventhandlers with event using emitter object 
emitter.on("underBalance",handlers.blockaccount);
emitter.on("underBalance",handlers.sendEmail);
emitter.on("underBalance",handlers.sendSMS);
emitter.on("overBalance",handlers.payIncomeTAx);
//Step 2 : Create Objects
var acct123 = new Account(55000);
var data=acct123.recieveBalance();
console.log("Balance=" + data);
var amount=200000;
acct123.debit(52000);
//acct123.credit(amount);
data=acct123.recieveBalance();
console.log("Balance " + data);