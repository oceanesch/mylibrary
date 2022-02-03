const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const myShelfRoutes = require('./routes/routes-myShelf');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(myShelfRoutes);

mongoose
  .connect(
    'mongodb+srv://oceane:cottageinforest@mylibrarydb.2spjb.mongodb.net/myLibrary?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(8080);
  })
  .catch((error) => {
    console.log(error);
  });
