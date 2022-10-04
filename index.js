const express = require('express');
const admin = require('./routes/admin_routes');
const article = require('./routes/article_routes');
const categorie = require('./routes/categorie_routes');
const comment = require('./routes/comment_routes');
const evaluation = require('./routes/evaluation_routes');
const visitor = require('./routes/visitors_routes');
const Db = require('./db/db_config');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/admin',admin);
app.use('/article',article);
app.use('/categorie',categorie);
app.use('/comment',comment);
app.use('/evaluation',evaluation);
app.use('/visitor',visitor);


Db.sync().then(()=>{
    console.log("connected to db")
}).catch(()=>{
    error=>console.log(error)
})
app.listen(8080)