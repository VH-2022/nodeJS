const mongoose = require('mongoose');
var employeeSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
module.exports = mongoose.model('employee',employeeSchema);