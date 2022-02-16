var mongoose = require('mongoose');
var PersonSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
module.exports= mongoose.model("person", PersonSchema);