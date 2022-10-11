const {Router} = require('express')
const Article = require('../models/article_model');
const Categorie = require('../models/categorie_model');
const Comment = require('../models/Comment_model');
const Evaluation = require('../models/evaluation_model');
const Visitor = require('../models/visitor_model');
const router=Router();

router.get('/admin',(req,res)=>{
    const data={}
   Article.count().then(e=>{
       data.article=e;
       Categorie.count().then(e=>{
        data.categorie=e
        Comment.count().then(e=>{
            data.Comment=e
            Evaluation.count().then(e=>{
                data.Evaluation=e
            Visitor.findAll( {attributes:['name']}).then(e=>{
                data.visitors=e
                Visitor.count().then(e=>{
                    data.visitors_num=e
                    res.render('dashboard',{data:data})
                })
            })
                
            })
        })
       })
   });

});
router.get('/client_side',(req,res)=>{
    const data={}
    Categorie.count().then(e=>{
        data.categorie=e
    Categorie.findAll({
        attributes: ['label','id']
      }).then(e=>{
        data.label=e
        Article.findAll({
            attributes: ['content','id']
          }).then(e=>{
            data.articles=e
            res.render('clientside',{data})
          })
       
      })
    })

});
router.post('/articlebycat',(req,res)=>{
    const {body}=req
    const data={}
    Article.findAll({
        where:{
            categorie:body.id
        },
        attributes: ['content','id']
    }).then(e=>{
        data.articles=e
        Categorie.findAll({
            attributes: ['label','id']
          }).then(e=>{
            data.label=e
            Categorie.count().then(e=>{
                data.categorie=e
                res.render('clientside',{data})
            })

          })
        


    })
})

module.exports= router;