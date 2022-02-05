const Router = require("express");
const router = new Router();
const messageController = require("../Controllers/messageController");
const { body } = require("express-validator");
const authHandler = require("../middleware/authHandler");

router.get("/dialog", messageController.sendMessage);
router.post("/dialog", messageController.receiveMessage);

module.exports = router;
