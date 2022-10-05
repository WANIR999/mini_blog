const {Router} = require('express')
const article = require('../controller/test_controller')
const router=Router();

router.get('/',article.getAllarticles);

router.get('/getAllarticles',article.getAllarticles);

router.get('/searcharticle',article.searcharticle);

router.get('/getarticle/:id',article.getarticle);

router.post('/createarticle',article.createArticle);
router.get('/createarticle',(req,res)=>{
    res.render('add_article')
});

router.put('/updatearticle/:id',article.updateArticle);

router.delete('/deletearticle/:id',article.deleteArticle);

module.exports= router;