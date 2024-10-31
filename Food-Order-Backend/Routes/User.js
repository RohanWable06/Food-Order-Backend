const express = require("express");
const app = express.Router();
const {
  newUser,
  getAllUsers,
  deleteUser,
  getUser,
} = require("../Controller/User");

app.post("/createuser", newUser);

app.get("/getAllUsers", getAllUsers);

app.get("/getSingleUser/:id", getUser);

app.delete("/deleteUser/:id", deleteUser);

module.exports = app;
