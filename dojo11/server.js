const { application } = require('express');
var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.json())

app.get('/',(req,res)=>{
    let file = fs.readFileSync('index.html','utf-8');
    console.log(req.query)
    let name = req.query.name
    const rname = Array.isArray(name)? name.join(' ') : name
    let rendered = file.replace('{NAME}',rname);
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
// app.use(express.static(__dirname)); 
var server = app.listen(3000);
