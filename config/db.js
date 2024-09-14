const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));
};

module.exports = connectDB;
