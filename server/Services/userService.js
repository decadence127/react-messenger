const UserModel = require("../Entities/userEntity");
const ApiError = require("../ExceptionHandler/ApiError");
const bcrypt = require("bcrypt");
const tokenService = require("../Services/tokenService");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
class UserService {
  async registration(email, password, name, age) {
    const candidate = await UserModel.findOne({ userEmail: email });
    if (candidate) {
      throw ApiError.BadRequest(`User with email: ${email} already exists]`);
    }
    if (!email || !password) {
      throw ApiError.BadRequest(`Dont leave empty password and email fields`);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await UserModel.create({
      userEmail: email,
      userPassword: hashPassword,
      userName: name,
      userAge: age,
    });
    const userData = {
      userId: user._id,
      userName: user.userName,
      userAge: user.userAge,
      userEmail: user.userEmail,
    };
    const tokenData = tokenService.generateTokens({ ...userData });
    await tokenService.saveToken(userData.userId, tokenData.refreshToken);

    return {
      ...tokenData,
      user: userData,
    };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ userEmail: email });
    console.log(user);
    if (!user) {
      throw ApiError.BadRequest("User with such email does not exist.");
    }
    const isPasswordEqual = await bcrypt.compare(password, user.userPassword);
    if (!isPasswordEqual) {
      throw ApiError.BadRequest("Password is incorrect.");
    }
    const userData = {
      userId: user._id,
      userName: user.userName,
      userAge: user.userAge,
      userEmail: user.userEmail,
    };

    const tokenData = tokenService.generateTokens({ ...userData });
    await tokenService.saveToken(userData.userId, tokenData.refreshToken);
    return {
      ...tokenData,
      user: userData,
    };
  }
  async getCertainUser(id) {
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      throw ApiError.BadRequest("This user does not exist.");
    }
    const userData = {
      userName: user.userName,
      userAge: user.userAge,
      userEmail: user.userEmail,
    };
    return {
      user: userData,
    };
  }
  async getUsers() {
    const users = await UserModel.find();
    const usersData = users.map((user) => {
      return {
        userId: user._id,
        userName: user.userName,
        userAge: user.userAge,
        userEmail: user.userEmail,
      };
    });
    return {
      users: usersData,
    };
  }
}
module.exports = new UserService();
