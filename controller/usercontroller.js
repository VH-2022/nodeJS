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
    
    res.render('../view/user/create.pug');
    
}

exports.saveUser = async(req,res)=>{
    
    user=new User({
        'first_name':req.body.first_name,
        'middle_name':req.body.middle_name,
        'last_name':req.body.last_name,
        'email':req.body.email,
    });
    user.save(function (err, user) {
        
        if (err) console.log("error");
        else res.redirect('/users/list');
      });
}
exports.findOne  = async(req,res)=>{
    const id = req.params.id;
    var list = User.findById(id).then(data => {
        if (!data)
          res.status(404).send({ message: "Record not abailable" });
        else
        
        res.render('../view/user/edit.pug', {'user_list':data});
        
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error" });
      });
    console.log(list)
    
}

exports.updateUser = async(req,res) =>{
    User.findByIdAndUpdate(req.body.id, 
    {first_name:req.body.first_name,middle_name:req.body.middle_name,last_name:req.body.last_name,email:req.body.email}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/users/list');
        }
    });  
}