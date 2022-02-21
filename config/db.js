const mongoose=require('mongoose');
const urlp=require('./config.json');
const db=async ()=>{
   try{
    await mongoose.connect(urlp.url);
   
}catch(err){
    console.log(err.message);
}
};
module.exports=db;