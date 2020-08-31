let todos = require('./data');
var express = require('express');



var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/todos',function(req, res){
    res.json(todos.todos);
});

app.delete('/todos/:id',function(req, res){
    res.json({
        status: 200,
        message:'Todo removed successfully!'
    });
    res.status(200);
});

app.listen(3000, function(){
    console.log('app is listening to http://localhost:3000')
})