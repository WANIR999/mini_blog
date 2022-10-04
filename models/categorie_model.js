const { DataTypes } = require("sequelize");
const db_config = require('../db/db_config')

const Categorie= db_config.define('Categorie',{
    label:{
          type:DataTypes.STRING,
          allowNull:false
           },
})


module.exports= Categorie