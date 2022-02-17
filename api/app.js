const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const myShelfRoutes = require('./routes/routes-myShelf');
const authRoutes = require('./routes/routes-auth');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(myShelfRoutes);
app.use(authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

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
