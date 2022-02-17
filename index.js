const express = require('express');
var mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/MyFirstDb');
// server create
app.listen(5555, () => {
    console.log('Server started on port 3000...');
});
app.get('/api/items', (req, res) => {
    res.end('Hello World\n');
});
// create schema
var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var User = mongoose.model("User", personSchema);


//  save data

// app.post('/users', function (req, res) {

// var newUser = new User({
//     name: "nikhil",
//     age: 25,
//     nationality: "hindustani"
// });

// newUser.save(function (err, User) {
//     if (err) {

//         console.log(err);
//     } else {
//         console.log(User);
//     }

// });


// User.find({name: "nikhil"}, 
//    function(err, response){
//       console.log(response);
// });

 
 var Person = mongoose.model("Person", personSchema);
 
 app.put('/people/:id', function(req, res){
    Person.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating person with id " + req.params.id});
       res.json(response);
    });
 });


 app.get('/person', function(req, res){
    res.render('person');
 });
