const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

  app.get('/', (req, res) =>{res.sendFile(path.resolve(__dirname, './view/home.html'));});
  app.get('/register', (req, res) =>{res.sendFile(path.resolve(__dirname, './view/register.html'));});
  app.get('/login', (req, res) =>{res.sendFile(path.resolve(__dirname, './view/login.html'));});