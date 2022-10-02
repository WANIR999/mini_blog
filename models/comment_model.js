import { DataTypes } from "sequelize";
import db_config from '../db/db_config.js'

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


export default Comment