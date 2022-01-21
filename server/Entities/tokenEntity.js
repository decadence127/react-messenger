const mongoose = require("mongoose");
require("dotenv").config();

const tokenSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
