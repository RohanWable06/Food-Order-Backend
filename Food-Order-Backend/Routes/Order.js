const express = require("express");
const app = express();
const {
  newOrder,
  getOrderInfo,
  getSingleOrderInfo,
  deleteOrder,
} = require("../Controller/Order");


app.post("/newOrder",newOrder);

app.get("/getOrderInfo",getOrderInfo);

app.get("/getSingleOrderInfo/:id",getSingleOrderInfo)

app.delete("/deleteOrder/:id",deleteOrder);

module.exports =app;