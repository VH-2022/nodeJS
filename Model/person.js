const mongoose = require('mongoose');
var personSchema = mongoose.Schema({
    name: String,
    age: Number,
});
module.exports = mongoose.model('project', personSchema);