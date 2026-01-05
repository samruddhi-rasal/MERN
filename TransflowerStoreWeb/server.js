//Server side JavaScript code

var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');
const app = express();
const { urlencoded } = require("express");

// Configure public folder as static folder to express module
app.use(urlencoded({ extended: true }));
app.use(express.json()); //app.use is used to configure middlewares in express
var staticMiddleware = express.static(path.join(__dirname, "public"));
app.use(staticMiddleware);

//3 middleware are configured here
//      -encoding
//      -extracting json data 
//      -static resource holder path 

//3 http request handlers
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/login", (req, res) => { //post is invoked when something is sent from client to server 
    console.log(req.body);
    var user=req.body;
    if(user.email=="admin@transflower.in" 
        && user.password=="admin"){
            console.log("Valid user");
        }
        else{
            console.log("Invalid user");
        }
    console.log("Login form is posted by browser request received at server ");
});
app.post("/register", (req, res) => { //post is invoked when something is sent from client to server 
    console.log(req.body);
    console.log("Register form is posted by browser request received at server ");
});
app.listen(8080);
console.log("Website is being hosted on port no 8080");