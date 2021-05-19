const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vivideastesk');
mongoose.connection.on('connected', () => {
    console.log('Connected to Database localhost:27017/vivideastask');
  });

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
  });

app.use('/',express.static(path.join(__dirname, 'dist/vivideas')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
var user_route = require('./routes/user_route');
app.post('/register',user_route.register);
app.post('/login',user_route.login);
app.post('/saveproduct',user_route.saveproduct);
app.post('/generate_codes',user_route.generate_codes);
app.get('/getproduts',user_route.get_products);
app.post('/getbatchno',user_route.get_batchno);
app.listen(3010);
