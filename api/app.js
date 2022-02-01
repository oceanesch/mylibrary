const express = require('express');
const mongoose = require('mongoose');

const app = express();

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
