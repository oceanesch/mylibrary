const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signUp = async (req, res, next) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validating user input for signing up failed.',
      data: errors.array(),
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await new User({
      email: email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: 'User created.' });
  } catch (error) {
    console.error(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      const error = new Error('A user with this email could not be found.');
      error.statusCode = 401;
      throw error;
    }

    const matchingPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!matchingPassword) {
      const error = new Error('Wrong password.');
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      'theStringToMakeASecret',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token: token, userId: user._id.toString() });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
