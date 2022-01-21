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
}
module.exports = new TokenService();
