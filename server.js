//HTTP Web Server

var http = require('http');
//this is a rule foe web programming
//to define first parameter always as request
//second parameter as response

var person = {
    name: "Samruddhi",
    city: "Pune",
    email: "samruddhi.rasal03@gmail.com",
    contactnumber : "9876543210"
};
var data="Hello World";
//custom (programmer defined) function
var onRequestHandler=function(request,response){  //callback function
    console.log("Request received from browser");  
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h1>Welcome to HTTP Server Programming</h1>");
    //Serialization : Converting JSON object to string
    //Deserialization : Converting string to JSON object
    //response.write(JSON.stringify(person));
    response.end();
};

var server=http.createServer(onRequestHandler);//inbuit function
server.listen(8080); //0 to 1024 port number //inbuilt function
console.log("Server is listening on port 8080");