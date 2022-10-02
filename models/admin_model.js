import { DataTypes } from "sequelize";
import db_config from '../db/db_config.js'

const Admin= db_config.define('admin',{
    name:{
          type:DataTypes.STRING,
          allowNull:false
           },
    role:{
          type:DataTypes.INTEGER,
          allowNull:false
           }
})


export default Admin