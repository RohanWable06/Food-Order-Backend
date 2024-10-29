const mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodItemSchema = new Schema({
  categoryName: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  options: [
    {
      regular: { type: String },
      medium: { type: String },
      large: { type: String },
      full: { type: String },
      half: { type: String },
    },
  ],
  description: {
    type: String,
    require: true,
  },
});

const food_items = mongoose.model("food_items", FoodItemSchema);
module.exports = { food_items };
