const Router = require("express");
const router = new Router();
const userController = require("../Controllers/userController");
const { body } = require("express-validator");
const authHandler = require("../middleware/authHandler");
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/refresh", userController.refresh);
router.get("/getUsers", authHandler, userController.getUsers);

module.exports = router;
