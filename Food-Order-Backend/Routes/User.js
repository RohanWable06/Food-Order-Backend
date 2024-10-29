const express = require("express");
const app = express.Router();
const {
  newUser,
  getAllUsers,
  deleteUser,
  getUser,
} = require("../Controller/User");

app.post("/createuser", newUser);

app.get("/allUsers", getAllUsers);

app.get("/getUser/:id", getUser);

app.delete("/deleteUser/:id", deleteUser);

module.exports = app;
