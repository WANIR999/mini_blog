import express from 'express';
import routes from './routes/routes.js';
import Db from './db/db_config.js';
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);
Db.sync().then(()=>{
    console.log("connected to db")
}).catch(()=>{
    error=>console.log(error)
})
app.listen(8000)