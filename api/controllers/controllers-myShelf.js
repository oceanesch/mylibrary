const Book = require('../models/book');

exports.getBooks = (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(200).json({
        message: 'Fetched books successfully.',
        books: books,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.addNewBook = (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const image = req.body.image;

  const newBook = new Book({
    title: title,
    author: author,
    image: image,
  });

  newBook
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'New book added'});
    })
    // .then(() => res.redirect('/myshelf'))
    .catch((error) => console.log(error));
};
