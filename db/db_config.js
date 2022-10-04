const {Sequelize} = require('Sequelize')

module.exports= new Sequelize('mini_blog','root','',{dialect:'mysql',host:'localhost'})