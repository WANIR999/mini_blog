const {Router} = require('express')
const categorie = require('../controller/categorie_controller')
const router=Router();

router.get('/getAllcategories',categorie.getAllCategories);
router.get('/getcategorie/:id',categorie.getCategorie);
router.get('/searchcategorie',categorie.searchCategorie);
router.post('/createcategorie',categorie.createCategorie);
router.put('/updatecategorie/:id',categorie.updateCategorie);
router.delete('/deletecategorie/:id',categorie.deleteCategorie);


module.exports= router;