const Article = require('../models/article_model')

const getAllarticles=(req,res)=>{
    Article.findAll().then(Articles=>{
     res.render('articles/articles',{data:Articles});
   }
   ).catch(error=>res.json(error))
};
const getAllarticlesé=(req,res)=>{
    Article.findAll().then(Articles=>{
     res.json({data:Articles});
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
     res.render('articles/articles',{data: Articles});
   }
   ).catch(error=>res.json(error))
};
const getarticle=(req,res)=>{
    const {id}= req.body;
    Article.findByPk(id).then(Articles=>{
        res.render('articles/update_articles',{data:Articles});
      }
      ).catch(error=>res.json(error))
};
const createArticle=(req,res)=>{
    const {body}=req;
    Article.create({...body}).then(()=>{
     res.redirect('articles/article')
    }).catch(error=>res.json(error))
};
const updateArticle=(req,res)=>{
    const {body}=req;
    Article.findByPk(body.id).then(Article =>{
    if(!Article) return res.json({msg:"not found"})
    Article.creator=body.creator
    Article.categorie=body.categorie
    Article.content=body.content
    Article.save().then(()=>{
        res.redirect('articles/article')
    }).catch(error=>res.json(error))
   })
};
const deleteArticle=(req,res)=>{
    const {id}=req.body
    Article.destroy({where:{id:id}}).then(()=>{
        res.redirect('articles/article')
    }).catch(error=>res.json({msg:error}))
};


module.exports= {getAllarticles,getarticle,createArticle,updateArticle,deleteArticle,searcharticle,getAllarticlesé};