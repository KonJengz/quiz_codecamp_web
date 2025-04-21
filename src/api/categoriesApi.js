import axios from "../config/axios";

const categoiesApi = {};

categoiesApi.getCategories = async () => {
  return axios.get("/categories/me");
};

categoiesApi.getCategoriesQuery = async (query) => {
  return axios.get(`/categories/me?cha=${query}`);
};

categoiesApi.getCategory = async (id) => {
  return axios.get(`/categories/${id}`);
};

categoiesApi.createCategory = async (body) => {
  return axios.post("/categories", body);
};

categoiesApi.updateCategory = async (id, body) => {
  return axios.put(`/categories/${id}`, body);
};

export default categoiesApi;
