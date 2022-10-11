const { DataTypes } = require("sequelize");
const db_config = require('../db/db_config')

const Admin= db_config.define('admin',{
    name:{
          type:DataTypes.STRING,
          allowNull:false
           },
    role:{
          type:DataTypes.STRING,
          allowNull:false
           }
})


module.exports = Admin