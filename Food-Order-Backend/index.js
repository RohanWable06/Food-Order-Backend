const express = require("express");
const app = express();
const { config } = require("dotenv");
const { mongoDB } = require("./db");
const userRoute = require("./Routes/User");
const foodRouter = require("./Routes/FoodData");
const order = require("./Routes/Order")

config({
  path: "./.env",
});

mongoDB(process.env.MONGOURL);

app.use(express.json());

app.use("/api", userRoute);
app.use("/api", foodRouter);
app.use("/api",order);

app.listen(process.env.PORT, () => {
  console.log("server started");
});
