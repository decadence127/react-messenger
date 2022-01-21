const userService = require("../Services/userService");

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, name, age } = req.body;
      const userData = await userService.registration(
        email,
        password,
        name,
        age
      );
      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(201).json(userData);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status ? error.status : 500)
        .json({ message: error.message });
    }
  }
  async login(req, res, next) {
    try {
    } catch (error) {}
  }
  async logout(req, res, next) {
    try {
    } catch (error) {}
  }
  async validate(req, res, next) {
    try {
    } catch (error) {}
  }
  async getUsers(req, res, next) {
    try {
    } catch (error) {}
  }
}
module.exports = new UserController();
