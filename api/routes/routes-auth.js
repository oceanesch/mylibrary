const express = require('express');
const { check } = require('express-validator');

const User = require('../models/user');

const router = express.Router();

const authController = require('../controllers/controllers-auth');

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email!')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      })
      .normalizeEmail({ gmail_remove_dots: false }),
    check('password')
      .trim()
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        'Please enter a password at least 6 characters long, with at least 1 lower case, 1 upper case, 1 number & 1 symbol.'
      ),
  ],
  authController.signUp
);

module.exports = router;
