var mongoose = require('mongoose');
var PersonSchema = mongoose.Schema({
   name: String,
   age: Number,
   email : String,
   nationality: String
});

//for exports module
module.exports= mongoose.model("person", PersonSchema);