import axios from "../config/axios";

const categoiesApi = {};

categoiesApi.getCategories = async (status = "all", cha = false) => {
  return axios.get(`/categories?s=${status}&cha=${cha}`);
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
  return axios.patch(`/categories/${id}`, body);
};

categoiesApi.updateCategoryStatus = async (id) => {
  return axios.patch(`/categories/${id}/status`);
};

export default categoiesApi;
