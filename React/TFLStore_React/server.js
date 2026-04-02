var express = require('express');
var path = require('path');
var fs = require('fs');
const app = express();

var mysql = require('mysql2');

var dbServer = {
    host:'localhost',
    user:'root',
    password:'Sai@1406',
    database:'customers'
};
var connection = mysql.createConnection(dbServer);
//will establish TCP connection with MySQL
connection.connect(function(err){
    if(err){
        console.log("Connection Unsucessful.."+ err);
    }
    else{
        console.log("Connection Sucessfull...")
    }
});

// to store user criedentials
var criedentials = require("./data/credentials.json");

// Product catlog data
var flowers = require("./data/flowers.json");
// customer Relationship data (CRM data)
var customers = require("./data/customers.json");

var orders = [];
var payments = [];

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This web application has 5 HTTP handlers

app.get('/',function(request,response){
    response.sendFile("index.html");
});

// When Client Application invode web api and recived json data as response
// it is called as REST API - Representational State Transfer API
// it is called as Web API
// it is called as web service
// it is also called as web listner
// callback function mapped to each HTTPWebRequest is called as HTTPHandler
// HTTP Methods : GET, POST, PUT, DELETE
    // GET : to get the data from server
    // POST : to send the data to server
    // PUT : to update the data on server
    // DELETE : to delete the data from server

// Sql Query is semt to database server: SELECT * FROM flowers 
// web query is sent to web server: http://localhost:9898/api/flowers

// Web API Handlermapped with web query

app.get("/api/flowers",(request,response)=>{
    response.send(flowers);
});

// Sql Query : SELECT * FROM flowers WHERE id=1
// web query : http://localhost:9898/api/flowers/1
app.get("/api/flowers/:id",(request,response)=>{
    // important to put : before id in the route to make it as a route parameter
    // scope variable id 
    // let is used to declare block scope variable
    // params is used to get the route parameter
    let id = request.params.id;
    let flower = flowers.find(product=>product.id==id);
    response.send(flower);
    // Web Processing Logic
});

app.get("/api/users",(request, response)=>{
    var selectAllQuery = "select * from users";
    connection.query(selectAllQuery,function(err,data){
     if(err){
        console.log("error : "+ err);
     }
     else{
        console.log("All Rows....");
        console.log(data);
        response.send(data)
     }
});
//response.send(data)
})

app.get("/api/customers",(request,response)=>{
    response.send(customers);
});

app.get("/api/customers/:id",(request,response)=>{
    let CustomerId = request.params.id;
    let customer = customers.find(customer=>customer.id==CustomerIdd);
    response.send(customer);
});

app.put("/api/customers/:id",(req, res)=>{
    //fine the object in customers collection
    //update the object by new object into customers collection
    
    var existingCustomerId = req.params.id;
    var customerToBeUpdated = req.body;
    //update data to array customers
    console.log("data to be updated at customers @server");
    console.log(customerToBeUpdated)
    res.send("Customer data updated");
})

// HTTP POST handlers
app.post("/api/login",(request,response)=>{
    console.log("Login API Invoked");
    var user = request.body;
    /*if (user.username=="saijagdale@gmail.com" && user.password=="sai123"){
        response.send("valid user");
    }
    else{
        response.send("invalid user");
    }*/

    let theUser = criedentials.find(crenditial=>crenditial.username==user.username && crenditial.password==user.password);
    let messaage = "Invalid User";
    if(theUser !==undefined){
        response.send("valid user");
    }
    response.send(messaage);

    
    /* Check crendentials against MySQL Database 
     * and send proper back calling Client Application
     */
});

app.post("/api/register",(request,response)=>{
    var newCustomer = request.body;
    customers.push(newCustomer);
    response.send("Customer Registered Successfully");
});

app.post("/api/flowers",(request,response)=>{
    let newFlower = request.body;
    flowers.push(newFlower);
    response.send("Flower Added Successfully");
})

app.delete("/api/flowers/:id",(request,response)=>{
    let id = request.params.id;
    let remainingFlower = flowers.filter(flower=>flower.id!=id);
    flowers = remainingFlower;
    response.send("Flower Deleted Successfully");
});
app.listen(9898);
console.log("Server running on port 9898")