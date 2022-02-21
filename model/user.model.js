const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    middle_name:{
        type:String,
        
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
   
    password:{
        type:String,
        require:true
    },
});
const newuser=mongoose.model('newuser',userschema);
module.exports=newuser;