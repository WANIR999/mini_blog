const {Router} = require('express')
const visitors = require('../controller/visitors_controller')
const router=Router();


router.get('/getAllvisitors',visitors.getAllvisitors);
router.post('/createvisitors',visitors.createvisitors);
router.post('/visitorform',(req,res)=>{
   const {id}=req.body
    res.render('add_visitors',{id})
});

module.exports= router;