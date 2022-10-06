const {Router} = require('express')
const categorie = require('../controller/categorie_controller')
const router=Router();

router.get('/',categorie.getAllCategorie);
router.post('/getcategorie',categorie.getCategorie);
router.post('/searchcategorie',categorie.searchCategorie);
router.post('/createcategorie',categorie.createCategorie);
router.get('/createcategorie',(req,res)=>{
        res.render('categorie/add_categorie')
    });
router.post('/updatecategorie',categorie.updateCategorie);
router.post('/deletecategorie',categorie.deleteCategorie);


module.exports= router;