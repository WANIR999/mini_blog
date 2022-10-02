import Comment from '../models/Comment_model.js'

const getAllComment=(req,res)=>{
    Comment.findAll().then(Comment=>{
     res.json(Comment);
   }
   ).catch(error=>res.json(error))
};
const getComment=(req,res)=>{
    const {id}= req.params;
    Comment.findByPk(id).then(Comment=>{
        res.json(Comment);
      }
      ).catch(error=>res.json(error))
};
const createComment=(req,res)=>{
    const {body}=req;
    Comment.create({...body}).then(()=>{
     res.json({message: "added sccssfly"})
    }).catch(error=>res.json(error))
};
const updateComment=(req,res)=>{
    const {id}=req.params;
    const {body}=req;
    Comment.findByPk(id).then(Comment =>{
    if(!Comment) return res.json({msg:"not found"})
    Comment.creator=body.creator
    Comment.article=body.article
    Comment.content=body.content
    Comment.save().then(()=>{
        res.json({msg: "updated"})
    }).catch(error=>res.json(error))
   })
};
const deleteComment=(req,res)=>{
    const {id}=req.params
    Comment.destroy({where:{id:id}}).then(()=>{
        res.json({message:"deleted"})
    }).catch(error=>res.json({msg:error}))
};


export {getAllComment,getComment,createComment,updateComment,deleteComment};