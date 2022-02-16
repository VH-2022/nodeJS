var express = require('express');
var app = express();
var route = require('./route/web.js');
var personSchema = require('./model/person.js');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var mongoose = require('mongoose');
var Person = require('./model/person');
var Employee = require('./model/employee');

mongoose.connect('mongodb://localhost/user');
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.set('view engine', 'pug');
app.set('views', './views');
// const data = new Person({
//     name: "Test",
//     age: 24,
//     nationality: "Canada"
// });
// data.save().then((result)=>{
//     console.log(result);
// })
// .catch(err=>console.log(err));
// Person.find({name:{$ne:"Modi"}},function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// });
// Person.find({age:{$gt:20}},function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// });
// Person.updateOne({age:{$gt:20}},{nationality: "Canada"},function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// });

// Person.deleteMany({age:{$lt:25}},function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// });
app.post('/user', async (req, res)=>{
    const formData = await new Person(req.body);
    // console.log(req.body);
    // res.send("Done");
    formData.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
});
app.use(function (req, res, next) {
    next();
});
app.use('/', route);
app.listen(3000);