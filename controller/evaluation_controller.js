import evaluation from '../models/evaluation_model.js'

const getAllevaluation=(req,res)=>{
    evaluation.findAll().then(evaluation=>{
     res.json(evaluation);
   }
   ).catch(error=>res.json(error))
};
const getevaluation=(req,res)=>{
    const {id}= req.params;
    evaluation.findByPk(id).then(evaluation=>{
        res.json(evaluation);
      }
      ).catch(error=>res.json(error))
};
const createevaluation=(req,res)=>{
    const {body}=req;
    evaluation.create({...body}).then(()=>{
     res.json({message: "added sccssfly"})
    }).catch(error=>res.json(error))
};
const updateevaluation=(req,res)=>{
    const {id}=req.params;
    const {body}=req;
    evaluation.findByPk(id).then(evaluation =>{
    if(!evaluation) return res.json({msg:"not found"})
    evaluation.creator=body.creator
    evaluation.article=body.article
    evaluation.type=body.type
    evaluation.save().then(()=>{
        res.json({msg: "updated"})
    }).catch(error=>res.json(error))
   })
};
const deleteevaluation=(req,res)=>{
    const {id}=req.params
    evaluation.destroy({where:{id:id}}).then(()=>{
        res.json({message:"deleted"})
    }).catch(error=>res.json({msg:error}))
};


export {getAllevaluation,getevaluation,createevaluation,updateevaluation,deleteevaluation};