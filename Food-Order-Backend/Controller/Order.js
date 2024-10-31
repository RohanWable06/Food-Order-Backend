const Order = require("../models/Order");

const newOrder = async (req, res) => {
  try {
    const {
      deliveryInfo,
      user,
      subTotal,
      deliveryCharges,
      totalAmount,
      paymentStatus,
      deliverStatus,
      orderItems,
    } = req.body;

    if (
      !deliveryInfo ||
      !user ||
      !subTotal ||
      !deliveryCharges ||
      !totalAmount ||
      !paymentStatus ||
      !deliverStatus ||
      !orderItems
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient information" });
    }

    await Order.create({
      deliveryInfo,
      user,
      subTotal,
      deliveryCharges,
      totalAmount,
      paymentStatus,
      deliverStatus,
      orderItems,
    });

    res.status(201).json({ success: true, message: "Order placed" });
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getOrderInfo = async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders) {
      res.status(204).json({ success: true, massage: "No data available" });
    }
    res.status(200).json({ success: true, orders: orders });
  } catch (err) {
    res.status(500).json({ success: false, massage: "Internal serval error" });
  }
};

const getSingleOrderInfo = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ success: true, massage: "No data available" });
    }
    res.status(200).json({ success: true, order: order });
  } catch (err) {
    res.status(500).json({ success: false, massage: "Internal serval error" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ success: true, massage: "No order available" });
    }

    await Order.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, massage: `${req.params.id} order deleted` });
  } catch (err) {
    res.status(500).json({ success: false, massage: "Internal serval error" });
  }
};

module.exports = { newOrder, getOrderInfo, getSingleOrderInfo, deleteOrder };
