const {Router} = require('express')
const article = require('../controller/article_controller');
const { databaseVersion } = require('../db/db_config');
const Categorie= require('../models/categorie_model')
const router=Router();

router.get('/',article.getAllarticles);

router.get('/getAllarticles',article.getAllarticles);

router.post('/searcharticle',article.searcharticle);

router.post('/getarticle',article.getarticle);

router.post('/createarticle',article.createArticle);
router.get('/createarticle',(req,res)=>{
   Categorie.findAll().then(e=>{
    data=e
    res.render('articles/add_article',{data})
   })
});

router.post('/updatearticle',article.updateArticle);

router.post('/deletearticle',article.deleteArticle);

module.exports= router;