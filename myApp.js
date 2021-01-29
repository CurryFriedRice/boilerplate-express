var express = require('express');
var app = express();

//console.log("Hello World");


var absolutePath = __dirname+ "/views/index.html";

app.get("/", function(req, res){
  res.sendFile(absolutePath);
});
























 module.exports = app;
