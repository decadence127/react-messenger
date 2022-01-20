const mongoose = require("mongoose");
require("dotenv").config();

async function dbStart() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
module.exports = dbStart;
