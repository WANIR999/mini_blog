const {Router} = require('express')
const visitors = require('../controller/visitors_controller')
const router=Router();


router.get('/getAllvisitors',visitors.getAllvisitors);
router.get('/getvisitors/:id',visitors.getvisitors);
router.post('/createvisitors',visitors.createvisitors);
router.put('/updatevisitors/:id',visitors.updatevisitors);
router.delete('/deletevisitors/:id',visitors.deletevisitors);

module.exports= router;