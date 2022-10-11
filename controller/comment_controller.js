const Comment= require('../models/Comment_model')

const getAllComment=(req,res)=>{
    Comment.findAll().then(Comment=>{
     res.render('comment/comments',{data:Comment});
   }
   ).catch(error=>res.json(error))
};
const searchComment=(req,res)=>{
    const {body} =req
    Comment.findAll({
        where: {
          article: body.article
        }
      }).then(Comment=>{
     res.render('comment/comments',{data: Comment});
   }
   ).catch(error=>res.json(error))
};
const getComment=(req,res)=>{
    const {id}= req.body;
    Comment.findByPk(id).then(Comment=>{
        res.render('comment/update_comment',{data:Comment});
      }
      ).catch(error=>res.json(error))
};
const createComment=(req,res)=>{
    const {body}=req;
    Comment.create({...body}).then(()=>{
     res.redirect('/comment')
    }).catch(error=>res.json(error))
};
const updateComment=(req,res)=>{
    const {body}=req;
    Comment.findByPk(body.id).then(Comment =>{
    if(!Comment) return res.json({msg:"not found"})
    Comment.creator=body.creator
    Comment.content=body.content
    Comment.article=body.article
    Comment.save().then(()=>{
        res.redirect('/comment')
    }).catch(error=>res.json(error))
   })
};
const deleteComment=(req,res)=>{
    const {id}=req.body
    Comment.destroy({where:{id:id}}).then(()=>{
        res.redirect('/comment')
    }).catch(error=>res.json({msg:error}))
};


module.exports= {getAllComment,getComment,createComment,updateComment,deleteComment,searchComment};