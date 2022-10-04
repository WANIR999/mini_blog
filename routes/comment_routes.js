const {Router} = require('express')
const comment = require('../controller/comment_controller')
const router=Router();

router.get('/getAllcomment',comment.getAllComment);
router.get('/getcomment/:id',comment.getComment);
router.post('/createcomment',comment.createComment);
router.put('/updatecomment/:id',comment.updateComment);
router.delete('/deletecomment/:id',comment.deleteComment);

module.exports= router;