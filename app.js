const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(3001, () => {
    console.log(`Example app listening on port 3001`)
  });

  app.get('/home', (req, res) =>{res.sendFile(path.resolve(__dirname, './view/home.html'));});
  app.get('/register', (req, res) =>{res.sendFile(path.resolve(__dirname, './view/register.html'));});
  app.get('/login', (req, res) =>{res.sendFile(path.resolve(__dirname, './view/login.html'));});