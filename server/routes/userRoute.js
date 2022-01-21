const Router = require("express");
const router = new Router();
const userController = require("../Controllers/userController");
const { body } = require("express-validator");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/getUsers", userController.getUsers);

module.exports = router;
