var express = require("express");
var app = express();
var Person = require("./models/person");

app.get("/", function (req, res) {
  res.send("Hello world");
});

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/testpractice");
app.get("/person", function (req, res) {
  var newPerson = new Person({
   
  });

  newPerson.save(function (err, Person) {
    if (err) console.log("error");
    else console.log("New person added");
  });
});

app.get("/findperson", function (req, res) {
  Person.find(, function (err, response) {
    console.log(response);
    res.send({ data: response });
  });
});
app.get("/findpersonbyID", function (req, res) {
  Person.findById("", function (err, response) {
    console.log(response);
  });
});

app.get("/updatePerson", function (req, res) {
  Person.updateOne(
    function (err, response) {
      console.log(response);
    }
  );
});

app.get("/updatePersonone", function (req, res) {
  Person.findOneAndUpdate(
    function (err, response) {
      console.log(response);
    }
  );
});
app.get("/updatePersononebyID", function (req, res) {
  Person.findByIdAndUpdate(
    function (err, response) {
      console.log(response);
    }
  );
});

app.get("/removeByage", function (req, res) {
  Person.remove(, function (err, response) {
    console.log(response);
  });
});

app.get("/findRemoveperson", function (req, res) {
  Person.findOneAndRemove(, function (err, response) {
    console.log(response);
  });
});
app.get("/findRemovepersonbyID", function (req, res) {
  Person.findByIdAndRemove(
    function (err, response) {
      console.log(response);
    }
  );
});

app.listen(8001);
