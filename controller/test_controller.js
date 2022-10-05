const Article = require('../models/article_model')

const getAllarticles=(req,res)=>{
    Article.findAll().then(Articles=>{
     res.render('dashboard',{data:Articles});
   }
   ).catch(error=>res.json(error))
};
const searcharticle=(req,res)=>{
    const {body} =req
    Article.findAll({
        where: {
          content: body.content
        }
      }).then(Articles=>{
     res.json(Articles);
   }
   ).catch(error=>res.json(error))
};
const getarticle=(req,res)=>{
    const {id}= req.params;
    Article.findByPk(id).then(Articles=>{
        res.render('dashboard',{name:Articles.content});
      }
      ).catch(error=>res.json(error))
};
const createArticle=(req,res)=>{
    const {body}=req;
    Article.create({...body}).then(()=>{
     res.redirect('/test')
    }).catch(error=>res.json(error))
};
const updateArticle=(req,res)=>{
    const {id}=req.params;
    const {body}=req;
    Article.findByPk(id).then(Article =>{
    if(!Article) return res.json({msg:"not found"})
    Article.creator=body.creator
    Article.categorie=body.categorie
    Article.content=body.content
    Article.save().then(()=>{
        res.json({msg: "updated"})
    }).catch(error=>res.json(error))
   })
};
const deleteArticle=(req,res)=>{
    const {id}=req.params
    Article.destroy({where:{id:id}}).then(()=>{
        res.json({message:"deleted"})
    }).catch(error=>res.json({msg:error}))
};


module.exports= {getAllarticles,getarticle,createArticle,updateArticle,deleteArticle,searcharticle};