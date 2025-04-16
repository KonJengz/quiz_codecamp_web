import axios from "../config/axios";

const questionApi = {};

questionApi.getQuestionsByCategoryId = async (categoryId) => {
  return axios.get(`/questions/categories/${categoryId}`);
};
questionApi.getQuestionById = async (questionId) => {
  return axios.get(`/questions/${questionId}`);
};
questionApi.createQuestion = async (body) => {
  return axios.post("/questions", body);
};

export default questionApi;
