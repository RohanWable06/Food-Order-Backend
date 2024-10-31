const express = require("express");
const app = express.Router();
const {
  addFood,
  getFood,
  getAllFood,
  deleteFood,
} = require("../Controller/Food");

app.post("/addFood", addFood);

app.get("/getSingleFoodinfo/:id", getFood);

app.get("/getFoodinfo", getAllFood);

app.delete("/deleteFood/:id", deleteFood);

module.exports = app;
