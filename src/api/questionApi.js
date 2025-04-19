import axios from "../config/axios";

const questionApi = {};

questionApi.getQuestionsByCategoryId = async (categoryId) => {
  return axios.get(`/categories/${categoryId}/questions`);
};
questionApi.getQuestionsAndMeByCategoryId = async (categoryId) => {
  return axios.get(`/categories/${categoryId}/questions/me`);
};
questionApi.getQuestionById = async (questionId) => {
  return axios.get(`/questions/${questionId}`);
};

questionApi.getQuestionAndMySubmissionById = async (questionId) => {
  return axios.get(`/questions/${questionId}/submissions/me`);
};

questionApi.createQuestion = async (body) => {
  return axios.post("/questions", body);
};

export default questionApi;
