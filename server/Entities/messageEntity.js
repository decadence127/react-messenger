const mongoose = require("mongoose");
require("dotenv").config();

const messageSchema = mongoose.Schema({
  senderId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  receiverId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  sentDate: { type: Date, required: true },
  msgContent: { type: String, required: true },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
