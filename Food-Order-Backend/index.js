const express = require("express");
const app = express();
const { config } = require("dotenv");
const { mongoDB } = require("./db");
const userRoute = require("./Routes/User");
const foodRouter = require("./Routes/FoodData");

config({
  path: "./.env",
});

mongoDB(process.env.MONGOURL);

app.use(express.json());

app.use("/api", userRoute);
app.use("/api", foodRouter);

app.listen(process.env.PORT, () => {
  console.log("server started");
});
