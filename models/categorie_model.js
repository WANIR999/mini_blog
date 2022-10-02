import { DataTypes } from "sequelize";
import db_config from '../db/db_config.js'

const Categorie= db_config.define('Categorie',{
    label:{
          type:DataTypes.STRING,
          allowNull:false
           },
})


export default Categorie