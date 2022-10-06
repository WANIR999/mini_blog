const { DataTypes } = require("sequelize");
const db_config = require('../db/db_config')

const Evaluation= db_config.define('evaluation',{
    creator:{
          type:DataTypes.INTEGER,
          allowNull:false
           },
    article:{
          type:DataTypes.INTEGER,
          allowNull:false
           },
    type:{
          type:DataTypes.INTEGER,
          allowNull:false
           },
})


module.exports= Evaluation