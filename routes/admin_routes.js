const {Router} = require('express')
const admin = require('../controller/admin_controller')
const router=Router();

router.get('/getAlladmins',admin.getAll);
router.get('/getOneadmin/:id',admin.getOne);
router.post('/createOneadmin',admin.createOne);
router.put('/updateOneadmin/:id',admin.updateOne);
router.delete('/deleteOneadmin/:id',admin.deleteOne);

module.exports= router;