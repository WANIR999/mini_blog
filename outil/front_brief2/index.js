const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
 
})
app.get('/index', (req, res) => {
    res.render('index');
})

app.get('/product', (req, res) => {
    res.render('product');
})

app.get('/productwo', (req, res) => {
    res.render('productwo');
})

app.get('/categories', (req, res) => {
  res.render('categories');
})

app.listen(5000);


