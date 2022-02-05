const { validationResult } = require("express-validator");
const ApiError = require("../ExceptionHandler/ApiError");
const userService = require("../Services/userService");
const tokenService = require("../Services/tokenService");
class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("ValidationError", errors.array()));
      }
      const { email, password, name, birthdate } = req.body;
      const userData = await userService.registration(
        email,
        password,
        name,
        birthdate
      );
      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(201).json(userData);
    } catch (error) {
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
      return res.status(201).json(userData);
    } catch (error) {
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      await tokenService.removeToken(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json({ message: "You have been logged out" });
    } catch (error) {
      next(error);
    }
  }
  async validate(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await tokenService.refresh(refreshToken);

      res.cookie("refreshToken", userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(201).json(userData);
    } catch (error) {
      next(error);
    }
  }
  async getUsers(req, res, next) {
    try {
      const usersData = await userService.getUsers();
      res.status(200).json(usersData);
    } catch (error) {
      next(error);
    }
  }
  async getCertainUser(req, res, next) {
    try {
      const { id } = req.body;
      const userData = await userService.getCertainUser(id);
      return res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new UserController();
