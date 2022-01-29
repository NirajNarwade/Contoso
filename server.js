var express =require("express");  
var app=express(); 

app.all('*',function(req,res){
    res.sendfile(__dirname+"/index.html");
});

var server=app.listen(8081);
console.log("Server is running on port 8081");
