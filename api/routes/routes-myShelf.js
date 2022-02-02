const express = require('express');
const router = express.Router();

const myShelfController = require('../controllers/controllers-myShelf');

router.get('/myshelf', myShelfController.getBooks);

router.post('/addnewbook', myShelfController.addNewBook);

module.exports = router;
