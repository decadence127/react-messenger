const Router = require("express");
const router = new Router();
const userRoute = require("./userRoute");
const messageRoute = require("./messageRoute");

router.use("/user", userRoute);
router.use("/message", messageRoute);

module.exports = router;
