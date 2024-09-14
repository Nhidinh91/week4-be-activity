const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
  .connect("mongodb://localhost:27017/web-dev")
  .then(() => console.log(`MongoDB Connected`))
  .catch((error) => console.log(error));
};

module.exports = connectDB;
