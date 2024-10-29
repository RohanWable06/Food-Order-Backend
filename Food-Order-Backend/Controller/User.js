const User = require("../models/User");
const bcrypt = require("bcryptjs");

const newUser = async (req, resp) => {
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
    resp
      .status(200)
      .json({ success: true, message: `Welcome ${req.body.name}` });
  } catch (err) {
    resp.status(500).json({ success: false, message: `Invalid Data` });
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

const getUser = async (req, resp) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new ErrorHandler("User not found");
    }

    resp.status(200).json({ success: true, user: user });
  } catch (err) {
    resp.status(500).json({ success: false, err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);

    if (!user) {
      throw new ErrorHandler("User not Found");
    }

    await User.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: `User delete ${result.name}` });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

module.exports = { newUser, getAllUsers, deleteUser, getUser };