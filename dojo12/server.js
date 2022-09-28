// var express = require('express');
// var app = express();
// var path = require('path');

// //app.use(express.static(__dirname)); // Current directory is root
// app.use(express.static(path.join(__dirname))); //  "public" off of current is root
// app.listen(3000);

const { application } = require('express');
var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.json())

app.get('/',(req,res)=>{
    let file = fs.readFileSync('index.html','utf-8');
    let rendered = file.replace('{NAME}',req.query.name);
    res.send(rendered)
})

//setting middleware

var number = 1;
app.get("/api",(req,res)=> {
    number++
    res.json({number})
})

app.post('/api',(req,res)=>{
    number = req.body.number;
    console.log(number);
    res.json({number});
})
app.use(express.static(__dirname)); //Serves resources from public folder
var server = app.listen(3000);