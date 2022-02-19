const mongoose=require('mongoose');
const urlp=require('./config.json');
const db=async ()=>{
   try{
       console.log(urlp.url);
    await mongoose.connect(urlp.url);
    console.log('connect...');
}catch(err){
    console.log(err.message);
    console.log('connection error');
}
};
module.exports=db;