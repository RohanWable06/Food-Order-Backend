const User = require("../models/User");
const bcrypt = require("bcryptjs");

const newUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  let securePassword = await bcrypt.hash(req.body.password, salt);

  try {
    await User.create({
      name: req.body.name,
      password: securePassword,
      email: req.body.email,
      location: req.body.location,
      role: req.body.role,
    });
    res
      .status(201)
      .json({ success: true, message: `Welcome ${req.body.name}` });
  } catch (err) {
    res.status(500).json({ success: false, message: `Invalid Data` });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    console.error("Error fetching user data:", err);
    res
      .status(500)
      .render("userdata", { error: "Error fetching user data", users: [] });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ success: true, msg: "User not found" });
    }

    res.status(200).json({ success: true, user: user });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ success: true, msg: "User not found" });
    }

    await User.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: `User delete ${user.name}` });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

module.exports = { newUser, getAllUsers, deleteUser, getUser };
