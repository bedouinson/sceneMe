const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).send(err);
  }
};
