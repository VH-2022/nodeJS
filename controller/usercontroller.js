const User=require('../model/user.model');


exports.list=async (req,res)=>{
    const list=await User.find();
    if(list){
        
     
        res.render('../view/user/list.pug', {'user_list':list});
    }else{
        res.json({"message":"not available any user"});
    }
    
    

}

exports.createuser = async(req,res)=>{
    const list=await User.find();
    req.render('../view/user/create.pug', {'user_list':list});
    
}