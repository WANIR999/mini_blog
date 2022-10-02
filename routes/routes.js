import {Router} from 'express'
import {getAll,getOne,createOne,updateOne,deleteOne} from '../controller/admin_controller.js'
import {getAllarticles,getarticle,createArticle,updateArticle,deleteArticle} from '../controller/article_controller.js'
import {getAllCategories,getCategorie,createCategorie,updateCategorie,deleteCategorie} from '../controller/categorie_controller.js'
import {getAllComment,getComment,createComment,updateComment,deleteComment} from '../controller/comment_controller.js'
import {getAllevaluation,getevaluation,createevaluation,updateevaluation,deleteevaluation} from '../controller/evaluation_controller.js'

const router=Router();
// admin's actions routes
router.get('/getAlladmins',getAll);
router.get('/getOneadmin/:id',getOne);
router.post('/createOneadmin',createOne);
router.put('/updateOneadmin/:id',updateOne);
router.delete('/deleteOneadmin/:id',deleteOne);
// visitor's actions routes
// router.get('/getAlladmins',getAll);
// router.get('/getOneadmin/:id',getOne);
// router.post('/createOneadmin',createOne);
// router.put('/updateOneadmin/:id',updateOne);
// router.delete('/deleteOneadmin/:id',deleteOne);
// article's actions routes
router.get('/getAllarticles',getAllarticles);
router.get('/getarticle/:id',getarticle);
router.post('/createarticle',createArticle);
router.put('/updatearticle/:id',updateArticle);
router.delete('/deletearticle/:id',deleteArticle);
// categories's actions routes
router.get('/getAllcategories',getAllCategories);
router.get('/getcategorie/:id',getCategorie);
router.post('/createcategorie',createCategorie);
router.put('/updatecategorie/:id',updateCategorie);
router.delete('/deletecategorie/:id',deleteCategorie);
// comment's actions routes
router.get('/getAllcomment',getAllComment);
router.get('/getcomment/:id',getComment);
router.post('/createcomment',createComment);
router.put('/updatecomment/:id',updateComment);
router.delete('/deletecomment/:id',deleteComment);
// evaluation's actions routes
router.get('/getAllevaluation',getAllevaluation);
router.get('/getevaluation/:id',getevaluation);
router.post('/createevaluation',createevaluation);
router.put('/updateevaluation/:id',updateevaluation);
router.delete('/deleteevaluation/:id',deleteevaluation);


export default router;