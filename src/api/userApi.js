import axios from "../config/axios";

const userApi = {};

userApi.getUsers = async () => {
  return axios.get("/users");
};

export default userApi;
