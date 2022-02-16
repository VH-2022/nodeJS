const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
  });
module.exports = mongoose.model('user',userSchema);