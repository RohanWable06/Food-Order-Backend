const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  deliveryInfo: {
    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    pinCode: {
      type: Number,
      required: true,
    },
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },

  subTotal: {
    type: Number,
    required: true,
  },

  deliveryCharges: {
    type: Number,
    required: true,
  },

  totalAmount: {
    type: Number,
    required: true,
  },

  paymentStatus: {
    type: String,
    enum: ["cashOnDelivery", "Paid"],
    default: "cashOnDelivery",
  },

  deliverStatus: {
    type: String,
    enum: ["Processing", "Dispatch", "Delivered"],
    default: "Processing",
  },

  orderItems:[{
    name:String,
    photo:String,
    price:Number,
    quanitiy:Number,
    food_items:{
       type : mongoose.Types.ObjectId,
       ref:"food_items",
    }
}]
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
