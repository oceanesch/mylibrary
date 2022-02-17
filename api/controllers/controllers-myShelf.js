const Book = require('../models/book');
const User = require('../models/user');

exports.getBooks = (req, res, next) => {
  const userId = req.userId;

  Book.find({ userId: userId })
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
  const { title, author, image } = req.body;

  const newBook = new Book({
    title,
    author,
    image,
    userId: req.userId,
  });

  newBook
    .save()
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
      user.books.push(newBook);
      return user.save();
    })
    .then(() => {
      res.status(200).json({ message: 'New book added' });
    })
    .catch((error) => console.log(error));
};

exports.deleteBook = async (req, res, next) => {
  const { bookId } = req.params;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const error = new Error('No book found.');
        error.statusCode = 404;
        throw error;
      }

      if (book.userId.toString() !== req.userId) {
        const error = new Error('Not Authorized.');
        error.statusCode = 403;
        throw error;
      }
      return Book.findByIdAndRemove(bookId);
    })
    .then(() => {
      return User.findById(req.userId);
    })
    .then((user) => {
      user.books.pull(bookId);
      return user.save();
    })
    .then(() => {
      res.status(200).json({ message: 'Book deleted.' });
    })
    .catch((error) => {
      console.log(error);
    });
};
