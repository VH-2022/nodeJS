const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    password:{
        type:String,
        require:true
    },
});
console.log("Vishal");
const newuser=mongoose.model('newuser',userschema);
module.exports=newuser;