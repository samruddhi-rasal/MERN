var express = require('express');
var path = require('path');
var app = express();
var credentials=[{"id":1,"username":"Samruddhi", "password":"Rasal123",
                  "id":2,"username":"Sai", "password":"Rasal1",
                  "id":3,"username":"Tanishka", "password":"Rasal12",
                  "id":4,"username":"Jui", "password":"Rasal",
                  "id":5,"username":"Vishwajeet", "password":"Rasal0123",}];

var flowers =[{"id":1,"name":"Rose", "description":"wedding flowers", "price":10, "imageurl":"/images/rose.jpg", "quantity":5, "likes": 45000}, 
              {"id":2,"name":"Lily", "description":"birthday flowers", "price":15, "imageurl":"/images/lily.jpg", "quantity":3, "likes": 30000},
              {"id":3,"name":"Tulip", "description":"anniversary flowers", "price":12, "imageurl":"/images/tulip.jpg", "quantity":7, "likes": 25000},
              {"id":4,"name":"Daisy", "description":"get well soon flowers", "price":8, "imageurl":"/images/daisy.jpg", "quantity":10, "likes": 15000},
              {"id":5,"name":"Orchid", "description":"special occasion flowers", "price":20, "imageurl":"/images/orchid.jpg", "quantity":4, "likes": 40000}];

var customers = [{"id":1,"first name":"Samruddhi", "Last name": "Rasal", "email":"samruddhi@gmail.com","contact number":9876543210},
                 {"id":2,"first name":"Tanishka", "Last name": "Doe", "email":"john.doe@gmail.com","contact number":9876543211},
                 {"id":3,"first name":"Sai", "Last name": "Smith", "email":"jane.smith@gmail.com","contact number":9876543212},
                 {"id":4,"first name":"Jui", "Last name": "Johnson", "email":"alice.johnson@gmail.com","contact number":9876543213},
                 {"id":5,"first name":"Vishwajeet", "Last name": "Brown", "email":"bob.brown@gmail.com","contact number":9876543214}];      

//MiddleWare Configuration
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Node JS Application consist of 5 HTTP handlers

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

app.post("/api/register",(req, res)=>{
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
app.listen(9000)
    console.log("Server is running on port 9000");

