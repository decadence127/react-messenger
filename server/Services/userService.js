const UserModel = require("../Entities/userEntity");
const ApiError = require("../ExceptionHandler/ApiError");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

class UserService {
  async registration(email, password, name, age) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new ApiError.BadRequest(
        `User with email: ${email} already exists]`
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await UserModel.create({
      userEmail: email,
      userPassword: hashPassword,
      userName: name,
      userAge: age,
    });
  }
}
