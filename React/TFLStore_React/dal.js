// Implementataion for MySQL Database
// mysql module to be imported

// Database connectivity
    //1.Create connection
    //2.Connect to database connection
    //3.define sql query
    //4.Send SQL Query to MySQL
    //5.OnReceive Result collect data and display data

// mysql2 ,since mysql is not compatible.

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

// Close the database and server connection 

var insert = function(){
    var insertQuery = "INSERT INTO users set ?";
    connection.query(insertQuery,function(err,data){
     if(err){
        console.log("error : "+ err);
     }
     else{
        console.log("Inserted the Row...");
        console.log(data);
     }
});
};

var update = function(){
    var updateQuery = "UPDATE FROM users user =? WHERE id=2";
    connection.query(updateQuery,function(err,data){
     if(err){
        console.log("error : "+ err);
     }
     else{
        console.log("Updeted....");
        console.log(data);
     }
});
};

var remove = function(){
    var deleteQuery = "DELETE FROM users WHERE id=3";
    connection.query(deleteQuery,function(err,data){
     if(err){
        console.log("error : "+ err);
     }
     else{
        console.log("Deleted the Row....");
        console.log(data);
     }
});
};

var getAll = function(){
    var selectAllQuery = "select * from users";
    connection.query(selectAllQuery,function(err,data){
     if(err){
        console.log("error : "+ err);
     }
     else{
        console.log("All Rows....");
        console.log(data);
     }
});
};

var getById = function(){
    var selectByIdQuery = "select * from users where id=11";
    connection.query(selectByIdQuery,function(err,data){
     if(err){
        console.log("error : "+ err);
     }
     else{
        console.log("! row only by given id....");
        console.log(data);
     }
});
};

//getAll();
//getById(1);
//remove();
//update();
//insert();







