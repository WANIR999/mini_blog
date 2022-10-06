const evaluation = require( '../models/evaluation_model')

const getAllevaluation=(req,res)=>{
    evaluation.findAll().then(evaluation=>{
     res.render('evaluation/evaluations',{data:evaluation});
   }
   ).catch(error=>res.json(error))
};
const searchevaluation=(req,res)=>{
    const {body} =req
    evaluation.findAll({
        where: {
          creator: body.creator
        }
      }).then(evaluation=>{
     res.render('evaluation/evaluations',{data: evaluation});
   }
   ).catch(error=>res.json(error))
};
const getevaluation=(req,res)=>{
    const {id}= req.body;
    evaluation.findByPk(id).then(evaluation=>{
        res.render('evaluation/update_evaluations',{data:evaluation});
      }
      ).catch(error=>res.json(error))
};
const createevaluation=(req,res)=>{
    const {body}=req;
    evaluation.create({...body}).then(()=>{
     res.redirect('/evaluation')
    }).catch(error=>res.json(error))
};
const updateevaluation=(req,res)=>{
    const {body}=req;
    evaluation.findByPk(body.id).then(evaluation =>{
    if(!evaluation) return res.json({msg:"not found"})
    evaluation.creator=body.creator
    evaluation.type=body.type
    evaluation.article=body.article
    evaluation.save().then(()=>{
        res.redirect('/evaluation')
    }).catch(error=>res.json(error))
   })
};
const deleteevaluation=(req,res)=>{
    const {id}=req.body
    evaluation.destroy({where:{id:id}}).then(()=>{
        res.redirect('/evaluation')
    }).catch(error=>res.json({msg:error}))
};


module.exports= {getAllevaluation,getevaluation,createevaluation,updateevaluation,deleteevaluation,searchevaluation};