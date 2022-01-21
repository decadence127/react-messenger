const UserModel = require("../Entities/userEntity");
const ApiError = require("../ExceptionHandler/ApiError");
const bcrypt = require("bcrypt");
const tokenService = require("../Services/tokenService");
const uuid = require("uuid");

class UserService {
  async registration(email, password, name, age) {
    const candidate = await UserModel.findOne({ email });
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
}
module.exports = new UserService();
