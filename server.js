const express = require('express')
const app = express()
const port = 3001

var User = require('./models/user');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chirag');


app.get('/getroute', (req, res) => {
  res.send('This is GET Route!')
})

app.get('/find', function(req, res){

  //find with all data
  User.find(function(err, response){
    res.json(response);
  });
  
});

//find with with conditions
app.get('/findWithCondition', function(req, res){

  User.find({name: "Jay", age: 25},function(err, response){
    res.json(response);
  });
});

//find by id
app.get('/findById', function(req, res){

  User.findById("620a52a2382854e10d776deb", 
  function(err, response){
    res.json(response);
  });

});

//get id in query parameter
app.get('/request/:id', (req, res) => {
  res.send('Your ID is: '+req.params.id+'');
})

//post route
app.post('/postroute', function(req, res){
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})