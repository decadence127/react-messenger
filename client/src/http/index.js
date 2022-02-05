import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const initialRequest = error.config;
    if (error.response.status === 401) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/refresh`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("token", response.data.userData.accessToken);
        return api.request(initialRequest);
      } catch (e) {
        console.log("Unauthorized");
      }
    } else {
      return Promise.reject(error);
    }
  }
);
export default api;
