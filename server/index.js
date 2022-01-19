const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const start = async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server has been started on port ${process.env.PORT}`);
  });
};
start();
