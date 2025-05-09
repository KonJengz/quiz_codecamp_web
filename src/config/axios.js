import axios from "axios";
import useAuthStore from "../stores/authStore";

export const baseUrl = "http://localhost:8080/api/v1";
axios.defaults.baseURL = baseUrl;
// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
// axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";

const getToken = () => {
  const token = useAuthStore.getState().accessToken;
  return token ? token : "";
};

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error interceptors", error);
    if (error?.response?.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
export default axios;
