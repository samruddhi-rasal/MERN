//Module: Modularity
//Event listeners
//Event Handler logic
//expose functions to be used outside of javascript file 
//we are publishhing functions outside using exports keywords

exports.payIncomeTAx=function(){
    console.log("20% income tax to be applied against the account!");
}

exports.payServiceTax=function(){
    console.log("15% service tax to be applied against the account!");
}
exports.blockaccount=function(){
    console.log("Account has been blocked temporarily!");
    
};
exports.sendEmail=function(){
    console.log("Email has been sent to your email id !");
    
};
exports.sendSMS=function(){
    console.log("SMS has been sent to your registered mobile number !");
};