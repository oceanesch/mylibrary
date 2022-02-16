const express = require('express');
const router = express.Router();

const myShelfController = require('../controllers/controllers-myShelf');
const isAuth = require('../middleware/is-auth');

router.get('/book', isAuth, myShelfController.getBooks);

router.post('/book', isAuth, myShelfController.addNewBook);

router.delete('/book/:bookId', isAuth, myShelfController.deleteBook);

module.exports = router;
