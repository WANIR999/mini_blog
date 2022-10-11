const visitors = require ('../models/visitor_model')
const Comment = require ('../models/comment_model')

const arr=[];

const getAllvisitors=(req,res)=>{
    visitors.findAll().then(visitors=>{
     res.json(visitors);
   }
   ).catch(error=>res.json(error))
};
const getvisitors=(req,res)=>{
    const {id}= req.params;
    visitors.findByPk(id).then(visitors=>{
        res.json(visitors);
      }
      ).catch(error=>res.json(error))
};
const searchvisitors=(req,res)=>{
    const {body} =req
    visitors.findAll({
        where: {
          label: body.content
        }
      }).then(visitors=>{
     res.json(visitors);
   }
   ).catch(error=>res.json(error))
};
const createvisitors=(req,res)=>{
    const visitor={
        name:req.body.name,
        email:req.body.email,
    };
    const comment={ 
        creator:req.body.name,
        content:req.body.content,
        article:req.body.article,
    }
     if(arr.includes(visitor.email)==false){
        arr.push(visitor.email)
        visitors.create({...visitor}).then(()=>{
         Comment.create({...comment}).then(()=>{
          Comment.findAll({
             where:{article:comment.article},
             attributes:['content','creator']
          }).then(data=>{
             res.render('comment/viewcomments',{data})
          })
             
         })
     })
     }else{
         Comment.create({...comment}).then(()=>{
          Comment.findAll({
             where:{article:comment.article},
             attributes:['content','creator']
          }).then(data=>{
             res.render('comment/viewcomments',{data})
          })
             
         }).catch(error=>res.json(error))
     }
    
};
const updatevisitors=(req,res)=>{
    const {id}=req.params;
    const {body}=req;
    visitors.findByPk(id).then(visitors =>{
    if(!visitors) return res.json({msg:"not found"})
    visitors.label=body.label
    visitors.save().then(()=>{
        res.json({msg: "updated"})
    }).catch(error=>res.json(error))
   })
};
const deletevisitors=(req,res)=>{
    const {id}=req.params
    visitors.destroy({where:{id:id}}).then(()=>{
        res.json({message:"deleted"})
    }).catch(error=>res.json({msg:error}))
};


module.exports = {getAllvisitors,getvisitors,createvisitors,updatevisitors,deletevisitors,searchvisitors};