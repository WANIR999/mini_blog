const {Router} = require('express')
const Article = require('../models/article_model');
const Categorie = require('../models/categorie_model');
const Comment = require('../models/Comment_model');
const Evaluation = require('../models/evaluation_model');
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
                res.render('dashboard',{data:data})
            })
        })
       })
   });

});

module.exports= router;