const { DataTypes } = require("sequelize");
const db_config = require('../db/db_config')

const visitor= db_config.define('visitor',{
    name:{
          type:DataTypes.STRING,
          allowNull:false
           },
    email:{
          type:DataTypes.TEXT,
          allowNull:false
           },
})


module.exports= visitor