import api from "..";
import axios from "axios";
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
  static async validateAuth() {
    return await axios.get(`${process.env.REACT_APP_API_URL}/user/refresh`, {
      withCredentials: true,
    });
  }
}
