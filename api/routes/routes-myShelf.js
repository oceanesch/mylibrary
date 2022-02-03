const express = require('express');
const router = express.Router();

const myShelfController = require('../controllers/controllers-myShelf');

router.get('/myshelf', myShelfController.getBooks);

router.delete('/myshelf/:bookId', myShelfController.deleteBook);

router.post('/addnewbook', myShelfController.addNewBook);

module.exports = router;
