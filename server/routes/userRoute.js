const Router = require("express");
const router = new Router();
const userController = require("../Controllers/userController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/getUsers", userController.getUsers);

module.exports = router;
