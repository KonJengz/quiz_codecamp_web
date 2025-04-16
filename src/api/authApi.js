import axios from "../config/axios";

const authApi = {};

authApi.login = async (body) => {
  return axios.post("/auth/login", body);
};

authApi.getMe = async () => {
  return axios.get("/users/me");
};

export default authApi;
