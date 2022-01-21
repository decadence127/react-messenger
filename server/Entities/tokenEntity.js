const mongoose = require("mongoose");
require("dotenv").config();

const tokenSchema = mongoose.Schema({
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  accessToken: { type: String, required: true },
  refreshToken: { type: Number, required: false },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
