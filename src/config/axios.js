import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";
axios.defaults.baseURL = baseUrl;
// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
// axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";

const getToken = () => {
  // const token = localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2ViNmFhYjZhYTMyMTc1MTYxMjFkOWMiLCJyb2xlIjoiU1RVREVOVCIsImlhdCI6MTc0MzU5NTQxMywiZXhwIjoxNzQzODU0NjEzfQ.VlpIvXI57hSfysnoDc43vDndNXM6eaATbGB8cTzs22A";
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
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
export default axios;
