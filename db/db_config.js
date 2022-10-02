import {Sequelize} from 'Sequelize'

export default new Sequelize('mini_blog','root','',{dialect:'mysql',host:'localhost'})