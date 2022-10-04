const { DataTypes } = require("sequelize");
const db_config = require('../db/db_config')

const Comment= db_config.define('Comment',{
    creator:{
          type:DataTypes.INTEGER,
          allowNull:false
           },
    article:{
          type:DataTypes.INTEGER,
          allowNull:false
           },
    content:{
          type:DataTypes.TEXT,
          allowNull:false
           },
})


module.exports= Comment