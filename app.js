var express = require('express');

var app = express();

app.listen(8080,function(){
    console.log('server started');
});

app.get('/',function(req,res){
    res.end('ExpressJS web framework');
})

app.post('/login',function(req,res){
    res.end('post');
})