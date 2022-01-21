const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  userAge: { type: Number, required: false },
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
  isBanned: { type: Boolean, default: false },
  isOnline: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
