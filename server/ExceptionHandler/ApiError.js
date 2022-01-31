class ApiError extends Error {
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
  static BadRequest(message, errors = []) {
    return new ApiError(
      400,
      message || "Content you have requested does not exist",
      errors
    );
  }
  static UnauthorizedError() {
    return new ApiError(401, "Unauthorized user");
  }
}
module.exports = ApiError;
