var express =require("express");  
var app=express(); 
/*
var onDefault=function(req, res){
    res.send("<h1>Transflower Learning Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Mentoring for skill building</li>"+
                    " <li>Workshops</li>"+
                    " <li>Online Course</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>");
};
*/
app.all('*',function(req,res){
    res.sendfile(__dirname+"/index.html");
});

var server=app.listen(8081);
console.log("Server is running on port 8081");
