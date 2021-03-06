const UserModel = require("../Entities/userEntity");
const ApiError = require("../ExceptionHandler/ApiError");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const tokenModel = require("../Entities/tokenEntity");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_ACCESS_TOKEN, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_SECRET_REFRESH_TOKEN,
      {
        expiresIn: "30d",
      }
    );
    return { accessToken, refreshToken };
  }
  async saveToken(userId, refreshToken) {
    const tokenCandidate = await tokenModel.findOne({ userId });
    if (tokenCandidate) {
      tokenCandidate.refreshToken = refreshToken;
      return tokenCandidate.save();
    }
    const token = await tokenModel.create({ userId, refreshToken });
    return token;
  }
  async removeToken(refreshToken) {
    try {
      tokenModel.deleteOne({ refreshToken });
    } catch (e) {
      throw e;
    }
  }
  async findToken(refreshToken) {
    try {
      return await tokenModel.findOne({ refreshToken });
    } catch (e) {
      throw e;
    }
  }
  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN);
    } catch (e) {
      return null;
    }
  }
  validateRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET_REFRESH_TOKEN);
    } catch (e) {
      return null;
    }
  }
  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = this.validateRefreshToken(refreshToken);
    const token = await this.findToken(refreshToken);
    console.log(token);
    if (!userData || !token) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.userId);
    const userTransferObject = {
      userId: user._id,
      userName: user.userName,
      userAge: user.userAge,
      userEmail: user.userEmail,
    };
    const tokenData = this.generateTokens({ ...userTransferObject });
    await this.saveToken(userTransferObject.userId, tokenData.refreshToken);
    return {
      ...tokenData,
      user: userTransferObject,
    };
  }
}

module.exports = new TokenService();
