const Categorie = require ('../models/categorie_model')

const getAllCategorie=(req,res)=>{
    Categorie.findAll().then(Categorie=>{
     res.render('categorie/categories',{data:Categorie});
   }
   ).catch(error=>res.json(error))
};
const searchCategorie=(req,res)=>{
    const {body} =req
    Categorie.findAll({
        where: {
          label: body.label
        }
      }).then(Categorie=>{
     res.render('categorie/categories',{data: Categorie});
   }
   ).catch(error=>res.json(error))
};
const getCategorie=(req,res)=>{
    const {id}= req.body;
    Categorie.findByPk(id).then(Categorie=>{
        res.render('categorie/update_categorie',{data:Categorie});
      }
      ).catch(error=>res.json(error))
};
const createCategorie=(req,res)=>{
    const {body}=req;
    Categorie.create({...body}).then(()=>{
     res.redirect('/categorie')
    }).catch(error=>res.json(error))
};
const updateCategorie=(req,res)=>{
    const {body}=req;
    Categorie.findByPk(body.id).then(Categorie =>{
    if(!Categorie) return res.json({msg:"not found"})
    Categorie.label=body.label
    Categorie.save().then(()=>{
        res.redirect('/categorie')
    }).catch(error=>res.json(error))
   })
};
const deleteCategorie=(req,res)=>{
    const {id}=req.body
    Categorie.destroy({where:{id:id}}).then(()=>{
        res.redirect('/categorie')
    }).catch(error=>res.json({msg:error}))
};

module.exports = {getAllCategorie,getCategorie,createCategorie,updateCategorie,deleteCategorie,searchCategorie};