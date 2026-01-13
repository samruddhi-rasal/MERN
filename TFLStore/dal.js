//Implemtation for MySQL Database Connectivity
//MySQL Module to be impoerted
//Database Connectivity
//Step 1 : Create Connection
//Step 2 : Connect to database connection
//Step 3 : Define SQL Query
//Step 4 : Send SQL Query to MySQl
//Step 5 : OnRecieve Result collect data and display data
var mysql=require('mysql2');
var dbserver ={
    host:'localhost',
    user:'root',
    password:'password',
    database: 'customers'
};
var connection=mysql.createConnection(dbserver);
//will establish TCP Connection with MySQL
connection.connect(function(err){
    console.log(err);
});

var insert = function(){
    var insertQuery="INSERT INTO users ";
    connection.query(insertQuery,function(err,data){
        if(err){
        console.log("error : " +err);
    }
        else{
        console.log(data);
    }
});
};

var update = function(){
    var updateQuery="UPDATE from users contact WHERE id=10";
    connection.query(updateQuery,function(err,data){
        if(err){
        console.log("error : " +err);
    }
        else{
        console.log(data);
    };
});
    
};

var remove = function(){
    var deleteQuery="DELETE FROM users WHERE id=2";
    connection.query(selectAllQuery,function(err,data){
        if(err){
        console.log("error : " +err);
    }
        else{
        console.log(data);
    }
});
    
};

var getAll = function(){
    var selectAllQuery="select * from users";
    connection.query(selectAllQuery,function(err,data){
    if(err){
        console.log("error : " +err);
    }
    else{
        console.log(data);
    }
});
    
};

var getById = function(id){
    var selectbyIdQuery="select * from users where id="+ id;
    connection.query(selectbyIdQuery,function(err,data){
    if(err){
        console.log("error : " +err);
    }
    else{
        console.log(data);
    }
});
    
};
//getAll();
getById(5);