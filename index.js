var express = require("express");
var app = express();
var Person = require("./models/person");

app.get("/", function (req, res) {
  res.send("Hello world!");
});

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_db");
app.get("/person", function (req, res) {
  var newPerson = new Person({
    name: "Mihir",
    age: 29,
    nationality: "African",
  });

  newPerson.save(function (err, Person) {
    if (err) console.log("error");
    else console.log("New person added");
  });
});

app.get("/findperson", function (req, res) {
  Person.find({ name: "Mihir" }, function (err, response) {
    console.log(response);
    res.send({ data: response });
  });
});
app.get("/findpersonbyID", function (req, res) {
  Person.findById("620b339f923fdd9f74b35ced", function (err, response) {
    console.log(response);
  });
});

app.get("/updatePerson", function (req, res) {
  Person.updateOne(
    { age: 25 },
    { nationality: "American" },
    function (err, response) {
      console.log(response);
    }
  );
});

app.get("/updatePersonone", function (req, res) {
  Person.findOneAndUpdate(
    { name: "Dipali" },
    { age: 40 },
    function (err, response) {
      console.log(response);
    }
  );
});
app.get("/updatePersononebyID", function (req, res) {
  Person.findByIdAndUpdate(
    "620b339f923fdd9f74b35ced",
    { name: "James" },
    function (err, response) {
      console.log(response);
    }
  );
});

app.get("/removeByage", function (req, res) {
  Person.remove({ age: 40 }, function (err, response) {
    console.log(response);
  });
});

app.get("/findRemoveperson", function (req, res) {
  Person.findOneAndRemove({ name: "Parth" }, function (err, response) {
    console.log(response);
  });
});
app.get("/findRemovepersonbyID", function (req, res) {
  Person.findByIdAndRemove(
    { id: "507f1f77bcf86cd799439011" },
    function (err, response) {
      console.log(response);
    }
  );
});

// not equal condition
app.get("/notEqaulpeople", function (req, res) {
  Person.find({ age: { $ne: 29 } }, function (err, response) {
    console.log(response);
  });
});

//  greater than condition
app.get("/GTpeople", function (req, res) {
  Person.find({ age: { $gt: 29 } }, function (err, response) {
    console.log(response);
  });
});

// less than condition
app.get("/LSpeople", function (req, res) {
  Person.find({ age: { $lte: 29 } }, function (err, response) {
    console.log(response);
  });
});

app.listen(3000);
