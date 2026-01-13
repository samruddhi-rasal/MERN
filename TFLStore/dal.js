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
connection.connect(function(err){
    console.log(err);
});
var selectQuery="select * from users";
connection.query(selectQuery,function(err,data){
    if(err){
        console.log("error : " +err);
    }
    else{
        console.log(data);
    }
});
console.log("Such a simple way to access data from tables")