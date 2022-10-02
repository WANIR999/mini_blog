import { DataTypes } from "sequelize";
import db_config from '../db/db_config.js'

const evaluation= db_config.define('evaluation',{
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


export default evaluation