const {Router} = require('express')
const comment = require('../controller/comment_controller')
const router=Router();

router.get('/',comment.getAllComment);
router.post('/getComment',comment.getComment);
router.post('/searchComment',comment.searchComment);
router.post('/createComment',comment.createComment);
router.get('/createComment',(req,res)=>{
        res.render('Comment/add_Comment')
    });
router.post('/updateComment',comment.updateComment);
router.post('/deleteComment',comment.deleteComment);

module.exports= router;