const express = require('express');
const { check } = require('express-validator/check');

const router = express.Router();

const authController = require('../controllers/controllers-auth');

router.post(
  '/signup',
  check('email')
    .isEmail()
    .withMessage('Please enter a valid email!'),
  authController.signUp
);

module.exports = router;
