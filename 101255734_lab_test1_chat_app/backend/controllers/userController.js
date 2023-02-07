const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { username, firstname, lastname, password, createon } = req.body;

  if (password.length < 6) throw "Password must be atleast 6 characters long.";

  const userExists = await User.findOne({
    username,
  });

  if (userExists) throw "User with same email already exits.";

  const user = new User({
    username,
    firstname,
    lastname,
    password: sha256(password + "1qaz2wsx3edc4rfv"),
    createon
  });

  await user.save();

  res.json({
    message: "User [" + username  + "] registered successfully!",
  });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log({username});
  console.log({password});
  const user = await User.findOne({
    username,
    password: sha256(password + "1qaz2wsx3edc4rfv"),
  });

  if (!user) throw "Email and Password did not match.";

  const token = await jwt.sign({ id: user.id }, "0okm9ijn8uhby");

  res.json({
    message: "User logged in successfully!",
    token,
  });
};
