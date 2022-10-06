
const {Router} = require('express')
const evaluation = require('../controller/evaluation_controller')
const router=Router();

router.get('/',evaluation.getAllevaluation);
router.post('/getevaluation',evaluation.getevaluation);
router.post('/searchevaluation',evaluation.searchevaluation);
router.post('/createevaluation',evaluation.createevaluation);
router.get('/createevaluation',(req,res)=>{
        res.render('evaluation/add_evaluation')
    });
router.post('/updateevaluation',evaluation.updateevaluation);
router.post('/deleteevaluation',evaluation.deleteevaluation);

module.exports= router;