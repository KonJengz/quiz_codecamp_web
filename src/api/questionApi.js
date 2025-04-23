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

questionApi.getQuestions = async (status = "all") => {
  return axios.get(`/questions?s=${status}`);
};

questionApi.updateStatus = async (id) => {
  return axios.patch(`/questions/${id}/status`);
};

export default questionApi;
