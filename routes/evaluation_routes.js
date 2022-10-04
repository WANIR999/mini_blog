
const {Router} = require('express')
const evaluation = require('../controller/evaluation_controller')
const router=Router();


router.get('/getAllevaluation',evaluation.getAllevaluation);
router.get('/getevaluation/:id',evaluation.getevaluation);
router.post('/createevaluation',evaluation.createevaluation);
router.put('/updateevaluation/:id',evaluation.updateevaluation);
router.delete('/deleteevaluation/:id',evaluation.deleteevaluation);

module.exports= router;