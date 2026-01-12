var express = require('express');
var path = require('path');
var app = express();
var credentials = require('./data/credentials.json');

var flowers = require('./data/flowers.json');

var customers = require('./data/customer.json');    

//MiddleWare Configuration
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Node JS Application consist of 5 HTTP handlers

//Server side HTTP CRUD Operations Implementation
//CRUD Operations are perform on customer JSON Array 
//Node JS Application consists of 4 REST API Handlers
app.get("/", function(req, res) {
    res.sendfile("index.html");
});

//When Client Application invokes web api and recieved json data as response
//it is called as REST API
//it is called as WEB API
//it is called as web service
//it is called as web listener
//callback function map to each HTTPWebRequest is called as HTTPHandler
//web query : http:localhost:9000/api/flowers
//sql query : select * from flowers
//serverr side UPDATE  operatiom for incoming HTTP PUT request
app.put("/api/customers/:id",(req, res)=>{
    //
    var existingCustomerId=req.params.id;
    var customerToBeUpdated = req.body;
    //find that object in customers collection
    //update data to array customers
    console.log("data to be updated at customers @server");
    console.log(customerToBeUpdated)
    response.send("Customer data updated");
});
//serverr side GET operatiom for incoming HTTP GET request
app.get("/api/flowers",(req,res)=>{
    res.send(flowers);

});
//web query is sent to web server : http:localhost:9000/api/flowers
//sql query is sent to database   : select * from flowers where id=1

//Web API Handler mapped with web query
app.get("/api/flowers/:id",(req,res)=>{
    //scope variable
    //web query processing logic
    let id = req.params.id;
    let flower = flowers.find(product=>product.id==id) //where block : Query
    res.send(flower);
});

app.get("/api/customers",(req,res)=>{
    //web query processing logic
    res.send(customers);

});

app.get("/api/customers/:id",(req,res)=>{
    //scope variable
    let customerId = req.params.id;
    let thecustomer = customers.find(customer=>customer.id==customerId) //where block : Query
    res.send(thecustomer);
});
//HTTP Post Handlers
app.post("/api/login",(req, res)=>{
    console.log("Login post is invoked....");
    var user=req.body;
    if(user.username=="Samruddhi" && user.password=="Rasal123"){
        res.send("Valid User!");
    }
    else{
        res.send("Invalid User!");
    }
    
    /*let theUser=credentials.find(credential=>credential.username==user.username && credential.password==user.password)
    let message="Invalid User!";
    if(theUser !== undefined){
        message="Valid User!";
    }
    respond.send(message);  
    */


    /*
    Check credetials again MySQL Database and send proper response
    back to calling lient Application
    */
});
//serverr side POSToperatiom for incoming HTTP POST request
app.post("/api/register",(req, res)=>{
    console.log("Register post is invoked....");
    var newCustomer=req.body;
    customers.push(newCustomer);
    res.send("Customer Registered Successfully!");
});
/* Insert newly created customers details to MySql Database customer table
*/
app.post("/api/flowers",(req, res)=>{
    let newFlower=req.body;
    flowers.push(newFlower);
    res.send("Flower Added Successfully!");
});
app.post("/api/flowers",(req, res)=>{
    let newFlower=req.body;
    flowers.push(newFlower);
    res.send("Flower Added Successfully!");
});

//serverr side delete operatiom for incoming HTTP Delete request
app.delete("/api/flowers/:id",(req,res)=>{

    let id = req.params.id;
    let remainingFlowers=flowers.filter(f=>f.id!=id);// THE FILTER FUNCTION WILL RETURN ALL FLOWERS EXCEPT THE ONE WITH THE GIVEN ID
    flowers=remainingFlowers;
    res.send("Flower Deleted Successfully!");
});
app.listen(9000)
    console.log("Server is running on port 9000");

