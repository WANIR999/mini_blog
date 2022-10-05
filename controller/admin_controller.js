const Admin = require('../models/admin_model')

const getAll=(req,res)=>{
   Admin.findAll().then(admins=>{
    res.render('dashboard',{name:admins.name,role:admins.role})
   }
   ).catch(error=>res.json(error))
};
const getOne=(req,res)=>{
    const {id}= req.params;
    Admin.findByPk(id).then(admins=>{
        res.json(admins);
      }
      ).catch(error=>res.json(error))
};
const createOne=(req,res)=>{
    const {body}=req;
    Admin.create({...body}).then(()=>{
     res.redirect("/admin/dashboard",{data:body})
    }).catch(error=>res.error)
};
const updateOne=(req,res)=>{
    const {id}=req.params;
    const {body}=req;
   Admin.findByPk(id).then(Admin =>{
    if(!Admin) return res.json({msg:"not found"})
    Admin.name=body.name
    Admin.role=body.role
    Admin.save().then(()=>{
        res.json({msg: "updated"})
    }).catch(error=>res.json(error))
   })
};
const deleteOne=(req,res)=>{
    const {id}=req.params
    Admin.destroy({where:{id:id}}).then(()=>{
        res.json({message:"deleted"})
    }).catch(error=>res.json({msg:error}))
};


module.exports= {getAll,getOne,createOne,updateOne,deleteOne};