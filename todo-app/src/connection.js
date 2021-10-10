// connection.js
const mongoose = require("mongoose");
const User = require("./User.model");
var options = {
user: "todoappuser",
pass: "password123"
}
const connection = "mongodb://mongo:27017/mongo-test?authSource=admin";

const connectDb = () => {
  return mongoose.connect(connection, options);
};

module.exports = connectDb;
