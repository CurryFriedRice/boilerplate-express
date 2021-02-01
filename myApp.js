var express = require('express');
var app = express();

var absolutePath = __dirname+ "/views/index.html";
var assets =  __dirname + "/public";

process.env.MESSAGE_STYLE="uppercase";

app.use("", express.static(assets));



app.use(function middleware(req,res,next){
  console.log("I'm a middleware...");
  var resString = req.method + " " + req.path + " - " + req.ip;
  console.log(resString); //NEEDS TO BE A STRING
  next();
});

app.get("/", function(req, res){
  res.sendFile(absolutePath);
});

app.get("/now", function(req, res, next){
  req.time = new Date().toString();
  next();
}, function(req, res){
  res.json({
    "time" : req.time
  });
});

app.get("/:word/echo" , function (req,res){
    var string = req.params.word;
  console.log("Hello!" + string);
  res.json({
    "echo" : string
  });
});


app.get("/json", function(req, res){
if(process.env.MESSAGE_STYLE == "uppercase")
  res.json({
    "message" : "HELLO JSON"
  });
  else   
  res.json({
    "message" : "Hello json"
  });
});


 module.exports = app;
