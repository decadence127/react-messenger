import api from "..";

export default class AuthService {
  static async login(email, password) {
    return await api.post("user/login", { email, password });
  }
  static async registration(email, password, birthdate, name) {
    return await api.post("user/registration", {
      email,
      password,
      birthdate,
      name,
    });
  }
  static async logout() {
    return await api.post("user/logout");
  }
}
