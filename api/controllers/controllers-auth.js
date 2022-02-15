const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

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
