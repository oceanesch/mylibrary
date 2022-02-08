const bcrypt = require('bcrypt');

const User = require('../models/user');

exports.signUp = async (req, res, next) => {
  const { email, password } = req.body;

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
