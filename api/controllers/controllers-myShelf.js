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
  const { title, author, image } = req.body;

  const newBook = new Book({
    title,
    author,
    image,
  });

  newBook
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'New book added' });
    })
    .catch((error) => console.log(error));
};

exports.deleteBook = async (req, res, next) => {
  const { bookId } = req.params;

  // try {
  //   const book = await Book.findById(bookId);

  //   if (!book) throw new Error('No book found.');

  //   await Book.findByIdAndRemove(bookId);

  //   res.status(200).json({ message: 'Book deleted' });
  // } catch (error) {
  //   console.error(error);
  // }

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        throw new Error('No book found.');
      }
      //checked if the user is logged in

      return Book.findByIdAndRemove(bookId);
    })
    .then(() => {
      res.status(200).json({ message: 'Book deleted.' });
    })
    .catch((error) => {
      console.log(error);
    });
};