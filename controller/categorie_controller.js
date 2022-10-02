import Categorie from '../models/categorie_model.js'

const getAllCategories=(req,res)=>{
    Categorie.findAll().then(Categories=>{
     res.json(Categories);
   }
   ).catch(error=>res.json(error))
};
const getCategorie=(req,res)=>{
    const {id}= req.params;
    Categorie.findByPk(id).then(Categories=>{
        res.json(Categories);
      }
      ).catch(error=>res.json(error))
};
const createCategorie=(req,res)=>{
    const {body}=req;
    Categorie.create({...body}).then(()=>{
     res.json({message: "added sccssfly"})
    }).catch(error=>res.json(error))
};
const updateCategorie=(req,res)=>{
    const {id}=req.params;
    const {body}=req;
    Categorie.findByPk(id).then(Categorie =>{
    if(!Categorie) return res.json({msg:"not found"})
    Categorie.label=body.label
    Categorie.save().then(()=>{
        res.json({msg: "updated"})
    }).catch(error=>res.json(error))
   })
};
const deleteCategorie=(req,res)=>{
    const {id}=req.params
    Categorie.destroy({where:{id:id}}).then(()=>{
        res.json({message:"deleted"})
    }).catch(error=>res.json({msg:error}))
};


export {getAllCategories,getCategorie,createCategorie,updateCategorie,deleteCategorie};