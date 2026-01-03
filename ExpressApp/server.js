var express=require('express');//imported framework express
var path=require('path');//imported path module to get relative path
var app=express();//express is going to return server
                  //get global object from framework                       
                  //global object contains HTTP Server
//__dirname ---------->virtual path-------> http://localhost:8080/
//          ---------->physical path------> C:\Users\Samruddhi\OneDrive\Desktop\nodejs\ExpressApp>
var staticFolder=express.static(path.join(__dirname,'public'));//to set public as static folder
app.use(staticFolder);//tell server use it as static folder
//__dirname is used to get current directory path
//app.use is a express framework configuration


//express framework setting handlers
//handler logic is going to map with app.get
//mapping incoming request to callback function
//three request handlers are implemented
//http://localhost:8080----------------callback function
//http://localhost:8080/hello----------callback function
//http://localhost:8080/flowers--------callback function


//HTTP request handlers o
app.get("/",(request,response)=>{
    response.send(__dirname+"/index.html"); //__dirname is inbuilt function
    
});

app.get("/hello",(request,response)=>{
    var flower={ "id":1,
                  "name":"Rose",
                    "color":"Red"
                };
                response.send(flower);
});

app.get("/",(request,response)=>{
    var flowers=[{ "id":1,"name":"Rose",color :"Red"},
                {"id":2,"name":"Jasmine","color":"White"},
                {"id":3,"name":"Tulip","color":"Yellow"}
        ];
        response.send(flowers);
});
app.listen(8080);
console.log("Express Web Application is running on port 8080");