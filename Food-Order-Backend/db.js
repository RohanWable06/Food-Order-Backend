const mongoose = require("mongoose");

const mongoDB = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("Database is connected");
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
};

module.exports = { mongoDB };
