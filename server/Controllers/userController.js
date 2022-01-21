const { validationResult } = require("express-validator");
const ApiError = require("../ExceptionHandler/ApiError");
const userService = require("../Services/userService");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("ValidationError", errors.array()));
      }
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
      next(error);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(201).json(userData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
      console.log(req.headers);
      const { refreshToken } = req.cookies;
      await userService.removeToken(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200);
    } catch (error) {
      next(error);
    }
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
