const express = require("express");
const cors = require("cors");
const dbStart = require("./database");
const router = require("./routes/routes");
require("dotenv").config();
const path = require("path");
const fileUpload = require("express-fileupload");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));

app.use("/api", router);
app.use(errorHandler);

(async () => {
  try {
    await dbStart();
    app.listen(process.env.PORT, () => {
      console.log(`Server has been started on port ${process.env.PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
})();
