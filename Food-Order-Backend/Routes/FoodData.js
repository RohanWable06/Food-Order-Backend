const express = require("express");
const router = express.Router();
const {
  addFood,
  getFood,
  getAllFood,
  deleteFood,
} = require("../Controller/Food");

router.post("/addFood", addFood);

router.get("/getFood/:id", getFood);

router.get("/getFood", getAllFood);

router.delete("/deleteFood/:id", deleteFood);

module.exports = router;
