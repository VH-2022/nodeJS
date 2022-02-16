const mongoose = require('mongoose');
var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
module.exports = mongoose.model('persons',personSchema);