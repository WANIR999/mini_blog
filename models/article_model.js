import { DataTypes } from "sequelize";
import db_config from '../db/db_config.js'

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


export default Article