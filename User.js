const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String
});
module.exports = mongoose.model('users', userSchema);