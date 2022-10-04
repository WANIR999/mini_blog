const { DataTypes } = require("sequelize");
const db_config = require('../db/db_config')

const Article= db_config.define('Article',{
    creator:{
          type:DataTypes.INTEGER,
          allowNull:false
           },
    categorie:{
          type:DataTypes.INTEGER,
          allowNull:false
           },
    content:{
          type:DataTypes.TEXT,
          allowNull:false
           }
})


module.exports =Article