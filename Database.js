var express = require('express');

/* Mongo Database Connection */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user');
const User = require('./model/User');

var app = express();

/* Insert Record */

// const data = new User({
//      name: "raj",
//      age: 24,
//      city: "jetpur",
// });
// data.save().then((result) => {
//      console.log(result);
// }).catch(err => console.log(err));

/* View Record */

// User.find({name:{$ne:"raj"}},function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// });

/* Update Record */

// User.updateOne({age:{$gt:20}},function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// });

/* Delete Record */

// User.deleteMany({age:{$lt:25}},function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// });

app.listen(3000);