const express = require('express');
const router = express.Router();

const myShelfController = require('../controllers/controllers-myShelf');

router.get('/book', myShelfController.getBooks);

router.post('/book', myShelfController.addNewBook);

router.delete('/book/:bookId', myShelfController.deleteBook);


module.exports = router;
